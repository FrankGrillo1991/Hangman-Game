const wordList = ["javascript", "hangman", "openai", "developer", "frontend"];
const word = wordList[Math.floor(Math.random() * wordList.length)];
const maxWrong = 5;
let wrongGuesses = 0;
let guessedLetters = [];

const wordContainer = document.getElementById("word");
const keyboard = document.getElementById("keyboard");
const message = document.getElementById("message");
const wrongCount = document.getElementById("wrong-count");

