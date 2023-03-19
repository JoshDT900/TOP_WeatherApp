function validateZip(formInput) {
  const zipEle = document.querySelector("#zipcode");
  const zipError = document.querySelector(".error_box_one");

  if (
    formInput.target.validity.patternMismatch &&
    formInput.target.id == "zipcode"
  ) {
    zipError.innerHTML = "Please enter a valid US Zipcode.";
  } else {
    zipError.innerHTML = "";
  }
}



export { validateZip };
