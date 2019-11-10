/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,1]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),

/***/ 1:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _engine_Starter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _engine_Game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60);


document.addEventListener("DOMContentLoaded", function () {
  var container = document.querySelector(".content");

  if (container) {
    _engine_Starter__WEBPACK_IMPORTED_MODULE_0__["default"].init().then(function () {
      var game = new _engine_Game_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    });
  }
});

/***/ }),

/***/ 2:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _settings_appSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57);
/* harmony import */ var tween_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58);
/* harmony import */ var tween_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tween_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var component_emitter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59);
/* harmony import */ var component_emitter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(component_emitter__WEBPACK_IMPORTED_MODULE_3__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var Starter =
/*#__PURE__*/
function () {
  function Starter() {
    var _this = this;

    _classCallCheck(this, Starter);

    this.app = null;
    this._init = {};
    this._init.initPromise = new Promise(function (resolve) {
      _this._init.setInitiated = resolve;
    });
    this.size = _objectSpread({}, _settings_appSettings__WEBPACK_IMPORTED_MODULE_1__["default"].app);
    new component_emitter__WEBPACK_IMPORTED_MODULE_3___default.a(this);
  }

  _createClass(Starter, [{
    key: "init",
    value: function init() {
      var _this2 = this;

      var container = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.body;
      var width = window.innerWidth;
      var height = window.innerHeight; //TODO: maybe remove view

      var view = document.querySelector("content");
      this.app = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Application"]({
        width: width,
        height: height,
        transparent: true,
        view: view
      });
      container.appendChild(this.app.view);
      window.app = this.app;
      this._ticker = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Ticker"]();

      this._ticker.start();

      this._ticker.add(function () {
        tween_js__WEBPACK_IMPORTED_MODULE_2___default.a.update();
      });

      window.onresize = function () {
        _this2.resize();
      };

      this._init.setInitiated();

      this.resize();
      return this._init.initPromise;
    }
  }, {
    key: "resize",
    value: function resize() {
      var _this$size = this.size,
          width = _this$size.width,
          height = _this$size.height;
      var _window = window,
          currW = _window.innerWidth,
          currH = _window.innerHeight;
      var isLandscape = currW > currH;
      document.body.style.width = currW + "px";
      document.body.style.height = currH + "px";
      var gw, gh;

      if (isLandscape) {
        gh = width;
        gw = Math.floor(gh * (currW / currH));

        if (gw < height) {
          gw = height;
          gh = Math.floor(height * (currH / currW));
        }
      } else {
        gh = height;
        gw = Math.floor(gh * (currW / currH));

        if (gw < width) {
          gw = width;
          gh = Math.floor(width * (currH / currW));
        }
      }

      this.app.view.style.width = currW + "px";
      this.app.view.style.height = currH + "px";
      this.app.renderer.resize(gw, gh);
      this.emit("onResize", {
        w: gw,
        h: gh,
        isLandscape: isLandscape
      });
    }
  }, {
    key: "initiated",
    get: function get() {
      return this._init.initPromise;
    }
  }]);

  return Starter;
}();

var starter = new Starter();
/* harmony default export */ __webpack_exports__["default"] = (starter);

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  app: {
    width: 960,
    height: 960
  },
  colors: {
    introSceneBg: "0x21365f",
    outroSceneBg: "0x2a7a33",
    mainSceneBg: "0x2a647a"
  }
});

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Starter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _scenes_SceneManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61);
/* harmony import */ var _scenes_IntroScene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62);
/* harmony import */ var _scenes_MainScene__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }






