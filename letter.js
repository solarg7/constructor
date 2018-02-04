var inquirer = require("inquirer");

function Programmer(letterInput){

    this.letterInput = letterInput;

    // this.printInfo = function(){
    //     console.log("Letra: " + this.letterInput);
    //};
}

inquirer.prompt([
    {
        type: "input",
        name: "letterInput",
        message: "Ingrese Letra"
    }
]).then(function(answers){
    
    var letterGuessed = new Programmer(answers.letterInput);
    
    //letterGuessed.printInfo();
});



console.log(letterGuessed);

var letter ={
    value: "c",
    hasBeenGuessed: false,
    displayValue: function(){
        if (hasBeenGuessed){
            return value
        }
        else{
            return "_"
        };
    },
    checkGuess: function(letterGuessed){
        if (letterGuessed == value){
            hasBeenGuessed = true;
        }
    }
};


