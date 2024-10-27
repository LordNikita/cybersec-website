import React from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import articles from '../data/articles.json';

// Background Images
import cyberpunkImage1 from '../images/cyberpunk6.jpg';
import cyberpunkImage2 from '../images/cyberpunk2.jpg';
import cyberpunkImage3 from '../images/cyberpunk8.jpg';
import cyberpunkImage4 from '../images/cyberpunk4.jpg';
import cyberpunkImage5 from '../images/cyberpunk20.jpg';
import cyberpunkImage6 from '../images/cyberpunk21.jpg';
import cyberpunkImage7 from '../images/cyberpunk22.jpg';
import { textTransform } from '@mui/system';
//import cyberpunkImage8 from '../images/cyberpunk6.jpg';

const backgroundImageArray = [
  cyberpunkImage1, 
  cyberpunkImage2, 
  cyberpunkImage3,
  cyberpunkImage4, 
  cyberpunkImage5, 
  cyberpunkImage6,
  cyberpunkImage7,
];

const ImageContainerStyle  = (currentBackgroundImage) => ({
  position: 'fixed',
  width: '100%',
  // Height is tied to vh in parent element so cannot set it to %.
  height: '100vh', 
  zIndex: -1,

  backgroundImage: `url(${currentBackgroundImage})`,
  backgroundColor: '#4C3F91',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
});

// Styles the Div which contains all the content on centre page
const ContentWrapperStyle = {
  position: 'absolute',
  top: '15vh',
  left: '15%',

  minHeight: '600px',
  width: '70vw',
  paddingBottom: '35px',

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

const customImageStyle = {
  maxWidth: '50%',
  marginTop: '2%',
  marginBottom: '2%',
  objectFit: 'contain',

  borderRadius: '10px',
  border: '2px solid #FFA500'
};

const headlineStyle = {
  fontSize: '2.5rem',
  fontWeight: 'bold',
  marginTop: '3%',
  marginBottom: '3%',

  textTransform: 'uppercase',
  letterSpacing: '0.1rem',
  lineHeight: '1.1',

  color: '#4C3F91',
};

const SeparatorStyle = {
  position: 'relative',
  left: "calc(-2.65% + 2.5%)",
  width: 'calc(106.4% - 7.5%)',
  borderBottom: '2px solid rgba(76, 63, 145, 0.5)',
}

const TagTitleStyle = {
  position: 'relative',
  top: '10px',
  marginRight: '8px', 

  color: '#2C2C2C',
  fontWeight: 'Bold',   
  fontSize: '1.15rem',    
  letterSpacing: '0.5px'
};
const TagStyle = {
  position: 'relative',
  top: '11px',
  backgroundColor: '#4C3F91', 
  color: '#ECEAF7     ', 
  padding: '2px 8px', 
  marginRight: '5px', 
  borderRadius: '12px', 
  fontSize: '0.975rem',
};

const Article = () => {
  const { id } = useParams();
  const article = articles.find(article => article.id === parseInt(id));
  
  // Since we use ReactMarkdown to display our content and try to break it up
  // into blocks in the json file, we can create a variable to join this content.
  const formattedContent = article.content.join("\n");
  const formattedSources = article.sources.join("\n");

  // State to track the current background image index
  const [currentBackgroundIndex, setCurrentBackgroundIndex] = React.useState(() => {
    const storedIndex = localStorage.getItem('currentBackgroundIndex');
    return storedIndex === null ? -1 : parseInt(storedIndex);
  });

  // When component mounts we just set a random background image. We try not
  // to show the same image twice in a row to the user but to avoid visual
  // clutter we don't change the background image when the user is (spam)
  // clicking the Random Article button.
  React.useEffect(() => {
    const changeBackgroundImage = () => {
      let randomIndex = Math.floor(Math.random() * backgroundImageArray.length);

      if (randomIndex === currentBackgroundIndex) {
        randomIndex = (randomIndex + 1) % backgroundImageArray.length;
      }

      setCurrentBackgroundIndex(randomIndex);
      localStorage.setItem('currentBackgroundIndex', randomIndex);
    };

    changeBackgroundImage();
  }, []);

  const currentBackgroundImage = backgroundImageArray[currentBackgroundIndex];

  return (
    <>
      <div style={ImageContainerStyle(currentBackgroundImage)} />
      <div style={ContentWrapperStyle}>
        <div style={ContentStyle}>
          <h1 style={headlineStyle}>{article.title}</h1>
          <div style={SeparatorStyle}></div>
          <ReactMarkdown components={{ img: ({node, ...props}) => <img style={customImageStyle} {...props} />}}>
            {formattedContent}
          </ReactMarkdown>
          <ReactMarkdown>{formattedSources}</ReactMarkdown>
          <span style={TagTitleStyle}>Article Tags: </span>
          {article.tags.map((tag, index) => (
            <span key={index} style={TagStyle}>
              {tag}
            </span>
          ))}

        </div>
      </div>
    </>
  );
};

export default Article;