const apikey="d78c2f3e3336d55b5ad1ea6dae5f807e";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector(".search input");
const searchButton=document.querySelector(".btn");
const weatherIcon=document.querySelector(".weather-icon");
const displayWeather=document.querySelector(".weather");

async function checkWeather(city){
    let response= await fetch(`${apiurl+city}&appid=${apikey}`)
    var data=await response.json();
    console.log(data)

    document.querySelector(".city h1").innerHTML=data.name;
    document.querySelector(".temperature").innerHTML= Math.floor(data.main.temp) +"°c";
    document.querySelector(".humidityRate").innerHTML=data.main.humidity;
    document.querySelector(".wind").innerHTML=data.wind.speed;

    if(data.weather[0].main=="Clouds"){
        weatherIcon.src="assets/cloudy (2).png"
    }else if(data.weather[0].main=="Clear"){
        weatherIcon.src="assets/sun (1).png"
    }else if(data.weather[0].main=="Rain"){
        weatherIcon.src="assets/cloud-rain.png"
    }else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="assets/drizzle.png"
    }else if(data.weather[0].main=="Mist"){
        weatherIcon.src="assets/haze (1).png"
    }
    displayWeather.style.display="block"
}
searchButton.addEventListener("click",()=>{
    checkWeather(searchBox.value)
 })



