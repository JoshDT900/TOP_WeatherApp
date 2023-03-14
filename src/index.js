import APIKEY from "../key/key.json"
import css from "../src/style.css"
import { domEleGen } from "dom_gen_cosbert";


function navBar(body) {
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
    ["src", "../src/imgs/GitHub-Mark-120px-plus.png"],
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

function pageRender() {
  const bodyEle = document.querySelector("body");

  navBar(bodyEle)
}

(() => {
  pageRender();
})();