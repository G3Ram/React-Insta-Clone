import React from "react";
import "./App.css";
import "./components/SearchBar/SearchBar";
import PostPage from "./components/PostContainer/PostPage";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <PostPage />
      </div>
    );
  }
}

export default App;
