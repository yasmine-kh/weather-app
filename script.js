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