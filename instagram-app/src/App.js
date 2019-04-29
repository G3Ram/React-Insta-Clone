import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./components/SearchBar/SearchBar";
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";
import CommentSection from "./components/CommentSection/CommentSection";
import PostContainerList from "./components/PostContainer/PostContainerList";
import dummyData from "./dummy-data";

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log(dummyData);
    this.state = {
      posts: dummyData
    };
  }
  render() {
    console.log("number of posts" + this.state.posts);
    return (
      <div className="App">
        <header>
          <SearchBar />
          <PostContainerList posts={this.state.posts} />
        </header>
      </div>
    );
  }
}

export default App;
