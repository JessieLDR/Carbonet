import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Nav from './Nav';
import {BrowserRouter as Router, Routes, Switch, Route, Outlet, useNavigate} from 'react-router-dom';
import Landing from '../pages/Landing';
import CommunityPost from '../pages/CommunityPost';
import Community from '../pages/Community';
import HowItWorks from '../pages/HowItWork';
import About from '../pages/About';
import PlantsPage from '../pages/PlantsPage';
import { useState } from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import InfoIcon from '@mui/icons-material/Info';
import ForumIcon from '@mui/icons-material/Forum';
import MenuBookIcon from '@mui/icons-material/MenuBook';

const drawerWidth = 240;

export default function ClippedDrawer() {
  const [drawerOpen, setDrawerOpen] = React.useState(false)
  const handleOpenToggle = () => {
    setDrawerOpen(!drawerOpen)
  }

  let navigate = useNavigate()
  const handleCommunityClick = () => {
    let path = `/Community`
    handleOpenToggle()
    navigate(path)
  }
  const howWork = () => {
    let path = `/howItWorks`
    handleOpenToggle()
    navigate(path)
  }
  const about = () => {
    let path = `/about`
    handleOpenToggle()
    navigate(path)
  }
  const navBack = () => {
      let path = `/`
      navigate(path)
  }
  const navDashboard = () => {
    let path= `/dashboard`
    handleOpenToggle()
    navigate(path)
  }
  const handleLandingClick = () => {
    window.location.href = "https://carbonet-landing.netlify.app"
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Nav drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} handleOpenToggle={handleOpenToggle}></Nav>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
        open={drawerOpen}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            <ListItem key={'Landing'} disablePadding>
              <ListItemButton onClick={handleLandingClick}>
                <ListItemIcon>
                  <MenuBookIcon />
                </ListItemIcon>
                <ListItemText primary={'Home'} />
              </ListItemButton>
            </ListItem>
            <ListItem key={'Landing'} disablePadding>
              <ListItemButton onClick={navDashboard}>
                <ListItemIcon>
                   <DashboardIcon />
                </ListItemIcon>
              <ListItemText primary={'Dashboard'} />
              </ListItemButton>
            </ListItem>
            <ListItem key={'Community'} disablePadding>
              <ListItemButton onClick={handleCommunityClick}>
                <ListItemIcon>
                    <ForumIcon />
                </ListItemIcon>
                <ListItemText primary={'Community'} />
                </ListItemButton>
              </ListItem>
              <ListItem key={'Landing'} disablePadding>
                <ListItemButton onClick={about}>
                  <ListItemIcon>
                    <PrecisionManufacturingIcon />
                  </ListItemIcon>
                  <ListItemText primary={'About Us'} />
                </ListItemButton>
              </ListItem>
              <ListItem key={'Landing'} disablePadding>
                <ListItemButton onClick={howWork}>
                  <ListItemIcon>
                    <InfoIcon />
                  </ListItemIcon>
                  <ListItemText primary={'How It Works'} />
                </ListItemButton>
              </ListItem>
          </List>
          <Divider />
        </Box>
      </Drawer>
      <Box component="main" mt={10} sx={{ flexGrow: 1}}>
        <Outlet></Outlet>
        <Routes>  
            <Route path='/' element={<Landing></Landing>}/>
            <Route path='/communityPost' element={<CommunityPost></CommunityPost>}/>
            <Route path='/Community' element={<Community></Community>}/>
            <Route path='/howItWorks' element={<HowItWorks></HowItWorks>}/>
            <Route path='/about' element={<About></About>}/>
            <Route path='/Dashboard' element={<PlantsPage/>}></Route>
          </Routes>
      </Box>
    </Box>
  );
}