var words = ['Whickersham', 'Bellingham', 'Okanogan', 'Bellevue', 'Tacoma', 'Eatonville', 'Vancouver', 'Graham'];

var correctWord = new Word(words[Math.floor(Math.random() * words.length)]);
correctWord.generateLetters();
var guessesRemaining = 10;
var guessesSoFar = [];

console.log(chalk.cyan("\nWelcome to enSeven's Word Wizard. Guess a letter to figure out the word"));
console.log(chalk.yellow("Hint:") + " the words are places in Washington State.");



var words2 = ['Bulldog', 'German Shepherd', 'Labrador', 'Beagle', 'Poodle', 'Chihuahua', 'Pug', 'Boxer'];

var correctWord = new Word(words[Math.floor(Math.random() * words.length)]);
correctWord.generateLetters();
var guessesRemaining = 10;
var guessesSoFar = [];

console.log(chalk.cyan("\nWelcome to enSeven's Word Wizard. Guess a letter to figure out the word"));
console.log(chalk.yellow("Hint:") + " the words are breeds of dogs.");



var words3 = ['Node', 'Inheritance', 'ASYNC', 'Buffers', 'CRUD', 'Authentication', 'Oauth', 'Linked List'];

var correctWord = new Word(words[Math.floor(Math.random() * words.length)]);
correctWord.generateLetters();
var guessesRemaining = 10;
var guessesSoFar = [];

console.log(chalk.cyan("\nWelcome to enSeven's Word Wizard. Guess a letter to figure out the word"));
console.log(chalk.yellow("Hint:") + " the words are topics covered in our 401 class.");

module.exports = moreWords;