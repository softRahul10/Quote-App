// Page UIs
const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById('loader');

// Quote Array
let apiQuotes = [];

// Show loading
function loading() {
      loader.hidden = false;
      quoteContainer.hidden = true;
}

// Hide loading
function complete() {
      loader.hidden = true;
      quoteContainer.hidden = false;
}

// Show New Quote
function newQuote() {
      // Show loader when loading new Quote
      loading();

      // Select a random quote from apiQuotes
      const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
      if(!quote.author) {
            authorText.textContent = "Unknown";
      }else {
            authorText.textContent = quote.author;
      }

      if(quote.text.length > 50) {
            quoteText.classList.add('long-quote');
      }else{
            quoteText.classList.remove('long-quote');
      }
      quoteText.textContent = quote.text;

      // Hide loader
      complete();
}


// Get Quotes from API
async function getQuotes() {
      // Show loader
      loading();

      // Fetching quotes from API
      const apiURL = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
      try {
            const response = await fetch(apiURL);
            apiQuotes = await response.json();
            newQuote();
      } catch (error) {
            console.error(error);
      }
}


// Tweet Quote
function tweetQuote() {
      const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
      // Open this in new Tab
      window.open(twitterUrl,'_blank');
}


// Event Listeners
newQuoteBtn.addEventListener('click',newQuote);
twitterBtn.addEventListener('click',tweetQuote);

// On page load
getQuotes();