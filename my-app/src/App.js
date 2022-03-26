import logo from './logo.svg';
import './App.css';
import LoginPage from './components/LoginPage';
import Checklist from './components/general/Checklist';
import {BrowserRouter as Router, Routes, Switch, Route, Outlet} from 'react-router-dom'
import NavBar from './components/general/NavBar';
import MyButton from './components/general/MyButton';
import PlantList from './components/Dashboard/PlantList';
import Nav from './components/general/Nav';

var plant = [
  {'name': 'apple'},
  {'name': 'banana'},
  {'name': 'grape'}
]

function App() {
  return (
    <Router>
      <div className="App">
      <NavBar>  
      </NavBar>
      <Nav />
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

export default App;
