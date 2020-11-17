//--------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------
//Function to convert degree to celcius and vice versa
function convertFahrenheitToCelcius(degF){
    return celius = (degF - 32 )*(5/9);
}
function convertCelciusToFahrenheit(degC){
    return fahrenheit = (degC * 9/5 ) + 32;
}
 const prompt = require('prompt-sync')();
degF = prompt('Enter the temp value to convert into celecius: ');
console.log(degF + 'F in degree celcius equals '+convertFahrenheitToCelcius(degF));
degC = prompt('Enter the temp value to convert into celecius: ');
console.log(degC + 'C in degree fahrenheit equals '+convertCelciusToFahrenheit(degC));
//--------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------
//Function to check if the number is a Palindrome or not 
function checkPalindrome(number){
    tempNum = number;
    var digits = new Array();
    for(i=0; ;i++){
        digits[i] = number%10;
        number = (number - digits[i])/10;
        if(number == 0){
            break;
        }
    }
    let deg = 1;
    let revNum = 0;
    maxPower = digits.length;
    for (i= 1 ; i <= maxPower; i++){
        deg *= 10;
        revNum += digits[digits.length -i] * deg;
    }
    if(revNum == tempNum){
        console.log('yesssssssssssssssss');
    }
    console.log(tempNum +(tempNum == revNum ? ' is' : ' is not') + ' a Palindrome number');
}
number = prompt('Enter a number to check if it us a palindrome number or not: ');
checkPalindrome(number);