import React from "react";
import "./PostContainer.css";
import CommentSectionList from "../CommentSection/CommentSectionList";
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
      <section className="postCommentDisplaySection">
        <p>{props.post.likes} likes</p>
        <CommentSectionList comments={props.post.comments} />
      </section>
      <section className="postCommentSection">
        <CommentSection />
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
export default PostContainer;
