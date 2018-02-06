//console.log("paolita");

var Letter = function (savedLetter){

    this.letterValue = savedLetter;
    var letra = "_";
    //this.hasBeenGuessed = false; colocar en word.js

    // this.printInfo = function(){
    //      console.log("Letra: " + this.letterInput + "value: " + value + hasBeenGuessed+ "reultado: " + letra);
    // };

    this.displayValue = function(){
        
         if (this.hasBeenGuessed){
            
             letra = this.letterValue;

             return letra
             //console.log(value);  
         }
         else{
             return "_"
             //console.log("_");
         };
    };
    this.checkGuess = function(letterGuessed){
         if (letterGuessed == this.letterValue){
             this.hasBeenGuessed = true;
         }
         
    };

}



module.exports =Letter;




