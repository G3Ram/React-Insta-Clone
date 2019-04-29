import React from "react";
import "./PostContainer.css";
import CommentSectionList from "../CommentSection/CommentSectionList";

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
        <p>Comments</p>
      </section>
      <section className="postCommentSection">
        <CommentSectionList comments={props.post.comments} />
      </section>
    </div>
  );
}

export default PostContainer;
