function getWords(){
  let Word = require('./Word.js');
  let words1 = {
    word: ['Whickersham', 'Bellingham', 'Okanogan', 'Bellevue', 'Tacoma', 'Eatonville', 'Vancouver', 'Graham'],
    hint: ['Located in Whatcom County', 'Near the Canadian Border', 'East of the Cascades', 'Fancy City', 'Port City','Makes You Hungry','Surprisingly Not in Canada', 'Where Hollie Lives'],
    category: 'Places in Washington'
  };
  let words2 = {
    word: ['Bulldog', 'German Shepherd', 'Labrador', 'Beagle', 'Poodle', 'Chihuahua', 'Pug', 'Boxer'],
    hint: ['Originates in the UK', 'BARK BARK that\'s the sound of the police!', 'A place in Canada', 'Great for hunting', 'Rhymes with noodle', 'A place in Mexico', 'Slowly suffocating. Poor doggos!', 'A fighter'],
    category: 'Dog Breeds'
  };
  let words3 = {
    word: ['Node', 'Inheritance', 'ASYNC', 'Buffers', 'CRUD', 'Authentication', 'Oauth', 'Linked List'],
    hint: ['No Dutch', 'People argue about this', 'Almost a popular boy band', 'Waiting for a video to load', 'Nice way to say damn it!', 'Yes you are who you say you are', 'Are you really who you say you are', 'Useful for going backwards on websites', ],
    category: 'Things We Learned at CodeFellows'
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
