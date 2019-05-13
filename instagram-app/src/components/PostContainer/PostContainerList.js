import React from "react";
import PostContainer from "./PostContainer";
import PropTypes from "prop-types";

function PostContainerList(props) {
  props.posts.map(post =>
    console.log("********* POST CONTINER LIST **************" + post.likes)
  );

  return (
    <div>
      {props.posts.map((post, index) => (
        <PostContainer
          key={index}
          post={post}
          onSubmit={props.onSubmit}
          postId={index}
          updateLikes={props.updateLikes}
        />
      ))}
    </div>
  );
}

PostContainerList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object)
};

export default PostContainerList;
