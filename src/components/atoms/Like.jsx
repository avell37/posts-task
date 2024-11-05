export const Like = ({ like, handleLike }) => {

    return (
        <div className="inline-block cursor-pointer">
            <svg
            onClick={handleLike}
            className="absolute bottom-2 left-1 bg-gray-500 rounded-xl w-16 h-7 hover:bg-gray-600 hover:translate-y-px" 
            viewBox="0 0 54 54" 
            version="1" 
            xmlns="http://www.w3.org/2000/svg">
                <path 
                transform="translate(3, 0)"
                style={{ fill: like ? 'red' : 'white',
                    transition: '.3s all',
                    marginBottom: '10px'
                }}
                d="M34,9c-4.2,0-7.9,2.1-10,5.4C21.9,11.1,18.2,9,14,9C7.4,9,2,14.4,2,21c0,11.9,22,24,22,24s22-12,22-24 C46,14.4,40.6,9,34,9z"/>
            </svg>
        </div>
    )
}