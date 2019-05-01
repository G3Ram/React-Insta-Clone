import React from "react";
import "./App.css";
import "./components/SearchBar/SearchBar";
import PostPage from "./components/PostContainer/PostPage";
import withAuthenticate from "./components/Authentication/withAuthenticate";

const ComponentFromWithAuthenticate = withAuthenticate(PostPage);

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ComponentFromWithAuthenticate />
      </div>
    );
  }
}

export default App;
