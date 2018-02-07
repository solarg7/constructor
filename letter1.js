console.log("paolita");
var inquirer = require("inquirer");



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
        name: "letterInput",
        message: "Ingrese Letra"
        
    }
    
]).then(function(answers){
    
    var letterGuessed = new Programmer(answers.letterInput);
    
    letterGuessed.printInfo();

    letterGuessed.checkGuess();
    //letterGuessed.displayValue();
    letterGuessed.printInfo();
    // letterGuessed.checkGuess();
    // letterGuessed.displayValue();   
   
   
});



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




