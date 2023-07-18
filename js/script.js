const guessedLettersElement = document.querySelector(".guessed-letters");
const guessLetterButton = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuessesElement = document.querySelector(".remaining");
const remainingGuessesSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again")

const word = "magnolia";
const guessedLetters = [];

//Display our symbols as placeholders for the chosen word's letters
const placeholder = function (word) {
    const placeholderLetters = [];
    for (const letter of word) {
        console.log(letter);
        placeholderLetters.push("●");
    }
    wordInProgress.innerText = placeholderLetters.join("");
};

placeholder(word);

guessLetterButton.addEventListener("click", function (e) {
    e.preventDefault();
    //empty message paragraph
    message.innerText = "";
    //Grab what was entered in the input
    const guess = letterInput.value;
    //make sure that it was a single letter
    const goodGuess = validateInput(guess);

    if (goodGuess) {
        //this is a letter and it is a good guess
        makeGuess(guess);
    }
    letterInput.value = "";
});

const validateInput = function (input) {
    const acceptedLetter = /[a-zA-Z]/;
    if (input.length === "") {
        //is the input empty?
        message.innerText = "Please enter a letter.";
    } else if (input.length > 1) {
        //Did you enter in more than one letter?
        message.innerText = "Please enter in a single letter.";
    } else if (!input.match(acceptedLetter)) {
        //did you type in a special character or number or something else?
        message.innerText = "Please enter a letter from A to Z."
    } else {
        //finially a single letter
        return input;
    }
};

const makeGuess = function (guess) {
    guess = guess.toUpperCase();
    if (guessedLetters.includes(guess)) {
        message.innerText = "You already guessed that letter, silly. Try again!"
    } else {
        guessedLetters.push(guess);
        console.log(guessedLetters);
        showGuessedLetters();
        updateWordInProgress(guessedLetters);
}
};

const showGuessedLetters = function () {
    //empty the innerHTML of the unordered list where the player's guessed letters will display
    guessedLettersElement.innerHTML = "";
    for (const letter of guessedLetters) {
        const li = document.createElement("li");
        li.innerText = letter;
        guessedLettersElement.append(li);
    }
};

const updateWordInProgress = function (guessedLetters) {
    const wordUpper = word.toUpperCase()
    const wordArray = wordUpper.split("");
    
    const revealWord = [];
    for(const letter of wordArray) {
        if(guessedLetters.includes(letter)) {
            revealWord.push(letter.toUpperCase());
        } else {
            revealWord.push("●");
        }
    }
    wordInProgress.innerText = revealWord.join("");
    checkIfWin();
};

const checkIfWin = function () {
    //verify that the player guessed the right word
    if (word.toUpperCase() === wordInProgress.innerText) {
        message.classList.add("win");
        message.innerHTML = `<p class="highlight">You guessed the correct word! Congrats!</p>`;
    }
};

//declare a global varialbe for the number of guesses
const remainingGuesses = 8;

//create a function to count remaining guesses
const countRemainingGuesses = function (guess) {
    const upperWord = word.toUpperCase()
    if (!upperWord.includes(guess)) {
        //let the player know that the word doesn't contain the letter
        message.innerText = `Sorry, the word has no ${guess}.`
        remainingGuesses -= 1;  
    } else {
        message.innerText = `Good guess! The word has the letter ${guess}`
    }
    
}



