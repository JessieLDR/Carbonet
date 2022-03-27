import LoginPage from "./LoginPage";
import {BrowserRouter as Router, Routes, Switch, Route, Outlet} from 'react-router-dom';
import PlantList from "./PlantList";
import MyButton from "../general/MyButton";
import Nav from "../general/Nav";
import { ProgressBar } from "react-bootstrap";

var plant = [
    {'name': 'apple', 'status': 'in progress', 'emission': 90, 'progress': 10},
    {'name': 'banana', 'status': 'in progress', 'emission': 40, 'progress': 20},
    {'name': 'grape', 'status': 'in progress', 'emission': 30, 'progress': 60}
  ]
  

const DashboardMain = () => {
    return (
        <Router>
          <div className="App">
          <Nav></Nav>
          <Outlet />
            <Routes>  
              <Route path='/login' element={<LoginPage></LoginPage>}></Route>
            </Routes>
            <PlantList plants={plant} />
            <MyButton name='Add a plant'/>
          </div>
        </Router>
      );
}

export default DashboardMain;