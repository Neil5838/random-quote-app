import quotes from "./data.js";

const quoteTitle = document.getElementById("quote");
const authorName = document.getElementById("author");
const generateBtn = document.getElementById("generate-btn");

generateBtn.addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const {text, author} = quotes[randomIndex];
    quoteTitle.textContent = text;
    authorName.textContent = author;
});