var Game = function Game() {
  var _this = this;

  _classCallCheck(this, Game);

  _Starter__WEBPACK_IMPORTED_MODULE_0__["default"].initiated.then(function () {
    _this.introScene = new _scenes_IntroScene__WEBPACK_IMPORTED_MODULE_2__["default"]();
    _this.mainScene = new _scenes_MainScene__WEBPACK_IMPORTED_MODULE_3__["default"](); // SceneManager.registerScene(`intro`, this.introScene);

    _scenes_SceneManager__WEBPACK_IMPORTED_MODULE_1__["default"].registerScene("main", _this.mainScene);
    _scenes_SceneManager__WEBPACK_IMPORTED_MODULE_1__["default"].showScene("main");
    _Starter__WEBPACK_IMPORTED_MODULE_0__["default"].resize();
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Game);

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SceneManager =
/*#__PURE__*/
function () {
  function SceneManager() {
    _classCallCheck(this, SceneManager);

    this._scenes = {};
    this._activeScene = null;
  }

  _createClass(SceneManager, [{
    key: "showScene",
    value: function showScene(name, data) {
      if (this._activeScene !== null && this._scenes[name] === this._activeScene) {
        console.info("Scene ".concat(name, " is already displaying"));
      }

      if (this._scenes.hasOwnProperty(name)) {
        if (this._activeScene !== null) {
          this._activeScene.hide();
        }

        this._scenes[name].show(data);

        this._activeScene = this._scenes[name];
        console.info("active scene ".concat(name));
      } else {
        console.error("Scene ".concat(name, " is not found"));
      }
    }
  }, {
    key: "registerScene",
    value: function registerScene(name, scene) {
      this._scenes[name] = scene;
    }
  }]);

  return SceneManager;
}();

/* harmony default export */ __webpack_exports__["default"] = (new SceneManager());

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _engine_Starter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _utils_GraphicsHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63);
/* harmony import */ var _settings_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65);
/* harmony import */ var _engine_Resizable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(66);
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3);
/* harmony import */ var _SceneManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(61);
/* harmony import */ var _settings_appSettings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(57);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









