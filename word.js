var Letter = require("./letter.js");
var blankBuilder = "";

var Word = function(word) {
	this.wordArray = [];
	this.printLetters = function(){
		for (i = 0; i < word.length; i++){
			var characters = word[i];
			var uniqueLetter = new Letter(characters);
			this.wordArray.push(uniqueLetter);
		}
		//console.log(this.wordArray);
	};
	this.letterCheck = function(guess){
		var blank = "";
		for ( i = 0; i < this.wordArray.length; i++){
			this.wordArray[i].guessCheck(guess);
			blank += this.wordArray[i].printCheck();
			
		}
		return blank;
	}
};


/*var nema = new Word("nema");


nema.printLetters();
nema.letterCheck("a");
nema.letterCheck("b");
nema.letterCheck("n");*/
//nema.printLetters();

module.exports = Word;