// Assignment 4 > 4


var inputText = prompt("Enter Your Email ")
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(mailformat.test(inputText)){
    alert("You Enter Valid Email")
}
else{
alert("You have entered an invalid email address!");
}
