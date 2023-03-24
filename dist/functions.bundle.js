"use strict";
(self["webpackChunktop_weatherapp"] = self["webpackChunktop_weatherapp"] || []).push([["functions"],{

/***/ "./src/funcs.js":
/*!**********************!*\
  !*** ./src/funcs.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
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
  const locBox = document.querySelector(".loc_box h2");

  if (apiData.cod == "200") {
    locBox.innerHTML = `${apiData.name}`;
  } else {
    locBox.innerHTML = `Error ${apiData.cod}: ${apiData.message}`;
  }
}

function errorHandle() {
  const locBox = document.querySelector(".loc_box h2");
  locBox.innerHTML = `Failed to fetch data.`;
}




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/funcs.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVuY3Rpb25zLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CO0FBQ3BCOztBQUVBO0FBQ0EsMEJBQTBCLGFBQWE7QUFDdkMsSUFBSTtBQUNKLGdDQUFnQyxZQUFZLElBQUksZ0JBQWdCO0FBQ2hFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRWlEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9wX3dlYXRoZXJhcHAvLi9zcmMvZnVuY3MuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gdmFsaWRhdGVaaXAoZm9ybUlucHV0KSB7XG4gIGNvbnN0IHppcElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN6aXBjb2RlXCIpO1xuICBjb25zdCB6aXBFcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZXJyb3JfYm94X29uZVwiKTtcblxuICBpZiAoZm9ybUlucHV0LnRhcmdldC52YWxpZGl0eS5wYXR0ZXJuTWlzbWF0Y2gpIHtcbiAgICB6aXBJbnB1dC5zZXRDdXN0b21WYWxpZGl0eShcIlBsZWFzZSBlbnRlciBhIHZhbGlkIFVTIFppcGNvZGUuXCIpO1xuICAgIHppcEVycm9yLmlubmVySFRNTCA9IFwiUGxlYXNlIGVudGVyIGEgdmFsaWQgVVMgWmlwY29kZS5cIjtcbiAgfSBlbHNlIHtcbiAgICB6aXBJbnB1dC5zZXRDdXN0b21WYWxpZGl0eShcIlwiKTtcbiAgICB6aXBFcnJvci5pbm5lckhUTUwgPSBcIlwiO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBhZ2VDb250ZW50KGRhdGEpIHtcbiAgY29uc3QgYXBpRGF0YSA9IHsgLi4uZGF0YSB9O1xuICBjb25zdCBsb2NCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvY19ib3ggaDJcIik7XG5cbiAgaWYgKGFwaURhdGEuY29kID09IFwiMjAwXCIpIHtcbiAgICBsb2NCb3guaW5uZXJIVE1MID0gYCR7YXBpRGF0YS5uYW1lfWA7XG4gIH0gZWxzZSB7XG4gICAgbG9jQm94LmlubmVySFRNTCA9IGBFcnJvciAke2FwaURhdGEuY29kfTogJHthcGlEYXRhLm1lc3NhZ2V9YDtcbiAgfVxufVxuXG5mdW5jdGlvbiBlcnJvckhhbmRsZSgpIHtcbiAgY29uc3QgbG9jQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2NfYm94IGgyXCIpO1xuICBsb2NCb3guaW5uZXJIVE1MID0gYEZhaWxlZCB0byBmZXRjaCBkYXRhLmA7XG59XG5cbmV4cG9ydCB7IHZhbGlkYXRlWmlwLCBwYWdlQ29udGVudCwgZXJyb3JIYW5kbGUgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==