var wins = 0;
var losses = 0;
var guessesLeft = 10;

var validGuess = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var words = ["star platinum", "za warudo", "crazy diamond", "hermit purple", "siver chariot", "golden experience", "sex pistols", "killer queen", "sticky fingers", "king crimson"];

var guessedLetters = "";

var correctLetters = "";

var winText = document.getElementById("win-text");
var lossText = document.getElementById("loss-text");
var correctText = document.getElementById("correct-text");
var guessLeftText = document.getElementById("numGuess-text");
var guessedLetterText = document.getElementById("guessedLetters-text");