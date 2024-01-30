import React from "react";

const Subreddit = ({ name, icon }) => {
  return (
    <li>
      <button>{name}</button>
    </li>
  );
};

export default Subreddit;
