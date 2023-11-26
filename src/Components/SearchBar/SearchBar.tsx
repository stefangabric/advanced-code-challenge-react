import React, { useRef } from 'react';
type SearchBarType={
    setQuery: (value: string) => void;
}
const SearchBar = ({ setQuery }: SearchBarType) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const setSearchQuery = () => {
        if (inputRef.current) {
            setQuery(inputRef.current.value);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            setSearchQuery();
        }
    };

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setSearchQuery();
    };

    return (
        <form className="relative m-10">
            <label htmlFor="default-search" className="sr-only">
                Search
            </label>
            <div className="flex items-center absolute inset-y-0 start-0 ps-3 pointer-events-none">
                <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                >
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
            </div>
            <input
                ref={inputRef}
                onKeyDown={handleKeyDown}
                type="search"
                id="default-search"
                className="block w-full p-4 pl-10 text-sm border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Find statistics, forecasts and reports"
                required
            />
            <button
                type="button"
                onClick={handleClick}
                className="absolute end-2.5 bottom-2.5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                Search
            </button>
        </form>
    );
};

export default SearchBar;
