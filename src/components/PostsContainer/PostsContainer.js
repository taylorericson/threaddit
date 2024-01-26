import React from "react";
import styles from "./PostsContainer.module.css";

const PostsContainer = () => {
  return (
    <div className={styles.container}>
      <h2>Posts</h2>
      <p>fetched posts go here</p>
    </div>
  );
};

export default PostsContainer;
