import React from "react";
import "./PostContainer.css";
import CommentSection from "../CommentSection/CommentSection";
import PropTypes from "prop-types";

function PostContainer(props) {
  return (
    <div className="postContainer">
      <section className="postThumbnailSection">
        <img src={props.post.thumbnailUrl} className="thumbnailImage" />
        <span className="postHeadingName">{props.post.username}</span>
      </section>
      <section className="postImageSection">
        <img src={props.post.imageUrl} className="postImage" />
      </section>
      <section className="postCommentsHeader">
        <p>{props.post.likes} likes</p>
      </section>
      <section>
        <CommentSection comments={props.post.comments} />
      </section>
    </div>
  );
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
