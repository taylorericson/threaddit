import React from "react";
import styles from "./Post.module.css";

const Post = ({
  author,
  subreddit,
  time,
  title,
  text,
  url,
  numOfComments,
  id,
}) => {
  return (
    <div className={styles.postContainer}>
      <div className={styles.postHeader}>
        <h2>r/{subreddit}</h2>
        <p>{title}</p>
      </div>
      <div className={styles.postBody}>
        {url.includes(".jpg") || url.includes(".jpeg") ? (
          <img src={url} alt={title} />
        ) : (
          <a href={url} target="_blank" rel="noreferrer">
            <p>{url}</p>
          </a>
        )}
      </div>
      <div className={styles.postFooter}>
        <p>u/{author}</p>
        <p>Posted {time}? hours ago</p>
        <p>comments{numOfComments}</p>
      </div>
    </div>
  );
};

export default Post;
