import { updateMainCard, updateForecastCards } from "./updateDOM";

import axios from "axios";

function getDataFromForm() {
  const input = document.querySelector(".search-bar");
  const cityName = input.value;

  // if not an empty string
  if (cityName) {
    // remove whitespace for the api call
    return cityName
      .replace(/(\s+$|^\s+)/g, "") // remove whitespace from begining and end of string
      .replace(/(,\s+)/g, ",") // remove any white space that follows a comma
      .replace(/(\s+,)/g, ",") // remove any white space that preceeds a comma
      .replace(/\s+/g, "+"); // replace any remaining white space with +, so it works in api call
  }
  return "";
}

const fetchApi = async (city, tempUnit) => {
  let weatherCall;
  try {
    weatherCall = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}&units=${tempUnit}`
    );
    // use localStorage
    updateMainCard(weatherCall.data, tempUnit);
    //console.log(data);
  } catch (error) {
    alert(error);
  }

  try {
    let forecastCall = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${weatherCall.data.coord.lat}&lon=${weatherCall.data.coord.lon}&exclude=minutely,hourly,alerts&appid=e705fd2733337e25a8b91977646312e1&units=${tempUnit}`
    );
    updateForecastCards(forecastCall.data.daily, tempUnit);
    console.log("2", forecastCall);
  } catch (err) {
    alert(err);
  }
};

export const getData = async () => {
  const cityName = getDataFromForm();
  const localCity = localStorage.getItem("localCity");
  const localTemp = localStorage.getItem("localTemp");

  if (!cityName && localCity && localTemp) {
    fetchApi(localCity, localTemp);
  } else if (cityName) {
    fetchApi(cityName, localTemp);
    localStorage.setItem("localCity", cityName);
  }
};

export const toggleTemp = () => {
  const localTemp = localStorage.getItem("localTemp");
  if (localTemp == "metric") {
    localStorage.setItem("localTemp", "imperial");
  } else if (localTemp == "imperial") {
    localStorage.setItem("localTemp", "metric");
  }
  getData();
};
