// Assignment 4 > 8

var numbers = parseInt(prompt("Enter Number Here:"));
var tens = ['', ' one', ' two', ' three', ' four', ' five', ' six', ' seven', ' eight', ' nine', 'ten', ' eleven', ' twelve', ' thirteen', ' fourteen', ' fifteen', ' sixteen', ' seventeen', ' eighteen', ' nineteen'];
var numty = ['', ' ten', ' twenty', ' thirty', ' forty', ' fifty', ' sixty', ' seventy', ' eighty', ' ninety'];
var numred = ['', ' hundered']
var digits = numbers.toString().split('');

if(numbers < 20) {
    console.log(tens[numbers]);
}else if (numbers >= 20 && numbers <100) {
    if (digits[0] > 0) {
        console.log(numty[digits[0]] + tens[digits[1]]);
    }
}else if(numbers => 100){
    console.log(tens[digits[0]] + numred[1] + " and" +tens[digits[2]])
}