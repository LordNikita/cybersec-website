import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Tags.css';
import articles from '../data/articles.json';

// Background Image
//import cyberpunkImage from '../images/cyberpunk9.jpg';

const TagStyle = {
  position: 'absolute',
  top: '15%',
  left: '19.7%',
  //left: '12.6%',
  width: '25%',

  textAlign: 'center',
  lineHeight: '1.65rem',
  fontSize: '1.4rem',
  fontFamily: 'Roboto, sans-serif',
  color: '#f0e9df',
  //backgroundColor: 'rgba(255, 0, 0, 0.25)',
  textShadow: '0 0 5px rgba(0, 0, 0, 0.7), 0 0 15px rgba(255, 255, 255, 0.5)',
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
  //backgroundColor: 'rgba(255, 0, 0, 0.25)',
  //textShadow: '0 0 5px rgba(255, 255, 255, 0.8), 0 0 10px rgba(255, 255, 255, 0.6)',
  textShadow: '0 0 7.5px rgba(255, 255, 255, 0.75)',
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
                <p key={tag} onClick={() => handleTagClick(tag)} style={{ cursor: 'pointer' }}>{tag}</p>
              ))}
            </div>
          </div>


          <div style = {ArticleStyle}>
            <h2>★ {selectedTag || 'All'}  Articles ★</h2>
            {filteredArticles.map(article => (
              <div key={article.id} onClick={() => navigate(`/article/${article.id}`)} style={{ cursor: 'pointer' }}>
                <p>{article.title}</p>
              </div>
            ))}
          </div>
    </>
  );
};

export default Tags;