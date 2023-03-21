function validateZip(formInput) {
  const zipInput = document.querySelector("#zipcode")
  const zipError = document.querySelector(".error_box_one");

  if (formInput.target.validity.patternMismatch) {
    zipInput.setCustomValidity("Please enter a valid US Zipcode.");
    zipError.innerHTML = "Please enter a valid US Zipcode.";
  } else {
    zipError.innerHTML = "";
  }
}

function pageContent(data) {
  const apiData = { ...data };
  const locBox = document.querySelector(".loc_box h2");
  console.log(apiData);

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

export { validateZip, pageContent, errorHandle };
