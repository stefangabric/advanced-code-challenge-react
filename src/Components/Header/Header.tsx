import React from 'react';
import Link from "next/link";
const Header = () => {
    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900 pl-10 py-5">
            <div className="flex items-center md:order-2 space-x-1 md:space-x-2 rtl:space-x-reverse">
                <Link href="/" className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Search</Link>
                <Link href="/favorites" className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Favorites</Link>
            </div>
        </nav>
    )
};

export default (Header);