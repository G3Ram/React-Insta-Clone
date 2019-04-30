import React from "react";
import "./CommentSection.css";

function CommentSection(props) {
  return (
    <div>
      <input
        type="text"
        className="addCommentText"
        PlaceHolder="Add a comment"
      />
    </div>
  );
}
export default CommentSection;
