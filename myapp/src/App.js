import Landing from "./pages/Landing";

import {BrowserRouter as Router, Routes, Switch, Route, Outlet} from 'react-router-dom';
import Nav from "./components/Nav";
import CommunityPost from "./pages/CommunityPost";
import './index.css'
import "./components/filter.js";
function App() {
  return (
<<<<<<< HEAD
    <Router>
      <div className="App">
        <Nav></Nav>
        <Outlet />
          <Routes>  
            <Route path='/' element={<Landing></Landing>}/>
            <Route path='/communityPost' element={<CommunityPost></CommunityPost>}/>
          </Routes>
=======
  <div>
  <div>
    <div className="header">
        <h2 className="community">Community</h2>
        <div className="how
      ">How it works</div>
        <div className="about">About us</div>
    </div>
    {/* blog card */}
    <div className="content">
    <div style={{ padding: 40 }} >
        <Grid container spacing={20} justify="center">
          <div className="left">
            <filter></filter>
            <Post></Post>
            <Post></Post>
          </div>
        </Grid>
    </div>
      <div className="profile">
            <Avatar 
            alt="Golanginya" 
            src={profile} 
            sx={ {width: 200, height: 200}}
            />
            <p>@Golanginya</p>
            <div className="linkMedia">
            <img className="blogPhoto" src={ins}></img>
            <img className="blogPhoto" src={fb}></img>
            </div>

>>>>>>> 4f13e554a0f0afddcd0db128a2419336146ce159
      </div>
    </Router>
  );
}

export default App;
