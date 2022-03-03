AOS.init();
setInterval(tara,1000);
function tara(){
    var myTime = document.getElementById("time");
var myDay = document.getElementById("day");

let mydate = new Date();
let days = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat'
];
var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
let title = "AM";
let day = mydate.getDay();
let month = mydate.getMonth();
let year = mydate.getFullYear();
let date = mydate.getDate();
let ss = mydate.getSeconds();
let hh = mydate.getHours();
let mm = mydate.getMinutes();
if(hh>11){
    if(mm>59){
        if(ss>59){
            hh -=12;
            
        }
    }
    title = "PM";
}
if(ss<10){
    ss = "0" + ss
}
if(mm<10){
    mm = "0" + mm
}
if(hh<10){
    hh = "0" + hh
}
    myTime.innerHTML = `${hh}:${mm}:${ss} ${title}`
    myDay.innerHTML = `${days[day]} | ${date} ${months[month]} ${year}`;
}

