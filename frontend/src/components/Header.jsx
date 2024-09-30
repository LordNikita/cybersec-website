import React from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';

// Materials UI imports
import { Avatar, Box, Link, Stack, Typography } from '@mui/material';
import { fontWeight } from '@mui/system';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const HeaderWrapperStyle = {
  position: 'fixed',

  top: 0,
  left: 0,
  height: '12.5vh',
  width: '100vw',
  zIndex: 10,

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
  width: '70vw',

  backgroundColor: '#4C3F91',
};

const WebsiteNameStyle = {
  position: 'relative',
  top: '13.75%',
  left: '3.5%',

  fontSize: '2rem',
  fontFamily: 'Lato, sans-serif',
  //fontWeight: 'bold',
  color: '#FFFFFF'

};

const LinksStackStyle = {
  position: 'relative',
  alignSelf: 'flex-start', 

  left: '2.5%',
  bottom: '7.5%',
  fontSize: '1.15rem',

};

const LinkWrapper = {
  width: '120px', 
  textAlign: 'center',
  height: '25px',

  display: 'flex', 
  flexDirection: 'column',
  justifyContent: 'flex-start', 


  transition: 'background-color 0.3s, border 0.3s',
  '&:hover': {
    backgroundColor: '#CDC1FF',
  },
}
const ActiveLinkWrapper = {
  ...LinkWrapper,
  borderBottom: '2px solid #FFFFFF',
}

const LinkWrapperLarge = {
  ...LinkWrapper,
  width: '200px',
}
const ActiveLinkWrapperLarge = {
  ...ActiveLinkWrapper,
  width: '200px',
}

const LinkStyle = {
  color: '#FFFFFF',
  textDecoration: 'none',

};

const DarkModeWrapper = {
  position: 'absolute',
  right: '2%',
  top: '18%',

};

const Header = (props) => {
  const { activeLink, setActiveLink, isDarkMode, toggleDarkMode } = props;

  const location = useLocation();

  React.useEffect(() => {
    const currentPath = location.pathname.split('/')[1];
    setActiveLink(currentPath);
    console.log(currentPath);
  }, [location.pathname]);

  return (
    <div style={HeaderWrapperStyle}>
      <Box sx={HeaderContentStyle}>

        <Typography variant="h6" sx={ WebsiteNameStyle }>
          Cyber Site
        </Typography>

        <div style={DarkModeWrapper}>
          <DarkModeSwitch checked={isDarkMode} onChange={toggleDarkMode} size={45} moonColor={'yellow'} sunColor={'white'} />
        </div>

        <Stack direction="row" spacing={0} sx={LinksStackStyle}>

          <Box sx={activeLink === 'home' ? ActiveLinkWrapper : LinkWrapper}>
            <RouterLink to="/home" style={{ textDecoration: 'none' }}>
              <Link sx={LinkStyle}>
                Home
              </Link>
            </RouterLink>
          </Box>

          <Box sx={activeLink === 'articles' ? ActiveLinkWrapper : LinkWrapper}>
            <RouterLink to="/articles" style={{ textDecoration: 'none' }}>
              <Link sx={LinkStyle}>
                Articles
              </Link>
            </RouterLink>
          </Box>

          <Box sx={activeLink === 'tags' ? ActiveLinkWrapper : LinkWrapper}>
            <RouterLink to="/tags" style={{ textDecoration: 'none' }}>
              <Link sx={LinkStyle}>
                Tags
              </Link>
            </RouterLink>
          </Box>

          <Box sx={activeLink === 'none' ? ActiveLinkWrapperLarge : LinkWrapperLarge}>
            <RouterLink to="/random" style={{ textDecoration: 'none' }}>
              <Link sx={LinkStyle}>
                Random Article
              </Link>
            </RouterLink>
          </Box>

          <Box sx={activeLink === 'about' ? ActiveLinkWrapper : LinkWrapper}>
            <RouterLink to="/about" style={{ textDecoration: 'none' }}>
              <Link sx={LinkStyle}>
                About
              </Link>
            </RouterLink>
          </Box>

        </Stack>

      </Box>
    </div> 

  );
};

export default Header;