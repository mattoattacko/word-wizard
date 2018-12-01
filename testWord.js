'use strict';

let words1 = {
  word: ['dog', 'cat', 'cow'],
  hint: ['woof', 'meow', 'moo'],
  category: 'animals'
};

let words2 = {
  word: ['car', 'bicycle', 'airplane'],
  hint: ['4 wheels', '2 wheels', '2 wings'],
  category: 'vehicles'
};

let words3 = {
  word: ['Mariners', 'Seahawks', 'Sounders'],
  hint: ['Baseball', 'Football', 'Soccer'],
  category: 'sports teams'
};


let allWords = [words1, words2, words3];

let rando = Math.floor(Math.random() * allWords.length);

let searchWord = {
  word: allWords[rando].word,
  hint: allWords[rando].hint,
  category: allWords[rando].category
};

module.exports = searchWord;
