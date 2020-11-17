//--------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------
//Program to print the powers of 2 until 256 is reached
const prompt = require("prompt-sync")();
var power = 1;
var i =1;
var n = prompt(
  "Enter the order upto which you want to print the powers of 2: "
);
do{
  power *= 2;
  console.log("Power " + i + "= " + power);
  i++;
}while(power<256 && i<=n);
//--------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------
//Coin flip until either head or tail wins the toss eleven times
var countHead = 0;
var countTail = 0;
do{
    let random = Math.floor(Math.random() * 2);
    switch(random){
        case 0:
            console.log('Heads won');
            countHead += 1;
            break;
        case 1:
            console.log('Tails won');
            countTail += 1;
            break;
    }
}while(countHead < 11 && countTail < 11);
console.log("Head won "+countHead+" times and Tail won "+countTail+" times");
//--------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------
//Gambler Problem
var amount = 100;
var numberOfBets = 0;
var timesWon = 0;
const bet = 1;
do{
    numberOfBets++;
    var result = Math.floor(Math.random()*2);
    if(result == 0){
        amount += 1;
        timesWon++;
    }
    else{
        amount -= 1;
    }
}while(amount < 200 && amount >0);
console.log('Times won: '+timesWon +' \nTotal Bets: '+numberOfBets+'\n'+ (amount == 200 ? 'Goal Reached' : 'No money left to gamble'));
//--------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------



