var Letter = require("./letter.js");


var Word = function(word) {
	this.wordArray = [];
	this.assembleLetters = function(){
		for (i = 0; i < word.length; i++){
			var characters = word[i];
			var uniqueLetter = new Letter(characters);
			this.wordArray.push(uniqueLetter);
		}
	};
};


var nema = new Word("nema");

nema.assembleLetters();

console.log(nema.wordArray);
