var Letter = require("./letter.js");
var blankBuilder = "";

var Word = function(word) {
	this.wordArray = [];
	this.printLetters = function(){
		for (i = 0; i < word.length; i++){
			var characters = word[i];
			var uniqueLetter = new Letter(characters);
			blankBuilder += uniqueLetter.printCheck();
			blankBuilder += " ";
		}
	};
	this.letterCheck = function(word, guess){
		/*var check = new Letter().guessCheck(guess);*/
		console.log();
	}
};


var nema = new Word("nema");

nema.printLetters();

console.log(blankBuilder);

nema.guessCheck("a");
nema.printLetters();
