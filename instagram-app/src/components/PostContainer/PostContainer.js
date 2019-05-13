import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import PropTypes from "prop-types";
import styled from "styled-components";

//styled components
const PostContainerDiv = styled.div`
  width: 43%;
  padding: 0px;
  margin: 4% 0 0 17.5%;
  border: 1px solid lightgray;
`;

const PostThumbnailSection = styled.section`
  width: 100%;
  height: 63px;
  border-bottom: 1px solid lightgray;
  display: flex;
  align-content: center;
  justify-content: left;
  align-items: center;
`;

const ThumbnailImage = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin-left: 2%;
  border: 1px solid lightgray;
`;

const PostHeadingName = styled.span`
  margin-left: 5px;
`;

const PostImage = styled.img`
  width: 100%;
  height: auto;
`;

function PostContainer(props) {
  return (
    <PostContainerDiv>
      <PostThumbnailSection>
        <ThumbnailImage src={props.post.thumbnailUrl} alt="user" />
        <PostHeadingName>{props.post.username}</PostHeadingName>
      </PostThumbnailSection>
      <section>
        <PostImage src={props.post.imageUrl} alt="post" />
      </section>
      <section>
        <CommentSection
          comments={props.post.comments}
          onSubmit={props.onSubmit}
          postId={props.postId}
          likes={props.post.likes}
          updateLikes={props.updateLikes}
        />
      </section>
    </PostContainerDiv>
  );
}

PostContainer.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    timestamp: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(PropTypes.object).isRequired
  })
};

PostContainer.defaultProps = {
  post: []
};
export default PostContainer;
