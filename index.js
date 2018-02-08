//console.log("paolita");
var inquirer = require("inquirer");
var Word = require("./word.js");
//var Guess = require("./word.js");
var showWord1 = "";
var displayWord = [];
var letterGuessed = "";

var countdownGame = 12;

var words = ["orange", "watermelon", "banana", "mango", "lemon", "grapes", "apple"];

var indexRandom = Math.floor(Math.random() * Math.floor(words.length));
var wordRandom = words[indexRandom].toLowerCase();

var playWord = new Word(wordRandom);

startGame();

function startGame() {

    inquirer.prompt([
        {//type: "input",
        name: "letterGuessed1",
        message: "Guess a letter: "
        }
    ]).then(function(answers){

        var searchWord = wordRandom;


    
        letterGuessed = answers.letterGuessed1;

        console.log()


        if(playWord.guessLetter(letterGuessed)){
            console.log("CORRECT LETTER");

            //console.log("palabra " + wordRandom.length);
          
            //console.log(playWord.showCounter);
           
            if(playWord.showCounter === wordRandom.length){
               console.log("WINNER!!");
               return 
            };

            //startGame();
        }else{
            console.log("INCORRECT LETTER");
            countdownGame--;
            console.log("Remaining :" + countdownGame);

            if(countdownGame == 0){
                console.log("LOSER");
                return
            }



            //startGame();
        };

        console.log("Word??: " + playWord.showWord(letterGuessed));

        // for (i = 0; i < wordRandom.length;i++){
        //     if (playWord.searchWord1[i] != "_"){
        //         displayWord[i] = playWord.searchchWord1[i];
        //     };
        // }   



        startGame();
    });



}; //end of startGame

     
        
        //var playWord = new Guess(searchWord);
        
        
        //console.log(playWord.wordGuessed + "flag01");
    
    
        
    
        
    
        // console.log(playWord.guessLetter(letterGuessed));
        // console.log(playWord.showWord(letterGuessed));
    
        // console.log(playWord.searchWord1[3]);



        // console.log(displayWord);
        // startGame();
      

// function Programmer(letterInput1){

//     this.letterInput = letterInput1;

//     this.printInfo = function(){
//          console.log("Letra: " + this.letterInput + "value: " + value + hasBeenGuessed+ "reultado: " + letra);
//     };


//     var value= "c";
//     var letra = "_";
//     var hasBeenGuessed= false;
//     displayValue = function(){
        
//          if (hasBeenGuessed){
            
//              letra = value;

//              //return letra
//              //console.log(value);  
//          }
//          else{
             
//              //console.log("_");
//          };
//     };
//     this.checkGuess = function(){
//          if (this.letterInput == value){
//              hasBeenGuessed = true;
//          }
//          displayValue();
//     };




// }

// inquirer.prompt([
//     {
//         type: "input",
//         name: "letterGuessed1",
//         message: "Ingrese Letra"
        
//     }
    
// ]).then(function(answers){

//     var searchWord = ["c", "o", "d", "e"];

//     var letterGuessed = answers.letterGuessed1;
    
//     //var playWord = new Guess(searchWord);
    
    
//     //console.log(playWord.wordGuessed + "flag01");


//     var playWord = new Word(searchWord);

    

   

//     console.log(playWord.showWord() + playWord.guessLetter(letterGuessed));
  
// });

