import APIKEY from "../key/key.json";

async function weatherData(zip) {
  let zipCode = zip;

  if (zipCode == undefined) {
    zipCode = "28613";
  }

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&units=imperial&appid=${APIKEY.key}`,
    { mode: "cors" }
  );
  const weatherData = await response.json();

  console.log(weatherData);
}

export default weatherData;
