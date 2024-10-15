import React from 'react';
import Button from '@mui/material/Button';

// Button style
const buttonStyle = {
  backgroundColor: '#FFA500', 
  color: '#000000', 
  '&:hover': {
    backgroundColor: '#FFA500',
    color: '#FFFFFF',
  },
};

const PageButton = (props) => {
  const { label, onClick  } = props;
  return (
    <Button variant="outlined" color="primary"  onClick={onClick} sx={buttonStyle}>
      {label}
    </Button>
  );
};

export default PageButton;