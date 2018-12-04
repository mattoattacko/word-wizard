function getWords(){
  let Word = require('./Word.js');
  let words1 = {
    word: ['dog', 'cat', 'cow'],
    hint: ['woof', 'meow', 'moo'],
    category: 'animals'
  };
  let words2 = {
    word: ['mariners', 'seahawks', 'sounders'],
    hint: ['baseball', 'football', 'soccer'],
    category: 'teams'
  };
  let words3 = {
    word: ['apple', 'banana', 'orange'],
    hint: ['red', 'yellow', 'orange'],
    category: 'fruits'
  };

  let allWords = [words1, words2, words3];
  let rando1 = Math.floor(Math.random() * words1.word.length);
  let rando2 = Math.floor(Math.random() * allWords.length);
  let randomWord = {
    word: allWords[rando2].word[rando1],
    hint: allWords[rando2].hint[rando1],
    category: allWords[rando2].category
  };
  return new Word(randomWord.word, randomWord.hint, randomWord.category); 

};

module.exports = getWords;