import React from 'react';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { getRandomArticleNumber } from '../utils/helpers.js'; 
import GlitchTitle from './GlitchTitle.jsx';

// Materials UI imports
import { Avatar, Box, Link, Stack, Typography } from '@mui/material';
import { fontFamily, fontWeight, letterSpacing } from '@mui/system';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const HeaderWrapperStyle = {
  position: 'fixed',

  top: 0,
  left: 0,
  height: '12.5vh',
  width: '100vw',
  zIndex: 10,
};

const WebsiteNameStyle = {
  position: 'relative',
  top: '15%',
  left: '3.5%',
};
const TitleFirstStyle = {
  display: 'inline-block',
  fontFamily: 'Arial',
  fontWeight: 'bold',
  letterSpacing: '-0.05rem',
  color: '#FFFFFF',

  fontSize: '2.35rem',
  fontFamily: 'Lato',
};
const TitleSecondStyle = {
  fontFamily: 'Arial',
  fontWeight: 'bold',
  background: '#FF9900',
  color: '#000000',

  padding: '0 5px 5px 5px',
  borderRadius: '4px',
  letterSpacing: '-0.05rem',
  marginLeft: '5px',

  fontSize: '2.35rem',
  fontFamily: 'Lato',
};

const LinksStackStyle = {
  position: 'relative',
  alignSelf: 'flex-start', 

  left: '2.5%',
  bottom: '7.5%',
  fontSize: '1.15rem',
  letterSpacing: '0.04rem'
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
  fontFamily: 'Lato',
};

const DarkModeWrapper = {
  position: 'absolute',
  right: '2%',
  top: '24%',

};

const Header = (props) => {
  const { activeLink, setActiveLink, isDarkMode, toggleDarkMode } = props;
  const location = useLocation();

  React.useEffect(() => {
    const currentPath = location.pathname.split('/')[1];
    setActiveLink(currentPath);
  }, [location.pathname]);

  const handleRandomArticleClick = () => {
    const currentArticleNum = parseInt(location.pathname.split('/').pop());
    let articleNum;
    
    // To improve UX experience, we ensure that a user clicking on the random
    // article does not get redirected to the article he is already on
    do {
      articleNum = getRandomArticleNumber(10);
    } while (articleNum === currentArticleNum); 
  
    return `/article/${articleNum}`;
  };

  const isTagsPath = location.pathname === '/tags';
  const HeaderContentStyle = {
    position: 'fixed',
    display: 'flex', 
    flexDirection: 'column',
    justifyContent: 'space-between',
  
    left: '15%',
    height: '15vh',
    width: '70vw',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.5)',
  

    backgroundColor: isTagsPath ? 'transparent' : (isDarkMode ? '#1B1B1B' : '#4C3F91'),

    border: isTagsPath ? '0.5px solid white' : 'none',
    borderTop: 'none',
  };  

  return (
    <div style={HeaderWrapperStyle}>
      <Box sx={HeaderContentStyle}>

        <Typography variant="h6" sx={WebsiteNameStyle}>
          {isDarkMode ? (
            <>
              <span style={TitleFirstStyle}>Cyber</span>
              <span style={TitleSecondStyle}>hub</span>
            </>
          ) : (
          <><GlitchTitle/></>
          )}
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
            <RouterLink to={handleRandomArticleClick()} style={{ textDecoration: 'none' }}>
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