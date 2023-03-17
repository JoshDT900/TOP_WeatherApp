import APIKEY from "../key/key.json";

async function weatherData() {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=Conover,28613&appid=${APIKEY.key}`,
    { mode: "cors" }
  );
  const weatherData = await response.json();

  console.log(weatherData);
}

export default weatherData;
