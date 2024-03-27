const apikey="e9aef024719e824385e6a91d49b3a606"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metrics&q="
const searchBox = document.querySelector(".search input")
const weatherIcon = document.querySelector(".weather-icon")

async function checkweather(city){
  const response = await fetch(apiUrl + city + `&appid=${apikey}`)
if(response.status === 404){
  document.querySelector(".error").style.display= "block"
  document.querySelector(".weather").style.display = "none"
} else {

  let data = await response.json()
  console.log(data)
 document.querySelector(".city").innerHTML = data.name
document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "℃"
document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr"
if (data.weather[0].main === "Clouds"){
  weatherIcon.src = "clouds.png"
} else if (data.weather[0].main === "Clear")
{weatherIcon.src = "clear.png"}
else if (data.weather[0].main === "Rain")
{weatherIcon.src = "rain.png"}
else if (data.weather[0].main === "Drizzle")
{weatherIcon.src = "drizzle.png"}
else if (data.weather[0].main === "Mist")
{weatherIcon.src = "mist.png"};

document.querySelector(".weather").style.display = "block"
document.querySelector(".error").style.display= "none"


}
}

function searchBtn(){
  checkweather(searchBox.value);
}
checkweather()