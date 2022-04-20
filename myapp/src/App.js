import Landing from "./pages/Landing";

import {BrowserRouter as Router, Routes, Switch, Route, Outlet} from 'react-router-dom';
import Nav from "./components/Nav";
import CommunityPost from "./pages/CommunityPost";
import Community from "./pages/Community";
import './index.css'
import "./components/filter.js";
import HowItWorks from "./pages/HowItWork";
import About from "./pages/About.js";
function App() {
  return (
    <Router>
      <div className="App">
        <Nav></Nav>
        <Outlet />
          <Routes>  
            <Route path='/' element={<Landing></Landing>}/>
            <Route path='/communityPost' element={<CommunityPost></CommunityPost>}/>
            <Route path='/Community' element={<Community></Community>}/>
            <Route path='/howItWorks' element={<HowItWorks></HowItWorks>}/>
            <Route path='/about' element={<About></About>}/>
          </Routes>
      </div>
    </Router>
  );
}

export default App;
