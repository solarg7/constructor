//console.log("paolita");

var Letter = function (savedLetter){

    //console.log("flag05");

    this.letterValue = savedLetter;
    var letra = "_";
    this.hasBeenGuessed = false; 

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
             return true
         }
         else{
             return false
         }
         
    };

}



module.exports =Letter;




