import React, { useContext } from "react";
import { userDataContext } from "../userDataContext";
import SearchIcon from "../images/icon-search.svg";

function SearchBar() {
  const [inputText, setInputText] = React.useState("");
  const { fetchUserData } = useContext(userDataContext);

  function handleChange(e) {
    const { name, value } = e.target;
    setInputText(value);
  }

  function handleSubmit(e) {
    // console.log(e);
    e.preventDefault();
    fetchUserData(inputText);
    setInputText("");
  }

  return (
    <form className="user-search-bar">
      <img className="user-search-bar--icon" src={SearchIcon} alt="" />
      <input
        className="user-search-bar--input"
        type="text"
        value={inputText}
        onChange={handleChange}
        placeholder="Search GitHub username…"
      />
      <button onClick={handleSubmit} className="user-search-bar--button">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
