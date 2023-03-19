function validateZip(formInput) {
  const zipEle = document.querySelector("#zipcode");
  const zipError = document.querySelector(".error_box_one");

  if (
    formInput.target.validity.patternMismatch &&
    formInput.target.id == "zipcode"
  ) {
    zipEle.setCustomValidity("");
    zipError.innerHTML = "Please enter a valid US Zipcode.";
  } else {
    zipError.innerHTML = "";
  }
}

function validateCity(formInput) {
  const cityEle = document.querySelector("#city");
  const cityError = document.querySelector(".error_box_two");

  if (
    formInput.target.validity.patternMismatch &&
    formInput.target.id == "city"
  ) {
    cityEle.setCustomValidity("Please enter a valid US City Name.");
    cityError.innerHTML = "Please enter a valid US City Name.";
  } else {
    cityError.innerHTML = "";
  }
}

export { validateZip, validateCity };
