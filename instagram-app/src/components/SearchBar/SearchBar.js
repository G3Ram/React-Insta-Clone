import React from "react";
import "./SearchBar.css";
import styled from "styled-components";

// Styled components
const HeaderDiv = styled.div`
  margin: 0;
  width: 100%;
  height: auto;
  border-bottom: 1px solid gray;
`;

const HeaderContentDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 80%;
  height: 20%;
  margin-left: 15%;
  margin-bottom: 1%;
  padding-top: 1.5%;
  border: 0px solid red;
  align-content: space-around;
  justify-content: flex-start;
`;

const InstagramAccessoryImage = styled.img`
  width: 25px;
  height: 25px;
  margin-left: 30px;
  border: 0px solid black;

  :first-child {
    margin-left: 250px;
  }
`;

const InstagramLogoImage = styled.img`
  width: 30px;
  margin-top: 2px;
  margin-left: 10px;
  height: 30px;
  border: 0px solid black;
  padding: 0;
`;

const InstagramTextImage = styled.img`
  width: 100px;
  margin-top: 5px;
  margin-left: 20px;
  height: 30px;
  border: 0px solid black;
  padding: 0;
`;

function SearchBar(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <HeaderDiv>
        <HeaderContentDiv>
          <div className="headerSection">
            <InstagramLogoImage
              src="../img/iconInstagram.png"
              alt="instagram logo"
            />
            <div className="verticalLine" />
            <InstagramTextImage
              src="../img/instagramText.png"
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
            <InstagramAccessoryImage
              src="../img/iconCompass.png"
              alt="compass icon"
            />
            <InstagramAccessoryImage
              src="../img/iconHeart.png"
              alt="heart icon"
            />
            <InstagramAccessoryImage
              src="../img/iconProfile.png"
              alt="profile icon"
            />
          </div>
        </HeaderContentDiv>
      </HeaderDiv>
    </form>
  );
}
export default SearchBar;
