import React from "react";
import "./SearchBar.css";

function SearchBar(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <div className="header">
        <div className="headerContent">
          <div className="headerSection">
            <img
              src="../img/iconInstagram.png"
              className="instagramLogoImage"
              alt="instagram logo"
            />
            <div className="verticalLine" />
            <img
              src="../img/instagramText.png"
              className="instagramTextImage"
              alt="instagram logo"
            />
          </div>
          <div className="searchSection">
            <input
              type="text"
              className="searchText"
              placeholder="Search"
              value={props.userInput}
              onChange={props.handleChange}
            />
          </div>
          <div className="accessorySection">
            <img
              src="../img/iconCompass.png"
              className="instagramAccesory"
              alt="compass icon"
            />
            <img
              src="../img/iconHeart.png"
              className="instagramAccesory"
              alt="heart icon"
            />
            <img
              src="../img/iconProfile.png"
              className="instagramAccesory"
              alt="profile icon"
            />
          </div>
        </div>
      </div>
    </form>
  );
}
export default SearchBar;
