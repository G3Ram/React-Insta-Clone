import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./components/SearchBar/SearchBar";
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";
import CommentSection from "./components/CommentSection/CommentSection";

function App() {
  return (
    <div className="App">
      <header>
        <SearchBar />
        <PostContainer />
        <CommentSection />
      </header>
    </div>
  );
}

export default App;
