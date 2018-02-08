//console.log("paolita");
var Letter = require("./letter.js");


//var inquirer = require("inquirer");


// var Guess = function (searchWord){
//     this.hasBeenGuessed = false;
//     this.wordGuessed = [];
//     console.log("hola1");
//     for(i=0; i< searchWord.length; i++){
//         this.wordGuessed.push("_");
        
//     }
// };


var Word = function(searchWord){    
    //console.log("hola2");
    //this.wordGuessed = [];
    this.searchWord1 = searchWord;

    this.showCounter = 0;

    this.savedLetter = [];

    //var showWord = [];
    
    for(i = 0; i < this.searchWord1.length; i++){
        this.savedLetter.push(new Letter(this.searchWord1[i]));
    };

    this.showWord = function(){
        var showWord1 = "";
        var showLetter = "";
        var letterCounter = 0;
        for (i = 0; i < this.searchWord1.length; i++){
            showLetter = this.savedLetter[i].displayValue();
            if (showLetter != "_"){
                letterCounter++;
            };


            showWord1 += " " + showLetter;
            
        }

        this.showCounter = letterCounter + 1;
        return showWord1;
        
    }
    


    this.guessLetter = function (letterGuessed){
        var beenGuessed = false;
        for (i = 0; i < this.searchWord1.length; i++){
            if (this.savedLetter[i].checkGuess(letterGuessed)){
                beenGuessed = true; 
            };
        }

        return beenGuessed;
    }
        
    
        // var letterAux = new Letter(savedLetter);

        // showWord += " " + letterAux.checkGuess(letterGuessed); 

        // return showWord;

        // //letterAux.checkGuess(letterGuessed);

        // // if (letterAux.checkGuess(letterGuessed)){
        // //     this.wordGuessed[i] = letterAux.displayValue();
        // // }

    // }
   
}

module.exports = Word;
// module.exports = Guess;

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