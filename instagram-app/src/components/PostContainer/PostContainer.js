import React from "react";
import "./PostContainer.css";
import CommentSection from "../CommentSection/CommentSection";
import PropTypes from "prop-types";

class PostContainer extends React.Component {
  state = {
    likes: 0
  };

  componentDidMount() {
    this.setState({
      likes: this.props.post.likes
    });
  }

  handleClick = e => {
    console.log("calling handle click");
    this.setState({
      likes: this.state.likes + 1
    });
  };
  render() {
    return (
      <div className="postContainer">
        <section className="postThumbnailSection">
          <img src={this.props.post.thumbnailUrl} className="thumbnailImage" />
          <span className="postHeadingName">{this.props.post.username}</span>
        </section>
        <section className="postImageSection">
          <img src={this.props.post.imageUrl} className="postImage" />
        </section>
        <section className="postCommentsHeader">
          <img
            src="../img/iconHeart.png"
            className="likeHeart"
            onClick={this.handleClick.bind(this)}
          />
          <p>{this.state.likes} likes</p>
        </section>
        <section>
          <CommentSection comments={this.props.post.comments} />
        </section>
      </div>
    );
  }
}

PostContainer.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    timestamp: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(PropTypes.object).isRequired
  })
};

PostContainer.defaultProps = {
  post: []
};
export default PostContainer;
