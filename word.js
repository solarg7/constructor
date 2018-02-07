//console.log("paolita");
var Letter = require("./letter.js");


//var inquirer = require("inquirer");


var Guess = function (searchWord){
    this.hasBeenGuessed = false;
    this.wordGuessed = [];
    console.log("hola1");
    for(i=0; i< searchWord.length; i++){
        this.wordGuessed.push("_");
        
    }
};


var Word = function(searchWord, letterGuessed){    
    console.log("hola2");
    //this.wordGuessed = [];
    this.searchWord1 = searchWord;
    
    
    // for(i=0; i< searchWord.length; i++){
    //     var savedLetter = searchWord[i];
        
    
    //     var letterAux = new Letter(savedLetter);

    //     letterAux.checkGuess(letterGuessed);

    //     if (letterAux.checkGuess(letterGuessed)){
    //         this.wordGuessed[i] = letterAux.displayValue();
    //     }

    // };
   
};

module.exports = Word;
module.exports = Guess;

//console.log(letterGuessed);

//  function Letter(this){
//      var value= "c";
//      var hasBeenGuessed= false;
//      displayValue = function(){
//          if (hasBeenGuessed){
//              return value
//          }
//          else{
//              return "_"
//          };
//      };
//      checkGuess = function(this){
//          if (this.letterInput == value){
//              hasBeenGuessed = true;
//          }
//      };
//  };