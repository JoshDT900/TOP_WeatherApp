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
  drawWeathCondition(apiData);
  drawCurrTemp(apiData);
  drawChanceWeath(apiData);
}

function drawLocBox(data) {
  const apiData = { ...data };
  const locBox = document.querySelector(".loc_box h2");
  const displayWeather = document.querySelector(".todays_weather");

  if (apiData.cod == "200") {
    locBox.innerHTML = `${apiData.name}`;
    displayWeather.style = "opacity: 100";
  } else {
    locBox.innerHTML = `Error ${apiData.cod}: ${apiData.message}`;
    displayWeather.style = "opacity: 0";
  }
}

function drawWeathCondition(data) {
  const currWeather = data.weather[0].main;
  const curWeathDisplay = document.querySelector(".weather_img_box > p");

  curWeathDisplay.innerHTML = currWeather;
}

function drawImage(data) {
  const apiData = { ...data };
  const imgBox = document.querySelector(".weather_image");

  imgBox.src = apiData.data.images.original.url;
}

function errorHandle() {
  const locBox = document.querySelector(".loc_box h2");
  locBox.innerHTML = `Failed to fetch data - Invalid ZIP.`;
}

function currDate() {
  const todaysDate = new Date();

  const options = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  return todaysDate.toLocaleDateString("en-us", options);
}

function drawCurrTemp(data) {
  const apiData = { ...data };
  const currTempEle = document.querySelector(".curr_temp");

  currTempEle.innerHTML = `The Current Temperature: ${Math.round(
    apiData.main.temp
  )}° F`;
}

function drawChanceWeath(data) {
  const apiData = { ...data };
  const highTempTxtEle = document.querySelector(".high_temp_text");
  const lowTempTxtEle = document.querySelector(".low_temp_text");

  highTempTxtEle.innerHTML = `Highs: ${Math.round(apiData.main.temp_max)}° F`;
  lowTempTxtEle.innerHTML = `Lows: ${Math.round(apiData.main.temp_min)}° F `;
}

export { validateZip, pageContent, errorHandle, drawImage, currDate };
