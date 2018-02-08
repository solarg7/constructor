
var Letter = require("./letter.js");




var Word = function(searchWord){    
;
    this.searchWord1 = searchWord;

    this.showCounter = 0;

    this.savedLetter = [];

    
    
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
        
    

   
}

module.exports = Word;
