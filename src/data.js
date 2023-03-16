import APIKEY from "../key/key.json"

async function weatherData() {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=${APIKEY.key}`, {mode: 'cors'});
  const weatherData = await response.json();

  console.log(weatherData.main);
}

export default weatherData;