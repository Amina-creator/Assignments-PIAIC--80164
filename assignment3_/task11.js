var A = ["cake" , "apple pie" , "cookie" , "chips" , " patties"] , input = [prompt("Welcome to ABC Bakery.What do you want to order sir/ma'am?" , "cookie")];
var flag = false;
for (var i = 0 ; i <= A.length ; i++) {
    if (A[i] == input[0]) {
        document.write(A[i] + " is " + "<b>" + "available" + "</b>" + " at index " + i + " in our bakery");
        flag = true;
    }
}
if (flag === false) {
    document.write("We are sorry. " + input[0] + " is " + "<b>" + "not available" + "</b>" + " in our bakery");
}