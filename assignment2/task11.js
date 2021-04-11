var hour = prompt("Enter time in 24h " , "1 to 24 input alowed " )
hour = parseInt(hour)
if(hour > 12){
    ext = 'PM';
    hour = (hour - 12);
 
    if(hour < 10){
        result = "0" + hour;
    }else if(hour == 12){
        hour = "00";
        ext = 'AM';
    }
}
else if(hour < 12){
    result = ((hour < 10) ? "0" + hour : hour);
    ext = 'AM';
}else if(hour == 12){
    ext = 'PM';
}

alert(hour + ext)