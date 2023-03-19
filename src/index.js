import css from "../src/style.css";
import assetMod from "./assets";
import { domEleGen } from "dom_gen_cosbert";
import { validateZip, validateCity } from "./funcs";
import weatherData from "../src/data";

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

  const formEle = domEleGen.makeEle("form", "", [
    ["action", ""],
    ["novalidate", ""],
  ]);
  mainEle.appendChild(formEle);

  const divBoxOne = domEleGen.makeEle("div", "", ["class", "zip_box"]);
  formEle.appendChild(divBoxOne);

  // const divBoxTwo = domEleGen.makeEle("div", "", ["class", "city_box"]);
  // formEle.appendChild(divBoxTwo);

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

  // const cityLabel = domEleGen.makeEle("label", "City Name", ["for", "city"]);
  // divBoxTwo.appendChild(cityLabel);

  // const cityInpArr = [
  //   ["type", "text"],
  //   ["name", "city"],
  //   ["id", "city"],
  //   [
  //     "pattern",
  //     "^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$",
  //   ],
  //   ["maxlength", "20"],
  //   ["required", ""],
  // ];
  // const cityInput = domEleGen.makeEle("input", "", cityInpArr);
  // const spanBoxTwo = domEleGen.makeEle("span", "", [
  //   "class",
  //   "error_box_two error",
  // ]);
  // divBoxTwo.appendChild(cityInput);
  // divBoxTwo.appendChild(spanBoxTwo);

  const formSubBtn = domEleGen.makeEle("button", "Submit", ["type", "submit"]);
  formEle.appendChild(formSubBtn);

  formEle.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(formEle);
    console.log(formData);
  });

  zipInput.addEventListener("input", (e) => {
    validateZip(e);
  });

  // cityInput.addEventListener("input", (e) => {
  //   validateCity(e);
  // });
}

function mainGen(body) {
  const bodyEle = body;

  const mainEleWrap = domEleGen.makeEle("div", "", ["class", "main_wrap"]);
  bodyEle.appendChild(mainEleWrap);

  formGen(mainEleWrap);
}

function pageRender() {
  const bodyEle = document.querySelector("body");

  navBarGen(bodyEle);
  mainGen(bodyEle);
}

(() => {
  pageRender();
  weatherData();
})();
