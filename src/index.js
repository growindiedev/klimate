import "./style.scss";
import { fetchApi } from "./apiFunctions";
import index from "./index.html";

//https://kfig21.github.io/weather_api_react/

let searchBar = document.querySelector(".search-bar");

let searchBtn = document.querySelector(".search-btn");
searchBtn.addEventListener("click", fetchApi);
