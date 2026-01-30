"use client";

import { useState } from "react";

export default function SearchBar() {
    const [query, setQuery] = useState("");

    const handleSearch = () => {
        if (!query) return;
        alert(`Searching for: ${query}`);
        // Энд хүсвэл API call эсвэл page redirect хийх боломжтой
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") handleSearch();
    };

    return (
        <div className="flex items-center gap-2">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Search..."
                className="px-3 py-1 rounded border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs"
            />
            <button
                onClick={handleSearch}
                className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-sm text-xs font-bold uppercase tracking-wider transition-colors"
            >
                Search
            </button>
        </div>
    );
}
