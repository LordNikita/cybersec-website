import React from 'react';

// Materials UI imports
import { Avatar, Box, Link, Stack, Typography } from '@mui/material';

const SideBarStyle = {
  position: 'fixed',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  backgroundColor: 'blue',

  height: '100vh',
  width: '10vw',

  left: 0,
  top: 0,

  /*'@media (max-width: 1400px)': {
    width: '60px'
  },  
  '@media (max-width: 800px)': {
    width: '30px'
  },*/
};

const SideBar = () => {
  return (
    <Box sx={SideBarStyle}>
      SideBar
    </Box>
  );
};

export default SideBar;