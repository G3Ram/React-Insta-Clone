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
  state = {
    posts: [],
    userInput: ""
  };

  componentDidMount() {
    this.setState({
      posts: dummyData,
      userInput: ""
    });
  }
  searchPosts = e => {
    e.preventDefault();
    console.log("Value of the event is " + this.state.userInput);
    const userInput = e.target.value;
    this.setState(prevState => {
      const filteredPosts = prevState.posts.filter(post => {
        return post.username.includes(this.state.userInput);
      });
      return {
        posts: filteredPosts,
        userInput: ""
      };
    });
  };
  handleChange = e => {
    e.preventDefault();
    this.setState({
      userInput: e.target.value
    });
  };

  render() {
    console.log("number of posts" + this.state.posts);
    return (
      <div className="App">
        <header>
          <SearchBar
            onSubmit={this.searchPosts}
            userInput={this.state.userInput}
            handleChange={this.handleChange}
          />
          <PostContainerList posts={this.state.posts} />
        </header>
      </div>
    );
  }
}

export default App;
