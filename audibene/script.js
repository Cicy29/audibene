
var months = ['January','February','March','April','May','June','July',
'August','September','October','November','December'];       
var behindDate = new Date();
behindDate.setTime(behindDate.getTime() - (2000*3600*24));       
document.getElementById("spanDate").innerHTML = months[behindDate.getMonth()] + " " + behindDate.getDate()+ ", " + behindDate.getFullYear();
