var Letter = require("./letter.js");

var Word = function(word) {
	this.wordArray = [];
	this.printLetters = function(){
		for (i = 0; i < word.length; i++){
			var characters = word[i];
			var uniqueLetter = new Letter(characters);
			this.wordArray.push(uniqueLetter);
		}
	};
	this.letterCheck = function(guess){
		var blankBuilder = "";
		for ( i = 0; i < this.wordArray.length; i++){
			this.wordArray[i].guessCheck(guess);
			blankBuilder += this.wordArray[i].printCheck();
		}
		return blankBuilder;
	}
};

module.exports = Word;