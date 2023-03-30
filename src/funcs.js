import { imageData } from "./data";

function validateZip(formInput) {
  const zipInput = document.querySelector("#zipcode");
  const zipError = document.querySelector(".error_box_one");

  if (formInput.target.validity.patternMismatch) {
    zipInput.setCustomValidity("Please enter a valid US Zipcode.");
    zipError.innerHTML = "Please enter a valid US Zipcode.";
  } else {
    zipInput.setCustomValidity("");
    zipError.innerHTML = "";
  }
}

function pageContent(data) {
  const apiData = { ...data };

  drawLocBox(apiData);
}

function drawLocBox(data) {
  const apiData = { ...data };
  const locBox = document.querySelector(".loc_box h2");

  if (apiData.cod == "200") {
    locBox.innerHTML = `${apiData.name}`;
    drawWeathCondition(apiData);
  } else {
    locBox.innerHTML = `Error ${apiData.cod}: ${apiData.message}`;
  }
}

function drawWeathCondition(data) {
  const currWeather = data.weather[0].main;
  const curWeathDisplay = document.querySelector(".weather_img_box > p");

  curWeathDisplay.innerHTML = currWeather;
}

function drawImage(data) {
  const apiData = { ...data };
  console.log(apiData);
  const imgBox = document.querySelector(".weather_image");

  imgBox.src = apiData.data.images.original.url;
}

function errorHandle() {
  const locBox = document.querySelector(".loc_box h2");
  locBox.innerHTML = `Failed to fetch data.`;
}

export { validateZip, pageContent, errorHandle, drawImage };
