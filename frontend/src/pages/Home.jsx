import React from 'react';

import cyberpunkImage from '../images/cyberpunk3.jpg';
import { fontWeight, letterSpacing, lineHeight } from '@mui/system';

const backgroundImage = {
  backgroundImage: `url(${cyberpunkImage})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundColor: '#4C3F91',
};

const ImageContainer = {
  position: 'absolute',
  width: '100vw',
  height: '100vh',
  ...backgroundImage,  
  zIndex: -1,
}

const ContentWrapperStyle = {
  position: 'absolute',
  top: '12.5vh',
  left: '15vw',

  //borderLeft: '2px solid black',
  //borderRight: '2px solid black',

  height: '87.5vh',
  width: '70vw',

  backgroundColor: '#B0C4DE',
  color: '#444444',
};

const ContentStyle = {

  position: 'relative',
  top: '3.75%',
  left: '2.5%',
  fontFamily: 'Lato, sans-serif',
  
  //height: '97.7vh',
  //width: '90%',
  
  //backgroundColor: 'black',  
  //color: 'white',

  /*'@media (max-width: 1400px)': {
    width: '60px'
  },  
  '@media (max-width: 800px)': {
    width: '30px'
  },*/
};

const HeadingStyle = {
  color: '#333333',
  fontSize: '1.75rem',
  fontWeight: 'bold',
};

const BodyTextStyle = {
  position: 'relative',
  width: '92%',
  left: '5px',

  color: '#333333', 
  fontSize: '1.1rem',
  lineHeight: '1.5rem',
  letterSpacing: '0.015rem',
};

const SignatureStyle = {
  position: 'relative',
  left: '0px',

  fontStyle: 'italic',  
  fontSize: '0.9em',       
  color: '#333333',       
  marginTop: '30px',         
  display: 'block',          
};

const Home = () => {
  return (
    <>
      <div style={ImageContainer} />
      <div style={ContentWrapperStyle}>
        <div style={ContentStyle}>
          <h1 style={HeadingStyle}>Cyber Site: Navigating the Future of Cybersecurity</h1>
          <p style={BodyTextStyle}>
            A wise individual once said: "Knowledge is power." In the context of the 
            dynamic and vital field of cybersecurity, such words resonate with profound 
            truth and clarity. At Cyberhub, we strive to provide the most relevant, 
            insightful, and authoritative educational content on all aspects cybersecurity.
            <br/>
            <br/>
            Whether you're a seasoned expert or just starting your journey in
            this wonderful profession, Cyberhub offers a distinctive experience 
            tailored to your needs. Our carefully curated articles cover a diverse array
            of topics — and importantly, enthusiastically engage with related
            fields such as engineering, psychology and law.
            <br/>
            <br/>
            Join our vibrant community of learners today to connect with 
            like-minded individuals and enhance your skills. Together, we will 
            adeptly navigate the complexities and seize the opportunities that 
            define a secure digital future."

            <span style={SignatureStyle}>Signed, Nikita Ukladchikov<br/>CEO, Cyberhub</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;