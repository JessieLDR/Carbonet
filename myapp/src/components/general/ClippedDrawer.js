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
import {BrowserRouter as Router, Routes, Switch, Route, Outlet} from 'react-router-dom';
import Landing from '../pages/Landing';
import CommunityPost from '../pages/CommunityPost';
import Community from '../pages/Community';
import HowItWorks from '../pages/HowItWork';
import About from '../pages/About';
import PlantsPage from '../pages/PlantsPage';
import { useState } from 'react';

const drawerWidth = 240;

export default function ClippedDrawer() {
  const [drawerOpen, setDrawerOpen] = React.useState(false)
  const handleOpenToggle = () => {
    setDrawerOpen(!drawerOpen)
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Nav drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} handleOpenToggle={handleOpenToggle}></Nav>
      <Drawer
        // variant="permanent"
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
            {['Community', 'Landing'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          {/* <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List> */}
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
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