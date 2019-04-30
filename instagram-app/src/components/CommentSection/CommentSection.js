import React from "react";
import "./CommentSection.css";
import PropsType from "prop-types";

class CommentSection extends React.Component {
  state = {
    comments: []
  };
  componentDidMount() {
    this.setState({
      comments: this.props.comments
    });
  }

  render() {
    return (
      <div>
        <div>
          {this.state.comments.map((comment, index) => (
            <section className="commentSection">
              <span className="commenterName">
                <strong>{comment.username}</strong>
              </span>
              <span className="commentText">{comment.text} </span>
            </section>
          ))}
        </div>
        <div className="addCommentContainer">
          <input
            type="text"
            className="addCommentText"
            PlaceHolder="Add a comment"
          />
          <button className="addCommentBtn">Post</button>
        </div>
      </div>
    );
  }
}

CommentSection.propsType = {
  comment: PropsType.shape({
    username: PropsType.string.isRequired,
    text: PropsType.string.isRequired
  })
};

CommentSection.defaultProps = {
  comment: []
};
export default CommentSection;
