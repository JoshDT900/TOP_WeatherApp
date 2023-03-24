import APIKEY from "../key/key.json";

async function weatherData(data, func) {
  const formData = data;
  const renderFunc = func;
  let zipCode = formData.get("zipcode");

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&units=imperial&appid=${APIKEY.key}`,
    { mode: "cors" }
  );
  const weatherInfo = await response.json();

  renderFunc(weatherInfo);
}

export default weatherData;
