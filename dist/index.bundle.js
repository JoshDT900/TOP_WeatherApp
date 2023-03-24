"use strict";
(self["webpackChunktop_weatherapp"] = self["webpackChunktop_weatherapp"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../src/fonts/JosefinSans-Light.ttf */ "./src/fonts/JosefinSans-Light.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../src/fonts/JosefinSans-Regular.ttf */ "./src/fonts/JosefinSans-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../src/fonts/JosefinSans-SemiBold.ttf */ "./src/fonts/JosefinSans-SemiBold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../src/fonts/JosefinSans-Bold.ttf */ "./src/fonts/JosefinSans-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"JosefinSans_Light\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n@font-face {\n  font-family: \"JosefinSans_Reg\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n@font-face {\n  font-family: \"JosefinSans_Semi\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n\n@font-face {\n  font-family: \"JosefinSans_Bold\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n}\n\n* {\n  padding: 0px;\n  margin: 0px;\n  font-family: JosefinSans_Reg, \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n}\n\nbody {\n  height: 100vh;\n\n  background-color: #feffde;\n}\n\n.nav_wrap {\n  display: flex;\n\n  align-items: center;\n  justify-content: space-around;\n\n  height: 100px;\n\n  background-color: #91c788;\n  color: Black;\n\n  border-bottom: 2px solid #52734d;\n  box-shadow: 0px 5px 5px #52734d;\n}\n\n.project_name {\n  font-family: JosefinSans_Bold, \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n}\n\n.external_links {\n  display: flex;\n\n  align-items: center;\n  justify-content: space-around;\n\n  gap: 15px;\n  height: 50%;\n}\n\n.created_by {\n  font-family: JosefinSans_Light, \"Segoe UI\", Tahoma, Geneva, Verdana,\n    sans-serif;\n}\n\n.external_links a {\n  height: 100%;\n}\n.git_logo {\n  height: 100%;\n}\n\n.main_wrap {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 2rem;\n  height: 100%;\n  gap: 25px;\n}\n\nform {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 2fr 1fr;\n  align-items: center;\n  gap: 15px;\n}\n\nform button {\n  padding: 10px;\n  border: 2px solid #52734d;\n  border-radius: 2px;\n  background-color: #91c788;\n  font-family: JosefinSans_Semi, \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  font-size: 16px;\n  justify-self: center;\n  width: 35%;\n}\n\nform button:hover {\n  background-color: #354932;\n  color: #91c788;\n  border: 2px solid #354932;\n}\n\nform input {\n  padding: 5px;\n  outline: 3px solid #52734d;\n  width: 125px;\n  border: none;\n  border-radius: 10px;\n}\n\n.loc_box {\n  padding: 10px;\n  border-bottom: 1px solid black;\n}\n\n.todays_weather {\n  display: flex;\n  gap: 30px;\n  align-items: center;\n  justify-content: space-around;\n  width: 50%;\n}\n\n.weather_img_box {\n  display: flex;\n  flex-direction: column;\n\n  gap: 15px;\n\n  align-items: center;\n  justify-content: center;\n}\n\n.weather_image {\n  height: 250px;\n  width: 325px;\n  border: 3px solid black;\n  box-shadow: 4px 5px 5px black;\n}\n\n.weather_img_box > p {\n  font-size: 30px;\n  font-family: JosefinSans_Bold, \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n}\n\n.weather_info {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  justify-content: space-evenly;\n  font-size: 20px;\n}\n\n.upcoming_forcast {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n  width: 50%;\n}\n\n.forcast_header {\n  padding: 5px;\n  border-bottom-style: double;\n}\n\n.day_box {\n  display: flex;\n  padding: 10px;\n  gap: 10px;\n  width: 100%;\n  border-bottom-style: double;\n  align-items: center;\n  justify-content: space-evenly;\n}\n\n.zip_box,\n.city_box {\n  display: flex;\n  flex-direction: column;\n\n  align-items: center;\n  justify-content: center;\n\n  gap: 10px;\n  width: 265px;\n}\n\ninput:focus:valid {\n  outline-color: rgb(17, 223, 17);  \n}\n\ninput:focus:invalid {\n  outline-color: red;\n}\n\ninput:valid {\n  outline-color: rgb(17, 223, 17);  \n}\n\n.error {\n  font-family: JosefinSans_Semi, \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  color: red;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,gCAAgC;EAChC,4CAA8C;AAChD;;AAEA;EACE,8BAA8B;EAC9B,4CAAgD;AAClD;;AAEA;EACE,+BAA+B;EAC/B,4CAAiD;AACnD;;AAEA;EACE,+BAA+B;EAC/B,4CAA6C;AAC/C;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,6EAA6E;AAC/E;;AAEA;EACE,aAAa;;EAEb,yBAAyB;AAC3B;;AAEA;EACE,aAAa;;EAEb,mBAAmB;EACnB,6BAA6B;;EAE7B,aAAa;;EAEb,yBAAyB;EACzB,YAAY;;EAEZ,gCAAgC;EAChC,+BAA+B;AACjC;;AAEA;EACE,8EAA8E;AAChF;;AAEA;EACE,aAAa;;EAEb,mBAAmB;EACnB,6BAA6B;;EAE7B,SAAS;EACT,WAAW;AACb;;AAEA;EACE;cACY;AACd;;AAEA;EACE,YAAY;AACd;AACA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,gBAAgB;EAChB,YAAY;EACZ,SAAS;AACX;;AAEA;EACE,aAAa;EACb,0BAA0B;EAC1B,2BAA2B;EAC3B,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,yBAAyB;EACzB,kBAAkB;EAClB,yBAAyB;EACzB,8EAA8E;EAC9E,eAAe;EACf,oBAAoB;EACpB,UAAU;AACZ;;AAEA;EACE,yBAAyB;EACzB,cAAc;EACd,yBAAyB;AAC3B;;AAEA;EACE,YAAY;EACZ,0BAA0B;EAC1B,YAAY;EACZ,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,SAAS;EACT,mBAAmB;EACnB,6BAA6B;EAC7B,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,sBAAsB;;EAEtB,SAAS;;EAET,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,uBAAuB;EACvB,6BAA6B;AAC/B;;AAEA;EACE,eAAe;EACf,8EAA8E;AAChF;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,6BAA6B;EAC7B,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,2BAA2B;AAC7B;;AAEA;EACE,aAAa;EACb,aAAa;EACb,SAAS;EACT,WAAW;EACX,2BAA2B;EAC3B,mBAAmB;EACnB,6BAA6B;AAC/B;;AAEA;;EAEE,aAAa;EACb,sBAAsB;;EAEtB,mBAAmB;EACnB,uBAAuB;;EAEvB,SAAS;EACT,YAAY;AACd;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,8EAA8E;EAC9E,UAAU;AACZ","sourcesContent":["@font-face {\n  font-family: \"JosefinSans_Light\";\n  src: url(\"../src/fonts/JosefinSans-Light.ttf\");\n}\n\n@font-face {\n  font-family: \"JosefinSans_Reg\";\n  src: url(\"../src/fonts/JosefinSans-Regular.ttf\");\n}\n\n@font-face {\n  font-family: \"JosefinSans_Semi\";\n  src: url(\"../src/fonts/JosefinSans-SemiBold.ttf\");\n}\n\n@font-face {\n  font-family: \"JosefinSans_Bold\";\n  src: url(\"../src/fonts/JosefinSans-Bold.ttf\");\n}\n\n* {\n  padding: 0px;\n  margin: 0px;\n  font-family: JosefinSans_Reg, \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n}\n\nbody {\n  height: 100vh;\n\n  background-color: #feffde;\n}\n\n.nav_wrap {\n  display: flex;\n\n  align-items: center;\n  justify-content: space-around;\n\n  height: 100px;\n\n  background-color: #91c788;\n  color: Black;\n\n  border-bottom: 2px solid #52734d;\n  box-shadow: 0px 5px 5px #52734d;\n}\n\n.project_name {\n  font-family: JosefinSans_Bold, \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n}\n\n.external_links {\n  display: flex;\n\n  align-items: center;\n  justify-content: space-around;\n\n  gap: 15px;\n  height: 50%;\n}\n\n.created_by {\n  font-family: JosefinSans_Light, \"Segoe UI\", Tahoma, Geneva, Verdana,\n    sans-serif;\n}\n\n.external_links a {\n  height: 100%;\n}\n.git_logo {\n  height: 100%;\n}\n\n.main_wrap {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 2rem;\n  height: 100%;\n  gap: 25px;\n}\n\nform {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 2fr 1fr;\n  align-items: center;\n  gap: 15px;\n}\n\nform button {\n  padding: 10px;\n  border: 2px solid #52734d;\n  border-radius: 2px;\n  background-color: #91c788;\n  font-family: JosefinSans_Semi, \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  font-size: 16px;\n  justify-self: center;\n  width: 35%;\n}\n\nform button:hover {\n  background-color: #354932;\n  color: #91c788;\n  border: 2px solid #354932;\n}\n\nform input {\n  padding: 5px;\n  outline: 3px solid #52734d;\n  width: 125px;\n  border: none;\n  border-radius: 10px;\n}\n\n.loc_box {\n  padding: 10px;\n  border-bottom: 1px solid black;\n}\n\n.todays_weather {\n  display: flex;\n  gap: 30px;\n  align-items: center;\n  justify-content: space-around;\n  width: 50%;\n}\n\n.weather_img_box {\n  display: flex;\n  flex-direction: column;\n\n  gap: 15px;\n\n  align-items: center;\n  justify-content: center;\n}\n\n.weather_image {\n  height: 250px;\n  width: 325px;\n  border: 3px solid black;\n  box-shadow: 4px 5px 5px black;\n}\n\n.weather_img_box > p {\n  font-size: 30px;\n  font-family: JosefinSans_Bold, \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n}\n\n.weather_info {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  justify-content: space-evenly;\n  font-size: 20px;\n}\n\n.upcoming_forcast {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n  width: 50%;\n}\n\n.forcast_header {\n  padding: 5px;\n  border-bottom-style: double;\n}\n\n.day_box {\n  display: flex;\n  padding: 10px;\n  gap: 10px;\n  width: 100%;\n  border-bottom-style: double;\n  align-items: center;\n  justify-content: space-evenly;\n}\n\n.zip_box,\n.city_box {\n  display: flex;\n  flex-direction: column;\n\n  align-items: center;\n  justify-content: center;\n\n  gap: 10px;\n  width: 265px;\n}\n\ninput:focus:valid {\n  outline-color: rgb(17, 223, 17);  \n}\n\ninput:focus:invalid {\n  outline-color: red;\n}\n\ninput:valid {\n  outline-color: rgb(17, 223, 17);  \n}\n\n.error {\n  font-family: JosefinSans_Semi, \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  color: red;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/dom_gen_cosbert/index.js":
/*!***********************************************!*\
  !*** ./node_modules/dom_gen_cosbert/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "domEleGen": () => (/* binding */ domEleGen)
/* harmony export */ });
const domEleGen = (function() {

    const makeEle = function() {
        let argArr = [...arguments];

        if (typeof(argArr[0]) != 'string') {
            return console.log("First argument must be a valid HTML element in string format. Example: 'div' ");
        } else if (typeof(argArr[1]) != "string" && argArr.length === 2) {
            return console.log("Invalid Argument Type. The second argument must be a string");
        } else if (typeof(argArr[2]) != "object" && argArr.length === 3) {
            return console.log("Invalid Arg. Third argument accepts an array or a nested array of arrays.");
        } else if (argArr.length > 3) {
            return console.log("Too many arguments.");
        }

        let newEle = document.createElement(`${argArr[0]}`);
        newEle.textContent = argArr[1];
        
        if (argArr.length === 3 && typeof(argArr[2][0]) === "object"){
            for (let i in argArr[2]){                
                let tempArr = [...argArr[2][i]];

                newEle.setAttribute(...tempArr);
            }
        } else if (typeof(argArr[2]) === "object") {
            newEle.setAttribute(...argArr[2]);
        }
        

        return newEle;   
    }

    return { makeEle };
})();



