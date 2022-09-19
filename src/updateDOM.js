const mainPlace = document.querySelector(".main-card > .place");
let weeklyWeather = document.querySelector(".weekly-weather");
const locationIcon = document.querySelector("#main-weathericon");
const temp = document.querySelector(".main-card > .card > .temp");
const highLow = document.querySelector(".main-card > .card > .high-low");
const desc = document.querySelector(".main-card > .card > .desc");

export const updateMainCard = (data, tempUnit) => {
  let unit = "";
  if (tempUnit == "metric") {
    unit = "C";
  } else if (tempUnit == "imperial") {
    unit = "F";
  }

  mainPlace.textContent = data.name;
  temp.textContent = `${data.main.temp}° ${unit}`;
  highLow.textContent = `${data.main.temp_max}° / ${data.main.temp_min}° `;
  desc.textContent = data.weather[0].description;
  let { icon } = data.weather[0];
  locationIcon.setAttribute("src", `icons/${icon}.png`);
};

const createWeeklyCard = (date, weather, temp, unit) => {
  let card = document.createElement("div");
  card.classList.add("weekly-card");

  let weeklyDate = document.createElement("div");
  weeklyDate.classList.add("weekly-date");
  weeklyDate.textContent = date;
  card.appendChild(weeklyDate);

  let weatherImg = document.createElement("img");
  weatherImg.setAttribute("src", `icons/${weather[0].icon}.png`);
  weatherImg.classList.add("weekly-weathericon");
  card.appendChild(weatherImg);

  let dailyHighLow = document.createElement("div");
  dailyHighLow.classList.add("daily-high-low");
  dailyHighLow.textContent = `${temp.min}° / ${temp.max}° ${unit}`;
  card.appendChild(dailyHighLow);
  console.log("bitch", card);
  return card;
};

export const updateForecastCards = (data, tempUnit) => {
  weeklyWeather.innerHTML = "";
  let unit = "";
  if (tempUnit == "metric") {
    unit = "C";
  } else if (tempUnit == "imperial") {
    unit = "F";
  }

  data.forEach((element) => {
    let weeklyCard = createWeeklyCard(
      element.dt,
      element.weather,
      element.temp,
      unit
    );
    weeklyWeather.appendChild(weeklyCard);
  });
};
