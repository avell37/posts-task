import { useState, useEffect } from 'react';
import { Post } from '../organisms/Post';
import { Comments } from '../organisms/Comments';
import { useJsonService } from '../api/jsonService';
import { Btn } from '../atoms/Btn';
import { Search } from '../atoms/Search';
import { Loading } from '../atoms/Loading';
import { Error } from '../atoms/Error';
import { CreatePostForm } from '../organisms/CreatePostForm';

export const MainPage = () => {

    const [posts, setPosts] = useState([]);
    const [term, setTerm] = useState('');
    const [showCreateForm, setShowCreateForm] = useState(false);
    const [onlyLikedPosts, setOnlyLikedPosts] = useState(false);
    const [filters, setFilters] = useState(null);
    const [openComments, setOpenComments] = useState(null);

    const {getAllPosts, getPostComments, deletePost, loading, error, clearError} = useJsonService();

    useEffect(() => {
        const fetchData = async () => {
        const postsData = await getAllPosts();
        const commentsData = await Promise.all(postsData.map(async (post) => {
            const comments = await getPostComments(post.id);
            return { post: {...post, like: false }, comments };
        }));
        setPosts(commentsData);
        }
        fetchData();
    }, [])

    const updateSearch = (term) => {
        setTerm(term);
    }

    const toggleCreateForm = () => {
        setShowCreateForm(!showCreateForm);
    };
    
    const addNewPost = (newPost) => {
        const newPostWithComments = {
            post: newPost,
            comments: []
        };
        setPosts([newPostWithComments, ...posts]);
    }

    const toggleLikeStatus = (postId) => {
        setPosts(posts.map(p => 
            p.post.id === postId ? { ...p, post: { ...p.post, like: !p.post.like } } : p
        ));
    };

    const toggleComments = (postId) => {
        setOpenComments((prevId) => (prevId === postId ? null : postId));
    }

    const applyFilters = () => {
        let filteredPosts = posts;

        if (term) {
            filteredPosts = filteredPosts.filter(({post}) => post.title.toLowerCase().includes(term.toLowerCase()))
        }

        if (onlyLikedPosts) {
            filteredPosts = filteredPosts.filter(({post}) => post.like)
        }
        
        if (filters === 'title') {
            filteredPosts = [...filteredPosts].sort((a, b) => a.post.title.localeCompare(b.post.title));
        }

        return filteredPosts;
    }

    const resetFilters = () => {
        setTerm('');
        setOnlyLikedPosts(false);
        setFilters(null);
    }

    const deleteExistingPost = async (postId) => {
        try {
            await deletePost(postId);
            setPosts((prevPosts) => prevPosts.filter((p) => p.post.id !== postId));
        } catch (err) {
            throw err;
        }
    }

    const filteredPosts = applyFilters();

    const errorMessage = error ? <Error /> : null;
    const spinner = loading ? <Loading /> : null;
    const content = !(loading || error) ? (
        filteredPosts.map((posts, index) => (
                <div key={posts.id || index}>
                    <Post 
                        posts={posts} 
                        toggleLikeStatus={toggleLikeStatus}
                        toggleComments={() => toggleComments(posts.post.id)}
                        onDeletePost={deleteExistingPost} />
                    {openComments === posts.post.id && <Comments posts={posts} />}
                </div>
        ))
    ) : null;

    return (
        <div className='flex flex-col'>
            <Search 
                updateSearch={updateSearch} 
                setFilters={setFilters}
                onlyLikedPosts={onlyLikedPosts}
                setOnlyLikedPosts={setOnlyLikedPosts}
                resetFilters={resetFilters}  />
            <div className='flex justify-center'>
                <Btn 
                    title={'Create new post'} 
                    onClick={toggleCreateForm} />
            </div>
            <CreatePostForm 
                isOpen={showCreateForm} 
                onClose={toggleCreateForm} 
                onPostCreated={addNewPost} />
            {errorMessage}
            {spinner}
            {content}
        </div>
    );
};