export const Btn = ({title}) => {
    return (
        <button className="bg-blue-500 hover:bg-blue-600 p-2 border-solid rounded-md text-white font-black w-30 mt-6 transition-all hover:translate-y-px">
            {title}
        </button>
    )
}