export const FilterBtns = () => {
    return (
        <div className="flex justify-center space-x-2">
            <button className="transition-all text-white bg-blue-500 hover:bg-blue-600 px-2 py-2 rounded hover:translate-y-px">По заголовку</button>
            <button className="transition-all text-white bg-blue-500 hover:bg-blue-600 px-2 py-2 rounded hover:translate-y-px">По лайкам</button>
        </div>
    );
};