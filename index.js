const author = document.getElementById('author');
const quote = document.getElementById('quote');
const generateQuoteBtn = document.getElementById('generateNewQuote');

const apiUrl = 'https://dummyjson.com/quotes';
async function getQuote() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        if(!data.quotes?.length) throw new Error("No quote found!");
        displayQuotes(data.quotes);
    } catch (error) {
        console.error('Error fetching quote', error);
        quote.textContent = 'Failed to load quote!';
        author.textContent = '';
    }
};

function displayQuotes(quotes) {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const {quote: text, author: name} = quotes[randomIndex];    
    quote.textContent = `${text}`;
    author.textContent = `- ${name}`;
}

document.addEventListener('DOMContentLoaded', getQuote);
generateQuoteBtn.addEventListener('click', getQuote);