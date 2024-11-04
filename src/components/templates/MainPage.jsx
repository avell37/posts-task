import { useState, useEffect } from 'react';
import {Post} from '../molecules/Post';
import {Comments} from '../molecules/Comments';
import {jsonService} from '../api/jsonService';
import { Btn } from '../atoms/Btn';
import { Search } from '../atoms/Search';

export const MainPage = () => {

    const [posts, setPosts] = useState([]);
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const {getAllPosts, getPostComments} = jsonService();

    useEffect(() => {
        const fetchData = async () => {
            const postsData = await getAllPosts();
            const commentsData = await Promise.all(postsData.map(async (post) => {
                const comments = await getPostComments(post.id);
                return { post, comments };
            }))
            setPosts(commentsData);
        }
        fetchData();
    }, [])

    return (
        <div className='flex flex-col'>
            <Btn title={'+ Create new post'}/>
            <Search/>
            {posts.map((posts) => {
                return (
                    <div key={posts.post.id}>
                        <Post posts={posts}/>
                        <Comments posts={posts} />
                    </div>
                )
            })}
        </div>
    );
};