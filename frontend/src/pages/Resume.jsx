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

  //backgroundColor: '#E5D9F2',
  backgroundColor: '#E5D9F2',
  color: '#444444',
};

// Styles the content (text) inside the main page (div)
const ContentStyle = {
  position: 'relative',
  top: '1%',
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
  width: '92%',
  left: '5px',

  color: '#333333', 
  fontSize: '1.1rem',
  lineHeight: '0.5rem',
  letterSpacing: '0.015rem',
};

const ListElementStyle = {
  marginLeft: '-10px',
  marginBottom: '5px'

};

const About = () => {
  return (
    <>
      <div style={ImageContainer} />
      <div style={ContentWrapperStyle}>
        <div style={ContentStyle}>
          <h1 style={HeadingStyle}>Resume Overview (need job, contact me at nikita.uklad@gmail.com)</h1>
          
          <h3 style={BodyTextStyle}> Formal Education </h3>
          <ul>
            <li style={ListElementStyle}> UNSW Bachelor of Science (Computer Science) / Law</li>
          </ul>

          <h3 style={BodyTextStyle}> Languages </h3>
          <ul>
            <li style={ListElementStyle}> Fluent English </li>
            <li style={ListElementStyle}> Fluent Russian </li>
            <li style={ListElementStyle}> Basic Japanese (got some trophies on Duolingo) </li>
          </ul>

          <h3 style={BodyTextStyle}> Programming Languages </h3>
          <ul>
            <li style={ListElementStyle}> C </li>
            <li style={ListElementStyle}> Python </li>
            <li style={ListElementStyle}> Java </li>
            <li style={ListElementStyle}> HTML & CSS </li>
            <li style={ListElementStyle}> Javascript (+React) </li>
          </ul>

          <h3 style={BodyTextStyle}> Other Computer-based skills </h3>
          <ul>
            <li style={ListElementStyle}> Numerous completed software engineering projects (both backend & frontend) </li>
            <li style={ListElementStyle}> Understanding of software engineering team practices (including Git) </li>
            <li style={ListElementStyle}> Extensive experience using SQL (SQLite & PostgreSQL) </li>
            <li style={ListElementStyle}> Familiar with big data & related tools (Hadoop, HDFS, YARN, HBase, Spark etc.) </li>
            <li style={ListElementStyle}> Basic hands-on experience with 3d modelling </li>
            <li style={ListElementStyle}> Impressive video editing skills (e.g., have  made Call of Duty montages for YouTube) </li>
          </ul>          

          <h3 style={BodyTextStyle}> Hobbies </h3>
          <ul>
            <li style={ListElementStyle}> Long distance running </li>
            <li style={ListElementStyle}> Yoga </li>
            <li style={ListElementStyle}> Art (film, music, tv shows, video games) </li>
            <li style={ListElementStyle}> Complaining </li>            
            <li style={ListElementStyle}> Programming & Coding </li>
          </ul>       

          <h3 style={BodyTextStyle}> Life Goals </h3>
          <ul>
            <li style={ListElementStyle}> I want to be a house husband who 
              watches the kids while my wife works
            </li>
            <li style={ListElementStyle}> Also want to unbox a knife in Counter-Strike 2 </li>   
            <li style={ListElementStyle}> One threesome before I die as well </li>          
          </ul>                

        </div>
      </div>
    </>
  );
};

export default About;