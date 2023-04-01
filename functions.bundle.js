"use strict";
(self["webpackChunktop_weatherapp"] = self["webpackChunktop_weatherapp"] || []).push([["functions"],{

/***/ "./src/funcs.js":
/*!**********************!*\
  !*** ./src/funcs.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "currDate": () => (/* binding */ currDate),
/* harmony export */   "drawImage": () => (/* binding */ drawImage),
/* harmony export */   "errorHandle": () => (/* binding */ errorHandle),
/* harmony export */   "pageContent": () => (/* binding */ pageContent),
/* harmony export */   "validateZip": () => (/* binding */ validateZip)
/* harmony export */ });
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




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/funcs.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVuY3Rpb25zLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0I7O0FBRXBCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQixhQUFhO0FBQ3ZDO0FBQ0EsSUFBSTtBQUNKLGdDQUFnQyxZQUFZLElBQUksZ0JBQWdCO0FBQ2hFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQjtBQUNwQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0I7QUFDcEI7O0FBRUEsc0RBQXNEO0FBQ3REO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7O0FBRUEsdUNBQXVDLGtDQUFrQztBQUN6RSxxQ0FBcUMsa0NBQWtDO0FBQ3ZFOztBQUVzRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvcF93ZWF0aGVyYXBwLy4vc3JjL2Z1bmNzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHZhbGlkYXRlWmlwKGZvcm1JbnB1dCkge1xuICBjb25zdCB6aXBJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjemlwY29kZVwiKTtcbiAgY29uc3QgemlwRXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVycm9yX2JveF9vbmVcIik7XG5cbiAgaWYgKGZvcm1JbnB1dC50YXJnZXQudmFsaWRpdHkucGF0dGVybk1pc21hdGNoKSB7XG4gICAgemlwSW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoXCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBVUyBaaXBjb2RlLlwiKTtcbiAgICB6aXBFcnJvci5pbm5lckhUTUwgPSBcIlBsZWFzZSBlbnRlciBhIHZhbGlkIFVTIFppcGNvZGUuXCI7XG4gIH0gZWxzZSB7XG4gICAgemlwSW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoXCJcIik7XG4gICAgemlwRXJyb3IuaW5uZXJIVE1MID0gXCJcIjtcbiAgfVxufVxuXG5mdW5jdGlvbiBwYWdlQ29udGVudChkYXRhKSB7XG4gIGNvbnN0IGFwaURhdGEgPSB7IC4uLmRhdGEgfTtcblxuICBkcmF3TG9jQm94KGFwaURhdGEpO1xuICBkcmF3V2VhdGhDb25kaXRpb24oYXBpRGF0YSk7XG4gIGRyYXdDdXJyVGVtcChhcGlEYXRhKTtcbiAgZHJhd0NoYW5jZVdlYXRoKGFwaURhdGEpO1xufVxuXG5mdW5jdGlvbiBkcmF3TG9jQm94KGRhdGEpIHtcbiAgY29uc3QgYXBpRGF0YSA9IHsgLi4uZGF0YSB9O1xuICBjb25zdCBsb2NCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvY19ib3ggaDJcIik7XG4gIGNvbnN0IGRpc3BsYXlXZWF0aGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RheXNfd2VhdGhlclwiKTtcblxuICBpZiAoYXBpRGF0YS5jb2QgPT0gXCIyMDBcIikge1xuICAgIGxvY0JveC5pbm5lckhUTUwgPSBgJHthcGlEYXRhLm5hbWV9YDtcbiAgICBkaXNwbGF5V2VhdGhlci5zdHlsZSA9IFwib3BhY2l0eTogMTAwXCI7XG4gIH0gZWxzZSB7XG4gICAgbG9jQm94LmlubmVySFRNTCA9IGBFcnJvciAke2FwaURhdGEuY29kfTogJHthcGlEYXRhLm1lc3NhZ2V9YDtcbiAgICBkaXNwbGF5V2VhdGhlci5zdHlsZSA9IFwib3BhY2l0eTogMFwiO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRyYXdXZWF0aENvbmRpdGlvbihkYXRhKSB7XG4gIGNvbnN0IGN1cnJXZWF0aGVyID0gZGF0YS53ZWF0aGVyWzBdLm1haW47XG4gIGNvbnN0IGN1cldlYXRoRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2VhdGhlcl9pbWdfYm94ID4gcFwiKTtcblxuICBjdXJXZWF0aERpc3BsYXkuaW5uZXJIVE1MID0gY3VycldlYXRoZXI7XG59XG5cbmZ1bmN0aW9uIGRyYXdJbWFnZShkYXRhKSB7XG4gIGNvbnN0IGFwaURhdGEgPSB7IC4uLmRhdGEgfTtcbiAgY29uc3QgaW1nQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53ZWF0aGVyX2ltYWdlXCIpO1xuXG4gIGltZ0JveC5zcmMgPSBhcGlEYXRhLmRhdGEuaW1hZ2VzLm9yaWdpbmFsLnVybDtcbn1cblxuZnVuY3Rpb24gZXJyb3JIYW5kbGUoKSB7XG4gIGNvbnN0IGxvY0JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9jX2JveCBoMlwiKTtcbiAgbG9jQm94LmlubmVySFRNTCA9IGBGYWlsZWQgdG8gZmV0Y2ggZGF0YSAtIEludmFsaWQgWklQLmA7XG59XG5cbmZ1bmN0aW9uIGN1cnJEYXRlKCkge1xuICBjb25zdCB0b2RheXNEYXRlID0gbmV3IERhdGUoKTtcblxuICBjb25zdCBvcHRpb25zID0ge1xuICAgIHdlZWtkYXk6IFwibG9uZ1wiLFxuICAgIHllYXI6IFwibnVtZXJpY1wiLFxuICAgIG1vbnRoOiBcInNob3J0XCIsXG4gICAgZGF5OiBcIm51bWVyaWNcIixcbiAgfTtcblxuICByZXR1cm4gdG9kYXlzRGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoXCJlbi11c1wiLCBvcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gZHJhd0N1cnJUZW1wKGRhdGEpIHtcbiAgY29uc3QgYXBpRGF0YSA9IHsgLi4uZGF0YSB9O1xuICBjb25zdCBjdXJyVGVtcEVsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3Vycl90ZW1wXCIpO1xuXG4gIGN1cnJUZW1wRWxlLmlubmVySFRNTCA9IGBUaGUgQ3VycmVudCBUZW1wZXJhdHVyZTogJHtNYXRoLnJvdW5kKFxuICAgIGFwaURhdGEubWFpbi50ZW1wXG4gICl9wrAgRmA7XG59XG5cbmZ1bmN0aW9uIGRyYXdDaGFuY2VXZWF0aChkYXRhKSB7XG4gIGNvbnN0IGFwaURhdGEgPSB7IC4uLmRhdGEgfTtcbiAgY29uc3QgaGlnaFRlbXBUeHRFbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhpZ2hfdGVtcF90ZXh0XCIpO1xuICBjb25zdCBsb3dUZW1wVHh0RWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb3dfdGVtcF90ZXh0XCIpO1xuXG4gIGhpZ2hUZW1wVHh0RWxlLmlubmVySFRNTCA9IGBIaWdoczogJHtNYXRoLnJvdW5kKGFwaURhdGEubWFpbi50ZW1wX21heCl9wrAgRmA7XG4gIGxvd1RlbXBUeHRFbGUuaW5uZXJIVE1MID0gYExvd3M6ICR7TWF0aC5yb3VuZChhcGlEYXRhLm1haW4udGVtcF9taW4pfcKwIEYgYDtcbn1cblxuZXhwb3J0IHsgdmFsaWRhdGVaaXAsIHBhZ2VDb250ZW50LCBlcnJvckhhbmRsZSwgZHJhd0ltYWdlLCBjdXJyRGF0ZSB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9