/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets.js":
/*!***********************!*\
  !*** ./src/assets.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_imgs_GitHub_Mark_120px_plus_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/imgs/GitHub-Mark-120px-plus.png */ "./src/imgs/GitHub-Mark-120px-plus.png");


const assetMod = (function () {
  const gitImg = _src_imgs_GitHub_Mark_120px_plus_png__WEBPACK_IMPORTED_MODULE_0__;

  return { gitImg };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (assetMod);


/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _key_key_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../key/key.json */ "./key/key.json");


async function weatherData(data, func) {
  const formData = data;
  const renderFunc = func;
  let zipCode = formData.get("zipcode");

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&units=imperial&appid=${_key_key_json__WEBPACK_IMPORTED_MODULE_0__.key}`,
    { mode: "cors" }
  );
  const weatherInfo = await response.json();

  renderFunc(weatherInfo);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weatherData);


/***/ }),

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




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/style.css */ "./src/style.css");
/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets */ "./src/assets.js");
/* harmony import */ var dom_gen_cosbert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dom_gen_cosbert */ "./node_modules/dom_gen_cosbert/index.js");
/* harmony import */ var _funcs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./funcs */ "./src/funcs.js");
/* harmony import */ var _src_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/data */ "./src/data.js");






function navBarGen(body) {
  const bodyEle = body;

  const navWrap = dom_gen_cosbert__WEBPACK_IMPORTED_MODULE_2__.domEleGen.makeEle("nav", "", ["class", "nav_wrap"]);
  bodyEle.appendChild(navWrap);

  const projName = dom_gen_cosbert__WEBPACK_IMPORTED_MODULE_2__.domEleGen.makeEle("h1", "TOP: Weather App Project", [
    "class",
    "project_name",
  ]);
  navWrap.appendChild(projName);

  const externLinks = dom_gen_cosbert__WEBPACK_IMPORTED_MODULE_2__.domEleGen.makeEle("div", "", ["class", "external_links"]);
  navWrap.appendChild(externLinks);

  const createdEle = dom_gen_cosbert__WEBPACK_IMPORTED_MODULE_2__.domEleGen.makeEle("p", "Created By: David T.", [
    "class",
    "created_by",
  ]);
  externLinks.appendChild(createdEle);

  const gitImgArr = [
    ["src", _assets__WEBPACK_IMPORTED_MODULE_1__["default"].gitImg],
    ["alt", "Github Cat Logo"],
    ["class", "git_logo"],
  ];
  const gitLinkArr = [
    ["href", "https://github.com/JoshDT900"],
    ["target", "_blank"],
  ];
  const gitImg = dom_gen_cosbert__WEBPACK_IMPORTED_MODULE_2__.domEleGen.makeEle("img", "", gitImgArr);
  const gitLink = dom_gen_cosbert__WEBPACK_IMPORTED_MODULE_2__.domEleGen.makeEle("a", "", gitLinkArr);
  externLinks.appendChild(gitLink).appendChild(gitImg);
}

function formGen(body) {
  const mainEle = body;

  const formEle = dom_gen_cosbert__WEBPACK_IMPORTED_MODULE_2__.domEleGen.makeEle("form", "", [["action", ""]]);
  mainEle.appendChild(formEle);

  const divBoxOne = dom_gen_cosbert__WEBPACK_IMPORTED_MODULE_2__.domEleGen.makeEle("div", "", ["class", "zip_box"]);
  formEle.appendChild(divBoxOne);

  const zipLabel = dom_gen_cosbert__WEBPACK_IMPORTED_MODULE_2__.domEleGen.makeEle("label", "Zipcode", ["for", "zipcode"]);
  divBoxOne.appendChild(zipLabel);

  const zipInputArr = [
    ["type", "text"],
    ["name", "zipcode"],
    ["id", "zipcode"],
    ["pattern", "[0-9]{5}"],
    ["maxlength", "5"],
    ["required", ""],
  ];
  const zipInput = dom_gen_cosbert__WEBPACK_IMPORTED_MODULE_2__.domEleGen.makeEle("input", "", zipInputArr);
  const spanBoxOne = dom_gen_cosbert__WEBPACK_IMPORTED_MODULE_2__.domEleGen.makeEle("span", "", [
    "class",
    "error_box_one error",
  ]);
  divBoxOne.appendChild(zipInput);
  divBoxOne.appendChild(spanBoxOne);

  const formSubBtn = dom_gen_cosbert__WEBPACK_IMPORTED_MODULE_2__.domEleGen.makeEle("button", "Submit", ["type", "submit"]);
  formEle.appendChild(formSubBtn);

  formEle.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(formEle);
    (0,_src_data__WEBPACK_IMPORTED_MODULE_4__["default"])(formData, _funcs__WEBPACK_IMPORTED_MODULE_3__.pageContent).catch((error) => {
      (0,_funcs__WEBPACK_IMPORTED_MODULE_3__.errorHandle)(error);
    });
  });

  zipInput.addEventListener("input", (e) => {
    (0,_funcs__WEBPACK_IMPORTED_MODULE_3__.validateZip)(e);
  });
}

function weatherBox() {
  const mainEle = document.querySelector(".main_wrap");

  const locationBox = dom_gen_cosbert__WEBPACK_IMPORTED_MODULE_2__.domEleGen.makeEle("div", "", ["class", "loc_box"]);
  const locText = dom_gen_cosbert__WEBPACK_IMPORTED_MODULE_2__.domEleGen.makeEle("h2", ``);
  mainEle.appendChild(locationBox);
  locationBox.appendChild(locText);
}

function mainGen(body) {
  const bodyEle = body;

  const mainEleWrap = dom_gen_cosbert__WEBPACK_IMPORTED_MODULE_2__.domEleGen.makeEle("div", "", ["class", "main_wrap"]);
  bodyEle.appendChild(mainEleWrap);

  formGen(mainEleWrap);
  weatherBox();
}

function pageRender() {
  const bodyEle = document.querySelector("body");
  const defaultZip = new Map();
  defaultZip.set("zipcode", "28601");

  navBarGen(bodyEle);
  mainGen(bodyEle);

  (0,_src_data__WEBPACK_IMPORTED_MODULE_4__["default"])(defaultZip, _funcs__WEBPACK_IMPORTED_MODULE_3__.pageContent);
}

(() => {
  pageRender();
})();


/***/ }),

/***/ "./src/fonts/JosefinSans-Bold.ttf":
/*!****************************************!*\
  !*** ./src/fonts/JosefinSans-Bold.ttf ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2a8283a39297befd351b.ttf";

/***/ }),

/***/ "./src/fonts/JosefinSans-Light.ttf":
/*!*****************************************!*\
  !*** ./src/fonts/JosefinSans-Light.ttf ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8c489346b904245e77b8.ttf";

/***/ }),

/***/ "./src/fonts/JosefinSans-Regular.ttf":
/*!*******************************************!*\
  !*** ./src/fonts/JosefinSans-Regular.ttf ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9a9558c2798e8a2f8c5c.ttf";

/***/ }),

/***/ "./src/fonts/JosefinSans-SemiBold.ttf":
/*!********************************************!*\
  !*** ./src/fonts/JosefinSans-SemiBold.ttf ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a374083c74c26c886fe3.ttf";

/***/ }),

/***/ "./src/imgs/GitHub-Mark-120px-plus.png":
/*!*********************************************!*\
  !*** ./src/imgs/GitHub-Mark-120px-plus.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d8c6d6c90bdccf76d860.png";

/***/ }),

/***/ "./key/key.json":
/*!**********************!*\
  !*** ./key/key.json ***!
  \**********************/
/***/ ((module) => {

module.exports = JSON.parse('{"key":"fb67ad7c2d8c0a7a834f530db608e5dd"}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3Bfd2VhdGhlcmFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9wX3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvcF93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b3Bfd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvcF93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL2RvbV9nZW5fY29zYmVydC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b3Bfd2VhdGhlcmFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b3Bfd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b3Bfd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9wX3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9wX3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9wX3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b3Bfd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvcF93ZWF0aGVyYXBwLy4vc3JjL2Fzc2V0cy5qcyIsIndlYnBhY2s6Ly90b3Bfd2VhdGhlcmFwcC8uL3NyYy9kYXRhLmpzIiwid2VicGFjazovL3RvcF93ZWF0aGVyYXBwLy4vc3JjL2Z1bmNzLmpzIiwid2VicGFjazovL3RvcF93ZWF0aGVyYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9zcmMvZm9udHMvSm9zZWZpblNhbnMtTGlnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vc3JjL2ZvbnRzL0pvc2VmaW5TYW5zLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vc3JjL2ZvbnRzL0pvc2VmaW5TYW5zLVNlbWlCb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4uL3NyYy9mb250cy9Kb3NlZmluU2Fucy1Cb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJKb3NlZmluU2Fuc19MaWdodFxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJKb3NlZmluU2Fuc19SZWdcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSm9zZWZpblNhbnNfU2VtaVxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJKb3NlZmluU2Fuc19Cb2xkXFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKTtcXG59XFxuXFxuKiB7XFxuICBwYWRkaW5nOiAwcHg7XFxuICBtYXJnaW46IDBweDtcXG4gIGZvbnQtZmFtaWx5OiBKb3NlZmluU2Fuc19SZWcsIFxcXCJTZWdvZSBVSVxcXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZmRlO1xcbn1cXG5cXG4ubmF2X3dyYXAge1xcbiAgZGlzcGxheTogZmxleDtcXG5cXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG5cXG4gIGhlaWdodDogMTAwcHg7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTFjNzg4O1xcbiAgY29sb3I6IEJsYWNrO1xcblxcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM1MjczNGQ7XFxuICBib3gtc2hhZG93OiAwcHggNXB4IDVweCAjNTI3MzRkO1xcbn1cXG5cXG4ucHJvamVjdF9uYW1lIHtcXG4gIGZvbnQtZmFtaWx5OiBKb3NlZmluU2Fuc19Cb2xkLCBcXFwiU2Vnb2UgVUlcXFwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmV4dGVybmFsX2xpbmtzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuXFxuICBnYXA6IDE1cHg7XFxuICBoZWlnaHQ6IDUwJTtcXG59XFxuXFxuLmNyZWF0ZWRfYnkge1xcbiAgZm9udC1mYW1pbHk6IEpvc2VmaW5TYW5zX0xpZ2h0LCBcXFwiU2Vnb2UgVUlcXFwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSxcXG4gICAgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmV4dGVybmFsX2xpbmtzIGEge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4uZ2l0X2xvZ28ge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ubWFpbl93cmFwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBnYXA6IDI1cHg7XFxufVxcblxcbmZvcm0ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyZnIgMWZyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTVweDtcXG59XFxuXFxuZm9ybSBidXR0b24ge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICM1MjczNGQ7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTFjNzg4O1xcbiAgZm9udC1mYW1pbHk6IEpvc2VmaW5TYW5zX1NlbWksIFxcXCJTZWdvZSBVSVxcXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICB3aWR0aDogMzUlO1xcbn1cXG5cXG5mb3JtIGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzU0OTMyO1xcbiAgY29sb3I6ICM5MWM3ODg7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjMzU0OTMyO1xcbn1cXG5cXG5mb3JtIGlucHV0IHtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIG91dGxpbmU6IDNweCBzb2xpZCAjNTI3MzRkO1xcbiAgd2lkdGg6IDEyNXB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLmxvY19ib3gge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLnRvZGF5c193ZWF0aGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDMwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICB3aWR0aDogNTAlO1xcbn1cXG5cXG4ud2VhdGhlcl9pbWdfYm94IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgZ2FwOiAxNXB4O1xcblxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ud2VhdGhlcl9pbWFnZSB7XFxuICBoZWlnaHQ6IDI1MHB4O1xcbiAgd2lkdGg6IDMyNXB4O1xcbiAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxuICBib3gtc2hhZG93OiA0cHggNXB4IDVweCBibGFjaztcXG59XFxuXFxuLndlYXRoZXJfaW1nX2JveCA+IHAge1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgZm9udC1mYW1pbHk6IEpvc2VmaW5TYW5zX0JvbGQsIFxcXCJTZWdvZSBVSVxcXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4ud2VhdGhlcl9pbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi51cGNvbWluZ19mb3JjYXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG4gIHdpZHRoOiA1MCU7XFxufVxcblxcbi5mb3JjYXN0X2hlYWRlciB7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXItYm90dG9tLXN0eWxlOiBkb3VibGU7XFxufVxcblxcbi5kYXlfYm94IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZ2FwOiAxMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXItYm90dG9tLXN0eWxlOiBkb3VibGU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcblxcbi56aXBfYm94LFxcbi5jaXR5X2JveCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gIGdhcDogMTBweDtcXG4gIHdpZHRoOiAyNjVweDtcXG59XFxuXFxuaW5wdXQ6Zm9jdXM6dmFsaWQge1xcbiAgb3V0bGluZS1jb2xvcjogcmdiKDE3LCAyMjMsIDE3KTsgIFxcbn1cXG5cXG5pbnB1dDpmb2N1czppbnZhbGlkIHtcXG4gIG91dGxpbmUtY29sb3I6IHJlZDtcXG59XFxuXFxuaW5wdXQ6dmFsaWQge1xcbiAgb3V0bGluZS1jb2xvcjogcmdiKDE3LCAyMjMsIDE3KTsgIFxcbn1cXG5cXG4uZXJyb3Ige1xcbiAgZm9udC1mYW1pbHk6IEpvc2VmaW5TYW5zX1NlbWksIFxcXCJTZWdvZSBVSVxcXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6IHJlZDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGdDQUFnQztFQUNoQyw0Q0FBOEM7QUFDaEQ7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsNENBQWdEO0FBQ2xEOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLDRDQUFpRDtBQUNuRDs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQiw0Q0FBNkM7QUFDL0M7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLDZFQUE2RTtBQUMvRTs7QUFFQTtFQUNFLGFBQWE7O0VBRWIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTs7RUFFYixtQkFBbUI7RUFDbkIsNkJBQTZCOztFQUU3QixhQUFhOztFQUViLHlCQUF5QjtFQUN6QixZQUFZOztFQUVaLGdDQUFnQztFQUNoQywrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSw4RUFBOEU7QUFDaEY7O0FBRUE7RUFDRSxhQUFhOztFQUViLG1CQUFtQjtFQUNuQiw2QkFBNkI7O0VBRTdCLFNBQVM7RUFDVCxXQUFXO0FBQ2I7O0FBRUE7RUFDRTtjQUNZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6Qiw4RUFBOEU7RUFDOUUsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztFQUNkLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFlBQVk7RUFDWiwwQkFBMEI7RUFDMUIsWUFBWTtFQUNaLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7O0VBRXRCLFNBQVM7O0VBRVQsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGVBQWU7RUFDZiw4RUFBOEU7QUFDaEY7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0VBQ1osMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixTQUFTO0VBQ1QsV0FBVztFQUNYLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsNkJBQTZCO0FBQy9COztBQUVBOztFQUVFLGFBQWE7RUFDYixzQkFBc0I7O0VBRXRCLG1CQUFtQjtFQUNuQix1QkFBdUI7O0VBRXZCLFNBQVM7RUFDVCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSw4RUFBOEU7RUFDOUUsVUFBVTtBQUNaXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJKb3NlZmluU2Fuc19MaWdodFxcXCI7XFxuICBzcmM6IHVybChcXFwiLi4vc3JjL2ZvbnRzL0pvc2VmaW5TYW5zLUxpZ2h0LnR0ZlxcXCIpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSm9zZWZpblNhbnNfUmVnXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuLi9zcmMvZm9udHMvSm9zZWZpblNhbnMtUmVndWxhci50dGZcXFwiKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkpvc2VmaW5TYW5zX1NlbWlcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4uL3NyYy9mb250cy9Kb3NlZmluU2Fucy1TZW1pQm9sZC50dGZcXFwiKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkpvc2VmaW5TYW5zX0JvbGRcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4uL3NyYy9mb250cy9Kb3NlZmluU2Fucy1Cb2xkLnR0ZlxcXCIpO1xcbn1cXG5cXG4qIHtcXG4gIHBhZGRpbmc6IDBweDtcXG4gIG1hcmdpbjogMHB4O1xcbiAgZm9udC1mYW1pbHk6IEpvc2VmaW5TYW5zX1JlZywgXFxcIlNlZ29lIFVJXFxcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZmZGU7XFxufVxcblxcbi5uYXZfd3JhcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcblxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcblxcbiAgaGVpZ2h0OiAxMDBweDtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6ICM5MWM3ODg7XFxuICBjb2xvcjogQmxhY2s7XFxuXFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzUyNzM0ZDtcXG4gIGJveC1zaGFkb3c6IDBweCA1cHggNXB4ICM1MjczNGQ7XFxufVxcblxcbi5wcm9qZWN0X25hbWUge1xcbiAgZm9udC1mYW1pbHk6IEpvc2VmaW5TYW5zX0JvbGQsIFxcXCJTZWdvZSBVSVxcXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uZXh0ZXJuYWxfbGlua3Mge1xcbiAgZGlzcGxheTogZmxleDtcXG5cXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG5cXG4gIGdhcDogMTVweDtcXG4gIGhlaWdodDogNTAlO1xcbn1cXG5cXG4uY3JlYXRlZF9ieSB7XFxuICBmb250LWZhbWlseTogSm9zZWZpblNhbnNfTGlnaHQsIFxcXCJTZWdvZSBVSVxcXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLFxcbiAgICBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uZXh0ZXJuYWxfbGlua3MgYSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5naXRfbG9nbyB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5tYWluX3dyYXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogMnJlbTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGdhcDogMjVweDtcXG59XFxuXFxuZm9ybSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDJmciAxZnI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxNXB4O1xcbn1cXG5cXG5mb3JtIGJ1dHRvbiB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgIzUyNzM0ZDtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5MWM3ODg7XFxuICBmb250LWZhbWlseTogSm9zZWZpblNhbnNfU2VtaSwgXFxcIlNlZ29lIFVJXFxcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIHdpZHRoOiAzNSU7XFxufVxcblxcbmZvcm0gYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNTQ5MzI7XFxuICBjb2xvcjogIzkxYzc4ODtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMzNTQ5MzI7XFxufVxcblxcbmZvcm0gaW5wdXQge1xcbiAgcGFkZGluZzogNXB4O1xcbiAgb3V0bGluZTogM3B4IHNvbGlkICM1MjczNGQ7XFxuICB3aWR0aDogMTI1cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4ubG9jX2JveCB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4udG9kYXlzX3dlYXRoZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMzBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIHdpZHRoOiA1MCU7XFxufVxcblxcbi53ZWF0aGVyX2ltZ19ib3gge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICBnYXA6IDE1cHg7XFxuXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi53ZWF0aGVyX2ltYWdlIHtcXG4gIGhlaWdodDogMjUwcHg7XFxuICB3aWR0aDogMzI1cHg7XFxuICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcXG4gIGJveC1zaGFkb3c6IDRweCA1cHggNXB4IGJsYWNrO1xcbn1cXG5cXG4ud2VhdGhlcl9pbWdfYm94ID4gcCB7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBmb250LWZhbWlseTogSm9zZWZpblNhbnNfQm9sZCwgXFxcIlNlZ29lIFVJXFxcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxufVxcblxcbi53ZWF0aGVyX2luZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLnVwY29taW5nX2ZvcmNhc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbiAgd2lkdGg6IDUwJTtcXG59XFxuXFxuLmZvcmNhc3RfaGVhZGVyIHtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlci1ib3R0b20tc3R5bGU6IGRvdWJsZTtcXG59XFxuXFxuLmRheV9ib3gge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBnYXA6IDEwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci1ib3R0b20tc3R5bGU6IGRvdWJsZTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuXFxuLnppcF9ib3gsXFxuLmNpdHlfYm94IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgZ2FwOiAxMHB4O1xcbiAgd2lkdGg6IDI2NXB4O1xcbn1cXG5cXG5pbnB1dDpmb2N1czp2YWxpZCB7XFxuICBvdXRsaW5lLWNvbG9yOiByZ2IoMTcsIDIyMywgMTcpOyAgXFxufVxcblxcbmlucHV0OmZvY3VzOmludmFsaWQge1xcbiAgb3V0bGluZS1jb2xvcjogcmVkO1xcbn1cXG5cXG5pbnB1dDp2YWxpZCB7XFxuICBvdXRsaW5lLWNvbG9yOiByZ2IoMTcsIDIyMywgMTcpOyAgXFxufVxcblxcbi5lcnJvciB7XFxuICBmb250LWZhbWlseTogSm9zZWZpblNhbnNfU2VtaSwgXFxcIlNlZ29lIFVJXFxcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogcmVkO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJjb25zdCBkb21FbGVHZW4gPSAoZnVuY3Rpb24oKSB7XG5cbiAgICBjb25zdCBtYWtlRWxlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBhcmdBcnIgPSBbLi4uYXJndW1lbnRzXTtcblxuICAgICAgICBpZiAodHlwZW9mKGFyZ0FyclswXSkgIT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiBjb25zb2xlLmxvZyhcIkZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSB2YWxpZCBIVE1MIGVsZW1lbnQgaW4gc3RyaW5nIGZvcm1hdC4gRXhhbXBsZTogJ2RpdicgXCIpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZihhcmdBcnJbMV0pICE9IFwic3RyaW5nXCIgJiYgYXJnQXJyLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKFwiSW52YWxpZCBBcmd1bWVudCBUeXBlLiBUaGUgc2Vjb25kIGFyZ3VtZW50IG11c3QgYmUgYSBzdHJpbmdcIik7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mKGFyZ0FyclsyXSkgIT0gXCJvYmplY3RcIiAmJiBhcmdBcnIubGVuZ3RoID09PSAzKSB7XG4gICAgICAgICAgICByZXR1cm4gY29uc29sZS5sb2coXCJJbnZhbGlkIEFyZy4gVGhpcmQgYXJndW1lbnQgYWNjZXB0cyBhbiBhcnJheSBvciBhIG5lc3RlZCBhcnJheSBvZiBhcnJheXMuXCIpO1xuICAgICAgICB9IGVsc2UgaWYgKGFyZ0Fyci5sZW5ndGggPiAzKSB7XG4gICAgICAgICAgICByZXR1cm4gY29uc29sZS5sb2coXCJUb28gbWFueSBhcmd1bWVudHMuXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG5ld0VsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYCR7YXJnQXJyWzBdfWApO1xuICAgICAgICBuZXdFbGUudGV4dENvbnRlbnQgPSBhcmdBcnJbMV07XG4gICAgICAgIFxuICAgICAgICBpZiAoYXJnQXJyLmxlbmd0aCA9PT0gMyAmJiB0eXBlb2YoYXJnQXJyWzJdWzBdKSA9PT0gXCJvYmplY3RcIil7XG4gICAgICAgICAgICBmb3IgKGxldCBpIGluIGFyZ0FyclsyXSl7ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGxldCB0ZW1wQXJyID0gWy4uLmFyZ0FyclsyXVtpXV07XG5cbiAgICAgICAgICAgICAgICBuZXdFbGUuc2V0QXR0cmlidXRlKC4uLnRlbXBBcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZihhcmdBcnJbMl0pID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBuZXdFbGUuc2V0QXR0cmlidXRlKC4uLmFyZ0FyclsyXSk7XG4gICAgICAgIH1cbiAgICAgICAgXG5cbiAgICAgICAgcmV0dXJuIG5ld0VsZTsgICBcbiAgICB9XG5cbiAgICByZXR1cm4geyBtYWtlRWxlIH07XG59KSgpO1xuXG5leHBvcnQgeyBkb21FbGVHZW4gfTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGdpdEltZ0xvZ28gZnJvbSBcIi4uL3NyYy9pbWdzL0dpdEh1Yi1NYXJrLTEyMHB4LXBsdXMucG5nXCI7XG5cbmNvbnN0IGFzc2V0TW9kID0gKGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgZ2l0SW1nID0gZ2l0SW1nTG9nbztcblxuICByZXR1cm4geyBnaXRJbWcgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGFzc2V0TW9kO1xuIiwiaW1wb3J0IEFQSUtFWSBmcm9tIFwiLi4va2V5L2tleS5qc29uXCI7XG5cbmFzeW5jIGZ1bmN0aW9uIHdlYXRoZXJEYXRhKGRhdGEsIGZ1bmMpIHtcbiAgY29uc3QgZm9ybURhdGEgPSBkYXRhO1xuICBjb25zdCByZW5kZXJGdW5jID0gZnVuYztcbiAgbGV0IHppcENvZGUgPSBmb3JtRGF0YS5nZXQoXCJ6aXBjb2RlXCIpO1xuXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3ppcD0ke3ppcENvZGV9LHVzJnVuaXRzPWltcGVyaWFsJmFwcGlkPSR7QVBJS0VZLmtleX1gLFxuICAgIHsgbW9kZTogXCJjb3JzXCIgfVxuICApO1xuICBjb25zdCB3ZWF0aGVySW5mbyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICByZW5kZXJGdW5jKHdlYXRoZXJJbmZvKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2VhdGhlckRhdGE7XG4iLCJmdW5jdGlvbiB2YWxpZGF0ZVppcChmb3JtSW5wdXQpIHtcbiAgY29uc3QgemlwSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ppcGNvZGVcIik7XG4gIGNvbnN0IHppcEVycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lcnJvcl9ib3hfb25lXCIpO1xuXG4gIGlmIChmb3JtSW5wdXQudGFyZ2V0LnZhbGlkaXR5LnBhdHRlcm5NaXNtYXRjaCkge1xuICAgIHppcElucHV0LnNldEN1c3RvbVZhbGlkaXR5KFwiUGxlYXNlIGVudGVyIGEgdmFsaWQgVVMgWmlwY29kZS5cIik7XG4gICAgemlwRXJyb3IuaW5uZXJIVE1MID0gXCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBVUyBaaXBjb2RlLlwiO1xuICB9IGVsc2Uge1xuICAgIHppcElucHV0LnNldEN1c3RvbVZhbGlkaXR5KFwiXCIpO1xuICAgIHppcEVycm9yLmlubmVySFRNTCA9IFwiXCI7XG4gIH1cbn1cblxuZnVuY3Rpb24gcGFnZUNvbnRlbnQoZGF0YSkge1xuICBjb25zdCBhcGlEYXRhID0geyAuLi5kYXRhIH07XG4gIGNvbnN0IGxvY0JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9jX2JveCBoMlwiKTtcblxuICBpZiAoYXBpRGF0YS5jb2QgPT0gXCIyMDBcIikge1xuICAgIGxvY0JveC5pbm5lckhUTUwgPSBgJHthcGlEYXRhLm5hbWV9YDtcbiAgfSBlbHNlIHtcbiAgICBsb2NCb3guaW5uZXJIVE1MID0gYEVycm9yICR7YXBpRGF0YS5jb2R9OiAke2FwaURhdGEubWVzc2FnZX1gO1xuICB9XG59XG5cbmZ1bmN0aW9uIGVycm9ySGFuZGxlKCkge1xuICBjb25zdCBsb2NCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvY19ib3ggaDJcIik7XG4gIGxvY0JveC5pbm5lckhUTUwgPSBgRmFpbGVkIHRvIGZldGNoIGRhdGEuYDtcbn1cblxuZXhwb3J0IHsgdmFsaWRhdGVaaXAsIHBhZ2VDb250ZW50LCBlcnJvckhhbmRsZSB9O1xuIiwiaW1wb3J0IGNzcyBmcm9tIFwiLi4vc3JjL3N0eWxlLmNzc1wiO1xuaW1wb3J0IGFzc2V0TW9kIGZyb20gXCIuL2Fzc2V0c1wiO1xuaW1wb3J0IHsgZG9tRWxlR2VuIH0gZnJvbSBcImRvbV9nZW5fY29zYmVydFwiO1xuaW1wb3J0IHsgdmFsaWRhdGVaaXAsIHBhZ2VDb250ZW50LCBlcnJvckhhbmRsZSB9IGZyb20gXCIuL2Z1bmNzXCI7XG5pbXBvcnQgd2VhdGhlckRhdGEgZnJvbSBcIi4uL3NyYy9kYXRhXCI7XG5cbmZ1bmN0aW9uIG5hdkJhckdlbihib2R5KSB7XG4gIGNvbnN0IGJvZHlFbGUgPSBib2R5O1xuXG4gIGNvbnN0IG5hdldyYXAgPSBkb21FbGVHZW4ubWFrZUVsZShcIm5hdlwiLCBcIlwiLCBbXCJjbGFzc1wiLCBcIm5hdl93cmFwXCJdKTtcbiAgYm9keUVsZS5hcHBlbmRDaGlsZChuYXZXcmFwKTtcblxuICBjb25zdCBwcm9qTmFtZSA9IGRvbUVsZUdlbi5tYWtlRWxlKFwiaDFcIiwgXCJUT1A6IFdlYXRoZXIgQXBwIFByb2plY3RcIiwgW1xuICAgIFwiY2xhc3NcIixcbiAgICBcInByb2plY3RfbmFtZVwiLFxuICBdKTtcbiAgbmF2V3JhcC5hcHBlbmRDaGlsZChwcm9qTmFtZSk7XG5cbiAgY29uc3QgZXh0ZXJuTGlua3MgPSBkb21FbGVHZW4ubWFrZUVsZShcImRpdlwiLCBcIlwiLCBbXCJjbGFzc1wiLCBcImV4dGVybmFsX2xpbmtzXCJdKTtcbiAgbmF2V3JhcC5hcHBlbmRDaGlsZChleHRlcm5MaW5rcyk7XG5cbiAgY29uc3QgY3JlYXRlZEVsZSA9IGRvbUVsZUdlbi5tYWtlRWxlKFwicFwiLCBcIkNyZWF0ZWQgQnk6IERhdmlkIFQuXCIsIFtcbiAgICBcImNsYXNzXCIsXG4gICAgXCJjcmVhdGVkX2J5XCIsXG4gIF0pO1xuICBleHRlcm5MaW5rcy5hcHBlbmRDaGlsZChjcmVhdGVkRWxlKTtcblxuICBjb25zdCBnaXRJbWdBcnIgPSBbXG4gICAgW1wic3JjXCIsIGFzc2V0TW9kLmdpdEltZ10sXG4gICAgW1wiYWx0XCIsIFwiR2l0aHViIENhdCBMb2dvXCJdLFxuICAgIFtcImNsYXNzXCIsIFwiZ2l0X2xvZ29cIl0sXG4gIF07XG4gIGNvbnN0IGdpdExpbmtBcnIgPSBbXG4gICAgW1wiaHJlZlwiLCBcImh0dHBzOi8vZ2l0aHViLmNvbS9Kb3NoRFQ5MDBcIl0sXG4gICAgW1widGFyZ2V0XCIsIFwiX2JsYW5rXCJdLFxuICBdO1xuICBjb25zdCBnaXRJbWcgPSBkb21FbGVHZW4ubWFrZUVsZShcImltZ1wiLCBcIlwiLCBnaXRJbWdBcnIpO1xuICBjb25zdCBnaXRMaW5rID0gZG9tRWxlR2VuLm1ha2VFbGUoXCJhXCIsIFwiXCIsIGdpdExpbmtBcnIpO1xuICBleHRlcm5MaW5rcy5hcHBlbmRDaGlsZChnaXRMaW5rKS5hcHBlbmRDaGlsZChnaXRJbWcpO1xufVxuXG5mdW5jdGlvbiBmb3JtR2VuKGJvZHkpIHtcbiAgY29uc3QgbWFpbkVsZSA9IGJvZHk7XG5cbiAgY29uc3QgZm9ybUVsZSA9IGRvbUVsZUdlbi5tYWtlRWxlKFwiZm9ybVwiLCBcIlwiLCBbW1wiYWN0aW9uXCIsIFwiXCJdXSk7XG4gIG1haW5FbGUuYXBwZW5kQ2hpbGQoZm9ybUVsZSk7XG5cbiAgY29uc3QgZGl2Qm94T25lID0gZG9tRWxlR2VuLm1ha2VFbGUoXCJkaXZcIiwgXCJcIiwgW1wiY2xhc3NcIiwgXCJ6aXBfYm94XCJdKTtcbiAgZm9ybUVsZS5hcHBlbmRDaGlsZChkaXZCb3hPbmUpO1xuXG4gIGNvbnN0IHppcExhYmVsID0gZG9tRWxlR2VuLm1ha2VFbGUoXCJsYWJlbFwiLCBcIlppcGNvZGVcIiwgW1wiZm9yXCIsIFwiemlwY29kZVwiXSk7XG4gIGRpdkJveE9uZS5hcHBlbmRDaGlsZCh6aXBMYWJlbCk7XG5cbiAgY29uc3QgemlwSW5wdXRBcnIgPSBbXG4gICAgW1widHlwZVwiLCBcInRleHRcIl0sXG4gICAgW1wibmFtZVwiLCBcInppcGNvZGVcIl0sXG4gICAgW1wiaWRcIiwgXCJ6aXBjb2RlXCJdLFxuICAgIFtcInBhdHRlcm5cIiwgXCJbMC05XXs1fVwiXSxcbiAgICBbXCJtYXhsZW5ndGhcIiwgXCI1XCJdLFxuICAgIFtcInJlcXVpcmVkXCIsIFwiXCJdLFxuICBdO1xuICBjb25zdCB6aXBJbnB1dCA9IGRvbUVsZUdlbi5tYWtlRWxlKFwiaW5wdXRcIiwgXCJcIiwgemlwSW5wdXRBcnIpO1xuICBjb25zdCBzcGFuQm94T25lID0gZG9tRWxlR2VuLm1ha2VFbGUoXCJzcGFuXCIsIFwiXCIsIFtcbiAgICBcImNsYXNzXCIsXG4gICAgXCJlcnJvcl9ib3hfb25lIGVycm9yXCIsXG4gIF0pO1xuICBkaXZCb3hPbmUuYXBwZW5kQ2hpbGQoemlwSW5wdXQpO1xuICBkaXZCb3hPbmUuYXBwZW5kQ2hpbGQoc3BhbkJveE9uZSk7XG5cbiAgY29uc3QgZm9ybVN1YkJ0biA9IGRvbUVsZUdlbi5tYWtlRWxlKFwiYnV0dG9uXCIsIFwiU3VibWl0XCIsIFtcInR5cGVcIiwgXCJzdWJtaXRcIl0pO1xuICBmb3JtRWxlLmFwcGVuZENoaWxkKGZvcm1TdWJCdG4pO1xuXG4gIGZvcm1FbGUuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm1FbGUpO1xuICAgIHdlYXRoZXJEYXRhKGZvcm1EYXRhLCBwYWdlQ29udGVudCkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICBlcnJvckhhbmRsZShlcnJvcik7XG4gICAgfSk7XG4gIH0pO1xuXG4gIHppcElucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge1xuICAgIHZhbGlkYXRlWmlwKGUpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gd2VhdGhlckJveCgpIHtcbiAgY29uc3QgbWFpbkVsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbl93cmFwXCIpO1xuXG4gIGNvbnN0IGxvY2F0aW9uQm94ID0gZG9tRWxlR2VuLm1ha2VFbGUoXCJkaXZcIiwgXCJcIiwgW1wiY2xhc3NcIiwgXCJsb2NfYm94XCJdKTtcbiAgY29uc3QgbG9jVGV4dCA9IGRvbUVsZUdlbi5tYWtlRWxlKFwiaDJcIiwgYGApO1xuICBtYWluRWxlLmFwcGVuZENoaWxkKGxvY2F0aW9uQm94KTtcbiAgbG9jYXRpb25Cb3guYXBwZW5kQ2hpbGQobG9jVGV4dCk7XG59XG5cbmZ1bmN0aW9uIG1haW5HZW4oYm9keSkge1xuICBjb25zdCBib2R5RWxlID0gYm9keTtcblxuICBjb25zdCBtYWluRWxlV3JhcCA9IGRvbUVsZUdlbi5tYWtlRWxlKFwiZGl2XCIsIFwiXCIsIFtcImNsYXNzXCIsIFwibWFpbl93cmFwXCJdKTtcbiAgYm9keUVsZS5hcHBlbmRDaGlsZChtYWluRWxlV3JhcCk7XG5cbiAgZm9ybUdlbihtYWluRWxlV3JhcCk7XG4gIHdlYXRoZXJCb3goKTtcbn1cblxuZnVuY3Rpb24gcGFnZVJlbmRlcigpIHtcbiAgY29uc3QgYm9keUVsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICBjb25zdCBkZWZhdWx0WmlwID0gbmV3IE1hcCgpO1xuICBkZWZhdWx0WmlwLnNldChcInppcGNvZGVcIiwgXCIyODYwMVwiKTtcblxuICBuYXZCYXJHZW4oYm9keUVsZSk7XG4gIG1haW5HZW4oYm9keUVsZSk7XG5cbiAgd2VhdGhlckRhdGEoZGVmYXVsdFppcCwgcGFnZUNvbnRlbnQpO1xufVxuXG4oKCkgPT4ge1xuICBwYWdlUmVuZGVyKCk7XG59KSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9