import "./style.scss";
import { fetchApi } from "./fetch";
//https://kfig21.github.io/weather_api_react/

let searchBtn = document.querySelector(".search");
searchBtn.addEventListener("click", fetchApi);
