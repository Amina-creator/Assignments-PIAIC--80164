// Assignment 4 > 3

var pass = prompt("Enter Your Password  :");
var letterNumber = /^[0-9a-zA-Z]/;
var type = typeof(pass)

if(pass.length < 8){
    alert("You Enter Invalid Password");
}else if (type === "number"){
    alert("You Enter Invalid Password");
}else if(letterNumber.test(letterNumber)){
   alert("You Enter valid Password")
}
