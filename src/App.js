import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import PostsContainer from "./components/PostsContainer/PostsContainer";
import SubredditsContainer from "./components/SubredditsContainer/SubredditsContainer";

function App() {
  return (
    <div className="container">
      <NavBar />
      <PostsContainer />
      <SubredditsContainer />
    </div>
  );
}

export default App;
