import React from 'react';

// Background Image
import cyberpunkImage from '../images/cyberpunk3.jpg';

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
  height: '100%',
  ...backgroundImage,  
  zIndex: -1,
}

// Styles the Div which contains all the content on centre page
const ContentWrapperStyle = {
  position: 'absolute',
  top: '15vh',
  left: '15vw',

  width: '70vw',
  paddingBottom: '10px',

  backgroundColor: '#CDC1FF',
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
  marginBottom: '-4px',
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

// A line which seperates the two main pieces of text
const SeparatorStyle = {
  marginTop: '30px',
  marginBottom: '30px',
  border: 'none',
  height: '2px',
  backgroundColor: 'rgba(0, 0, 0, 0.2)',
  width: '90%',
  marginLeft: '2.5%',
};

const ReviewStyle = {
  position: 'relative',
  width: '92%',
  left: '5px',

  lineHeight: '1.3rem',
  letterSpacing: '0.005rem',
  marginBottom: '20px',

  color: '#333333', 
  fontSize: '1.1rem',
  fontStyle: 'italic',
  fontFamily: 'Roboto',
};

const Home = () => {
  return (
    <>
      <div style={ImageContainer} />
      <div style={ContentWrapperStyle}>
        <div style={ContentStyle}>
          <h1 style={HeadingStyle}>Cyberhub: Navigating the Future of Cybersecurity</h1>
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

          <hr style={SeparatorStyle} />

          <div>
            <h1 style={HeadingStyle}>Expert Testimony</h1>
            <p style={ReviewStyle}>
              "An absolutely essential product, there are simply no other alternatives currently on the market" <br/>
              <em>- Forbes</em>
            </p>
            <p style={ReviewStyle}>
              "[A]n extremely cost-effective and useful resource for any cybersecurity professional" <br/>
              <em>- Wired</em>
            </p>
            <p style={ReviewStyle}>
              "There's no other way to phrase it, Cyberhub is just a brilliant product all around the board" <br/>
              <em>- TechRadar</em>
            </p>
          </div>

        </div>
      </div>
    </>
  );
};

export default Home;