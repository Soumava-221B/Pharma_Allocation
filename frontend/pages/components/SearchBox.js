
import React from 'react';

const SearchBox = () => {
  return (
    <div className="search-box">
      <input type="text" placeholder="Search for medicines" />
      <button>
        <img src="/search-icon.png" alt="Search" />
      </button>
    </div>
  );
};

export default SearchBox;
