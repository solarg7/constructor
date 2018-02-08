
var inquirer = require("inquirer");
var Word = require("./word.js");

var showWord1 = "";
var displayWord = [];
var letterGuessed = "";

var countdownGame = 12;

var words = ["orange", "watermelon", "banana", "mango", "lemon", "grapes", "apple"];

var indexRandom = Math.floor(Math.random() * Math.floor(words.length));
var wordRandom = words[indexRandom].toLowerCase();

var playWord = new Word(wordRandom);

var first = [];

for (i = 0; i < wordRandom.length; i++){
    first = "_ " + first;

}

console.log("**** ******* ******************** *****************");
console.log("*** * ***** ** ************* **********************");
console.log("** *** *** ***** ****** *****    FRUITS   *********");
console.log("* *****  **********  ******************************");
console.log("   Word??: " + first);

startGame();

function startGame() {

    inquirer.prompt([
        {//type: "input",
        name: "letterGuessed1",
        message: "Guess a letter: "
        }
    ]).then(function(answers){

        var searchWord = wordRandom;


    
        letterGuessed = answers.letterGuessed1.toLowerCase();

        console.log()


        if(playWord.guessLetter(letterGuessed)){
            console.log("CORRECT LETTER");

            console.log("Remaining :" + countdownGame);


           
            if(playWord.showCounter === wordRandom.length){
               console.log("WINNER!!......................." + playWord.showWord(letterGuessed).toUpperCase());
               return 
            };

        }else{
            console.log("INCORRECT LETTER");
            countdownGame--;
            console.log("Remaining :" + countdownGame);

            if(countdownGame == 0){
                console.log("GAME OVER ..................." + playWord.showWord(letterGuessed).toUpperCase());
                return
            }



        };

        console.log("        Word??: " + playWord.showWord(letterGuessed));

 



        startGame();
    });



}; 