//console.log("paolita");
var inquirer = require("inquirer");
var Word = require("./word.js");
var Guess = require("./word.js");


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

inquirer.prompt([
    {
        type: "input",
        name: "letterGuessed1",
        message: "Ingrese Letra"
        
    }
    
]).then(function(answers){

    var searchWord = ["c", "o", "d", "e"];

    var letterGuessed = answers.letterGuessed1;
    
    var playWord = new Guess(searchWord);
    
    
    console.log(playWord.wordGuessed + "flag01");


    var playWord = new Word(searchWord, letterGuessed);

    console.log(playWord.wordGuessed + letterGuessed);
  
});

