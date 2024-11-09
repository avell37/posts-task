import { useState } from "react";
import { FilterBtns } from "../molecules/FilterBtns";

export const Search = ({
    updateSearch,
    setFilters,
    onlyLikedPosts,
    setOnlyLikedPosts,
    resetFilters,
}) => {
    const [term, setTerm] = useState("");

    const onUpdateSearch = (e) => {
        const input = e.target.value;
        setTerm(input);
        updateSearch(input);
    };

    return (
        <div className="flex justify-center items-center mt-6 space-x-2 flex-wrap">
            <input
                type="text"
                className="border-slate-500 border-2 rounded-md w-80 h-10 bg-gray-500 pl-2 hover:bg-gray-600 focus:bg-gray-600 transition-all"
                placeholder="Start search..."
                value={term}
                onChange={onUpdateSearch}
            />
            <FilterBtns
                setFilters={setFilters}
                onlyLikedPosts={onlyLikedPosts}
                setOnlyLikedPosts={setOnlyLikedPosts}
                resetFilters={resetFilters}
            />
        </div>
    );
};
