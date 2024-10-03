import React, { useState, useContext } from 'react';

import VirtualLibraryContext from '../../context/VirtualLibraryContext';

import './index.css'
const SearchBar = () => {
  const { books, setFilteredBooks } = useContext(VirtualLibraryContext);
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    const filtered = books.filter(
      (book) =>
        book.title.toLowerCase().includes(query.toLowerCase()) ||
        book.author.toLowerCase().includes(query.toLowerCase()) ||
        book.genre.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredBooks(filtered);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search"
        
      />
      <button onClick={handleSearch} className='search-btn'>Search</button>
    </div>
  );
};

export default SearchBar;
