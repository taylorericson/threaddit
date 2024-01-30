import React, { useEffect, useState } from "react";
import styles from "./SubredditsContainer.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  selectSubreddits,
  fetchSubreddits,
} from "../../features/subreddits/subredditsSlice";
import Subreddit from "../../features/subreddits/Subreddit";

const SubredditsContainer = () => {
  const dispatch = useDispatch();
  const subreddits = useSelector(selectSubreddits);
  const defaultIcon =
    "https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_reddit-512.png";

  useEffect(() => {
    dispatch(fetchSubreddits());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <h2>Popular Subreddits</h2>
      <ul>
        {subreddits.slice(0, 14).map((sub, id) => {
          return (
            <Subreddit
              key={id}
              name={sub.display_name_prefixed}
              icon={sub.icon_img || defaultIcon}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default SubredditsContainer;
