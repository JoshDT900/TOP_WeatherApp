import APIKEY from "../key/key.json";

async function weatherData() {
  const geoLoc = await fetch(
    `http://api.openweathermap.org/geo/1.0/zip?zip=28601,us&appid=${APIKEY.key}`,
    { mode: "cors" }
  );
  const geoData = await geoLoc.json();
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${geoData.lat}&lon=${geoData.lon}&units=imperial&appid=${APIKEY.key}`,
    { mode: "cors" }
  );
  const weatherData = await response.json();

  console.log(weatherData);
}

export default weatherData;
