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

  useEffect(() => {
    dispatch(fetchSubreddits());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <h2>Popular Subreddits</h2>
      <ul>
        {subreddits.map((sub, id) => {
          return (
            <Subreddit
              id={id}
              name={sub.display_name_prefixed}
              icon={sub.icon_img}
            />
            // <li key={id} className={styles.subreddit}>
            //   {sub.display_name_prefixed}
            // </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SubredditsContainer;
