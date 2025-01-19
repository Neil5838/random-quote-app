import quotes from "./data.js";

const quoteTitle = document.getElementById("quote");
const authorName = document.getElementById("author");
const generateBtn = document.getElementById("generate-btn");

quoteTitle.innerHTML = quotes[0].text;
authorName.innerHTML = quotes[0].author;

generateBtn.addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const {text, author} = quotes[randomIndex];
    quoteTitle.innerHTML = text;
    authorName.innerHTML = author;
});