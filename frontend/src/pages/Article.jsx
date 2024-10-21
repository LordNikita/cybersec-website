import React from 'react';
import { useParams } from 'react-router-dom';
import articles from '../data/articles.json';
import ReactMarkdown from 'react-markdown';

// Background Image
import cyberpunkImage from '../images/cyberpunk6.jpg';
import { letterSpacing } from '@mui/system';

// Background Image
const backgroundImage = {
  backgroundImage: `url(${cyberpunkImage})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundColor: '#4C3F91',
};
const ImageContainer = {
  position: 'fixed',
  width: '100%',
  height: '100vh',
  ...backgroundImage,  
  zIndex: -1,
}

// Styles the Div which contains all the content on centre page
const ContentWrapperStyle = {
  position: 'absolute',
  top: '15vh',
  left: '14.8vw',

  //height: '2200px',
  width: '70vw',
  paddingBottom: '25px',

  backgroundColor: '#CDC1FF',
  color: '#444444',
};

// Styles the content (text) inside the main page (div)
const ContentStyle = {
  position: 'relative',
  top: '0.25%',
  left: '2.5%',
  width: '94%',

  lineHeight: '1.4rem',
  letterSpacing: '0.0075rem',
  fontFamily: 'Lato, sans-serif',
};


const Article = () => {
  const { id } = useParams();
  const article = articles.find(article => article.id === parseInt(id));
  
  // Since we use ReactMarkdown to display our content and try to break it up
  // into blocks in the json file, we can create a variable to join this content.
  const formattedContent = article.content.join("\n");
  const formattedSources = article.sources.join("\n");

  return (
    <>
      <div style={ImageContainer} />
      <div style={ContentWrapperStyle}>
        <div style={ContentStyle}>
          <h1>{article.title}</h1>
          <ReactMarkdown>{formattedContent}</ReactMarkdown>
          <ReactMarkdown>{formattedSources}</ReactMarkdown>
          <span> Article Tags: {article.tags.map(tag => `[${tag}]`).join(' ')} </span>

        </div>
      </div>
    </>
  );
};

export default Article;