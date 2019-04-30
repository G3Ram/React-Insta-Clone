import React from "react";
import "./SearchBar.css";

function SearchBar(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <div className="header">
        <div className="headerContent">
          {/* <img src="../img/instagramLogos.png" className="instagramLogoImage" /> */}
          <div className="headerSection">
            <img
              src="../img/iconInstagram.png"
              className="instagramLogoImage"
            />
            <div className="verticalLine" />
            <img
              src="../img/instagramText.png"
              className="instagramTextImage"
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
            <img src="../img/iconCompass.png" className="instagramAccesory" />
            <img src="../img/iconHeart.png" className="instagramAccesory" />
            <img src="../img/iconProfile.png" className="instagramAccesory" />
          </div>
        </div>
      </div>
    </form>
  );
}
export default SearchBar;
