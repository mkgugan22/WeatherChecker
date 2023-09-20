//for those api use open weather api website and get spl key for your mail id
const apiKey = "426b8e2229166515c0a344ed418ba0ab";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status== 404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
        var data = await response.json(); //this data willl have all info about weather

        console.log(data);
    
        document.querySelector(".city").innerHTML =data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +"°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity+ "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    
        if(data.weather[0].main == "Clouds"){
                weatherIcon.src="https://img.icons8.com/?size=1x&id=RcBBZX2XlWJV&format=png"
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src="https://img.icons8.com/?size=1x&id=txoP0q0H3NEb&format=png"
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src="https://img.icons8.com/?size=1x&id=15360&format=png"
        }
        else if(data.weather[0].main == "Dizzle"){
            weatherIcon.src="https://img.icons8.com/?size=1x&id=44365&format=png"
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src="https://img.icons8.com/?size=1x&id=113637&format=png"
        }
    
        document.querySelector(".weather").style.display="block";
    }
 
}
searchBtn.addEventListener("click",()=>{
  checkWeather(searchBox.value);
});
