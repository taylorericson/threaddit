import React from "react";
import styles from "./PostsContainer.module.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts, selectPosts } from "../../features/posts/postsSlice";
import Post from "../../features/posts/Post";

const PostsContainer = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      {posts.map((post, id) => (
        <Post key={id} {...post} />
      ))}
    </div>
  );
};

export default PostsContainer;
