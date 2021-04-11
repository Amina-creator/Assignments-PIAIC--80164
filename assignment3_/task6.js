var aCities = ["Karachi", "Lahore", "Islamabad", "Faisalabad"] , o = ["th","st","nd","rd"] , j = 0;
for (var i = 1 ; i <= 3 ; i++) {
    document.write(i + o[i] + " choice is " + aCities[j] + "<br>");
    j++;
}