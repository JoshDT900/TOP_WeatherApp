import APIKEY from "../key/key.json";

async function weatherData(data, func) {
  const formData = data;
  const renderFunc = func;
  let zipCode = formData.get("zipcode");

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&units=imperial&appid=${APIKEY.weather_key}`,
    { mode: "cors" }
  );
  const weatherInfo = await response.json();

  renderFunc(weatherInfo);

  console.log(weatherInfo);
  return weatherInfo;
}

async function imageData(data, func) {
  const currWeather = `${data.weather[0].main}_weather`;
  const renderFunc = func;

  const response = await fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=${APIKEY.image_key}&s=${currWeather}`,
    { mode: "cors" }
  );
  const imageData = await response.json();

  renderFunc(imageData);
}

export { weatherData, imageData };
