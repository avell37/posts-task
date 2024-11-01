import jsonService from '../api/jsonService';
import { useEffect } from 'react';
import Like from '../atoms/Like';
import Dots from '../atoms/Dots';

const Posts = () => {

    const {getAllPosts} = jsonService();

    // useEffect(() => {
    //     getAllPosts()
    //         .then(item => console.log(item))
    // }, [])

    return (
        <div className='flex border-solid rounded-md border-2 border-gray-700 w-2/5 h-auto m-auto mt-10 flex-col relative pb-10'>
            <div className='flex justify-between relative w-full'>
                <div className="text-white p-2 text-2xl w-10/12">sunt aut facere repellat provident occaecati excepturi optio reprehenderit</div>
                <Dots className='w-16 h-6 border-2 border-white mt-3'></Dots>
            </div>
            
            <div className='text-white p-2 h-auto'>quia et suscipit\nsuscipit recusandae consequuntur expedita et 
            cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto</div>
            <Like />
        </div>
    )

}

export default Posts;