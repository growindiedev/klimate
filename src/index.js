import "./style.scss";
import { getData, toggleTemp } from "./apiFunctions";
import index from "./index.html";

//https://kfig21.github.io/weather_api_react/
if (!localStorage.getItem("localCity")) {
  localStorage.setItem("localCity", "Montreal");
  localStorage.setItem("localTemp", "metric");
  getData();
} else {
  getData();
}

let tempToggleBtn = document.querySelector(".temp-toggle-btn");
let searchBtn = document.querySelector(".search-btn");

tempToggleBtn.addEventListener("click", toggleTemp);
searchBtn.addEventListener("click", getData);
console.log("localStorage", localStorage);
