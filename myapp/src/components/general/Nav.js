import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom";
import zIndex from '@mui/material/styles/zIndex';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function Nav(props) {
  const drawerOpen = props.drawerOpen
  const setDrawerOpen = props.setDrawerOpen
  const handleOpenToggle = props.handleOpenToggle
  
  let navigate = useNavigate()
    const navPost = () => {
        let path = `communityPost`
        navigate(path)
    }
    const howWork = () => {
      let path = `/howItWorks`
      navigate(path)
    }
    const about = () => {
      let path = `/about`
      navigate(path)
    }
    const navBack = () => {
        let path = `/`
        navigate(path)
    }
    const navDashboard = () => {
      let path= `/dashboard`
      navigate(path)
    }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="relative" 
      style={{backgroundColor: 'white'}}
      position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            onClick={navBack}
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            fontFamily='Open Sans'
            fontSize={38}
            fontWeight='bold'
            style={{color:'#7C8C64'}}
          >
            Carbonet
          </Typography>
          <Typography
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            onClick={navDashboard}
            fontFamily='Open Sans'
            fontSize={24}
            style={{color:'#7C8C64'}}
          >
            Dashboard
          </Typography>
          <Typography
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            onClick={howWork}
            fontFamily='Open Sans'
            fontSize={24}
            style={{color:'#7C8C64'}}
          >
            How it works
          </Typography>
          <Typography
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            onClick={about}
            fontFamily='Open Sans'
            fontSize={24}
            style={{color:'#7C8C64'}}
          >
            About Us
          </Typography>
          <Typography
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            onClick={handleOpenToggle}
            fontFamily='Open Sans'
            fontSize={24}
            style={{color:'#7C8C64'}}
          >
            Additional Options
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}