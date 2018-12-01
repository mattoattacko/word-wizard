#!/usr/bin/env node
var Word = require('./word.js')
var chalk = require('chalk');
var inquirer = require('inquirer');
// var moreWords = require('./moreWords.js');


var moreWords = [words, words2, words3];

// var words = ['Whickersham', 'Bellingham', 'Okanogan', 'Bellevue', 'Tacoma', 'Eatonville', 'Vancouver', 'Graham'];

// var correctWord = new Word(words[Math.floor(Math.random() * words.length)]);
// correctWord.generateLetters();
// var guessesRemaining = 10;
// var guessesSoFar = [];

// console.log(chalk.cyan("\nWelcome to the Word Guess Game!"));
// console.log(chalk.yellow("Hint:") + " the words are places in Washington State.");

// Reset function
function endGame(outcome) {
  if (outcome === 'winner') {
    console.log(chalk.blue.bold("\nPraise the Word Wizard! You have won!"));
    console.log(chalk.yellow("You guessed ") + chalk.blue.bold(correctWord.correctWord.toUpperCase()) + " " + chalk.bgYellow.black("with " + (guessesRemaining) + " guesses remain.") + "\n")
  } else {
    console.log("\n" + chalk.bgRed.white.bold("You have lost! The Word Wizard is displeased..."));
    console.log(chalk.yellow("The correct word was: ") + chalk.bgYellow.black(correctWord.correctWord + ".") + "\n");
  };

  correctWord = new Word(words[Math.floor(Math.random() * words.length)]);
  correctWord.generateLetters();
  guessesRemaining = 10;
  guessesSoFar = [];

  inquirer.prompt([
    {
      message: "Do you dare to play again?",
      name: "confirm",
      type: "confirm",
    }
  ]).then(function(response) {
    if (response.confirm) {
      console.log(chalk.cyan("\nGreat! The Word Wizard is conjuring a new word..."));
      main();
    } else {
      console.log(chalk.cyan("\nThe Word Wizard is displeased!\n"));
      return;
    };
  });
};

// Main game
function main() {
  inquirer.prompt([
    {
      name: "guess",
      prefix: '',
      message: "\nWord: " + chalk.blue(correctWord.update()) +
        "\n\nGuesses remaining: " + chalk.magenta.bold(guessesRemaining) +
        "\nIncorrect guesses so far: " + chalk.magenta.bold(guessesSoFar.join(' ')) + "\n" +
        "Guess a letter:"
    }
  ]).then(function (data) {
    
    // Validate user input
    if (data.guess === "") {
      console.log(chalk.bgRed.white("\nWHOOPS!") + chalk.yellow(" You did not enter a letter."));
      return main();
    } else if (data.guess.length > 1) {
      console.log(chalk.bgRed.white("\nWHOOPS!") + chalk.yellow(" One letter at a time friend."));
      return main();
    } else if (guessesSoFar.includes(data.guess)) {
      console.log(chalk.bgRed.white("\nWHOOPS!") + chalk.yellow(" You already guessed that! Choose another letter."));
      return main();
    };

    // Only decrement guessesRemaining on an incorrect guess
    if (!correctWord.correctWord.includes(data.guess)) {
      guessesRemaining--;
    }

    guessesSoFar.push(data.guess);
    
    for (var i = 0; i < correctWord.letters.length; i++) {
      correctWord.letters[i].check(data.guess);
    };
    if (correctWord.update().toLowerCase() == correctWord.correctWord.toLowerCase()) {
      endGame('winner');
      return;
    };
    if (guessesRemaining == 0) {
      endGame('loss');
      return;
    };
    main();
  });
};

main();