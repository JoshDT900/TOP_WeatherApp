import css from "../src/style.css";
import assetMod from "./assets";
import { domEleGen } from "dom_gen_cosbert";
import { validateZip, pageContent, errorHandle } from "./funcs";
import { weatherData, imageData } from "../src/data";

function navBarGen(body) {
  const bodyEle = body;

  const navWrap = domEleGen.makeEle("nav", "", ["class", "nav_wrap"]);
  bodyEle.appendChild(navWrap);

  const projName = domEleGen.makeEle("h1", "TOP: Weather App Project", [
    "class",
    "project_name",
  ]);
  navWrap.appendChild(projName);

  const externLinks = domEleGen.makeEle("div", "", ["class", "external_links"]);
  navWrap.appendChild(externLinks);

  const createdEle = domEleGen.makeEle("p", "Created By: David T.", [
    "class",
    "created_by",
  ]);
  externLinks.appendChild(createdEle);

  const gitImgArr = [
    ["src", assetMod.gitImg],
    ["alt", "Github Cat Logo"],
    ["class", "git_logo"],
  ];
  const gitLinkArr = [
    ["href", "https://github.com/JoshDT900"],
    ["target", "_blank"],
  ];
  const gitImg = domEleGen.makeEle("img", "", gitImgArr);
  const gitLink = domEleGen.makeEle("a", "", gitLinkArr);
  externLinks.appendChild(gitLink).appendChild(gitImg);
}

function formGen(body) {
  const mainEle = body;

  const formEle = domEleGen.makeEle("form", "", [["action", ""]]);
  mainEle.appendChild(formEle);

  const divBoxOne = domEleGen.makeEle("div", "", ["class", "zip_box"]);
  formEle.appendChild(divBoxOne);

  const zipLabel = domEleGen.makeEle("label", "Zipcode", ["for", "zipcode"]);
  divBoxOne.appendChild(zipLabel);

  const zipInputArr = [
    ["type", "text"],
    ["name", "zipcode"],
    ["id", "zipcode"],
    ["pattern", "[0-9]{5}"],
    ["maxlength", "5"],
    ["required", ""],
  ];
  const zipInput = domEleGen.makeEle("input", "", zipInputArr);
  const spanBoxOne = domEleGen.makeEle("span", "", [
    "class",
    "error_box_one error",
  ]);
  divBoxOne.appendChild(zipInput);
  divBoxOne.appendChild(spanBoxOne);

  const formSubBtn = domEleGen.makeEle("button", "Submit", ["type", "submit"]);
  formEle.appendChild(formSubBtn);

  formEle.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(formEle);
    weatherData(formData, pageContent).catch((error) => {
      errorHandle(error);
    });
  });

  zipInput.addEventListener("input", (e) => {
    validateZip(e);
  });
}

function weatherBox(ele) {
  const mainEle = ele;

  const locationBox = domEleGen.makeEle("div", "", ["class", "loc_box"]);
  const locText = domEleGen.makeEle("h2", ``);
  mainEle.appendChild(locationBox);
  locationBox.appendChild(locText);
}

function weatherImgBox(ele, data) {
  const mainEle = ele;
  const imgData = data;

  const wthImgBox = domEleGen.makeEle("div", "", ["class", "weather_img_box"]);
  mainEle.appendChild(wthImgBox);

  const weatherImage = domEleGen.makeEle("img", "", [
    ["src", "placeholder"],
    ["alt", "placeholder text"],
    ["class", "weather_image"]
  ])
  wthImgBox.appendChild(weatherImage)

  const weatherImgTxt = domEleGen.makeEle("p", "Placeholder Text")
  wthImgBox.appendChild(weatherImgTxt);
}


function weatherBody(ele) {
  const mainEle = ele;

  const todayWeathEle = domEleGen.makeEle("div", "", ["class", "todays_weather"])
  mainEle.appendChild(todayWeathEle);

  weatherImgBox(todayWeathEle);

  // const picURL = data;
  // console.log(picURL);
}

function mainGen(body) {
  const bodyEle = body;

  const mainEleWrap = domEleGen.makeEle("div", "", ["class", "main_wrap"]);
  bodyEle.appendChild(mainEleWrap);

  formGen(mainEleWrap);
  weatherBox(mainEleWrap);
  weatherBody(mainEleWrap);
}

function pageRender() {
  const bodyEle = document.querySelector("body");
  const defaultZip = new Map();
  defaultZip.set("zipcode", "28601");

  weatherData(defaultZip, pageContent);

  navBarGen(bodyEle);
  mainGen(bodyEle);
}

(() => {
  pageRender();
})();
