//import myImage from "./icons/01n.png";

let mainPlace = document.querySelector(".main-card > .place");
let locationIcon = document.querySelector("#main-weathericon");
//let mainLogo = document.querySelector(".main-card > .weather-logo");
let temp = document.querySelector(".main-card > .card > .temp");
let highLow = document.querySelector(".main-card > .card > .high-low");
let desc = document.querySelector(".main-card > .card > .desc");

export const updateMainCard = (data, tempUnit) => {
  let unit = "";
  if (tempUnit == "metric") {
    unit = "C";
  } else if (tempUnit == "imperial") {
    unit = "F";
  }

  mainPlace.textContent = data.name;
  temp.textContent = `${data.main.temp}° ${unit}`;
  highLow.textContent = `${data.main.temp_max}° / ${data.main.temp_min}°`;
  desc.textContent = data.weather[0].description;
  let { icon } = data.weather[0];
  locationIcon.setAttribute("src", `icons/${icon}.png`);
};
