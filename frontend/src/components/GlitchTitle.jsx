import React from 'react';
import '../styles/GlitchTitle.scss';
//import '../styles/GlitchTitle2.scss';
import { fontWeight } from '@mui/system';

// Remember to run:
// npx sass GlitchTitle.scss GlitchTitle.css 
// inside src/styles/
// if you want the website title to work

const glitchTitleStyle = {
    position: 'absolute',
    zIndex: '10',
    //fontWeight: 'bold',
  
    fontSize: '2.35rem',
    fontFamily: 'Orbitron',

    color: '#FFFFFF',
    letterSpacing: '0.1rem',
  
    textShadow: '1px 1px 10px rgba(0, 0, 0, 0.3)',   
  };

const GlitchTitle = () => {
  return (
    <div className="glitch" style={glitchTitleStyle} data-text="Cyberhub">
      Cyberhub
    </div>
  );
};

export default GlitchTitle;