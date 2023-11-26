import React, { useState } from 'react';
import SearchBar from '@/Components/SearchBar/SearchBar';
import SearchResults from '@/Components/SearchResults/SearchResults';
import { useQuery } from '@tanstack/react-query';

const API_URL = 'https://cdn.statcdn.com/static/application/search_results.json';

const Search = () => {
    const [page, setPage] = useState(1);
    const [query, setQuery] = useState('');

    const changePage = (action: 'increase' | 'decrease') => {
        setPage((prevPage) =>
            action === 'increase' ? prevPage + 1 : Math.max(prevPage - 1, 1)
        );
    };

    const fetchData = async (pageKey: number, queryKey: string) => {
        try {
            const response = await fetch(
                `${API_URL}?q=${queryKey}&page=${pageKey}&limit=10`
            );

            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }

            return response.json();
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    };

    const { data } = useQuery({
        queryKey: [page, query],
        queryFn: () => fetchData(page, query),
    });

    return (
        <div className="p-10">
            <SearchBar setQuery={setQuery} />
            <ul className="flex flex-wrap">
                {/*added slice for better pagination preview*/}
                <SearchResults statistics={data?.items.slice(0, 10)} />
            </ul>
            <div className="flex">
                {page > 1 && (
                    <a
                        onClick={() => changePage('decrease')}
                        className="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                        Previous
                    </a>
                )}
                <a
                    onClick={() => changePage('increase')}
                    className="flex items-center justify-center px-3 h-8 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                    Next
                </a>
            </div>
        </div>
    );
};

export default Search;