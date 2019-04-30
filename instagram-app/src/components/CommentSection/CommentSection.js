import React from "react";
import "./CommentSection.css";
import PropsType from "prop-types";

function CommentSection(props) {
  return (
    <div>
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

      <input
        type="text"
        className="addCommentText"
        PlaceHolder="Add a comment"
      />
    </div>
  );
}

CommentSection.propsType = {
  comment: PropsType.shape({
    username: PropsType.string.isRequired,
    text: PropsType.string.isRequired
  })
};
export default CommentSection;
