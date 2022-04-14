import LoginPage from "./LoginPage";
import {BrowserRouter as Router, Routes, Switch, Route, Outlet} from 'react-router-dom';
import { Box } from "@mui/system";
import Nav from "../general/Nav";
import PlantsPage from "./PlantsPage";
import DidYouKnow from "../general/DidYouKnow";
import CheckList from "../general/Check";

const didyouknowsample = {
  'title': "This is a title",
  'body': "dmoafjdkalmklmfakdkf  naflkdnfkajdnfkandfnadlfnaldk f dnfakldnklfamdklfnadlk flk dfkdmfkdak"
}

const taskSample = [
  {'name': 'water'},
  {'name': 'b'},
  {'name': 'c'},
  {'name': 'd'}
]

const DashboardMain = () => {
    return (
        <Router>
          <div className="App">
          <Nav></Nav>
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', alignContent: 'space-between',
                  }}>
            <Box sx={{ width: '10%', minHeight:'600px', maxHeight:'1000px'}}>Content</Box>
            <Box sx={{ width: '60%', minHeight:'600px', maxHeight:'1000px'}}>
              <Outlet />
              <Routes>  
                <Route path='/login' element={<LoginPage></LoginPage>}></Route>
                <Route path='/' element={<PlantsPage></PlantsPage>}></Route>
              </Routes>
            </Box >
            <Box sx={{ width: '30%', minHeight:'600px', maxHeight:'1000px'}}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Box sx={{ height: '50%', width:'100%', border:1}}>
                    <CheckList tasks={taskSample} />
                </Box>
                <Box sx={{ height: '50%'}}>
                <DidYouKnow 
                    title={didyouknowsample.title}
                    body={didyouknowsample.body}
                />
                </Box>
                <Box sx={{border: 1, borderColor: 'red'}}>
                  Test
                </Box>
              </Box>
            </Box>
          </Box>
            
          </div>
        </Router>
      );
}

export default DashboardMain;