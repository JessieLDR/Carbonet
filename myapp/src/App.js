import Landing from ".//components/pages/Landing";

import {BrowserRouter as Router, Routes, Switch, Route, Outlet} from 'react-router-dom';
import Nav from ".//components/general/Nav";
import CommunityPost from ".//components/pages/CommunityPost";
import Community from ".//components/pages/Community";
import './index.css'
import ".//components/general/filter.js";
import HowItWorks from ".//components/pages/HowItWork";
import About from ".//components/pages/About.js";
import DashboardMain from "./components/pages/DashboardMain";
import PlantsPage from "./components/pages/PlantsPage";

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
            <Route path='/Dashboard' element={<PlantsPage/>}></Route>
          </Routes>
      </div>
    </Router>
  );
}

export default App;
