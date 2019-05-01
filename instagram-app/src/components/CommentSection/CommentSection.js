import React from "react";
import "./CommentSection.css";
import PropsType from "prop-types";

class CommentSection extends React.Component {
  state = {
    userComment: "",
    likes: this.props.likes
  };

  handleChanges = e => {
    this.setState({
      userComment: e.target.value
    });
  };

  addComments = e => {
    e.preventDefault();
    console.log(
      "---------------COMMENT SECTION -----------ADD COMMENTS ---" +
        this.state.userComment
    );
    console.log(
      "---------------COMMENT SECTION -----------ADD COMMENTS ---" +
        this.props.postId
    );
    this.props.onSubmit(this.state.userComment, this.props.postId);
    this.setState({ userComment: "" });
  };

  handleClick = e => {
    this.setState(prevState => {
      return {
        likes: prevState.likes + 1
      };
    });
    this.props.updateLikes(this.state.likes, this.props.postId);
    console.log(
      "********* POST CONTIANER :: HANDLE CLICK ********* LIKES IN STATE IS " +
        this.state.likes
    );
  };

  render() {
    return (
      <div>
        <section className="postCommentsHeader">
          <img
            src="../img/iconHeart.png"
            className="likeHeart"
            onClick={this.handleClick}
            alt="heart icon"
          />
          <p>{this.state.likes} likes</p>
        </section>
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
        <form onSubmit={this.addComments}>
          <div className="addCommentContainer">
            <input
              type="text"
              name="comment"
              className="addCommentText"
              placeholder="Add a comment"
              value={this.state.userComment}
              onChange={this.handleChanges}
            />
            <button
              type="submit"
              name="add"
              className="addCommentBtn"
              onClick={this.addComments}
            >
              Post
            </button>
          </div>
        </form>
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
