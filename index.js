//console.log("paolita");
var inquirer = require("inquirer");
var Word = require("./word.js");


function Programmer(letterInput1){

    this.letterInput = letterInput1;

    this.printInfo = function(){
         console.log("Letra: " + this.letterInput + "value: " + value + hasBeenGuessed+ "reultado: " + letra);
    };


    var value= "c";
    var letra = "_";
    var hasBeenGuessed= false;
    displayValue = function(){
        
         if (hasBeenGuessed){
            
             letra = value;

             //return letra
             //console.log(value);  
         }
         else{
             
             //console.log("_");
         };
    };
    this.checkGuess = function(){
         if (this.letterInput == value){
             hasBeenGuessed = true;
         }
         displayValue();
    };




}

inquirer.prompt([
    {
        type: "input",
        name: "letterGuessed",
        message: "Ingrese Letra"
        
    }
    
]).then(function(answers){

    searchWord = ["c", "o", "d", "e"];

    letterGuessed = answers.letterGuessed;

    var playWord = new Word(searchWord, letterGuessed);

    console.log(playWord.wordGuessed);
  
});

module.exports = Word;