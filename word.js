//console.log("paolita");
var Letter = require("./letter.js");

//var inquirer = require("inquirer");


var Guess = function (searchWord){
    
    for(i=0; i< searchWord.length; i++){
        this.wordGuessed[i] = "_";
    }
}


var Word = function(searchWord, letterGuessed){    
    
    //this.wordGuessed = [];
    this.searchWord = searchWord;

    
    for(i=0; i< searchWord.length; i++){
        var savedLetter = searchWord[i];
    
        var letterAux = new Letter(savedLetter);

        letterAux.checkGuess(letterGuessed);

        if (letterAux.checkGuess(letterGuessed)){
            this.wordGuessed[i] = letterAux.displayValue();
        }

    };
   
};

module.exports = Word;

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