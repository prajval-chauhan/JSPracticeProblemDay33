//-----------------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------------
//Creating random fumction to get single digit
let randomNum = Math.floor(Math.random()*10);
console.log(randomNum);
//-----------------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------------
//Using random to get a number between 1 and 6 and adding them
let diceOne = Math.floor(Math.random()*6)+1;
let diceTwo = Math.floor(Math.random()*6)+1;
console.log(diceOne + diceTwo);
//-----------------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------------
//Enter five random 2 digit numbers and get their sum and average values
let numArray = [Math.floor(Math.random()*10),Math.floor(Math.random()*10),Math.floor(Math.random()*10),Math.floor(Math.random()*10)];
let sum = 0;
for(i=0; i< numArray.length;i++)
{
    console.log(numArray[i]+',');
    sum = sum + numArray[i];
}
let avg = sum / numArray.length;
console.log('Sum of the numbers is: ' +sum);
console.log('Average of the numbers is:'+avg);
//-----------------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------------
//Unit conversion
let oneFootInInches = 12;
let oneInchInFoot = 1/oneFootInInches;
let inputInch = 42;
let convertInchToFoot = inputInch * oneInchInFoot;
console.log(inputInch + 'inches in foot equals ' + convertInchToFoot + 'ft' );
console.log('Inpur Area = 60ft * 40ft ');
let lengthInch = 60;
let breadthInch = 40;
let areaFoot = (lengthInch * oneInchInFoot) * (breadthInch * oneInchInFoot);
console.log('Converted Area = '+areaFoot +' sq ft');
console.log('Area of 25 such plots: '+25*areaFoot+' sq ft');   
//-----------------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------------- 