export const FilterBtns = ({setFilters, setOnlyLikedPosts, resetFilters}) => {

    const toggleLikedFilter = () => {
        setOnlyLikedPosts((prev) => !prev);
    };

    return (
        <div className="flex justify-center space-x-2">
            <button onClick={() => setFilters('title')} className="transition-all text-white bg-blue-500 hover:bg-blue-600 px-2 py-2 rounded hover:translate-y-px">По заголовку</button>
            <button onClick={toggleLikedFilter} className="transition-all text-white bg-blue-500 hover:bg-blue-600 px-2 py-2 rounded hover:translate-y-px">По лайкам</button>
            <button onClick={resetFilters} className="transition-all text-white bg-blue-500 hover:bg-blue-600 px-2 py-2 rounded hover:translate-y-px">Сбросить</button>
        </div>
    );
};