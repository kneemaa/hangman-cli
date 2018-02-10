var Word = require("./word.js");
var inquirer = require("inquirer");
var wordList = ["penny","quarter","nickle","dollar","dime"]
var position;
var selectedWord;
var vocab;

//vocab.letterCheck("l");

function randomWordPicker(){
	position = Math.floor(Math.random() * (wordList.length));
	selectedWord = wordList[position]
	vocab = new Word(selectedWord);
	return vocab;
}

function startGame(){
	var test = "";
	if(test !== selectedWord){
		//console.log(false);
		vocab.printLetters();
		inquirer.prompt([{
			name: "guess",
			message: "Guess A Letter"/*,
			validate: function(str){
				if (str === ''){
					return false;
				};
			}*/
		}]).then(function (input){
			console.log(`Guess: ${input.guess}`);
			test = vocab.letterCheck(input.guess);
			console.log(test);
			startGame();
		});

		
	}

}

//start of game runtime
randomWordPicker();


//console.log(vocab);

/*vocab.printLetters();
vocab.letterCheck("e");
vocab.letterCheck("n");
vocab.letterCheck("p");
vocab.letterCheck("y");
var test = vocab.letterCheck("y");
console.log(test);*/
/*console.log(selectedWord);
console.log(test === selectedWord);*/

vocab.printLetters();
startGame();