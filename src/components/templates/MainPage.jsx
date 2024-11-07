import { useState, useEffect } from 'react';
import {Post} from '../organisms/Post';
import {Comments} from '../organisms/Comments';
import {useJsonService} from '../api/jsonService';
import { Btn } from '../atoms/Btn';
import { Search } from '../atoms/Search';
import { Loading } from '../atoms/Loading';
import { Error } from '../atoms/Error';
import { CreatePostForm } from '../organisms/CreatePostForm';

export const MainPage = () => {

    const [posts, setPosts] = useState([]);
    const [term, setTerm] = useState('');
    const [showCreateForm, setShowCreateForm] = useState(false);

    const {getAllPosts, getPostComments, loading, error, clearError} = useJsonService();

    useEffect(() => {
        const fetchData = async () => {
        const postsData = await getAllPosts();
        const commentsData = await Promise.all(postsData.map(async (post) => {
            const comments = await getPostComments(post.id);
            return { post, comments };
        }));
        setPosts(commentsData);
        }
        fetchData();
    }, [])

    const onUpdateSearch = (term) => {
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

    const errorMessage = error ? <Error /> : null;
    const spinner = loading ? <Loading /> : null;
    const content = !(loading || error) ? (
        posts.map((posts, index) => (
                <div key={posts.id || index}>
                    <Post posts={posts} />
                    {/* <Comments posts={posts} /> */}
                </div>
        ))
    ) : null;

    return (
        <div className='flex flex-col'>
            <Search onUpdateSearch={onUpdateSearch} />
            <div className='flex justify-center'>
                <Btn title={'Create new post'} onClick={toggleCreateForm} />
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