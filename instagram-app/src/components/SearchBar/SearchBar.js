import React from "react";
import "./SearchBar.css";

function SearchBar() {
  return (
    <div className="header">
      <div className="headerContent">
        <img src="../img/instagramLogos.png" className="instagramLogoImage" />
        <input type="text" className="searchText" />
        <img
          src="../img/instagramAccessory.png"
          className="instagramAccesory"
        />
      </div>
    </div>
  );
}
export default SearchBar;
