import { useState } from 'react';
import {Like} from '../atoms/Like';
import {Dots} from '../atoms/Dots';

export const Post = ({ posts }) => {
    
    const [like, setLike] = useState(false);
    const { post } = posts;

    const handleLike = () => {
        setLike(prevState => !prevState);
    }

    return (
        <div className='flex border-solid rounded-t border-2 border-gray-700 w-2/5 h-auto m-auto mt-10 flex-col relative'>
            <div className='flex justify-between relative w-full'>
                <div className="text-white p-2 text-2xl w-10/12">{post.title}</div>
                <Dots className='w-16 h-6 border-2 border-white mt-3'></Dots>
            </div>
            
            <div className='text-white p-2 h-auto'>{post.body}</div>
            <div className='pb-6'>
                <Like like={like} handleLike={handleLike} />
            </div>
        </div>
    )
}