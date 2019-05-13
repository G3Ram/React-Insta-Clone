import React from "react";
import "../../App.css";
import SearchBar from "../SearchBar/SearchBar";
import PostContainerList from "./PostContainerList";
import dummyData from "../../dummy-data";

// The PostPage
class PostPage extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      userInput: "",
      searchReturn: true,
      tempPosts: []
    };
  }

  // Component will mount
  componentWillMount() {
    localStorage.getItem("posts") &&
      this.setState({
        posts: JSON.parse(localStorage.getItem("posts")),
        tempPosts: JSON.parse(localStorage.getItem("posts"))
      });
  }

  // Component did mount
  componentDidMount() {
    if (!localStorage.getItem("posts")) {
      this.setState({
        posts: dummyData,
        tempPosts: dummyData
      });
      localStorage.setItem("posts", JSON.stringify(dummyData));
    } else {
      console.log("Using data from local storage");
    }
  }

  // Search posts
  searchPosts = e => {
    e.preventDefault();
    console.log("****** SEARCH POSTS *********" + this.state.searchReturn);
    console.log("****** SEARCH POSTS *********" + this.state.posts.length);
    if (this.state.userInput !== "") {
      this.setState(prevState => {
        const filteredPosts = prevState.posts.filter(post => {
          return post.username.includes(this.state.userInput);
        });
        if (filteredPosts.length !== 0) {
          console.log("filtered posts length is not zero");
          return {
            posts: filteredPosts,
            userInput: "",
            searchReturn: true
          };
        } else {
          console.log("filtered posts length is zero");
          return {
            posts: this.state.tempPosts,
            userInput: "",
            searchReturn: false
          };
        }
      });
    } else {
      this.setState(prevState => {
        return {
          posts: this.state.tempPosts
        };
      });
    }
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({
      userInput: e.target.value
    });
  };

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("posts", JSON.stringify(this.state.tempPosts));
  }

  addComments = (userComment, postId) => {
    const newUserComment = {
      username: localStorage.getItem("username"),
      text: userComment
    };
    this.setState(prevState => {
      const updatedPosts = prevState.posts.map((post, index) => {
        if (index === postId) {
          post.comments.push(newUserComment);
        }
        return post;
      });
      return {
        posts: updatedPosts,
        tempPosts: updatedPosts,
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
        tempPosts: updatedPosts,
        userInput: ""
      };
    });
  };

  render() {
    let searchReturnVal = "";
    if (!this.state.searchReturn) {
      searchReturnVal = `<p className="searchWarning">Search returned empty</p>`;
    }

    return (
      <div className="App">
        <header>
          <SearchBar
            onSubmit={this.searchPosts}
            userInput={this.state.userInput}
            handleChange={this.handleChange}
          />
          {searchReturnVal}
        </header>
        <PostContainerList
          posts={this.state.posts}
          onSubmit={this.addComments}
          updateLikes={this.updateLikes}
        />
      </div>
    );
  }
}

export default PostPage;
