import React from "react";
import "./CommentSection.css";
import PropsType from "prop-types";
import styled from "styled-components";

const PostCommentsHeader = styled.section`
  margin-left: 15px;
`;

const LikeHeart = styled.img`
  width: 20px;
  height: 20px;
  margin-top: 15px;
  cursor: pointer;
`;

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
  };

  render() {
    return (
      <div>
        <PostCommentsHeader>
          <LikeHeart
            src="../img/iconHeart.png"
            onClick={this.handleClick}
            alt="heart icon"
          />
          <p>{this.state.likes} likes</p>
        </PostCommentsHeader>
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
