
var a = prompt("Enter marks in subject a");
a = Number(a);
var b = prompt("Enter marks in subject b");
b = Number(b);
var c = prompt("Enter marks in subject c");
c = Number(c);
marks = (a + b + c);
var d = marks / 3;

document.write ("Total marks: 300");
document.write ("<br>Marks obtained: "+ marks);
document.write ("<br>Percentage :"+d);


if (d >= 80 ) {
document.write (" <br> Grade : A-one <br>    Excellent "); 
}
else if (d >= 70 ) {
document.write (" <br> Grade : A <br>    Good "); 
}
else if (d >= 60 ) {
document.write (" <br> Grade : B <br>    You need to improve "); 
}
else if (d < 60 )
document.write (" <br> Grade : F <br>    Sorry try again ");

