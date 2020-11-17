//-----------------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------------
// Minimum and Maximum value
let numArray = [Math.floor(Math.random()*10),Math.floor(Math.random()*10),Math.floor(Math.random()*10)];
console.log('Three numbers to be compared are: '+numArray[0] + ',' +numArray[1] + ',' +numArray[2])
if(numArray[0] > numArray[1] && numArray[0] > numArray[2]){
    console.log('Maximum of the given number is: '+numArray[0]);
    if(numArray[1] > numArray[2]){
        console.log('Minimum of the given number is: '+numArray[2]);
    }
    else{
        console.log('Minimum of the given number is: '+numArray[1]);
    }
}
else if(numArray[1] > numArray[2]){
    console.log('Maximum of the given number is: '+numArray[1]);
    if(numArray[0] > numArray[2]){
        console.log('Minimum if the given number is: '+numArray[2]);
    }
    else{
        console.log('Minimum of the given number is: '+numArray[0]);
    }
}
else{
    console.log('Miximum of the given number is: '+numArray[2]);
    if(numArray[0] > numArray[1]){
        console.log('Minimum of the given number is: '+numArray[1]);
    }
    else{
        console.log('Minimum of the given number is: '+numArray[0]);
    }
}
//-----------------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------------
// //Coin Flip
let random = Math.floor(Math.random() * 2);
switch(random){
    case 0:
        console.log('Heads');
        break;
    case 1:
        console.log('Tails');
        break;
}
//-----------------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------------
//Program that takes month and day from the console and compares them to a pre defined range
const prompt = require('prompt-sync')();
var inpDate = new Date();
var month = prompt('Enter month: ');
month -= 1;
inpDate.setMonth(month);
const date = prompt('Enter date ');
inpDate.setDate(date);
inpDate.setFullYear(2020);
console.log(inpDate);
const startDate = new Date();
startDate.setFullYear(2020, 02, 20);
const lastDate = new Date();
lastDate.setFullYear(2020,05,20);
if (inpDate >= startDate && inpDate <= lastDate){
    console.log('Date entered is in the range');
}
else{
    console.log('Date is out of range');
}
//-----------------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------------
//Checking if the given year is a leap year or not
var inputYear = prompt('Enter the year: ');
if(inputYear%4 == 0 && inputYear%100 != 0){
    console.log(inputYear + ' is a leap year');
}
else if(inputYear%4 == 0 && inputYear%100 ==0){
    if(inputYear% 400 == 0){
        console.log(inputYear + ' is a leap year');
    }
    else{
        console.log(inputYear + ' is not a leap year');
    }
}
else{
    console.log(inputYear + ' is not a leap year');
}
//-----------------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------------
