var Letter = function(letter){
	this.letter = letter;
	this.guessed = false;
	this.printCheck = function () {
		if(this.guessed === true) {
			return this.letter;
		} else {
			return "_";
		}
	};
	this.guessCheck = function (guess) {
		if (this.letter === guess){
			this.guessed = true;
		}
	};

};


module.exports = Letter;