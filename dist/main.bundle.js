"use strict";
(self["webpackChunkklimate"] = self["webpackChunkklimate"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! weather.jpeg */ "./src/weather.jpeg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Roboto:wght@300;400&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  display: grid;\n  grid-template-rows: 2fr 6fr 3fr 0.8fr;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n  color: rgb(251, 251, 251);\n  font-family: Roboto, \"Times New Roman\", Times, serif;\n  text-shadow: 0 0 10px rgba(0, 0, 0, 0.8);\n  height: 100vh;\n}\n.header .upper {\n  display: flex;\n  justify-content: space-between;\n  padding: 0.5rem 1rem;\n}\n.header .lower {\n  display: flex;\n  justify-content: center;\n  gap: 1rem;\n}\n.header input {\n  width: 40%;\n  color: rgb(36, 35, 42);\n  font-size: 16px;\n  line-height: 20px;\n  min-height: 28px;\n  border-radius: 4px;\n  padding: 8px 16px;\n  border: 2px solid transparent;\n  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;\n  background: rgb(251, 251, 251);\n  transition: all 0.1s ease 0s;\n}\n.header input:focus {\n  border: 2px solid rgb(124, 138, 255);\n}\n.header button {\n  display: inline-block;\n  outline: none;\n  cursor: pointer;\n  font-weight: 600;\n  border-radius: 3px;\n  padding: 10px 20px;\n  border: 0;\n  color: #fff;\n  background: #ff5000;\n  line-height: 1.15;\n  font-size: 1.3rem;\n}\n.header button:hover, .header input:hover {\n  transition: all 0.1s ease;\n  box-shadow: 0 0 0 0 #fff, 0 0 0 3px #1de9b6;\n}\n\n.main {\n  display: flex;\n  align-items: start;\n  justify-content: center;\n}\n\n.main-card {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1.5fr;\n  gap: 1rem;\n}\n.main-card .place {\n  grid-column: 1/-1;\n  font-size: 5rem;\n  font-weight: 800;\n  justify-self: center;\n  align-self: center;\n}\n.main-card .weather-logo {\n  grid-column: 1/2;\n  grid-row: 2/-1;\n  font-size: 10rem;\n  align-self: center;\n  justify-self: center;\n}\n.main-card .card {\n  grid-column: 2/3;\n  grid-row: 2/-1;\n  font-size: 1.5rem;\n  font-weight: 900;\n  align-self: center;\n}\n.main-card .card .temp {\n  font-size: 4rem;\n}\n\n.weekly-weather {\n  overflow-y: scroll;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));\n  padding: 0 3rem;\n  gap: 1rem;\n}\n.weekly-weather .weekly-card {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 0.6rem;\n  font-size: 1.2rem;\n  margin-bottom: 1rem;\n}\n.weekly-weather .weekly-card :nth-child(2) {\n  font-size: 4rem;\n}\n\n.footer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: rgba(13, 0, 0, 0.325);\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAGA;EACE,SAAA;EACA,UAAA;EACA,sBAAA;AADF;;AAIA;EACE,aAAA;EACA,qCAAA;EACA,yDAAA;EACA,sBAAA;EACA,yBAAA;EACA,oDAAA;EACE,wCAAA;EAEF,aAAA;AAFF;AAiBE;EACE,aAAA;EACA,8BAAA;EACA,oBAAA;AAfJ;AAkBE;EACE,aAAA;EACA,uBAAA;EACA,SAAA;AAhBJ;AAmBE;EACE,UAAA;EACA,sBAAA;EACA,eAAA;EACA,iBAAA;EACA,gBAAA;EACA,kBAAA;EACA,iBAAA;EACA,6BAAA;EACA,4EAAA;EACA,8BAAA;EACA,4BAAA;AAjBJ;AAoBE;EACE,oCAAA;AAlBJ;AAqBE;EACE,qBAAA;EACA,aAAA;EACA,eAAA;EACA,gBAAA;EACA,kBAAA;EACA,kBAAA;EACA,SAAA;EACA,WAAA;EACA,mBAAA;EACA,iBAAA;EACA,iBAAA;AAnBJ;AAsBE;EACE,yBAAA;EACA,2CAAA;AApBJ;;AAwBA;EACC,aAAA;EACA,kBAAA;EACA,uBAAA;AArBD;;AAyBA;EACE,aAAA;EAKA,8BAAA;EACA,6BAAA;EACA,SAAA;AA1BF;AA+BE;EACE,iBAAA;EACA,eAAA;EACA,gBAAA;EACA,oBAAA;EACA,kBAAA;AA7BJ;AAgCE;EACE,gBAAA;EACA,cAAA;EACA,gBAAA;EACA,kBAAA;EACA,oBAAA;AA9BJ;AAiCE;EACE,gBAAA;EACA,cAAA;EACA,iBAAA;EACA,gBAAA;EAEA,kBAAA;AAhCJ;AAkCI;EACE,eAAA;AAhCN;;AAqCA;EACE,kBAAA;EAIA,aAAA;EACA,2DAAA;EACA,eAAA;EACA,SAAA;AArCF;AAuCE;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,WAAA;EACA,iBAAA;EACA,mBAAA;AArCJ;AAsCI;EACE,eAAA;AApCN;;AAyCA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,iCAAA;AAtCF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Roboto:wght@300;400&display=swap');\n\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  display: grid;\n  grid-template-rows: 2fr 6fr 3fr 0.8fr;\n  background-image: url(\"weather.jpeg\");\n  background-size: cover;\n  color:rgb(251, 251, 251);\n  font-family: Roboto, 'Times New Roman', Times, serif;\n    text-shadow: 0 0 10px rgba(0,0,0,.8);\n\n  height: 100vh;\n\n  > * {\n    // border: 1px solid red;\n  }\n\n \n}\n\n.header {\n\n  * {\n    // border: 1px solid green;\n  }\n  \n  .upper {\n    display: flex;\n    justify-content: space-between;\n    padding: 0.5rem 1rem ;\n  }\n   \n  .lower {\n    display: flex;\n    justify-content: center;\n    gap: 1rem;\n  }\n\n  input {\n    width: 40%;\n    color: rgb(36, 35, 42);\n    font-size: 16px;\n    line-height: 20px;\n    min-height: 28px;\n    border-radius: 4px;\n    padding: 8px 16px;\n    border: 2px solid transparent;\n    box-shadow: rgb(0 0 0 / 12%) 0px 1px 3px, rgb(0 0 0 / 24%) 0px 1px 2px;\n    background: rgb(251, 251, 251);\n    transition: all 0.1s ease 0s;\n  }\n\n  input:focus {\n    border: 2px solid rgb(124, 138, 255);\n  }\n\n  button {\n    display: inline-block;\n    outline: none;\n    cursor: pointer;\n    font-weight: 600;\n    border-radius: 3px;\n    padding: 10px 20px;\n    border: 0;\n    color: #fff;\n    background: #ff5000;\n    line-height: 1.15;\n    font-size: 1.3rem;\n  }\n\n  button:hover, input:hover {\n    transition: all .1s ease;\n    box-shadow: 0 0 0 0 #fff, 0 0 0 3px #1de9b6;\n  }\n}\n\n.main {\n display: flex;\n align-items: start;\n justify-content: center;\n //border: 1px solid red;\n}\n\n.main-card {\n  display: grid;\n  // width: fit-content;\n  //height: fit-content;\n  //max-width: 40%;\n  // border: 1px solid red;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1.5fr;\n  gap: 1rem;\n  > * {\n   // border: 1px solid green;\n  }\n\n  .place {\n    grid-column: 1/-1;\n    font-size: 5rem;\n    font-weight: 800;\n    justify-self: center;\n    align-self: center;\n  }\n\n  .weather-logo {\n    grid-column: 1/2;\n    grid-row: 2/-1;\n    font-size: 10rem;\n    align-self: center;\n    justify-self: center;\n  }\n\n  .card {\n    grid-column: 2/3;\n    grid-row: 2/-1;\n    font-size: 1.5rem;\n    font-weight: 900;\n    // justify-self: center;\n    align-self: center;\n    // font-size: 3rem;\n    .temp {\n      font-size: 4rem;\n    }\n  }\n}\n\n.weekly-weather {\n  overflow-y: scroll;\n  > * {\n    // border: 2px solid white;\n  }\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));\n  padding: 0 3rem;\n  gap: 1rem;\n\n  .weekly-card {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap:0.6rem;\n    font-size: 1.2rem;\n    margin-bottom: 1rem;\n    :nth-child(2) {\n      font-size: 4rem;\n    }\n  }\n}\n\n.footer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: rgba(13, 0, 0, 0.325);\n}"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./icons/50d.png */ "./src/icons/50d.png"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var code = "<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <link\n      href=\"https://fonts.googleapis.com/css2?family=Alata&display=swap\"\n      rel=\"stylesheet\"\n    />\n    <link\n      href=\"https://fonts.googleapis.com/icon?family=Material+Icons+Round\"\n      rel=\"stylesheet\"\n    />\n    <title>Klimate</title>\n  </head>\n\n  <body class=\"container\">\n    <div class=\"header\">\n      <div class=\"upper\">\n        <div class=\"temp-toggle-btn\">F</div>\n        <div class=\"top-date-diplay\">date</div>\n      </div>\n      <div class=\"lower\">\n        <input class=\"search-bar\" type=\"text\" />\n        <button class=\"material-icons-round search-btn\">search</button>\n      </div>\n    </div>\n    <div class=\"main\">\n      <div class=\"main-card\">\n        <div class=\"place\">Montreal</div>\n        <div class=\"weather-icon\">\n          <img id=\"main-weathericon\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" />\n        </div>\n        <!-- <div class=\"material-icons-round weather-logo\">light_mode</div> -->\n        <div class=\"card\">\n          <div class=\"temp\">18°</div>\n          <div class=\"high-low\">high/low</div>\n          <div class=\"desc\">rainy</div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"weekly-weather\">\n      <!-- <div class=\"card\">\n        <span class=\"material-icons-round sun\"> light_mode </span>\n        <span class=\"material-icons-round wind\"> air </span>\n        <span class=\"material-icons-round thunderstorm\"> thunderstorm </span>\n        <span class=\"material-icons-round cold\"> ac_unit </span>\n        <span class=\"material-icons-round rain\"> water_drop </span>\n        <span class=\"material-icons-round clouds\"> cloud </span>\n      </div> -->\n\n      <div class=\"weekly-card\">\n        <div class=\"date\">date</div>\n        <div class=\"material-icons-round\">cloud</div>\n        <div class=\"high-low\">high/low</div>\n      </div>\n      <div class=\"weekly-card\">\n        <div class=\"date\">date</div>\n        <div class=\"material-icons-round\">cloud</div>\n        <div class=\"high-low\">high/low</div>\n      </div>\n      <div class=\"weekly-card\">\n        <div class=\"date\">date</div>\n        <div class=\"material-icons-round\">cloud</div>\n        <div class=\"high-low\">high/low</div>\n      </div>\n      <div class=\"weekly-card\">\n        <div class=\"date\">date</div>\n        <div class=\"material-icons-round\">cloud</div>\n        <div class=\"high-low\">high/low</div>\n      </div>\n      <div class=\"weekly-card\">\n        <div class=\"date\">date</div>\n        <div class=\"material-icons-round\">cloud</div>\n        <div class=\"high-low\">high/low</div>\n      </div>\n      <div class=\"weekly-card\">\n        <div class=\"date\">date</div>\n        <div class=\"material-icons-round\">cloud</div>\n        <div class=\"high-low\">high/low</div>\n      </div>\n      <div class=\"weekly-card\">\n        <div class=\"date\">date</div>\n        <div class=\"material-icons-round\">cloud</div>\n        <div class=\"high-low\">high/low</div>\n      </div>\n    </div>\n    <div class=\"footer\">Created with ❤️ by jarryingnut</div>\n  </body>\n</html>\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/apiFunctions.js":
/*!*****************************!*\
  !*** ./src/apiFunctions.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchApi": () => (/* binding */ fetchApi)
/* harmony export */ });
/* harmony import */ var _updateDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateDOM */ "./src/updateDOM.js");


