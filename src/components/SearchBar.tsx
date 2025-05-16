
import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    onSearch(value);
  };

  return (
    <div className="relative w-full max-w-2xl">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <Search className="h-5 w-5 text-gray-400 dark:text-gray-500" />
      </div>
      <input
        type="search"
        className="block w-full pl-10 pr-4 py-3 text-base text-gray-900 dark:text-gray-100 bg-white dark:bg-slate-800 border border-gray-300 dark:border-gray-700 rounded-xl 
                  focus:ring-keypilot-purple dark:focus:ring-keypilot-purple-light focus:border-keypilot-purple dark:focus:border-keypilot-purple-light transition-all duration-200
                  placeholder:text-gray-400 dark:placeholder:text-gray-500 shadow-sm"
        placeholder="Search shortcuts, tools, actions..."
        value={searchValue}
        onChange={handleSearch}
      />
      <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
        <span className="keycap dark:keycap-dark">⌘K</span>
      </div>
    </div>
  );
};

export default SearchBar;
