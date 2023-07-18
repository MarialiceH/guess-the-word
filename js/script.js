const guessedLetters = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const inputForm = document.querySelector(".letter");
const wordProgress = document.querySelector(".word-in-progress");
const remainingGuess = document.querySelector(".remaining");
const remainingDisplay = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again")
const word = "magnolia";

const updateProgress = function (word) {
    const placeholderLetters = [];
    for (const letter of word) {
        console.log(letter);
        placeholderLetters.push("●");
    }
};

updateProgress(word);

guessButton.addEventListener("click", function (e) {
    e.preventDefault();
    const inputValue = inputForm.value;
    console.log(guess);
    inputForm.value = "";
});