var IntroScene =
/*#__PURE__*/
function (_Resizable) {
  _inherits(IntroScene, _Resizable);

  function IntroScene() {
    var _this;

    _classCallCheck(this, IntroScene);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(IntroScene).call(this));
    _this._container = null;
    _this._substrate = null;
    _this._textTop = null;
    _this._textBottom = null;

    _this._initScene();

    _this.hide();

    return _this;
  }

  _createClass(IntroScene, [{
    key: "onResize",
    value: function onResize(data) {
      var w = data.w,
          h = data.h; //landscape

      if (w >= h) {
        this._textTop.y = h / 2 - 150;
        this._textBottom.y = h / 2 + 110;
      } else {
        this._textTop.y = h / 2 - 200;
        this._textBottom.y = h / 2 + 100;
      }

      this._textTop.x = w / 2;
      this._textBottom.x = w / 2;
      this._substrate.width = w;
      this._substrate.height = h;
    }
  }, {
    key: "_drawSubstrate",
    value: function _drawSubstrate() {}
  }, {
    key: "drawText",
    value: function drawText(settings) {
      var sourceTxt = "input your text";
      var _settings$text = settings.text,
          text = _settings$text === void 0 ? sourceTxt : _settings$text,
          _settings$x = settings.x,
          x = _settings$x === void 0 ? 0 : _settings$x,
          _settings$y = settings.y,
          y = _settings$y === void 0 ? 0 : _settings$y,
          style = settings.style;
      var txt = new pixi_js__WEBPACK_IMPORTED_MODULE_4__["Text"](text, style);
      txt.x = x;
      txt.y = y;
      txt.anchor.set(0.5);
      return txt;
    }
  }, {
    key: "_initScene",
    value: function _initScene() {
      var _this2 = this;

      var _window = window,
          w = _window.innerWidth,
          h = _window.innerHeight;
      var textStyles = {
        fill: "white",
        fontSize: 100,
        fontWeight: 900
      };
      this._container = _utils_GraphicsHelper__WEBPACK_IMPORTED_MODULE_1__["default"].createContainer({});

      this._container.setParent(_engine_Starter__WEBPACK_IMPORTED_MODULE_0__["default"].app.stage);

      this._substrate = _utils_GraphicsHelper__WEBPACK_IMPORTED_MODULE_1__["default"].createColorContainer({
        width: w,
        height: h,
        color: _settings_appSettings__WEBPACK_IMPORTED_MODULE_6__["default"].colors.introSceneBg,
        onClick: function onClick(_) {
          _this2.hide();

          _SceneManager__WEBPACK_IMPORTED_MODULE_5__["default"].showScene("main");
        }
      });

      this._substrate.setParent(this._container);

      this._textTop = _utils_GraphicsHelper__WEBPACK_IMPORTED_MODULE_1__["default"].drawText({
        x: w / 2,
        y: h / 2,
        text: _settings_i18n__WEBPACK_IMPORTED_MODULE_2__["default"].introScene_1,
        style: textStyles
      });

      this._textTop.setParent(this._container);

      this._textBottom = _utils_GraphicsHelper__WEBPACK_IMPORTED_MODULE_1__["default"].drawText({
        x: w / 2,
        y: h / 2 + 220,
        text: _settings_i18n__WEBPACK_IMPORTED_MODULE_2__["default"].introScene_2,
        style: textStyles
      });

      this._textBottom.setParent(this._container);
    }
  }, {
    key: "show",
    value: function show() {
      this._container.alpha = 1;
      this._substrate.visible = true;
      this._substrate.interactive = true;
    }
  }, {
    key: "hide",
    value: function hide() {
      this._container.alpha = 0;
      this._substrate.visible = false;
      this._substrate.interactive = false;
    }
  }, {
    key: "destroy",
    value: function destroy() {}
  }]);

  return IntroScene;
}(_engine_Resizable__WEBPACK_IMPORTED_MODULE_3__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (IntroScene);

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GraphicsHelper; });
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var GraphicsHelper =
/*#__PURE__*/
function () {
  function GraphicsHelper() {
    _classCallCheck(this, GraphicsHelper);
  }

  _createClass(GraphicsHelper, null, [{
    key: "createContainer",
    value: function createContainer() {
      var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _settings$x = settings.x,
          x = _settings$x === void 0 ? 0 : _settings$x,
          _settings$y = settings.y,
          y = _settings$y === void 0 ? 0 : _settings$y,
          _settings$width = settings.width,
          width = _settings$width === void 0 ? 0 : _settings$width,
          _settings$height = settings.height,
          height = _settings$height === void 0 ? 0 : _settings$height;
      var container = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Container"]();
      container.x = x;
      container.y = y;
      container.width = width;
      container.height = height;
      return container;
    }
  }, {
    key: "createColorContainer",
    value: function createColorContainer() {
      var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _settings$x2 = settings.x,
          x = _settings$x2 === void 0 ? 0 : _settings$x2,
          _settings$y2 = settings.y,
          y = _settings$y2 === void 0 ? 0 : _settings$y2,
          _settings$width2 = settings.width,
          width = _settings$width2 === void 0 ? 0 : _settings$width2,
          _settings$height2 = settings.height,
          height = _settings$height2 === void 0 ? 0 : _settings$height2,
          color = settings.color,
          onClick = settings.onClick,
          _settings$alpha = settings.alpha,
          alpha = _settings$alpha === void 0 ? 1 : _settings$alpha,
          text = settings.text,
          textStyle = settings.textStyle;
      var container = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Container"](); // move container to screen center

      container.x = x;
      container.y = y;
      container.alpha = alpha;
      container.width = width;
      container.height = height;
      var sprite = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Sprite"](pixi_js__WEBPACK_IMPORTED_MODULE_0__["Texture"].WHITE);
      sprite.width = width;
      sprite.height = height;
      sprite.tint = color;
      sprite.setParent(container);

      if (onClick) {
        container.buttonMode = true;
        container.interactive = true;
        container.on("pointerdown", onClick);
      }

      if (text) {
        var txt = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Text"](text, textStyle);
        txt.x = sprite.width / 2;
        txt.y = sprite.height / 2;
        txt.anchor.set(0.5); // txt.fillColor = `0xffffff`;

        container.addChild(txt);
      }

      return container;
    }
  }, {
    key: "createSprite",
    value: function createSprite(settings) {
      var name = settings.name,
          _settings$x3 = settings.x,
          x = _settings$x3 === void 0 ? 0 : _settings$x3,
          _settings$y3 = settings.y,
          y = _settings$y3 === void 0 ? 0 : _settings$y3,
          onClick = settings.onClick,
          _settings$alpha2 = settings.alpha,
          alpha = _settings$alpha2 === void 0 ? 1 : _settings$alpha2;
      var base64source = _images__WEBPACK_IMPORTED_MODULE_1__["default"][name];
      var texture = pixi_js__WEBPACK_IMPORTED_MODULE_0__["Texture"].fromLoader(base64source);
      var sprite = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Sprite"](texture);
      sprite.x = x;
      sprite.y = y;
      sprite.alpha = alpha;

      if (onClick) {
        sprite.buttonMode = true;
        sprite.interactive = true;
        sprite.on("pointerdown", onClick);
      }

      return sprite;
    }
  }, {
    key: "drawText",
    value: function drawText(settings) {
      var sourceTxt = "input your text";
      var _settings$text = settings.text,
          text = _settings$text === void 0 ? sourceTxt : _settings$text,
          _settings$x4 = settings.x,
          x = _settings$x4 === void 0 ? 0 : _settings$x4,
          _settings$y4 = settings.y,
          y = _settings$y4 === void 0 ? 0 : _settings$y4,
          style = settings.style;
      var txt = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Text"](text, style);
      txt.x = x;
      txt.y = y;
      txt.anchor.set(0.5);
      return txt;
    }
  }]);

  return GraphicsHelper;
}();



