//require("dotenv").config();

export const fetchApi = async () => {
  //fetch("https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}")
  alert("testing");
  await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${process.env.WEATHER_API_KEY}`
    //`https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=8b15604f105094dd1b7c9f3a57200330`
  )
    .then(function (response) {
      alert("success");
      console.dir(response);
      return response;
    })
    .catch(function (err) {
      alert(err);
      return error;
    });
  return;
};
