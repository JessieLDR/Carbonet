import LoginPage from "./LoginPage";
import {BrowserRouter as Router, Routes, Switch, Route, Outlet} from 'react-router-dom';
import { Box } from "@mui/system";
import Nav from "../general/Nav";
import PlantsPage from "./PlantsPage";


const DashboardMain = () => {
    return (
        <Router>
          <div className="App">
          <Nav></Nav>
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', alignContent: 'space-between',
                  }}>
            <Box sx={{ width: '10%', minHeight:'600px', maxHeight:'1000px'}}>
              SideBarWIP
            </Box>
            <Box sx={{ width: '90%', minHeight:'600px', maxHeight:'1000px'}}>
              <Outlet />
              <Routes>  
                <Route path='/login' element={<LoginPage></LoginPage>}></Route>
                <Route path='/' element={<PlantsPage></PlantsPage>}></Route>
              </Routes>
            </Box >
          </Box>
          </div>
        </Router>
      );
}
export default DashboardMain;