var quoteContent = document.getElementById("quote-content"),  // quote text
    character = document.getElementById("quote-author"),      // anime character
    animeTitle = document.getElementById("quote-anime"),      // anime title
    quoteButton = document.getElementById("quote-button");    // get new quote button

function getRandomQuote() {                             // function for generating a new anime quote (activated when button is clicked)
    fetch("https://animechan.vercel.app/api/random")    // sends request to 'Animechan' API for a random quote         
    .then(response => response.json())                  // once their server sends a quote, the data is converted to .json format
    .then(quote => {
        quoteContent.textContent = quote.quote;         // quote's content is displayed in HTML element with 'quote-content' element id    
        character.textContent = quote.character;        // quote's author is displayed in HTML element with 'quote-author' element id
        animeTitle.textContent = quote.anime;           // quote's anime origin is displayed in HTML element with 'quote-anime' element id
    });
}
