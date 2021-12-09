var today = new Date();
var date = today.getFullYear()
var day = today.getDay();
var daylist = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturnday"]
var hours = today.getHours();
var minutes =today.getMinutes();
var seconds = today.getSeconds();
var MonthDay = today.getDate();
var month = today.getMonth();
var monthList = ["January","February","March","April","May","June","July","August","September","October","November","December"]

if (hours >= 12){
var hours = today.getHours() + " PM";
} else {
var hours = today.getHours() + " AM";
}



document.getElementById("today").innerHTML = today.toUTCString();
document.getElementById("day").innerHTML = "Today is " + daylist[day] + '. Which is the ' + day + ' of the 7 days in a week.';
document.getElementById("MonthDay").innerHTML = "Which is the day " + MonthDay +" of " + monthList[month];
document.getElementById("time").innerHTML = "Current time is : " + hours + " : " + minutes + " : " + seconds;
console.log(today);
