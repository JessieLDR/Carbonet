import Landing from "./pages/Landing";

import {BrowserRouter as Router, Routes, Switch, Route, Outlet} from 'react-router-dom';
import Nav from "./components/Nav";
import CommunityPost from "./pages/CommunityPost";
import './index.css'
import "./components/filter.js";
function App() {
  return (
    <Router>
      <div className="App">
        <Nav></Nav>
        <Outlet />
          <Routes>  
            <Route path='/' element={<Landing></Landing>}/>
            <Route path='/communityPost' element={<CommunityPost></CommunityPost>}/>
          </Routes>
      </div>
    </Router>
  );
}

export default App;
