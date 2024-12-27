const searchbar = document.getElementById("searchbar");
const city = document.getElementById("city");
const temp = document.getElementById("temp");
const feels = document.getElementById("feels");
const image = document.getElementById("image");
const type = document.getElementById("type");
const humid = document.getElementById("humid");
const windUnit = document.getElementById("windUnit");
const pressureUnit = document.getElementById("pressureUnit");
const country = document.getElementById("count");
const min = document.getElementById("min");
const max = document.getElementById("max");

const getWeatherData = async (search) => {
  const API_key = "392741eed6cb22cecb4478db207c7437";
  const API_link = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_key}&units=metric`;
  const data = await fetch(API_link);

  let jsonData = await data.json();

  if (jsonData.cod === "400") {
    alert("Please Enter Location!!!");
    city.innerHTML = "";
    temp.innerHTML = "";
    feels.innerHTML = "";
    type.innerHTML = "";
    searchbar.innerHTML = ""
  } else if (jsonData.cod === "404") {
    alert("City not found");
    city.innerHTML = "";
    temp.innerHTML = "";
    feels.innerHTML = "";
    type.innerHTML = "";
    searchbar.innerHTML = ""
  }
  city.innerHTML = jsonData.name;
  temp.innerHTML = Math.floor(jsonData.main.temp) + "°C";
  feels.innerHTML =
    "Feels Like:- " + Math.floor(jsonData.main.feels_like) + "°C";
  type.innerHTML = jsonData.weather[0].main;
  humid.innerHTML = jsonData.main.humidity + "%";
  windUnit.innerHTML =
    jsonData.wind.speed + "Km/h from " + jsonData.wind.deg + "°";
  pressureUnit.innerHTML = jsonData.main.pressure + "pa";
  country.innerHTML = jsonData.sys.country;
  min.innerHTML = Math.floor(jsonData.main.temp_min) + "°C";
  max.innerHTML = Math.floor(jsonData.main.temp_max) + "°C";

  if (jsonData.weather[0].main === "Clouds") {
    image.src = "https://cdn-icons-png.flaticon.com/512/5903/5903939.png";
  } else if (jsonData.weather[0].main === "Rain") {
    image.src = "https://cdn-icons-png.flaticon.com/512/5136/5136120.png";
  } else if (jsonData.weather[0].main === "Clear") {
    image.src = "https://cdn-icons-png.flaticon.com/512/3222/3222808.png";
  } else if (jsonData.weather[0].main === "Mist") {
    image.src = "https://cdn-icons-png.flaticon.com/512/1197/1197102.png";
  } else if (jsonData.weather[0].main === "Drizzle") {
    image.src =
      "https://cdn2.iconfinder.com/data/icons/weather-filled-outline-3/64/weather07-512.pnghttps://cdn-icons-png.flaticon.com/512/5136/5136120.png";
  } else if (jsonData.weather[0].main === "Haze") {
    image.src = "https://cdn-icons-png.flaticon.com/512/1197/1197102.png";
  } else if (jsonData.weather[0].main === "Smoke") {
    image.src = "https://cdn-icons-png.flaticon.com/512/1197/1197102.png";
  } else {
    image.src = "";
  }
};

function searchBtn() {
  search = searchbar.value;
  getWeatherData(search);
}
