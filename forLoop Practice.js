//--------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------
//Program to print the powers of 2
const prompt = require("prompt-sync")();
var power = 1;
var n = prompt(
  "Enter the order upto which you want to print the powers of 2: "
);
for (var i = 1; i <= n; i++) {
  power *= 2;
  console.log("Power " + i + "= " + power);
}
//--------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------
//Printing the nth harmonic number
n = prompt("Enter the order of which you want the harmonic number: ");
var harmonic = 0;
for (var i = 1; i <= n; i++) {
  harmonic += 1 / i;
}
console.log("Harmonic of " + n + "th order= " + harmonic);
//--------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------
//Prime number check
console.log(
  "Enter the range of numbers between you want to determine the prime numbers"
);
var lowerLimit = prompt("Enter the lower limit: ");
var upperLimit = prompt("Enter the upper limit: ");
rem = 0;
for (i = lowerLimit; i <= upperLimit; i++) {
  var count = 0;
  for (j = 1; j <= Math.sqrt(i); j++) {
    rem = i % j;
    if (i % j == 0) {
      count++;
    }
  }
  console.log(i + (count <= 1 ? " is" : " is not") + " a prime number");
}
//--------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------
//Finding factorial
n = prompt("Enter the number of which you want to calculate factorial: ");
var fact = 1;
for (i = 1; i <= n; i++) {
  fact *= i;
}
console.log("factotial of " + n + " equals: " + fact);
