import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Tags.css';

// Background Image
//import cyberpunkImage from '../images/cyberpunk9.jpg';

// Styles the Div which contains all the content on centre page
const ContentWrapperStyle = {
  position: 'absolute',
  top: '12.5vh',
  left: '14.8vw',

  //height: '2200px',
  width: '70vw',
  paddingBottom: '25px',

  color: '#444444',
};

// Styles the content (text) inside the main page (div)
const ContentStyle = {
  position: 'relative',
  top: '0.25%',
  left: '2.5%',
  width: '94%',

  lineHeight: '1.3rem',
  fontFamily: 'Lato, sans-serif',
};

const allTags = [
  'Online Safety',
  'Psychology',
  'Scams',
  'Social Engineering',
  'Cybersecurity',
  'Privacy',
  'Technology',
  'AI',
];

const articles = [
  { id: 1, title: 'Phishing: Tactics Unveiled', tags: ['Online Safety', 'Psychology', 'Scams', 'Social Engineering'] },
  { id: 2, title: 'Security & Romance', tags: ['Psychology', 'Scams', 'Social Engineering'] },
  { id: 3, title: 'Understanding Malware: Beyond the Basics', tags: ['Online Safety', 'Cybersecurity', 'Privacy', 'Scams'] },
  { id: 4, title: 'Hacked in Transit', tags: ['Online Safety', 'Cybersecurity', 'Privacy'] },
  { id: 5, title: 'Zero Trust Architecture', tags: ['Cybersecurity', 'Privacy'] },
  { id: 6, title: 'The Psychology Behind Passwords', tags: ['Cybersecurity', 'Online Safety', 'Psychology'] },
  { id: 7, title: 'Cyber Warfare: Chaos or Opportunity?', tags: ['Cybersecurity', 'Privacy'] },
  { id: 8, title: 'IoT & Cybersecurity', tags: ['Cybersecurity', 'Privacy', 'Technology'] },
  { id: 9, title: 'Ethical Hacking: An Intriguing Moral Dilemma', tags: ['Cybersecurity', 'Privacy'] },
  { id: 10, title: 'The Role of AI in Cybersecurity', tags: ['AI', 'Cybersecurity', 'Technology'] },
];

const Tags = () => {
  const [selectedTag, setSelectedTag] = useState(null);
  const navigate = useNavigate();

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
  };

  const filteredArticles = selectedTag
    ? articles.filter(article => article.tags.includes(selectedTag))
    : articles;

  return (
    <>
      <div className="big-woman" />
      <div className="big-woman-overlay" />

      <div style={ContentWrapperStyle}>
        <div style={ContentStyle}>
          <div>
            <h2>Select a Tag:</h2>
            <ul>
              {allTags.map(tag => (
                <li key={tag} onClick={() => handleTagClick(tag)} style={{ cursor: 'pointer' }}>{tag}</li>
              ))}
            </ul>
          </div>

          <h2>Articles for Tag: {selectedTag || 'All'}</h2>
          <div>
            {filteredArticles.map(article => (
              <div key={article.id} onClick={() => navigate(`/article/${article.id}`)} style={{ cursor: 'pointer' }}>
                <h3>{article.title}</h3>
              </div>
            ))}
          </div>
        </div>  
      </div> 
    </>
  );
};

export default Tags;