const wordList = ["javascript", "hangman", "openai", "developer", "frontend"];
const word = wordList[Math.floor(Math.random() * wordList.length)];
const maxWrong = 5;
let wrongGuesses = 0;
let guessedLetters = [];

const wordContainer = document.getElementById("word");
const keyboard = document.getElementById("keyboard");
const message = document.getElementById("message");
const wrongCount = document.getElementById("wrong-count");

// Display underscores for unguessed letters
function displayWord() {
    wordContainer.innerHTML = word
        .split("")
        .map(letter => guessedLetters.includes(letter) ? letter : "_")
        .join(" ");
}

// Check if game is over
