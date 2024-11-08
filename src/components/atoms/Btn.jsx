export const Btn = ({title, onClick }) => {
    return (
        <button 
        onClick={onClick}
        className="bg-blue-500 hover:bg-blue-600 p-2 border-solid rounded-md text-white font-black w-4/12 mt-6 transition-all hover:translate-y-px">
            {title}
        </button>
    )
}