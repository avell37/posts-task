export const Comment = ({ onCommentClick }) => {
    return (
        <div className="inline-block cursor-pointer" onClick={onCommentClick}>
            <svg
            className="absolute bottom-2 left-20 bg-gray-500 rounded-xl w-16 h-7 hover:bg-gray-600 hover:translate-y-px"
            viewBox="0 0 48 48" 
            version="1.1" 
            xmlns="http://www.w3.org/2000/svg"
            xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
            <g id="Page-1" stroke="none" fill="none" sketch:type="MSPage">
                <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-354.000000, -248.000000)" fill="white">
                    <path 
                    style={{top: '5px'}}
                    d="M388.667,257 L367.333,257 C364.388,257 362,259.371 362,262.297 L362,279.187 C362,282.111 364.055,284 367,284 L373.639,284 L378,289.001 L382.361,284 L389,284 C391.945,284 394,282.111 394,279.187 L394,262.297 C394,259.371 391.612,257 388.667,257" id="comment-5" sketch:type="MSShapeGroup">
                    </path>
                </g>
            </g>
        </svg>
        </div>
    );
};