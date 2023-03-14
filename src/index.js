import APIKEY from "../key/key.json"
import css from "../src/style.css"
import assetMod from "./assets";
import { domEleGen } from "dom_gen_cosbert";
import { doc } from "prettier";


function navBarGen(body) {
  const bodyEle = body;
 
  const navWrap = domEleGen.makeEle("nav", "", ["class", "nav_wrap"])
  bodyEle.appendChild(navWrap);

  const projName = domEleGen.makeEle("h1", "TOP: Weather App Project", ["class", "project_name"]);
  navWrap.appendChild(projName);

  const externLinks = domEleGen.makeEle("div", "", ["class", "external_links"]);
  navWrap.appendChild(externLinks);

  const createdEle = domEleGen.makeEle("p", "Created By: David T.", ["class", "created_by"]);
  externLinks.appendChild(createdEle);

  const gitImgArr = [
    ["src", assetMod.gitImg],
    ["alt", "Github Cat Logo"],
    ["class", "git_logo"],
  ]
  const gitLinkArr = [
    ["href", "https://github.com/JoshDT900"],
    ["target", "_blank"],
  ]
  const gitImg = domEleGen.makeEle("img", "", gitImgArr);
  const gitLink = domEleGen.makeEle("a", "", gitLinkArr);
  externLinks.appendChild(gitLink).appendChild(gitImg)
}

function formGen(body) {
  const mainEle = body;

  const formEle = domEleGen.makeEle("form", "", ["action", ""]);
  mainEle.appendChild(formEle);

  const zipLabel = domEleGen.makeEle("label", "Enter a ZIPCODE. (USA Only)", ["for", "zipcode"]);
  formEle.appendChild(zipLabel);

  const zipInputArr = [
    ["type", "text"],
    ["name", "zipcode"],
    ["id", "zipcode"],
    ["pattern", "[0-9]{5}"],
  ]
  const zipInput = domEleGen.makeEle("input", "", zipInputArr)
  formEle.appendChild(zipInput);

  const formSubBtn = domEleGen.makeEle("button", "Submit", ["type", "submit"]);
  formEle.addEventListener("submit", (e) => {
    e.preventDefault();
  })
  formEle.appendChild(formSubBtn);

}

function mainGen(body) {
  const bodyEle = body;

  const mainEleWrap = domEleGen.makeEle("div", "", ["class", "main_wrap"]);
  bodyEle.appendChild(mainEleWrap);

  formGen(mainEleWrap);
}

function pageRender() {
  const bodyEle = document.querySelector("body");

  navBarGen(bodyEle)
  mainGen(bodyEle);
}

(() => {
  pageRender();
})();