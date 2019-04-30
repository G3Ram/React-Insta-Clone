import React from "react";
import PostContainer from "./PostContainer";
import PropTypes from "prop-types";

function PostContainerList(props) {
  return (
    <div>
      {props.posts.map((post, index) => (
        <PostContainer key={index} post={post} />
      ))}
    </div>
  );
}

PostContainerList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object)
};

export default PostContainerList;
