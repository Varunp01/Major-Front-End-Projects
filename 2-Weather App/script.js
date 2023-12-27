let Sunrisevalue=document.querySelector(".Sunrisevalue");
let Sunsetvalue=document.querySelector(".Sunsetvalue");
let Cloudvalue=document.querySelector(".Cloudvalue");
let Humidityvalue=document.querySelector(".Humidityvalue");
let Maxvalue=document.querySelector(".Maxvalue");
let Minvalue=document.querySelector(".Minvalue");
let Feelvalue=document.querySelector(".Feelvalue");
let Tempvalue=document.querySelector(".Tempvalue");
let WindDvalue=document.querySelector(".WindDvalue");
let WindSvalue=document.querySelector(".WindSvalue");

let home=document.querySelector(".mainPacket");
home.style.display="";
let weatherinfo=document.querySelector(".minipacket");
weatherinfo.style.display="none";
let info=document.querySelector(".infopacket");
info.style.display="none";
let homeicon=document.querySelector(".fa-house");
let infoicon=document.querySelector(".fa-circle-info");
let search=document.querySelector(".fa-magnifying-glass");
let startbtn=document.querySelector("button");
let heading=document.querySelector("h2");
let input=document.querySelector("input");



homeicon.addEventListener("click",function (event) {
    // console.log(event.target);
    home.style.display="";
    weatherinfo.style.display="none";
    info.style.display="none";
});

infoicon.addEventListener("click",function (event) {
    // console.log(event.target);
    home.style.display="none";
    weatherinfo.style.display="none";
    info.style.display="";
});

startbtn.addEventListener("click",function (event) {
    // value=prompt("enter the city");
    // console.log(value);
    let loop1=setInterval(() => {
        input.style.backgroundColor="#04112a";
        
    }, 100);
    let loop2=setInterval(() => {
        input.style.backgroundColor="white";
        
    }, 200);
    setTimeout(() => {
        clearInterval(loop1);
        clearInterval(loop2);
        input.style.backgroundColor="white";
        input.style.color="black";

    }, 1000);
});

function convertUnixTimestampToTime(timestamp) {
    // Convert timestamp to Date object
    const date = new Date(timestamp * 1000); // Multiply by 1000 to convert seconds to milliseconds
  
    // Format date and time
    const formattedTime = date.toLocaleTimeString();
  
    return formattedTime;
}

async function getweather(){
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${input.value}`;
    const options = {
    	method: 'GET',
    	headers: {
    		'X-RapidAPI-Key': '0a798cf052msh1f4bfa4d65ca47ep143a0bjsn680a76a4dc03',
    		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    	}
    };
    let res= await fetch(url,options);
    let data = await res.json();
    console.dir(data);
    Sunrisevalue.innerText=convertUnixTimestampToTime(data.sunrise);
    Sunsetvalue.innerText=convertUnixTimestampToTime(data.sunset);
    Cloudvalue.innerText=data.cloud_pct + "%";
    Humidityvalue.innerText=data.humidity + "%";
    Maxvalue.innerText=data.max_temp + "°C";
    Minvalue.innerText=data.min_temp + "°C";
    Feelvalue.innerText=data.feels_like + "°C";
    Tempvalue.innerText=data.temp + "°C";
    WindDvalue.innerText=data.wind_degrees + "degrees";
    WindSvalue.innerText=data.wind_speed + "m/sec";
}

search.addEventListener("click",function (event) {
    if (input.value=="") {
        alert("enter a city name");
    } else {
            // console.log(input.value);
        getweather();
    heading.innerText=input.value;
    // console.log(data);
    home.style.display="none";
    weatherinfo.style.display="";
    info.style.display="none";
    input.value="";
    }
})