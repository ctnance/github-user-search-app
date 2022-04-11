import React from "react";

function SearchBar() {
  return (
    <div className="user-search-bar">
      <input
        className="user-search-bar--input"
        type="text"
        placeholder="Search GitHub username…"
      />
      <button className="user-search-bar--button">Search</button>
    </div>
  );
}

export default SearchBar;
