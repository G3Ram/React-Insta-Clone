import React from "react";
import "./App.css";
import "./components/SearchBar/SearchBar";
import PostPage from "./components/PostContainer/PostPage";
import withAuthenticate from "./components/Authentication/withAuthenticate";
import Login from "./components/Login/Login";

//const ComponentFromWithAuthenticate = withAuthenticate(PostPage)(Login);

class App extends React.Component {
  render() {
    return <div className="App">{/* <ComponentFromWithAuthenticate /> */}</div>;
  }
}

export default withAuthenticate(PostPage)(Login);
