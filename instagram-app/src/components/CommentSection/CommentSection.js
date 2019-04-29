import React from "react";

function CommentSection(props) {
  return (
    <div>
      <section>
        {props.comment.username} {props.comment.text}
      </section>
    </div>
  );
}
export default CommentSection;
