import React from "react";
import CommentSection from "./CommentSection";
import "./CommentSection.css";
import PropsType from "prop-types";

function CommentSectionList(props) {
  return (
    <div>
      {props.comments.map((comment, index) => (
        <section className="commentSection">
          <span className="commenterName">
            <strong>{comment.username}</strong>
          </span>
          <span className="commentText">{comment.text} </span>
        </section>
      ))}
    </div>
  );
}

CommentSectionList.propsType = {
  comment: PropsType.shape({
    username: PropsType.string.isRequired,
    text: PropsType.string.isRequired
  })
};
export default CommentSectionList;
