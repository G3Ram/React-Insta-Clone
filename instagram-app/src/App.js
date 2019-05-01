import React from "react";
import "./App.css";
import "./components/SearchBar/SearchBar";
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainerList from "./components/PostContainer/PostContainerList";
import dummyData from "./dummy-data";

class App extends React.Component {
  constructor() {
    super();
    console.log("**********  constructor  ************");
    this.state = {
      posts: [],
      userInput: ""
    };
  }

  componentWillMount() {
    localStorage.getItem("posts") &&
      this.setState({
        posts: JSON.parse(localStorage.getItem("posts"))
      });
  }

  componentDidMount() {
    console.log("**********  component did mount  ************");
    if (!localStorage.getItem("posts")) {
      this.setState({
        posts: dummyData
      });
    } else {
      console.log("Using data from local storage");
    }
  }

  searchPosts = e => {
    console.log("**********  search posts  ************");
    e.preventDefault();
    console.log("Value of the event is " + this.state.userInput);
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

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("posts", JSON.stringify(nextState.posts));
  }

  addComments = (userComment, postId) => {
    console.log("----------INVOKING USER COMMENTS ---------------");
    const newUserComment = { username: "G3Ram", text: userComment };
    console.log("user comments " + newUserComment.text);
    this.setState(prevState => {
      const updatedPosts = prevState.posts.map((post, index) => {
        if (index === postId) {
          post.comments.push(newUserComment);
        }
        return post;
      });
      return {
        posts: updatedPosts,
        userInput: ""
      };
    });
  };

  updateLikes = (likes, postId) => {
    this.setState(prevState => {
      const updatedPosts = prevState.posts.map((post, index) => {
        if (index === postId) {
          post.likes = likes;
        }
        return post;
      });
      return {
        posts: updatedPosts,
        userInput: ""
      };
    });
  };

  render() {
    return (
      <div className="App">
        <header>
          <SearchBar
            onSubmit={this.searchPosts}
            userInput={this.state.userInput}
            handleChange={this.handleChange}
          />
          <PostContainerList
            posts={this.state.posts}
            onSubmit={this.addComments}
            updateLikes={this.updateLikes}
          />
        </header>
      </div>
    );
  }
}

export default App;
