import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Tags.css';
import articles from '../data/articles.json';

// MUI
import { Box, Typography } from '@mui/material';


const TagStyle = {
  position: 'absolute',
  top: '15%',
  left: '19.7%',
  width: '25%',

  lineHeight: '1.65rem',
  textAlign: 'center',
  fontFamily: 'Roboto, sans-serif',
  color: '#f0e9df',
  textShadow: '0 0 5px rgba(0, 0, 0, 0.7), 0 0 15px rgba(255, 255, 255, 0.5)',
};
const InnerTagStyle = {
  position: 'relative',
  top: '-10px',
  lineHeight: '3.3rem',
  fontSize: '1.5rem',

  cursor: 'pointer',
  transition: 'text-shadow 0.3s, color 0.3s',
  '&:hover': {
    textShadow: '0 0 10px rgba(255, 255, 255, 1), 0 0 20px rgba(0, 255, 255, 1)',
    color: '#00FFFF', 
  },
};

const ArticleStyle = {
  position: 'absolute',
  top: '15%',
  right: '15.5%',
  width: '35%',

  textAlign: 'right',
  lineHeight: '1.5rem',
  fontSize: '1.2rem',
  fontFamily: 'merriweather',
  color: '#dfe1f0',
  textShadow: '0 0 7.5px rgba(255, 255, 255, 0.75)',
};
const InnerArticleStyle = {
  position: 'relative',
  top: '-10px',
  lineHeight: '2.98rem',
  fontSize: '1.2rem',
  fontFamily: 'merriweather',

  cursor: 'pointer',
  transition: 'text-shadow 0.3s, color 0.3s',
  '&:hover': {
    textShadow: '0 0 10px rgba(255, 255, 255, 1), 0 0 20px rgba(0, 255, 255, 1)',
    color: '#00FFFF', 
  },
};

const HeadingStyle = {
  fontSize: '1.7rem',
};

const allTags = ['All', 'Online Safety', 'Psychology', 'Scam', 'Social Engineering', 'Cybersecurity', 'Privacy', 'Technology', 'AI',
];

const Tags = () => {
  const [selectedTag, setSelectedTag] = useState(null);
  const navigate = useNavigate();

  const handleTagClick = (tag) => {
    setSelectedTag(tag === 'All' ? null : tag);
  };

  const filteredArticles = selectedTag ? articles.filter(article => article.tags.includes(selectedTag)): articles;

  return (
    <>
      <div className="big-woman" />
      <div className="big-woman-overlay" />

          <div style={TagStyle}>
            <h2 style={HeadingStyle}>✦ Select a Tag ✦</h2>
            <div>
              {allTags.map(tag => (
                <Typography key={tag} onClick={() => handleTagClick(tag)} sx={InnerTagStyle}>{tag}</Typography>
              ))}
            </div>
          </div>


          <div style = {ArticleStyle}>
            <h2>★ {selectedTag || 'All'}  Articles ★</h2>
            {filteredArticles.map(article => (
              <Typography key={article.id} onClick={() => navigate(`/article/${article.id}`)} sx={InnerArticleStyle}>
                {article.title}
              </Typography>
            ))}
          </div>
    </>
  );
};

export default Tags;