import LoginPage from "./LoginPage";
import {BrowserRouter as Router, Routes, Switch, Route, Outlet} from 'react-router-dom';
import Nav from "../general/Nav";
import PlantsPage from "./PlantsPage";

const DashboardMain = () => {
    return (
        <Router>
          <div className="App">
          <Nav></Nav>
          <Outlet />
            <Routes>  
              <Route path='/login' element={<LoginPage></LoginPage>}></Route>
              <Route path='/' element={<PlantsPage></PlantsPage>}></Route>
            </Routes>
          </div>
        </Router>
      );
}

export default DashboardMain;