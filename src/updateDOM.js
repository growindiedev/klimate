{
  /* <div class="main">
  <div class="main-card">
    <div class="place">Montreal</div>
    <div class="material-icons-round weather-logo">light_mode</div>
    <div class="card">
      <div class="temp">18°</div>
      <div class="high-low">high/low</div>
      <div class="desc">rainy</div>
    </div>
  </div>
</div>; */
}

let mainPlace = document.querySelector(".main-card > .place");
let mainLogo = document.querySelector(".main-card > .weather-logo");
let temp = document.querySelector(".main-card > .card > .temp");
let highLow = document.querySelector(".main-card > .card > .high-low");
let desc = document.querySelector(".main-card > .card > .desc");

export const updateMainCard = (data) => {
  mainPlace.textContent = data.name;
  temp.textContent = data.main.temp;
  highLow.textContent = `${data.main.temp_max} / ${data.main.temp_min}`;
  desc.textContent = data.weather[0].description;
};
