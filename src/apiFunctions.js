import { updateMainCard } from "./updateDOM";

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

export const toggleTemp = () => {};

const fetchData = async (city, tempUnit) => {
  try {
    let { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}&units=${tempUnit}`
    );
    // use localStorage
    updateMainCard(data);
    console.log(response);
    return;
  } catch (error) {
    alert(error);
  }

  try {
    let response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.WEATHER_API_KEY}&units=${tempUnit}`
    );
    console.log("2", response);
  } catch (err) {
    alert(err);
  }
};

export const fetchApi = async () => {
  let cityName = getDataFromForm();
  let localCity = localStorage.getItem("localCity");
  let localTemp = localStorage.getItem("localTemp");

  if (!cityName && localCity && localTemp) {
    fetchData(localCity, localTemp);
  } else if (cityName && !localCity) {
    fetchData(cityName, localTemp);
  }
};
