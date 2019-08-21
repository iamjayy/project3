import React from "react";
import Posts from "../exportPosts/Posts";

const Home = () => (
  <div>
    <div className="container fluid">
      <h2>Home</h2>
      <p className="lead">react front end</p>
    </div>

    <div className="container">
    <Posts />
    </div>
  </div>
);

export default Home;
