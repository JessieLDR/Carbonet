import React from 'react';
import profile from "../images/profile.png";
import Avatar from '@mui/material/Avatar';
import ins from "../images/instagram.png";
import fb from "../images/facebook.png";
import Post from "../components/Post.js";
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';

function CommunityPost(props) {
    return (
      <div>
        <Box sx={{display: 'flex', flexDirection:'row'}}>
        <Box sx={{width: '60%'}}>
            <div className="left">
              <Post sx={{ padding: 10}} ></Post>
              <Post sx={{ padding: 10}} ></Post>
            </div>
        </Box>
        <Box sx={{width: '40%'}}>
            <div className="profile">
                <Avatar 
                alt="Golanginya" 
                src={profile} 
                sx={ {width: 200, height: 200}}
                />
                <p>@Golanginya</p>
                <div className="linkMedia"></div>
                <img className="blogPhoto" src={ins}></img>
                <img className="blogPhoto" src={fb}></img>
              </div>
        </Box>
        </Box>
      </div>
    )
}

export default CommunityPost;