var arr = [];
document.write("a. Counting: ");
for (var i = 1 ; i <= 15 ; i++) {
    document.write(arr.push(i) + ", ");
}
for (var i = 1 ; i <= 5 ; i++) {
    arr.pop();
}
document.write("<br>" + "b. Reverse counting: ");
for (var i = 9 ; i >= 0 ; i--) {
    document.write(arr[i] + ", ");
}
document.write("<br>" + "c. Even: ");
for (var i = 0 ; i <= 20 ; i += 2) {
    document.write(i + ", ");
}
document.write("<br>" + "d. Odd: ");
for (var i = 1 ; i <= 19 ; i += 2) {
    document.write(i + ", ");
}
document.write("<br>" + "e. Series: ");
for (var i = 2 ; i <= 20 ; i += 2) {
    document.write(i + "k, ");
}