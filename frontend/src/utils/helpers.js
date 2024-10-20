// Function to format JSON content into react
export function formatContent(content) {
    // Replace [Heading] markers with <h2> elements
    let formattedText = content.replace(/\[Heading\]/g, "<h2>");
  
    // Replace [List Element] markers with <li> elements
    formattedText = formattedText.replace(/\[List Element\]/g, "<li>");
  
    // Replace ** bold markers with <strong> tags
    formattedText = formattedText.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

    //
  
    // Return the formatted text as HTML
    return content;
}

// Generates a random number between 1 and X (totalArticles).
// Used to build a URL for a random article.
export const getRandomArticleNumber = (totalArticles) => {
  return Math.floor(Math.random() * totalArticles) + 1; 
};