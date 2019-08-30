var wins = 0;
var losses = 0;
var guessesLeft = 10;

var validGuess = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' '];

var words = ["star platinum", "za warudo", "crazy diamond", "hermit purple", "silver chariot", "golden experience", "sex pistols", "killer queen", "sticky fingers", "king crimson"];

var guessedLetters = [];

var correctLetters = [];

var winText = document.getElementById("win-text");
var lossText = document.getElementById("loss-text");
var correctText = document.getElementById("correct-text");
var guessLeftText = document.getElementById("numGuess-text");
var guessedLetterText = document.getElementById("guessedLetters-text");

winText.textContent = wins;
lossText.textContent = losses;
guessLeftText.textContent = guessesLeft;

var chosenWord = words[Math.floor(Math.random() * words.length)];

for (var i = 0; i < chosenWord.length; i++) {
    correctLetters.push("-");
    correctText.textContent = correctLetters.join("");
}

function resetGame() {
    guessedLetters = [];
    correctLetters = [];
    guessesLeft = 10;
    guessLeftText.textContent = guessesLeft;
    guessedLetterText.textContent = guessedLetters;
    correctText.textContent = correctLetters;

    chosenWord = words[Math.floor(Math.random() * words.length)];

    for (var i = 0; i < chosenWord.length; i++) {
        correctLetters.push("-");
        correctText.textContent = correctLetters.join("");
    }

}

document.onkeyup = function (event) {

    var playerGuess = event.key;
    
    if (guessedLetters.indexOf(playerGuess) < 0 && validGuess.indexOf(playerGuess) >= 0 && guessesLeft > 0) {
        guessedLetters += playerGuess;
        guessedLetterText.textContent = guessedLetters;

        for (var i = 0; i < chosenWord.length; i++) {
            if (playerGuess === chosenWord[i]) {
                correctLetters[i] = playerGuess;
                correctText.textContent = correctLetters.join("");
            }
        }

    }

    if (chosenWord.indexOf(playerGuess) < 0 && validGuess.indexOf(playerGuess) >= 0) {
       guessesLeft--;
       guessLeftText.textContent = guessesLeft;
   }

    if (correctLetters.indexOf("-") < 0) {
        wins++;
        winText.textContent = wins;
        document.getElementById("display").src = ("assets/images/" + chosenWord + ".png");
        resetGame();
    }

    if (guessesLeft < 1) {
        losses++;
        lossText.textContent = losses;
        document.getElementById("display").src = "assets/images/loser.png";
        resetGame();
    }

}


