import React from "react";
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

const CommenterName = styled.span`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem;
  margin-right: 10px;
`;

const CommentText = styled.span`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem;
`;

const CommentSectionSection = styled.section`
  padding-bottom: 5px;
  margin-left: 15px;
`;

const AddCommentText = styled.input`
  width: 85%;
  height: 50px;
  border: 0px;
  margin-left: 15px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem;

  :focus {
    outline: 0;
  }

  ::placeholder {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1rem;
    color: lightgray;
  }
`;

const AddCommentContainer = styled.div`
  display: flex;
  border-top: 1px solid lightgray;
`;

const AddCommentBtn = styled.button`
  width: 14%;
  font-family: Arial, Helvetica, sans-serif;
  color: lightgray;
  font-size: 1rem;
  background-color: white;
  border: 0px;

  :hover {
    color: darkgray;
  }

  :focus {
    outline: 0;
  }
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
            <CommentSectionSection key={index}>
              <CommenterName>
                <strong>{comment.username}</strong>
              </CommenterName>
              <CommentText>{comment.text} </CommentText>
            </CommentSectionSection>
          ))}
        </div>
        <form onSubmit={this.addComments}>
          <AddCommentContainer>
            <AddCommentText
              type="text"
              name="comment"
              placeholder="Add a comment"
              value={this.state.userComment}
              onChange={this.handleChanges}
            />
            <AddCommentBtn type="submit" name="add" onClick={this.addComments}>
              Post
            </AddCommentBtn>
          </AddCommentContainer>
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
