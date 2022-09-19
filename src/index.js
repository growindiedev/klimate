import "./style.scss";
import { fetchApi, toggleTemp } from "./apiFunctions";
import index from "./index.html";

//https://kfig21.github.io/weather_api_react/
if (!localStorage.getItem("localCity")) {
  localStorage.setItem("localCity", "Montreal");
  localStorage.setItem("localTemp", "metric");
  fetchApi();
}

let tempToggleBtn = document.querySelector(".temp-toggle-btn");
let searchBtn = document.querySelector(".search-btn");

TempToggleBtn.addEventListener("click", toggleTemp);
searchBtn.addEventListener("click", fetchApi);
console.log("localStorage", localStorage);
