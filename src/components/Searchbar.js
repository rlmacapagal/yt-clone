import React from "react";
import search from "./assets/search.PNG";
import { useState } from "react";

function Searchbar(props) {
  const [term, setTerm] = useState("");
  let handleChange = (event) => {
    setTerm(event.target.value);
    console.log(term);
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    props.handleFormSubmit(term);
  };

  return (
    <form className="search-box" onSubmit={handleSubmit}>
      <input
        type="text"
        className="search-bar"
        placeholder="search"
        onChange={handleChange}
        name="video-search"
      />
      <button class="search-btn">
        <img src={search} alt="" />
      </button>
    </form>
  );
}
export default Searchbar;
