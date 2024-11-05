import { useState } from 'react';
import { Like } from '../atoms/Like';
import { Dots } from '../atoms/Dots';
import { Comment } from '../atoms/Comment';
import { useJsonService } from '../api/jsonService';
import { Loading } from '../atoms/Loading';
import { Error } from '../atoms/Error';

const PostContent = ({ posts, like, handleLike }) => {

    const { post } = posts;

    return (
        <div className='flex border-solid rounded-t border-2 border-gray-700 w-2/5 h-auto m-auto mt-10 flex-col relative'>
            <div className='flex justify-between relative w-full'>
                <div className="text-white p-2 text-2xl w-10/12">{post.title}</div>
                <Dots className='w-16 h-6 border-2 border-white mt-3'></Dots>
            </div>
            
            <div className='text-white p-2 h-auto'>{post.body}</div>
            <div className='pb-6'>
                <Like like={like} handleLike={handleLike} />
                <Comment />
            </div>
        </div>
    )
}

export const Post = ({ posts }) => {
    
    const [like, setLike] = useState(false);
    
    const {loading, error, clearError} = useJsonService();

    const handleLike = () => {
        setLike(prevState => !prevState);
    }

    const errorMessage = error ? <Error/> : null;
    const spinner = loading ? <Loading /> : null;
    const content = !(loading || error) ? <PostContent posts={posts} like={like} handleLike={handleLike} /> : null;

    return (
        <>
            {errorMessage}
            {spinner}
            {content}
        </>
    )
}