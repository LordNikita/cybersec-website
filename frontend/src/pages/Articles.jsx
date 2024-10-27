import React from 'react';
import { useNavigate } from 'react-router-dom';

// Background Image
import cyberpunkImage from '../images/cyberpunk5.png';
import rainGif from '../images/rain4.gif';
import '../styles/Articles.css';

// Article Images
import article1Image from '../images/article1.jpg';
import article2Image from '../images/article2.jpg';
import article3Image from '../images/article3.jpg';
import article4Image from '../images/article4.png';
import article5Image from '../images/article5.jpg';
import article6Image from '../images/article6.jpg';
import article7Image from '../images/article7.jpg';
import article8Image from '../images/article8.jpg';
import article9Image from '../images/article9.jpg';
import article10Image from '../images/article10.jpg';

// Components
import ArticleButton from '../components/ArticleButton.jsx';
import PageButton from '../components/PageButton.jsx';

// MUI Imports
import { Box, Stack} from '@mui/material';

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
  width: '100vw',
  height: '100vh',
  ...backgroundImage,  
  zIndex: -1,
}

// Styles the Div which contains all the content on centre page
const ContentWrapperStyle = {
  position: 'absolute',
  top: '15vh',
  left: '15vw',

  height: '80vh',
  width: '70vw',

  // backgroundColor: 'rgba(205, 193, 255, 0.7)',
  // animation: 'backgroundWane 10s infinite',
  color: '#444444',
};

// Styles the content (text) inside the main page (div)
const ContentStyle = {
  position: 'relative',
  top: '0.25%',
  
  fontFamily: 'Lato, sans-serif',
  color: '#E0E0E0',
};

const ArticleWrapper = {
  position: 'relative',
  width: '100%',
  minHeight: '150px',
  height: '16vh',
  marginTop: '1.75%',
  borderBottom: '1.5px solid #FFA500',
  
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
}

const ArticleImageStyle = {
  position: 'absolute',
  minWidth: '150px',
  minHeight: '150px',
  width: '15vh', 
  height: '15vh',

  marginRight: '10px', 
};

const ArticleContentWrapper = {
  display: 'flex', 
  flexDirection: 'column', 
  justifyContent: 'center', 
  position: 'relative',

  top: '0%',
  left: '22.5%',
  width: '80%',
  height: '100%',

  '@media (min-width: 1500px)': {
    left: '17.5%',
    width: '87.5%',
  }, 
  '@media (min-width: 1700px)': {
    left: '15%',
    width: '95%',
  }, 
};

const ArticleHeadingStyle = {
  position: 'absolute',
  top: '0%',
  marginTop: '1.5%',

  letterSpacing: '0.01rem',
};
const ArticleBodyStyle = {
  width: '70%',
  // Good for bug fixing where the width ends
  //borderRight: '1px solid gold',

  letterSpacing: '0.005rem',
  fontSize: '1.05rem'
};

const TagWrapperStyle = {
  position: 'absolute',
  top: '79%',

  letterSpacing: '0.05rem',
  fontSize: '0.925rem',
  fontFamily: 'Roboto, sans-serif',
};
const TagStyle = {
  backgroundColor: '#4C3F91', 
  color: '#ECEAF7     ', 
  padding: '2px 8px', 
  marginRight: '5px', 
  borderRadius: '12px', 
  fontSize: '0.85rem',
};

const ArticleButtonWrapper = {
  position: 'absolute',
  top: '50%',
  right: '3.5%',
  transform: 'translateY(-50%)',
};

const ButtonContainerStyle = {
  position: 'fixed',
  display: 'flex',

  bottom: '2.5%',
  height: '50px',
};

