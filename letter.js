

var Letter = function (savedLetter){


    this.letterValue = savedLetter;
    var letra = "_";
    this.hasBeenGuessed = false; 

  

    this.displayValue = function(){
        
         if (this.hasBeenGuessed){
            
             letra = this.letterValue;

             return letra
              
         }
         else{
             return "_"
             
         };
    };
    this.checkGuess = function(letterGuessed){
         if (letterGuessed == this.letterValue){
             this.hasBeenGuessed = true;
             return true
         }
         else{
             return false
         }
         
    };

}
module.exports =Letter;




