// Assignment 4 >11

var input = parseInt(prompt("Enter Number")),
    splitNumber = (""+input).split("").map(Number);
    length = splitNumber.length,
    sum = 0   

for(i=0; i<length; i++){
    sum += splitNumber[i] 
}
console.log("Mean " + sum/length);