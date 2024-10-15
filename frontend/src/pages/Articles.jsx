import React from 'react';
import { useNavigate } from 'react-router-dom';

// Background Image
import cyberpunkImage from '../images/cyberpunk5.png';
import rainGif from '../images/rain4.gif';
import '../styles/Articles.css';

// Article Components
import article1Image from '../images/article1.jpg';
import article2Image from '../images/article2.jpg';
import article3Image from '../images/article3.jpg';
import article4Image from '../images/article4.png';
import ArticleButton from '../components/ArticleButton.jsx';
import PageButton from '../components/PageButton.jsx';

// MUI Imports
import { fontSize, padding, width } from '@mui/system';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

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
  top: '12.5vh',
  left: '15vw',

  height: '80vh',
  width: '70vw',

  backgroundColor: 'rgba(205, 193, 255, 0.7)', // Adjust the last value for transparency
  animation: 'backgroundWane 10s infinite',
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
  height: '150px',

  marginTop: '10px',
  borderBottom: '1.5px solid #FFA500',
  

  backgroundColor: 'rgba(0, 0, 0, 0.5)',
}

const ArticleImageStyle = {
  width: '150px', 
  height: '150px', 
  marginRight: '10px', 
};

const ArticleHeadingStyle = {
  position: 'absolute',
  top: '-2%',
  left: '22.5%',

  letterSpacing: '0.01rem',
  //color: '#E0E0E0',
};

const ArticleBodyStyle = {
  position: 'absolute',
  width: '55%',
  top: '26%',
  left: '22.5%',
  borderRight: '1px solid gold',

  letterSpacing: '0.005rem',
  fontSize: '1.05rem'
};

const ArticleTagStyle = {
  position: 'absolute',
  top: '79%',
  left: '22.5%',

  letterSpacing: '0.05rem',
  fontSize: '0.925rem',
  fontFamily: 'Roboto, sans-serif',
};

const ArticleButtonWrapper = {
  position: 'absolute',
  top: '50%',
  right: '3.5%',
  transform: 'translateY(-50%)',

};

const NextPageButtonWrapper = {
  position: 'absolute',
  bottom: '-50px',
  left: '157px',

};
const PreviousPageButtonWrapper = {
  position: 'absolute',
  bottom: '-50px',
  left: '15px',
};


const articles = [
  { id: 1, title: 'Phishing: Tactics Unveiled', image: article1Image, description: 'You received an email from your bank asking you to urgently verify your details, would you spot the red flags fast enough?', tags: ['Psychology', 'Scams', 'Social Engineering'] },
  { id: 2, title: 'Security & Romance', image: article2Image, description: 'Is your "girlfriend" a real person? The answer might be rather complicated...', tags: ['Psychology', 'Scams', 'Social Engineering'] },
  { id: 3, title: 'Understanding Malware: Beyond the Basics', image: article3Image, description: 'Every 4 minutes, a company falls victim to a malware attack, read this article and stop yourself from being just another statistic.', tags: ['Cybersecurity', 'Privacy', 'Scams'] },
  { id: 4, title: 'Hacked in Transit', image: article4Image, description: 'When secure communications are anything but — the mechanics of MITM attacks and what makes them so dangerously effective.', tags: ['Cybersecurity', 'Privacy'] },
  { id: 5, title: 'Hacked in Transit', image: article4Image, description: 'When secure communications are anything but — the mechanics of MITM attacks and what makes them so dangerously effective.', tags: ['Cybersecurity', 'Privacy'] },
  { id: 6, title: 'Hacked in Transit', image: article4Image, description: 'When secure communications are anything but — the mechanics of MITM attacks and what makes them so dangerously effective.', tags: ['Cybersecurity', 'Privacy'] },
  { id: 7, title: 'Hacked in Transit', image: article4Image, description: 'When secure communications are anything but — the mechanics of MITM attacks and what makes them so dangerously effective.', tags: ['Cybersecurity', 'Privacy'] },
  { id: 8, title: 'Hacked in Transit', image: article4Image, description: 'When secure communications are anything but — the mechanics of MITM attacks and what makes them so dangerously effective.', tags: ['Cybersecurity', 'Privacy'] },
  { id: 9, title: 'Hacked in Transit', image: article4Image, description: 'When secure communications are anything but — the mechanics of MITM attacks and what makes them so dangerously effective.', tags: ['Cybersecurity', 'Privacy'] },
];



const Articles = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const articlesPerPage = 4;  
  const navigate = useNavigate();

  const handleReadMore = (id) => {
    navigate(`/articles/${id}`);
  };

  const startIndex = (currentPage - 1) * articlesPerPage;
  const currentArticles = articles.slice(startIndex, startIndex + articlesPerPage);

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
                <h2 style={ArticleHeadingStyle}>{article.title}</h2>
                <p style={ArticleBodyStyle}>{article.description}</p>
                <span style={ArticleTagStyle}>
                  Tags: {article.tags.map(tag => `[${tag}]`).join(' ')}
                </span>
                <div style={ArticleButtonWrapper}>
                  <ArticleButton label="Read More" navigateTo={() => handleReadMore(article.id)} />
                </div>
              </div>
            ))}

            {startIndex + articlesPerPage < articles.length && (
              <div style={NextPageButtonWrapper}>
                <PageButton onClick={nextPage} label={'Next'}/> 
              </div>
            )}
            {currentPage > 1 && (
              <div style={PreviousPageButtonWrapper}>
                <PageButton onClick={previousPage} label={'Previous'}/> 
              </div>
            )}

        </div>
      </div>
    </>
  );
};

export default Articles;