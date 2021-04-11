var stu = [] , num = [] , per = 0 , j = 1;
for (var i = 0 ; i < 3 ; i++) {
    stu[i] = prompt("Enter Name of Student " + j);
    num[i] = prompt("Enter Score (out of 500) of Student " + j);
    per = (num[i] * 100) / 500;
    document.write("Score of " + stu[i] + " is " + num[i] + ". Percentage: " + per + "%" + "<br>");
    j++;
}