function getDataFromForm() {
  const input = document.querySelector(".search-bar");
  const cityName = input.value;

  // if not an empty string
  if (cityName) {
    // remove whitespace for the api call
    return cityName
      .replace(/(\s+$|^\s+)/g, "") // remove whitespace from begining and end of string
      .replace(/(,\s+)/g, ",") // remove any white space that follows a comma
      .replace(/(\s+,)/g, ",") // remove any white space that preceeds a comma
      .replace(/\s+/g, "+"); // replace any remaining white space with +, so it works in api call
  }

  return "";
}

const fetchApi = async () => {
  let cityName = getDataFromForm();
  await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${"8b15604f105094dd1b7c9f3a57200330"}&units=metric`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      (0,_updateDOM__WEBPACK_IMPORTED_MODULE_0__.updateMainCard)(data);
    })
    .catch(function (err) {
      alert(err);
      return error;
    });
  return;
};


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _apiFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apiFunctions */ "./src/apiFunctions.js");


//https://kfig21.github.io/weather_api_react/

let searchBar = document.querySelector(".search-bar");

let searchBtn = document.querySelector(".search-btn");
searchBtn.addEventListener("click", _apiFunctions__WEBPACK_IMPORTED_MODULE_1__.fetchApi);


/***/ }),

/***/ "./src/updateDOM.js":
/*!**************************!*\
  !*** ./src/updateDOM.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "updateMainCard": () => (/* binding */ updateMainCard)
/* harmony export */ });
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ "./src/index.html");
/* harmony import */ var _icons_50d_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons/50d.png */ "./src/icons/50d.png");



{
  /* <div class="main">
  <div class="main-card">
    <div class="place">Montreal</div>
    <div class="material-icons-round weather-logo">light_mode</div>
    <div class="card">
      <div class="temp">18°</div>
      <div class="high-low">high/low</div>
      <div class="desc">rainy</div>
    </div>
  </div>
</div>; */
}

let mainPlace = document.querySelector(".main-card > .place");
let locationIcon = document.querySelector("#main-weathericon");
//let mainLogo = document.querySelector(".main-card > .weather-logo");
let temp = document.querySelector(".main-card > .card > .temp");
let highLow = document.querySelector(".main-card > .card > .high-low");
let desc = document.querySelector(".main-card > .card > .desc");

const updateMainCard = (data) => {
  mainPlace.textContent = data.name;
  temp.textContent = data.main.temp + "°";
  highLow.textContent = `${data.main.temp_max}° / ${data.main.temp_min}°`;
  desc.textContent = data.weather[0].description;
  let { icon } = data.weather[0];
  alert(data.weather[0].icon);
  console.log(locationIcon);
  //locationIcon.setAttribute("src", `icons/${icon}.png`);
  locationIcon.src = `icons/${icon}.png`;
};


/***/ }),

/***/ "./src/icons/50d.png":
/*!***************************!*\
  !*** ./src/icons/50d.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "66cd0f5e79266310836a.png";

/***/ }),

/***/ "./src/weather.jpeg":
/*!**************************!*\
  !*** ./src/weather.jpeg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5be1d5652f2404a8a82a.jpeg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNwQ3NCO0FBQ29CO0FBQzFDOztBQUVBOztBQUVBO0FBQ0Esb0NBQW9DLG1EQUFROzs7Ozs7Ozs7Ozs7Ozs7OztBQ1BYO0FBQ1I7O0FBRXpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBLDJCQUEyQixtQkFBbUIsTUFBTSxtQkFBbUI7QUFDdkU7QUFDQSxRQUFRLE9BQU87QUFDZjtBQUNBO0FBQ0EsOENBQThDLEtBQUs7QUFDbkQsOEJBQThCLEtBQUs7QUFDbkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rbGltYXRlLy4vc3JjL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8va2xpbWF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8va2xpbWF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8va2xpbWF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2tsaW1hdGUvLi9zcmMvaW5kZXguaHRtbCIsIndlYnBhY2s6Ly9rbGltYXRlLy4vbm9kZV9tb2R1bGVzL2h0bWwtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8va2xpbWF0ZS8uL3NyYy9zdHlsZS5zY3NzPzc1YmEiLCJ3ZWJwYWNrOi8va2xpbWF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9rbGltYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9rbGltYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2tsaW1hdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8va2xpbWF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2tsaW1hdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9rbGltYXRlLy4vc3JjL2FwaUZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9rbGltYXRlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2tsaW1hdGUvLi9zcmMvdXBkYXRlRE9NLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJ3ZWF0aGVyLmpwZWdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVByZXNzK1N0YXJ0KzJQJmZhbWlseT1Sb2JvdG86d2dodEAzMDA7NDAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDJmciA2ZnIgM2ZyIDAuOGZyO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBjb2xvcjogcmdiKDI1MSwgMjUxLCAyNTEpO1xcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXFxcIlRpbWVzIE5ldyBSb21hblxcXCIsIFRpbWVzLCBzZXJpZjtcXG4gIHRleHQtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuOCk7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG4uaGVhZGVyIC51cHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxufVxcbi5oZWFkZXIgLmxvd2VyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG59XFxuLmhlYWRlciBpbnB1dCB7XFxuICB3aWR0aDogNDAlO1xcbiAgY29sb3I6IHJnYigzNiwgMzUsIDQyKTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbiAgbWluLWhlaWdodDogMjhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIHBhZGRpbmc6IDhweCAxNnB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTIpIDBweCAxcHggM3B4LCByZ2JhKDAsIDAsIDAsIDAuMjQpIDBweCAxcHggMnB4O1xcbiAgYmFja2dyb3VuZDogcmdiKDI1MSwgMjUxLCAyNTEpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZSAwcztcXG59XFxuLmhlYWRlciBpbnB1dDpmb2N1cyB7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTI0LCAxMzgsIDI1NSk7XFxufVxcbi5oZWFkZXIgYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgYm9yZGVyOiAwO1xcbiAgY29sb3I6ICNmZmY7XFxuICBiYWNrZ3JvdW5kOiAjZmY1MDAwO1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuLmhlYWRlciBidXR0b246aG92ZXIsIC5oZWFkZXIgaW5wdXQ6aG92ZXIge1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZTtcXG4gIGJveC1zaGFkb3c6IDAgMCAwIDAgI2ZmZiwgMCAwIDAgM3B4ICMxZGU5YjY7XFxufVxcblxcbi5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLm1haW4tY2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMS41ZnI7XFxuICBnYXA6IDFyZW07XFxufVxcbi5tYWluLWNhcmQgLnBsYWNlIHtcXG4gIGdyaWQtY29sdW1uOiAxLy0xO1xcbiAgZm9udC1zaXplOiA1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG4ubWFpbi1jYXJkIC53ZWF0aGVyLWxvZ28ge1xcbiAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gIGdyaWQtcm93OiAyLy0xO1xcbiAgZm9udC1zaXplOiAxMHJlbTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG4ubWFpbi1jYXJkIC5jYXJkIHtcXG4gIGdyaWQtY29sdW1uOiAyLzM7XFxuICBncmlkLXJvdzogMi8tMTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuLm1haW4tY2FyZCAuY2FyZCAudGVtcCB7XFxuICBmb250LXNpemU6IDRyZW07XFxufVxcblxcbi53ZWVrbHktd2VhdGhlciB7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxMzBweCwgMWZyKSk7XFxuICBwYWRkaW5nOiAwIDNyZW07XFxuICBnYXA6IDFyZW07XFxufVxcbi53ZWVrbHktd2VhdGhlciAud2Vla2x5LWNhcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDAuNnJlbTtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuLndlZWtseS13ZWF0aGVyIC53ZWVrbHktY2FyZCA6bnRoLWNoaWxkKDIpIHtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG59XFxuXFxuLmZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogcmdiYSgxMywgMCwgMCwgMC4zMjUpO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFHQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLHlEQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLG9EQUFBO0VBQ0Usd0NBQUE7RUFFRixhQUFBO0FBRkY7QUFpQkU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQkFBQTtBQWZKO0FBa0JFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtBQWhCSjtBQW1CRTtFQUNFLFVBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0VBQ0EsNEVBQUE7RUFDQSw4QkFBQTtFQUNBLDRCQUFBO0FBakJKO0FBb0JFO0VBQ0Usb0NBQUE7QUFsQko7QUFxQkU7RUFDRSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFuQko7QUFzQkU7RUFDRSx5QkFBQTtFQUNBLDJDQUFBO0FBcEJKOztBQXdCQTtFQUNDLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FBckJEOztBQXlCQTtFQUNFLGFBQUE7RUFLQSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0EsU0FBQTtBQTFCRjtBQStCRTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQTdCSjtBQWdDRTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQTlCSjtBQWlDRTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxrQkFBQTtBQWhDSjtBQWtDSTtFQUNFLGVBQUE7QUFoQ047O0FBcUNBO0VBQ0Usa0JBQUE7RUFJQSxhQUFBO0VBQ0EsMkRBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtBQXJDRjtBQXVDRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQXJDSjtBQXNDSTtFQUNFLGVBQUE7QUFwQ047O0FBeUNBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQ0FBQTtBQXRDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QcmVzcytTdGFydCsyUCZmYW1pbHk9Um9ib3RvOndnaHRAMzAwOzQwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDJmciA2ZnIgM2ZyIDAuOGZyO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJ3ZWF0aGVyLmpwZWdcXFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBjb2xvcjpyZ2IoMjUxLCAyNTEsIDI1MSk7XFxuICBmb250LWZhbWlseTogUm9ib3RvLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLDAsMCwuOCk7XFxuXFxuICBoZWlnaHQ6IDEwMHZoO1xcblxcbiAgPiAqIHtcXG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbiAgfVxcblxcbiBcXG59XFxuXFxuLmhlYWRlciB7XFxuXFxuICAqIHtcXG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XFxuICB9XFxuICBcXG4gIC51cHBlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogMC41cmVtIDFyZW0gO1xcbiAgfVxcbiAgIFxcbiAgLmxvd2VyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG4gIH1cXG5cXG4gIGlucHV0IHtcXG4gICAgd2lkdGg6IDQwJTtcXG4gICAgY29sb3I6IHJnYigzNiwgMzUsIDQyKTtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBsaW5lLWhlaWdodDogMjBweDtcXG4gICAgbWluLWhlaWdodDogMjhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDEyJSkgMHB4IDFweCAzcHgsIHJnYigwIDAgMCAvIDI0JSkgMHB4IDFweCAycHg7XFxuICAgIGJhY2tncm91bmQ6IHJnYigyNTEsIDI1MSwgMjUxKTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZSAwcztcXG4gIH1cXG5cXG4gIGlucHV0OmZvY3VzIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDEyNCwgMTM4LCAyNTUpO1xcbiAgfVxcblxcbiAgYnV0dG9uIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBiYWNrZ3JvdW5kOiAjZmY1MDAwO1xcbiAgICBsaW5lLWhlaWdodDogMS4xNTtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICB9XFxuXFxuICBidXR0b246aG92ZXIsIGlucHV0OmhvdmVyIHtcXG4gICAgdHJhbnNpdGlvbjogYWxsIC4xcyBlYXNlO1xcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwICNmZmYsIDAgMCAwIDNweCAjMWRlOWI2O1xcbiAgfVxcbn1cXG5cXG4ubWFpbiB7XFxuIGRpc3BsYXk6IGZsZXg7XFxuIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuIC8vYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbn1cXG5cXG4ubWFpbi1jYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICAvLyB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAvL2hlaWdodDogZml0LWNvbnRlbnQ7XFxuICAvL21heC13aWR0aDogNDAlO1xcbiAgLy8gYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMS41ZnI7XFxuICBnYXA6IDFyZW07XFxuICA+ICoge1xcbiAgIC8vIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xcbiAgfVxcblxcbiAgLnBsYWNlIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvLTE7XFxuICAgIGZvbnQtc2l6ZTogNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC53ZWF0aGVyLWxvZ28ge1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBncmlkLXJvdzogMi8tMTtcXG4gICAgZm9udC1zaXplOiAxMHJlbTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5jYXJkIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG4gICAgZ3JpZC1yb3c6IDIvLTE7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICAvLyBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICAvLyBmb250LXNpemU6IDNyZW07XFxuICAgIC50ZW1wIHtcXG4gICAgICBmb250LXNpemU6IDRyZW07XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLndlZWtseS13ZWF0aGVyIHtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gID4gKiB7XFxuICAgIC8vIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbiAgfVxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTMwcHgsIDFmcikpO1xcbiAgcGFkZGluZzogMCAzcmVtO1xcbiAgZ2FwOiAxcmVtO1xcblxcbiAgLndlZWtseS1jYXJkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDowLjZyZW07XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgICA6bnRoLWNoaWxkKDIpIHtcXG4gICAgICBmb250LXNpemU6IDRyZW07XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLmZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogcmdiYSgxMywgMCwgMCwgMC4zMjUpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2h0bWwtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ljb25zLzUwZC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbi8vIE1vZHVsZVxudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19fKTtcbnZhciBjb2RlID0gXCI8aHRtbCBsYW5nPVxcXCJlblxcXCI+XFxuICA8aGVhZD5cXG4gICAgPG1ldGEgY2hhcnNldD1cXFwiVVRGLThcXFwiIC8+XFxuICAgIDxtZXRhIGh0dHAtZXF1aXY9XFxcIlgtVUEtQ29tcGF0aWJsZVxcXCIgY29udGVudD1cXFwiSUU9ZWRnZVxcXCIgLz5cXG4gICAgPG1ldGEgbmFtZT1cXFwidmlld3BvcnRcXFwiIGNvbnRlbnQ9XFxcIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcXFwiIC8+XFxuICAgIDxsaW5rXFxuICAgICAgaHJlZj1cXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1BbGF0YSZkaXNwbGF5PXN3YXBcXFwiXFxuICAgICAgcmVsPVxcXCJzdHlsZXNoZWV0XFxcIlxcbiAgICAvPlxcbiAgICA8bGlua1xcbiAgICAgIGhyZWY9XFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vaWNvbj9mYW1pbHk9TWF0ZXJpYWwrSWNvbnMrUm91bmRcXFwiXFxuICAgICAgcmVsPVxcXCJzdHlsZXNoZWV0XFxcIlxcbiAgICAvPlxcbiAgICA8dGl0bGU+S2xpbWF0ZTwvdGl0bGU+XFxuICA8L2hlYWQ+XFxuXFxuICA8Ym9keSBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJ1cHBlclxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0ZW1wLXRvZ2dsZS1idG5cXFwiPkY8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInRvcC1kYXRlLWRpcGxheVxcXCI+ZGF0ZTwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImxvd2VyXFxcIj5cXG4gICAgICAgIDxpbnB1dCBjbGFzcz1cXFwic2VhcmNoLWJhclxcXCIgdHlwZT1cXFwidGV4dFxcXCIgLz5cXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcIm1hdGVyaWFsLWljb25zLXJvdW5kIHNlYXJjaC1idG5cXFwiPnNlYXJjaDwvYnV0dG9uPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwibWFpblxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwibWFpbi1jYXJkXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInBsYWNlXFxcIj5Nb250cmVhbDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwid2VhdGhlci1pY29uXFxcIj5cXG4gICAgICAgICAgPGltZyBpZD1cXFwibWFpbi13ZWF0aGVyaWNvblxcXCIgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gKyBcIlxcXCIgLz5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPCEtLSA8ZGl2IGNsYXNzPVxcXCJtYXRlcmlhbC1pY29ucy1yb3VuZCB3ZWF0aGVyLWxvZ29cXFwiPmxpZ2h0X21vZGU8L2Rpdj4gLS0+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkXFxcIj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwidGVtcFxcXCI+MTjCsDwvZGl2PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJoaWdoLWxvd1xcXCI+aGlnaC9sb3c8L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGVzY1xcXCI+cmFpbnk8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG5cXG4gICAgPGRpdiBjbGFzcz1cXFwid2Vla2x5LXdlYXRoZXJcXFwiPlxcbiAgICAgIDwhLS0gPGRpdiBjbGFzcz1cXFwiY2FyZFxcXCI+XFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwibWF0ZXJpYWwtaWNvbnMtcm91bmQgc3VuXFxcIj4gbGlnaHRfbW9kZSA8L3NwYW4+XFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwibWF0ZXJpYWwtaWNvbnMtcm91bmQgd2luZFxcXCI+IGFpciA8L3NwYW4+XFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwibWF0ZXJpYWwtaWNvbnMtcm91bmQgdGh1bmRlcnN0b3JtXFxcIj4gdGh1bmRlcnN0b3JtIDwvc3Bhbj5cXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJtYXRlcmlhbC1pY29ucy1yb3VuZCBjb2xkXFxcIj4gYWNfdW5pdCA8L3NwYW4+XFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwibWF0ZXJpYWwtaWNvbnMtcm91bmQgcmFpblxcXCI+IHdhdGVyX2Ryb3AgPC9zcGFuPlxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcIm1hdGVyaWFsLWljb25zLXJvdW5kIGNsb3Vkc1xcXCI+IGNsb3VkIDwvc3Bhbj5cXG4gICAgICA8L2Rpdj4gLS0+XFxuXFxuICAgICAgPGRpdiBjbGFzcz1cXFwid2Vla2x5LWNhcmRcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGF0ZVxcXCI+ZGF0ZTwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibWF0ZXJpYWwtaWNvbnMtcm91bmRcXFwiPmNsb3VkPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJoaWdoLWxvd1xcXCI+aGlnaC9sb3c8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJ3ZWVrbHktY2FyZFxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkYXRlXFxcIj5kYXRlPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtYXRlcmlhbC1pY29ucy1yb3VuZFxcXCI+Y2xvdWQ8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImhpZ2gtbG93XFxcIj5oaWdoL2xvdzwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcIndlZWtseS1jYXJkXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImRhdGVcXFwiPmRhdGU8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIm1hdGVyaWFsLWljb25zLXJvdW5kXFxcIj5jbG91ZDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiaGlnaC1sb3dcXFwiPmhpZ2gvbG93PC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwid2Vla2x5LWNhcmRcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGF0ZVxcXCI+ZGF0ZTwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibWF0ZXJpYWwtaWNvbnMtcm91bmRcXFwiPmNsb3VkPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJoaWdoLWxvd1xcXCI+aGlnaC9sb3c8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJ3ZWVrbHktY2FyZFxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkYXRlXFxcIj5kYXRlPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtYXRlcmlhbC1pY29ucy1yb3VuZFxcXCI+Y2xvdWQ8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImhpZ2gtbG93XFxcIj5oaWdoL2xvdzwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcIndlZWtseS1jYXJkXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImRhdGVcXFwiPmRhdGU8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIm1hdGVyaWFsLWljb25zLXJvdW5kXFxcIj5jbG91ZDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiaGlnaC1sb3dcXFwiPmhpZ2gvbG93PC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwid2Vla2x5LWNhcmRcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGF0ZVxcXCI+ZGF0ZTwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibWF0ZXJpYWwtaWNvbnMtcm91bmRcXFwiPmNsb3VkPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJoaWdoLWxvd1xcXCI+aGlnaC9sb3c8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZvb3RlclxcXCI+Q3JlYXRlZCB3aXRoIOKdpO+4jyBieSBqYXJyeWluZ251dDwvZGl2PlxcbiAgPC9ib2R5PlxcbjwvaHRtbD5cXG5cIjtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMubWF5YmVOZWVkUXVvdGVzICYmIC9bXFx0XFxuXFxmXFxyIFwiJz08PmBdLy50ZXN0KHVybCkpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybCwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyB1cGRhdGVNYWluQ2FyZCB9IGZyb20gXCIuL3VwZGF0ZURPTVwiO1xuXG5mdW5jdGlvbiBnZXREYXRhRnJvbUZvcm0oKSB7XG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2gtYmFyXCIpO1xuICBjb25zdCBjaXR5TmFtZSA9IGlucHV0LnZhbHVlO1xuXG4gIC8vIGlmIG5vdCBhbiBlbXB0eSBzdHJpbmdcbiAgaWYgKGNpdHlOYW1lKSB7XG4gICAgLy8gcmVtb3ZlIHdoaXRlc3BhY2UgZm9yIHRoZSBhcGkgY2FsbFxuICAgIHJldHVybiBjaXR5TmFtZVxuICAgICAgLnJlcGxhY2UoLyhcXHMrJHxeXFxzKykvZywgXCJcIikgLy8gcmVtb3ZlIHdoaXRlc3BhY2UgZnJvbSBiZWdpbmluZyBhbmQgZW5kIG9mIHN0cmluZ1xuICAgICAgLnJlcGxhY2UoLygsXFxzKykvZywgXCIsXCIpIC8vIHJlbW92ZSBhbnkgd2hpdGUgc3BhY2UgdGhhdCBmb2xsb3dzIGEgY29tbWFcbiAgICAgIC5yZXBsYWNlKC8oXFxzKywpL2csIFwiLFwiKSAvLyByZW1vdmUgYW55IHdoaXRlIHNwYWNlIHRoYXQgcHJlY2VlZHMgYSBjb21tYVxuICAgICAgLnJlcGxhY2UoL1xccysvZywgXCIrXCIpOyAvLyByZXBsYWNlIGFueSByZW1haW5pbmcgd2hpdGUgc3BhY2Ugd2l0aCArLCBzbyBpdCB3b3JrcyBpbiBhcGkgY2FsbFxuICB9XG5cbiAgcmV0dXJuIFwiXCI7XG59XG5cbmV4cG9ydCBjb25zdCBmZXRjaEFwaSA9IGFzeW5jICgpID0+IHtcbiAgbGV0IGNpdHlOYW1lID0gZ2V0RGF0YUZyb21Gb3JtKCk7XG4gIGF3YWl0IGZldGNoKFxuICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eU5hbWV9JmFwcGlkPSR7cHJvY2Vzcy5lbnYuV0VBVEhFUl9BUElfS0VZfSZ1bml0cz1tZXRyaWNgXG4gIClcbiAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgfSlcbiAgICAudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICB1cGRhdGVNYWluQ2FyZChkYXRhKTtcbiAgICB9KVxuICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICBhbGVydChlcnIpO1xuICAgICAgcmV0dXJuIGVycm9yO1xuICAgIH0pO1xuICByZXR1cm47XG59O1xuIiwiaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7XG5pbXBvcnQgeyBmZXRjaEFwaSB9IGZyb20gXCIuL2FwaUZ1bmN0aW9uc1wiO1xuLy9odHRwczovL2tmaWcyMS5naXRodWIuaW8vd2VhdGhlcl9hcGlfcmVhY3QvXG5cbmxldCBzZWFyY2hCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaC1iYXJcIik7XG5cbmxldCBzZWFyY2hCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaC1idG5cIik7XG5zZWFyY2hCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZldGNoQXBpKTtcbiIsImltcG9ydCBpbmRleCBmcm9tIFwiLi9pbmRleC5odG1sXCI7XG5pbXBvcnQgXCIuL2ljb25zLzUwZC5wbmdcIjtcblxue1xuICAvKiA8ZGl2IGNsYXNzPVwibWFpblwiPlxuICA8ZGl2IGNsYXNzPVwibWFpbi1jYXJkXCI+XG4gICAgPGRpdiBjbGFzcz1cInBsYWNlXCI+TW9udHJlYWw8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMtcm91bmQgd2VhdGhlci1sb2dvXCI+bGlnaHRfbW9kZTwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwidGVtcFwiPjE4wrA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJoaWdoLWxvd1wiPmhpZ2gvbG93PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZGVzY1wiPnJhaW55PC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+OyAqL1xufVxuXG5sZXQgbWFpblBsYWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWNhcmQgPiAucGxhY2VcIik7XG5sZXQgbG9jYXRpb25JY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluLXdlYXRoZXJpY29uXCIpO1xuLy9sZXQgbWFpbkxvZ28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tY2FyZCA+IC53ZWF0aGVyLWxvZ29cIik7XG5sZXQgdGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1jYXJkID4gLmNhcmQgPiAudGVtcFwiKTtcbmxldCBoaWdoTG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWNhcmQgPiAuY2FyZCA+IC5oaWdoLWxvd1wiKTtcbmxldCBkZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWNhcmQgPiAuY2FyZCA+IC5kZXNjXCIpO1xuXG5leHBvcnQgY29uc3QgdXBkYXRlTWFpbkNhcmQgPSAoZGF0YSkgPT4ge1xuICBtYWluUGxhY2UudGV4dENvbnRlbnQgPSBkYXRhLm5hbWU7XG4gIHRlbXAudGV4dENvbnRlbnQgPSBkYXRhLm1haW4udGVtcCArIFwiwrBcIjtcbiAgaGlnaExvdy50ZXh0Q29udGVudCA9IGAke2RhdGEubWFpbi50ZW1wX21heH3CsCAvICR7ZGF0YS5tYWluLnRlbXBfbWlufcKwYDtcbiAgZGVzYy50ZXh0Q29udGVudCA9IGRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcbiAgbGV0IHsgaWNvbiB9ID0gZGF0YS53ZWF0aGVyWzBdO1xuICBhbGVydChkYXRhLndlYXRoZXJbMF0uaWNvbik7XG4gIGNvbnNvbGUubG9nKGxvY2F0aW9uSWNvbik7XG4gIC8vbG9jYXRpb25JY29uLnNldEF0dHJpYnV0ZShcInNyY1wiLCBgaWNvbnMvJHtpY29ufS5wbmdgKTtcbiAgbG9jYXRpb25JY29uLnNyYyA9IGBpY29ucy8ke2ljb259LnBuZ2A7XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9