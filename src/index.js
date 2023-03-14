// import APIKEY from "../key/key.json"


function navBar(body) {
  const bodyEle = body;

  console.log(bodyEle);
  

}

function pageRender() {
  const bodyEle = document.querySelector("body");

  navBar(bodyEle)
}

(() => {
  pageRender();
})();