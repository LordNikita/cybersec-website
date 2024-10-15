import React from 'react';

// Background Image
import cyberpunkImage from '../images/cyberpunk1.jpg';

// Background Image
const backgroundImage = {
  backgroundImage: `url(${cyberpunkImage})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundColor: '#4C3F91',
};
const ImageContainer = {
  position: 'absolute',
  width: '100%',
  height: '1000px',
  ...backgroundImage,  
  zIndex: -1,
}

// Styles the Div which contains all the content on centre page
const ContentWrapperStyle = {
  position: 'absolute',
  top: '12.5vh',
  left: '14.8vw',
  
  width: '70vw',
  height: '80vh',

  //backgroundColor: '#E5D9F2',
  backgroundColor: '#E5D9F2',
  color: '#444444',
};

// Styles the content (text) inside the main page (div)
const ContentStyle = {
  position: 'relative',
  top: '0.25%',
  left: '2.5%',
  fontFamily: 'Lato, sans-serif',
  
};

const HeadingStyle = {
  color: '#333333',
  fontSize: '1.75rem',
  fontWeight: 'bold',
};

const BodyTextStyle = {
  position: 'relative',
  width: '85%',
  left: '5px',

  color: '#333333', 
  fontSize: '1.1rem',
  lineHeight: '1.5rem',
  letterSpacing: '0.015rem',
};

//             This website has been designed and built by Nikita Ukladchikov for a 
// UNSW course on Regulation of Cyber Security.
const About = () => {
  return (
    <>
      <div style={ImageContainer} />
      <div style={ContentWrapperStyle}>
        <div style={ContentStyle}>
          <h1 style={HeadingStyle}>About</h1>
          
          <p style={BodyTextStyle}>

          The content and materials provided on Cyberhub are intended solely 
          for educational and informational purposes and reflect the personal 
          views and interpretations of the author. Cyberhub does not, under 
          any circumstances, provide or constitute professional, legal, 
          financial, or cybersecurity advice in any capacity or in any jurisdiction. 
          <br/>
          <br/>
          No part of the information provided herein should be construed as 
          establishing any legal obligations, fiduciary relationships, 
          contractual relationships, solicitor-client relationships, or 
          agent-principal relationships. The author expressly disclaims any 
          liability for actions taken based on the content of this website, 
          and users are encouraged to seek professional guidance tailored to 
          their individual circumstances. 
          <br/>
          <br/>
          While efforts are made to ensure the accuracy of information, 
          the author assumes no responsibility for any errors, omissions, or 
          reliance on any material on Cyberhub. The use of Cyberhub and 
          its content is at the user's own risk, and neither the author nor any 
          affiliated parties will be held liable for any direct, indirect, or 
          consequential damages arising from its use.
          <br/>
          <br/>
          <br/>
          <strong>All content on this website is the intellectual property of Nikita Ukladchikov. 
          Unauthorized use or reproduction of this material is strictly 
          prohibited. © 2024 Nikita Ukladchikov. All rights reserved.</strong>
        </p>

        </div>

      </div>
    </>
  );
};

export default About;