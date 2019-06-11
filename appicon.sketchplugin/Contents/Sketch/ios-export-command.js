var globalThis = this;
function __skpm_run (key, context) {
  globalThis.context = context;

var exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/ios-export-command.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ios-export-command.js":
/*!***********************************!*\
  !*** ./src/ios-export-command.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sketch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch */ "sketch");
/* harmony import */ var sketch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sketch__WEBPACK_IMPORTED_MODULE_0__);

var Slice = sketch__WEBPACK_IMPORTED_MODULE_0___default.a.Slice;
var Rectangle = sketch__WEBPACK_IMPORTED_MODULE_0___default.a.Rectangle;
/* harmony default export */ __webpack_exports__["default"] = (function (context) {
  var document = sketch__WEBPACK_IMPORTED_MODULE_0___default.a.getSelectedDocument();
  var allLayers = document.selectedLayers;
  var layers = allLayers.layers; // Validate layer selected

  if (allLayers.length == 0) {
    sketch__WEBPACK_IMPORTED_MODULE_0___default.a.UI.message('Debes seleccionar un artboard');
    return;
  } // Get selected layer


  var mainLayer = layers[0];

  if (mainLayer.frame.width != 1024 && mainLayer.frame.height != 1024) {
    sketch__WEBPACK_IMPORTED_MODULE_0___default.a.UI.message('Tu imagen debe tener un tamaño de 1024');
    return;
  } // Create new layer


  var appIconSizes = [76, 152, 501];

  function makeAppIcon(appIconSizes) {
    var artboardSpace = 50;
    var layers = [mainLayer];
    appIconSizes.forEach(function (appIconSize) {
      console.log(appIconSize);
      var mainLayerX = mainLayer.frame.x + mainLayer.frame.width + artboardSpace;
      var mainLayerY = mainLayer.frame.y;
      var newLayer = mainLayer.duplicate();
      var newLayerX = mainLayerX + appIconSize + artboardSpace * (appIconSizes.length + 1);
      var newLayerY = mainLayerY;
      newLayer.frame = new Rectangle(newLayerX, newLayerY, appIconSize, appIconSize);
      var currentImage = newLayer.layers[0];
      currentImage.frame.width = appIconSize;
      currentImage.frame.height = appIconSize;
      newLayer.name = "".concat(appIconSize);
      newLayer.selected = true;
      layers.push(newLayer);
    });
    return layers;
  }

  var layersToExport = makeAppIcon(appIconSizes); // export

  var config = {
    scales: '1,2,3',
    formats: 'png',
    output: '~/Desktop/ios-appicon',
    overwriting: true
  };
  sketch__WEBPACK_IMPORTED_MODULE_0___default.a.export(layersToExport, config);
});

/***/ }),

/***/ "sketch":
/*!*************************!*\
  !*** external "sketch" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch");

/***/ })

/******/ });
  if (key === 'default' && typeof exports === 'function') {
    exports(context);
  } else {
    exports[key](context);
  }
}
globalThis['onRun'] = __skpm_run.bind(this, 'default')

//# sourceMappingURL=ios-export-command.js.map