import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./Searchbar.css";
import { Button } from "@material-ui/core";
const Searchbar = (props) => {
  console.log(props);
  return (
    <div className="Searchbar">
      <form className="searchbar__container">
        <input
          type="text"
          className="Searchbar__input"
          type="text"
          name="search"
          placeholder="Search for any article or news"
          value={props.searchBarTerm}
          onChange={(e) => {
            props.setSearchBarTerm(e.target.value);
          }}
        />
        <SearchIcon
          className="Searchbar__icon"
          onClick={(e) => {
            e.preventDefault();
            console.log("Prevent Default");
            props.setSearchTerm(props.searchBarTerm);
            console.log(props.searchTerm);
          }}
        >
          {/* <input value="Search" type="button" /> */}
        </SearchIcon>
      </form>
    </div>
  );
};

export default Searchbar;
