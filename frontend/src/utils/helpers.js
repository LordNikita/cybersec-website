// Generates a random number between 1 and X (totalArticles).
// Used to build a URL for a random article.
export const getRandomArticleNumber = (totalArticles) => {
  return Math.floor(Math.random() * totalArticles) + 1; 
};