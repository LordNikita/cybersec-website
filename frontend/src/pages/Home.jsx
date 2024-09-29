import React from 'react';

const ContentWrapperStyle = {
  position: 'absolute',
  top: '15vh',
  left: '10vw',

  height: '85vh',
  width: '90vw',

};

const ContentStyle = {

  //top: '10%',
  //left: '10%',
  
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

const Home = () => {
  return (
    <div style={ContentWrapperStyle}>

      <div style={ContentStyle}>
        <h1>Home Page</h1>
        <p>Content</p>
      </div>
      
    </div>

  );
};

export default Home;