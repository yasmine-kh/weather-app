var xhr=new XMLHttpRequest();
xhr.open("GET","https://api.openweathermap.org/data/2.5/forecast?units=metric&q=Oujda&APPID=a1118bd486a9e7a348bd31f131e2c0d5");

xhr.onload=function(){
     if (xhr.status === 200) {
    var data=JSON.parse(xhr.response);
    console.log(data);
    document.querySelector("header>div>span:first-child").textContent = parseInt(data.main.temp) + "°C";
   document.querySelector(".weather span:first-child").textContent =
parseInt(data.main.temp_max) + "°/" +
parseInt(data.main.temp_min) + "° Feels like " +
parseInt(data.main.feels_like) + "°";
//sunrise sunset
var sunrise = new Date(data.sys.sunrise * 1000);//convert frm unix timestamp to sec
var sunset = new Date(data.sys.sunset * 1000);
var sunriseTime = sunrise.getHours() + ":" + sunrise.getMinutes();
var sunsetTime = sunset.getHours() + ":" + sunset.getMinutes();

document.getElementById("sunrise").textContent = sunriseTime;
document.getElementById("sunset").textContent = sunsetTime;
     }else{
        alert("Error: " + xhr.status);
        }
}
xhr.onerror=function(){
    alert("Error");                      
}
xhr.onloadstart=function(){
    document.getElementById("loading").style.display="block";
}
xhr.onloadend=function(){
    document.getElementById("loading").style.display="none";
}

xhr.send();


var xhr2 = new XMLHttpRequest();

xhr2.open("GET","https://api.openweathermap.org/data/2.5/forecast?units=metric&q=Oujda&appid=a1118bd486a9e7a348bd31f131e2c0d5");

xhr2.onload=function(){

if(xhr2.status === 200){

var data = JSON.parse(xhr2.response);
console.log(data);

var hours = document.querySelectorAll("section > div");

for(let i=0;i<hours.length;i++){

let hourData = data.list[i];

let time = hourData.dt_txt.split(" ")[1].slice(0,5);
let temp = parseInt(hourData.main.temp);
let humidity = hourData.main.humidity;

hours[i].children[0].textContent = time;
hours[i].children[2].textContent = temp + "°";
hours[i].children[3].children[1].textContent = humidity + "%";

}
}
}

xhr2.send();