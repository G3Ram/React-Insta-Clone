import React from "react";
import "./CommentSection.css";
import PropsType from "prop-types";

class CommentSection extends React.Component {
  state = {
    comments: [],
    userName: "G3Ram",
    userComment: ""
  };

  componentDidMount() {
    this.setState({
      comments: this.props.comments
    });
  }

  handleChanges = e => {
    this.setState({
      userComment: e.target.value
    });
  };

  addComments = e => {
    e.preventDefault();
    console.log(this.state.comments.length);
    this.setState({
      comments: this.state.comments.push({
        username: "G3Ram",
        text: this.state.userComment
      }),
      userComment: ""
    });
    console.log(this.state.comments.length);
  };

  render() {
    return (
      <div>
        <div>
          {this.props.comments.map((comment, index) => (
            <section key={index} className="commentSection">
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
            placeholder="Add a comment"
            value={this.state.userComment}
            onChange={this.handleChanges}
          />
          <button className="addCommentBtn" onClick={this.addComments}>
            Post
          </button>
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