/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var IMAGES = {
  "arrow": "data:image/png;base64,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"
};
/* harmony default export */ __webpack_exports__["default"] = (IMAGES);

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  introScene_1: "Intro SCENE",
  introScene_2: "(tap on screen)",
  mainScene_1: "Main SCENE",
  mainScene_2: "(tap on screen)",
  outroScene_1: "Outro SCENE",
  outroScene_2: "(END CARD)"
});

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Starter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Resizable =
/*#__PURE__*/
function () {
  function Resizable() {
    var _this = this;

    _classCallCheck(this, Resizable);

    _Starter__WEBPACK_IMPORTED_MODULE_0__["default"].on("onResize", function (data) {
      _this.onResize(data);
    });
  }

  _createClass(Resizable, [{
    key: "onResize",
    value: function onResize(data) {}
  }]);

  return Resizable;
}();

/* harmony default export */ __webpack_exports__["default"] = (Resizable);

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _engine_Starter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var tween_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58);
/* harmony import */ var tween_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tween_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_GraphicsHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63);
/* harmony import */ var _engine_Resizable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(66);
/* harmony import */ var _settings_appSettings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57);
/* harmony import */ var _components_Boy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(68);
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








window['PIXI'] = pixi_js__WEBPACK_IMPORTED_MODULE_6__;

__webpack_require__(69);

