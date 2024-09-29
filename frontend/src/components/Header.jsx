import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

// Materials UI imports
import { Avatar, Box, Link, Stack, Typography } from '@mui/material';

const HeaderWrapperStyle = {
  position: 'fixed',

  backgroundColor: 'black',

  top: 0,
  left: 0,
  height: '12.5vh',
  width: '100vw',

  /*'@media (max-width: 1400px)': {
    width: 'calc(100vw - 60px)',
  },  
  '@media (max-width: 800px)': {
    width: 'calc(100vw - 30px)',
  },*/
};

const HeaderContentStyle = {
  position: 'fixed',
  display: 'flex', 
  flexDirection: 'column',
  justifyContent: 'space-between',

  left: '15%',
  height: '12.5vh',
  width: '70%',

  backgroundColor: 'blue',
};

const WebsiteNameStyle = {
  position: 'relative',
  top: '22.5%',
  left: '5%',

  fontSize: '1.65rem',
  color: 'white'

};

const LinksStackStyle = {
  position: 'relative',
  alignSelf: 'flex-start', 

  left: '2.5%',
  bottom: '7.5%',

};

const LinkStyle = {
  color: 'white',
  textDecoration: 'none',

  //width: '30px', // Keep the padding for better spacing

  paddingLeft: '100%', 
  paddingRight: '100%', 


  transition: 'background-color 0.3s, border 0.3s', // Smooth transition for hover
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Faint background color on hover
  },
};
const ActiveLinkStyle = {
  ...LinkStyle,
  borderBottom: '2px solid white',
};

const Header = (props) => {
  const { activeLink, setActiveLink } = props;

  return (
    <div style={HeaderWrapperStyle}>
      <Box sx={HeaderContentStyle}>

        <Typography variant="h6" sx={ WebsiteNameStyle }>
          Cyberhub
        </Typography>

        <Stack direction="row" spacing={10.75} sx={LinksStackStyle}>
          <RouterLink to="/home" style={{ textDecoration: 'none' }}>
            <Link 
              sx={activeLink === 'home' ? ActiveLinkStyle : LinkStyle}
              onClick={() => setActiveLink('home')}
            >
              Home
            </Link>
          </RouterLink>

          <RouterLink to="/about" style={{ textDecoration: 'none' }}>
            <Link
              sx={activeLink === 'about' ? ActiveLinkStyle : LinkStyle}
              onClick={() => setActiveLink('about')}
            >
              About
            </Link>
          </RouterLink>

          <RouterLink to="/contact" style={{ textDecoration: 'none' }}>
            <Link
              sx={activeLink === 'contact' ? ActiveLinkStyle : LinkStyle}
              onClick={() => setActiveLink('contact')}
            >
              Contact
            </Link>
          </RouterLink>
        </Stack>

      </Box>
    </div> 

  );
};

export default Header;