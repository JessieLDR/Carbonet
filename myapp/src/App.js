import Landing from ".//components/pages/Landing";

import {BrowserRouter as Router, Routes, Switch, Route, Outlet} from 'react-router-dom';
import Nav from ".//components/general/Nav";
import CommunityPost from ".//components/pages/CommunityPost";
import Community from ".//components/pages/Community";
import './index.css'
import ".//components/general/filter.js";
import HowItWorks from ".//components/pages/HowItWork";
import About from ".//components/pages/About.js";
import PlantsPage from "./components/pages/PlantsPage";
import VerticalNavBar from "./components/general/VerticalNavBar";
import ClippedDrawer from "./components/general/ClippedDrawer";

function App() {
  return (
    <Router>
      <div className="App">
        <ClippedDrawer></ClippedDrawer>
      </div>
    </Router>
  );
}

export default App;
