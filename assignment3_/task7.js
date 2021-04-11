var a = [10,20,4,40,60,70] , b = [1,2,3,4,5,6,7,8,9,10] , Marr = [];
Marr = [...new Set([...b, ...a])];
document.write(Marr);