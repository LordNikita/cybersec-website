// OutlinedArrowButton.jsx
import React from 'react';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const ButtonStyle = {
    backgroundColor: '#FFA500', 
    color: '#000000', 
    '&:hover': {
      backgroundColor: '#FFA500',
      color: '#FFFFFF',
    },
};


const ArticleButton = (props) => {
  const { label, navigateTo  } = props;
  return (
    <Button variant="outlined" color="primary" onClick={navigateTo} endIcon={<ArrowForwardIcon />} sx={ButtonStyle}>
      {label}
    </Button>
  );
};

export default ArticleButton;