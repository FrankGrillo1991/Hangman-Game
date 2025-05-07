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
function checkGameStatus() {
    const won = word.split("").every(letter => guessedLetters.includes(letter));
    if (won) {
        message.textContent = "🎉 You Win!";
        disableAllButtons();
    } else if (wrongGuesses >= maxWrong) {
        message.textContent = `💀 You Lose! Word was "${word}"`;
        disableAllButtons();
    }
}

// Disable all keyboard buttons
function disableAllButtons() {
    const buttons = keyboard.querySelectorAll("button");
    buttons.forEach(btn => btn.disabled = true)
}

// Handle Letter guess
