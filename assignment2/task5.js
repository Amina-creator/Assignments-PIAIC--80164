var a = 5
var b = prompt("Enter your guess","from 1 to 10")
b = parseInt(b)
if (b === a) {
alert("Bingo! Right answer")
}
else if (b === ++a) {
    alert("Close enough to the answer")
}