// This logic should be moved into the articles.json file
const articles = [
  { id: 1, title: 'Phishing: Tactics Unveiled', image: article1Image, description: 'You received an email from your bank asking you to urgently verify your details, would you spot the red flags fast enough?', tags: ['Online Safety','Psychology', 'Scams', 'Social Engineering'] },
  { id: 2, title: 'Security & Romance', image: article2Image, description: 'Is your online "girlfriend" a real person? The answer might be rather complicated...', tags: ['Online Safety', 'Psychology', 'Scams', 'Social Engineering'] },
  { id: 3, title: 'Understanding Malware: Beyond the Basics', image: article3Image, description: 'Every 4 minutes, a company falls victim to a malware attack, read this article and stop yourself from being just another statistic.', tags: ['Online Safety', 'Cybersecurity', 'Scams', 'Technology'] },
  { id: 4, title: 'Hacked in Transit', image: article4Image, description: 'When secure communications are anything but — the mechanics of MITM attacks and what makes them so dangerously effective.', tags: ['Online Safety', 'Cybersecurity', 'Privacy'] },
  { id: 5, title: 'Zero Trust Architechture', image: article5Image, description: 'Why trusting no one and nothing might just be your only option in 2024...', tags: ['Cybersecurity', 'Technology'] },
  { id: 6, title: 'The Psychology Behind Passwords', image: article6Image, description: 'Ever wonder why people choose terrible passwords and the consequences of doing so?', tags: ['Cybersecurity', 'Online Safety', 'Psychology'] },
  { id: 7, title: 'Cyber Warfare: Chaos or Opportunity?', image: article7Image, description: 'War has evolved constantly over thousands of years, it\'s only natural this process continues into the digital age... ', tags: ['Cybersecurity', 'Technology'] },
  { id: 8, title: 'IoT & Cybersecurity', image: article8Image, description: 'Is your Smart Fridge spying on you on behalf of the American Government? Discover how vulnerable IoT devices really are!', tags: ['Cybersecurity', 'Privacy', 'Technology'] },
  { id: 9, title: 'Ethical Hacking: An Intriguing Moral Dilemna', image: article9Image, description: 'The implications behind shows like Mr Robot are a lot more complex thank you think...', tags: ['Cybersecurity'] },
  { id: 10, title: 'The Role of AI in Cybersecurity', image: article10Image, description: 'Is Artificial Intelligence just the next fad or does it signal something bigger for the field of cybersecurity?', tags: ['AI', 'Cybersecurity', 'Technology'] },
];

const Articles = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const navigate = useNavigate();

  const articlesPerPage = 4;  
  const startIndex = (currentPage - 1) * articlesPerPage;
  const currentArticles = articles.slice(startIndex, startIndex + articlesPerPage);
  const totalPages = Math.ceil(articles.length / articlesPerPage);

  const handleReadMore = (id) => {
    navigate(`/article/${id}`);
  };
  const nextPage = () => {
    if (startIndex + articlesPerPage < articles.length) {
      setCurrentPage(currentPage + 1);
    }
  };
  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <div style={ImageContainer} />
      <img src={rainGif} alt="Rain Animation" className="rain" />
      <div style={ContentWrapperStyle}>
        <div style={ContentStyle}>
          
          {currentArticles.map(article => (
              <div key={article.id} style={ArticleWrapper}>

                <img src={article.image} alt={`Article ${article.id}`} style={ArticleImageStyle} />
                
                <Box sx={ArticleContentWrapper}>
                  <h2 style={ArticleHeadingStyle}>{article.title}</h2>
                  <p style={ArticleBodyStyle}>{article.description}</p>
                  <span style={TagWrapperStyle}>
                    Tags: {article.tags.map(tag => (
                      <span key={tag} style={TagStyle}>{tag}</span>
                    ))}
                  </span>
                </Box>

                <div style={ArticleButtonWrapper}>
                  <ArticleButton label="Read More"  onClick={() => handleReadMore(article.id)} />
                </div>

              </div>
            ))}

          <div style={ButtonContainerStyle}>
            <Stack direction="row" spacing={1} alignItems="center">
              <PageButton onClick={previousPage} label={'Prev'} width="65px" disabled={currentPage === 1} />
              
              {[...Array(totalPages)].map((_, index) => (
                <PageButton
                  key={index + 1}
                  label={index + 1}
                  onClick={() => setCurrentPage(index + 1)}
                  disabled={currentPage === index + 1}
                />
              ))}
              
              <PageButton onClick={nextPage} label={'Next'} width="65px" disabled={startIndex + articlesPerPage >= articles.length}/>
            </Stack>
          </div>
        </div>
      </div>
    </>
  );
};

export default Articles;