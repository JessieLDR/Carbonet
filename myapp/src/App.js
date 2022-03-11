import Landing from "./pages/Landing";
import blog from "./images/blog.png";
import React from 'react';
import Navbar from './components/NavBar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './index.css'
function App() {
  return (
    <div>
<div>
    <div className="header">
      <h2 className="community">Community</h2>
      <div className="how
    ">How it works</div>
      <div className="about">About us</div>
    </div>
{/* blog card */}
<div className="card">
<div className="blog-post-hero blog-post-hero--short">
  <img className="blogPhoto" src={blog}></img>
</div>
<div className="blog__title blog__title--small">
  <h2>Event Partner Finder</h2>
</div>
<div className="blog__author">
  <p className="authorName">
  @Golanginya
  </p>
  <p className="blog__author-title">12 November 2020 19:35</p>
</div>

<dfiv className="blog-content"> 
  <p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Ornare rutrum amet, a nunc mi lacinia in iaculis. 
  Pharetra ut integer nibh urna. Placerat ut adipiscing nulla lectus vulputate massa, 
  fscelerisque. Netus nisl nulla placerat dignissim ipsum arcu.
  </p>
</dfiv>
<div className="blog__read-more">
  <a>Read More</a>
</div>

</div>
<div className="card">
<div className="blog__author">
  <p className="authorName">
  @unkind
  </p>
  <p className="blog__author-title">12 November 2020 19:35</p>
</div>
<div className="blog-content"> 
  <p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Ornare rutrum amet, a nunc mi lacinia in iaculis. 
  Pharetra ut integer nibh urna. Placerat ut adipiscing nulla lectus vulputate massa, 
  fscelerisque. Netus nisl nulla placerat dignissim ipsum arcu.
  </p>
</div>
</div>
</div>
      
</div> 
  );
}

export default App;
