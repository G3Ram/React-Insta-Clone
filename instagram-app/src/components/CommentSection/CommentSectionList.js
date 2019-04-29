import React from "react";
import CommentSection from "./CommentSection";
function CommentSectionList(props) {
  return (
    <div>
      {props.comments.map((comment, index) => (
        <CommentSection key={index} comment={comment} />
      ))}
    </div>
  );
}
export default CommentSectionList;
