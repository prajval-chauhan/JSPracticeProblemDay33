//-----------------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------------
//Printing a single digit letters into words
const prompt = require('prompt-sync')();
const number = prompt("Enter any number: ");
switch(number){
    case "0":
        console.log('Number entered is ZERO');
        break;
    case "1":
        console.log('Number entered is ONE');
        break;
    case "2":
        console.log('Number entered is TWO');
        break;
    case "3":
        console.log('Number entered is THREE');
        break;
    case "4":
        console.log('Number entered is FOUR');
        break;
    case "5":
        console.log('Number entered is FIVE');
        break;
    case "6":
        console.log('Number entered is SIX');
        break;
    case "7":
        console.log('Number entered is SEVEN');
        break;
    case "8":
        console.log('Number entered is EIGHT');
        break;
    case "9":
        console.log('Number entered is NINE');
        break;
    default:
        console.log('Invalid choice');
        break; 
}
//-----------------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------------
//Unit Conversion
console.log("enter 1 for converting feet to inches");
console.log("enter 2 for converting inch to feet");
console.log("enter 3 for converting feet to metre");
console.log("enter 4 for converting metre to feet");
var choice = prompt("Enter your input: ");
var input = prompt("Enter the number for conversion: ");
switch(choice){
    case "1":
        console.log(input + "ft equals "+input*12+"inch.");
        break;
    case "2":
        console.log(input + "inch equals "+input/12 +'feet');
        break;
    case "3":
        console.log(input + "ft equals "+input*0.3048+'m');
        break;
    case "4":
        console.log(input + "metres equals "+input * 3.2808+'ft.');
        break;
}