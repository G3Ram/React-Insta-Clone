import React from "react";
import PostContainer from "./PostContainer";

function PostContainerList(props) {
  return (
    <div>
      {props.posts.map((post, index) => (
        <PostContainer key={index} post={post} />
      ))}
    </div>
  );
}

export default PostContainerList;
