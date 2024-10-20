import React from 'react';
import Button from '@mui/material/Button';
import { fontSize, width } from '@mui/system';

// Button style
const buttonStyle = {
  minWidth: '40px',

  backgroundColor: '#FFA500', 
  color: '#000000', 
  //fontWeight: 300,
  fontFamily: 'Roboto, sans-serif',
  fontSize: '0.95rem',
  '&:hover': {
    backgroundColor: '#FFA500',
    color: '#FFFFFF',
  },

  '&.Mui-disabled': {
    backgroundColor: '#444444',
    color: '#E0FFFF',
  },
};

const PageButton = (props) => {
  const { label, onClick, width, disabled } = props;
  return (
    <Button variant="outlined" color="primary"  onClick={onClick} size="small" sx={{...buttonStyle, width}} disabled={disabled}>
      {label}
    </Button>
  );
};

export default PageButton;