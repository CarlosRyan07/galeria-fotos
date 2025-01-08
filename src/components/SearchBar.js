import React, { useState } from 'react';

function SearchBar({ setSearchQuery }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearch = () => {
    setSearchQuery(inputValue);
  };

  return (
    <div className="p-4 text-center flex justify-center items-center gap-2">
      <input
        type="text"
        placeholder="Pesquisar..."
        className="border p-2 rounded w-1/2"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Pesquisar
      </button>
    </div>
  );
}

export default SearchBar;