var MainScene =
/*#__PURE__*/
function (_Resizable) {
  _inherits(MainScene, _Resizable);

  function MainScene() {
    var _this;

    _classCallCheck(this, MainScene);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MainScene).call(this));
    _this._container = null;
    _this._substrate = null;
    _this._button = null;
    _this._buttonText = null;
    _this._countPlayersInTeam = 3;
    _this._players = {
      1: [],
      2: []
    };
    _this._data = {
      positions: {}
    };

    _this._drawScene();

    _this._drawStage();

    _this._startGame();

    _this._initialAnimationTime = 3000;
    return _this;
  }

  _createClass(MainScene, [{
    key: "_startGame",
    value: function _startGame() {
      var _this2 = this;

      var a = {
        x: 10
      };
      this._hintTween = new tween_js__WEBPACK_IMPORTED_MODULE_1___default.a.Tween(a).to({
        x: 0
      }, 3000).onComplete(function () {
        _this2.setInteractiveForAllPlayers();
      }).start();
    }
  }, {
    key: "loadResources",
    value: function loadResources() {
      if (!this._resources) {
        this._resources = new Promise(function (resolve) {
          app.loader.add('spineboypro', 'spine/spineboy-pro.json').load(function (_, result) {
            resolve(result);
          });
        });
      }

      return this._resources;
    }
  }, {
    key: "onResize",
    value: function onResize(data) {
      var w = data.w,
          h = data.h;
      this._substrate.width = w;
      this._substrate.height = h;
    }
  }, {
    key: "_drawStage",
    value: function _drawStage() {
      var _this3 = this;

      var app = _engine_Starter__WEBPACK_IMPORTED_MODULE_0__["default"].app;
      app.stage.interactive = true;
      this.loadResources().then(function (_el) {
        _this3._addPlayers();
      });
    }
  }, {
    key: "randomInteger",
    value: function randomInteger(min, max) {
      var rand = Math.floor(min + Math.random() * (max + 1 - min));
      return rand;
    }
  }, {
    key: "_addPlayers",
    value: function _addPlayers() {
      var _this4 = this;

      var xOffSet = 150;
      var yOffSet = 180;
      var appHeight = _engine_Starter__WEBPACK_IMPORTED_MODULE_0__["default"].app.screen.height;

      for (var i = 1; i <= 2; i++) {
        for (var j = 0; j < this._countPlayersInTeam; j++) {
          var direction = i === 1 ? 1 : -1;
          var minX = i === 1 ? xOffSet : _engine_Starter__WEBPACK_IMPORTED_MODULE_0__["default"].app.screen.width * 0.75 - xOffSet;
          var maxX = i === 1 ? _engine_Starter__WEBPACK_IMPORTED_MODULE_0__["default"].app.screen.width * 0.25 : _engine_Starter__WEBPACK_IMPORTED_MODULE_0__["default"].app.screen.width - xOffSet;
          var minY = appHeight / this._countPlayersInTeam * j + yOffSet;
          var maxY = minY + appHeight / this._countPlayersInTeam - yOffSet;
          var settings = {
            x: this.randomInteger(minX, maxX),
            y: this.randomInteger(minY, maxY),
            direction: direction,
            team: i,
            id: j + 1
          };
          var boy = new _components_Boy__WEBPACK_IMPORTED_MODULE_5__["Boy"](settings);
          boy.on('checkКeadiness', function (obj) {
            _this4._checkКeadiness(obj);
          });

          this._players["".concat(i)].push(boy);
        }
      }
    }
  }, {
    key: "setInteractiveForAllPlayers",
    value: function setInteractiveForAllPlayers() {
      this._players['1'].forEach(function (el) {
        return el.turnOnInteractive();
      });

      this._players['2'].forEach(function (el) {
        return el.turnOnInteractive();
      });
    }
  }, {
    key: "_movePlayers",
    value: function _movePlayers() {
      var isReady = function isReady(el) {
        return el.isReady;
      };

      var firstPlayer = this._players['1'].find(isReady);

      var secondPlayer = this._players['2'].find(isReady);

      var center = this._getCenter(firstPlayer, secondPlayer);

      firstPlayer.moveTo(center);
      secondPlayer.moveTo(center);
    }
  }, {
    key: "_getCenter",
    value: function _getCenter(obj1, obj2) {
      return {
        x: (obj1.coords.x + obj2.coords.x) / 2,
        y: (obj1.coords.y + obj2.coords.y) / 2
      };
    }
  }, {
    key: "_check\u041Aeadiness",
    value: function _checkEadiness(data) {
      var id = data.id,
          team = data.team;

      this._players[team].forEach(function (el) {
        el.hideArrow();
      });

      this._players[team][id].showArrow();

      if (this._isPlayersAreReady()) {
        this.showButton();
      }
    }
  }, {
    key: "_isPlayersAreReady",
    value: function _isPlayersAreReady() {
      var isReady = function isReady(el) {
        return el.isReady;
      };

      var isReadyPlayerInFirstTeam = this._players['1'].some(isReady);

      var isReadyPlayerInSecondTeam = this._players['2'].some(isReady);

      if (isReadyPlayerInFirstTeam && isReadyPlayerInSecondTeam) {
        return true;
      }
    }
  }, {
    key: "_resetAllPlayersStatus",
    value: function _resetAllPlayersStatus() {
      this._players['1'].forEach(function (el) {
        return el.resetActiveStatus();
      });

      this._players['2'].forEach(function (el) {
        return el.resetActiveStatus();
      });
    }
  }, {
    key: "_drawScene",
    value: function _drawScene() {
      var _this5 = this;

      var _starter$app$screen = _engine_Starter__WEBPACK_IMPORTED_MODULE_0__["default"].app.screen,
          width = _starter$app$screen.width,
          height = _starter$app$screen.height;
      this._container = _utils_GraphicsHelper__WEBPACK_IMPORTED_MODULE_2__["default"].createContainer({});

      this._container.setParent(_engine_Starter__WEBPACK_IMPORTED_MODULE_0__["default"].app.stage);

      this._substrate = _utils_GraphicsHelper__WEBPACK_IMPORTED_MODULE_2__["default"].createColorContainer({
        width: width,
        height: height,
        color: _settings_appSettings__WEBPACK_IMPORTED_MODULE_4__["default"].colors.mainSceneBg
      });

      this._substrate.setParent(this._container);

      var textStyle = {
        fill: "0xffffff",
        fontSize: 20
      };
      this._button = _utils_GraphicsHelper__WEBPACK_IMPORTED_MODULE_2__["default"].createColorContainer({
        width: 200,
        height: 75,
        color: "0x660000",
        x: width / 2 - 100,
        y: height - 95,
        text: 'Introduce players',
        textStyle: textStyle,
        onClick: function onClick() {
          _this5._movePlayers();

          _this5._resetAllPlayersStatus();

          _this5.hideButton();
        }
      });

      this._button.setParent(this._container);

      this.hideButton();
    }
  }, {
    key: "show",
    value: function show() {
      this._container.alpha = 1;
    }
  }, {
    key: "hide",
    value: function hide() {
      this._container.alpha = 0;
    }
  }, {
    key: "showButton",
    value: function showButton() {
      this._button.visible = true;
    }
  }, {
    key: "hideButton",
    value: function hideButton() {
      this._button.visible = false;
    }
  }]);

  return MainScene;
}(_engine_Resizable__WEBPACK_IMPORTED_MODULE_3__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (MainScene);

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Boy", function() { return Boy; });
/* harmony import */ var _engine_Starter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _utils_GraphicsHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63);
/* harmony import */ var tween_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58);
/* harmony import */ var tween_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tween_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var component_emitter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59);
/* harmony import */ var component_emitter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(component_emitter__WEBPACK_IMPORTED_MODULE_3__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var Boy =
/*#__PURE__*/
function () {
  function Boy(settings) {
    _classCallCheck(this, Boy);

    this._resources = _engine_Starter__WEBPACK_IMPORTED_MODULE_0__["default"].app.loader.resources;
    this._settings = settings;
    this._container = null;
    this._sprite = null;
    this._arrow = null;
    this._hintTween = null;
    this._moveTween = null;
    this._revertTween = null;
    this._data = {
      positions: {
        arrowXOffset: 150,
        arrowYOffset: 60,
        boyXOffSetForMeeting: 90,
        boyYOffSetForMeeting: 50
      },
      elementSettings: {
        arrowRotation: 1,
        arrowAnimationXBias: 30,
        arrowAnimationYBias: 10,
        arrowScale: 0.3,
        boyScale: 0.25
      },
      times: {
        arrowAnimationTime: 500,
        moveBoyAnimationTime: 1000,
        awaitTime: 1000
      }
    };
    new component_emitter__WEBPACK_IMPORTED_MODULE_3___default.a(this);

    this._init();

    this._addEvents();
  }

  _createClass(Boy, [{
    key: "_init",
    value: function _init() {
      var _this$_settings = this._settings,
          x = _this$_settings.x,
          y = _this$_settings.y,
          direction = _this$_settings.direction,
          team = _this$_settings.team,
          id = _this$_settings.id;
      var _this$_data$positions = this._data.positions,
          arrowXOffset = _this$_data$positions.arrowXOffset,
          arrowYOffset = _this$_data$positions.arrowYOffset;
      var _this$_data$elementSe = this._data.elementSettings,
          arrowRotation = _this$_data$elementSe.arrowRotation,
          arrowScale = _this$_data$elementSe.arrowScale,
          boyScale = _this$_data$elementSe.boyScale;
      this._container = _utils_GraphicsHelper__WEBPACK_IMPORTED_MODULE_1__["default"].createContainer({});

      this._container.setParent(_engine_Starter__WEBPACK_IMPORTED_MODULE_0__["default"].app.stage);

      this._container.x = x;
      this._container.y = y;
      this._sprite = new PIXI.spine.Spine(this._resources.spineboypro.spineData);

      this._sprite.scale.set(boyScale);

      this._container.addChild(this._sprite);

      this._sprite.width = direction === 1 ? this._sprite.width : -this._sprite.width;
      this._arrow = _utils_GraphicsHelper__WEBPACK_IMPORTED_MODULE_1__["default"].createSprite({
        name: 'arrow'
      });

      this._arrow.anchor.set(0.5);

      this._arrow.scale.set(arrowScale);

      this._arrow.x = arrowXOffset * direction;
      this._arrow.y = -this._sprite.height / 2 - arrowYOffset;
      this._arrow.rotation = arrowRotation * direction;

      this._container.addChild(this._arrow);

      this.hideArrow(); // 'portal' - creating
      // 'idle' - stay

      this._sprite.stateData.setMix('portal', 'idle', 0.2);

      this._sprite.stateData.setMix('idle', 'portal', 0.2);

      this._sprite.state.setAnimation(0, 'portal', false);

      this._sprite.state.addAnimation(0, 'idle', true, 0);

      this._data['team'] = team;
      this._data['id'] = id;
      this._data['isActive'] = false;

      this._initArrowAnimation();
    }
  }, {
    key: "_initArrowAnimation",
    value: function _initArrowAnimation() {
      var arrowAnimationTime = this._data.times.arrowAnimationTime;
      var _this$_data$elementSe2 = this._data.elementSettings,
          arrowAnimationXBias = _this$_data$elementSe2.arrowAnimationXBias,
          arrowAnimationYBias = _this$_data$elementSe2.arrowAnimationYBias;
      var direction = this._settings.direction;
      var endYPoint = this._arrow.y + arrowAnimationYBias * direction;
      this._hintTween = new tween_js__WEBPACK_IMPORTED_MODULE_2___default.a.Tween(this._arrow).to({
        x: this._arrow.x - arrowAnimationXBias,
        y: endYPoint
      }, arrowAnimationTime).yoyo(true).repeat(Infinity).start();
    }
  }, {
    key: "_addEvents",
    value: function _addEvents() {
      var _this = this;

      this._sprite.interactive = false;

      this._sprite.on('pointerdown', function () {
        _this._data.isActive = true;

        _this.emit("checkКeadiness", {
          team: _this._data.team,
          id: _this._data.id - 1
        });
      });
    }
  }, {
    key: "_playAnimation",
    value: function _playAnimation(name, isLoop) {
      this._sprite.state.setAnimation(0, name, isLoop);
    }
  }, {
    key: "resetActiveStatus",
    value: function resetActiveStatus() {
      this._data.isActive = false;
      this.hideArrow();
    }
  }, {
    key: "moveTo",
    value: function moveTo(coords) {
      var x = coords.x,
          y = coords.y;
      var direction = this._settings.direction;
      var _this$_data$positions2 = this._data.positions,
          boyXOffSetForMeeting = _this$_data$positions2.boyXOffSetForMeeting,
          boyYOffSetForMeeting = _this$_data$positions2.boyYOffSetForMeeting;
      var _this$_data$times = this._data.times,
          moveBoyAnimationTime = _this$_data$times.moveBoyAnimationTime,
          awaitTime = _this$_data$times.awaitTime;

      this._sprite.state.setAnimation(1, 'hoverboard', true, 0);

      this._moveTween = new tween_js__WEBPACK_IMPORTED_MODULE_2___default.a.Tween(this._container).to({
        x: x - boyXOffSetForMeeting * direction,
        y: y - boyYOffSetForMeeting
      }, moveBoyAnimationTime).repeat(1).yoyo(true).repeatDelay(awaitTime).onComplete(function () {}).start();
      this._revertTween = new tween_js__WEBPACK_IMPORTED_MODULE_2___default.a.Tween(this._sprite).to({
        width: -this._sprite.width
      }, 10).delay(1500).repeat(1).yoyo(true).start();
    }
  }, {
    key: "showArrow",
    value: function showArrow() {
      this._arrow.alpha = 1;
    }
  }, {
    key: "hideArrow",
    value: function hideArrow() {
      this._arrow.alpha = 0;
    }
  }, {
    key: "turnOnInteractive",
    value: function turnOnInteractive() {
      this._sprite.interactive = true;
    }
  }, {
    key: "isReady",
    get: function get() {
      return this._data.isActive;
    }
  }, {
    key: "coords",
    get: function get() {
      var container = this._container;
      var sprite = this._sprite;
      return {
        x: container.x + sprite.width / 2,
        y: container.y + sprite.height / 2
      };
    }
  }]);

  return Boy;
}();

/***/ })

/******/ });