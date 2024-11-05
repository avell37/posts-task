import { useState, useEffect } from 'react';
import {Post} from '../organisms/Post';
import {Comments} from '../organisms/Comments';
import {useJsonService} from '../api/jsonService';
import { Btn } from '../atoms/Btn';
import { Search } from '../atoms/Search';
import { Loading } from '../atoms/Loading';
import { Error } from '../atoms/Error';

export const MainPage = () => {

    const [posts, setPosts] = useState([]);
    const [term, setTerm] = useState('');

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

    
    const errorMessage = error ? <Error /> : null;
    const spinner = loading ? <Loading /> : null;
    const content = !(loading || error) ? (
        posts.map((posts) => (
                <div key={posts.post.id}>
                    <Post posts={posts}/>
                    {/* <Comments posts={posts} /> */}
                </div>
        ))
    ) : null;

    return (
        <div className='flex flex-col'>
            <Search/>
            <div className='flex justify-center'>
                <Btn title={'+ Create new post'}/>
            </div>
            {errorMessage}
            {spinner}
            {content}
        </div>
    );
};