import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import { useNavigate } from "react-router-dom";
import { purple, red } from '@mui/material/colors';

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
  let navigate = useNavigate()
    const navLogin = () => {
        let path = `login`
        navigate(path)
    }
    const navBack = () => {
        let path = `/`
        navigate(path)
    }
  const primary = red[500];

  return (
    <Box sx={{ flexGrow: 1, mb: 0.5 }}>
      <AppBar position="static" style={{backgroundColor: 'white'}}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
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
            onClick={navBack}
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
            onClick={navLogin}
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
            onClick={navBack}
            fontFamily='Open Sans'
            fontSize={24}
            style={{color:'#7C8C64'}}
          >
            About Us
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}