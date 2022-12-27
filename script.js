// Get Quote from API
async function getQuote() {
    const apiURL = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';

    try{
        const response = await fetch(apiURL);
        const data = await response.json();
    } catch(error) {
        console.log('No,Quote' ,error);
    }
}

// On page Load
getQuote();