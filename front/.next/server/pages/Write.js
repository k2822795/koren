module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/Write.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./component/Read.js":
/*!***************************!*\
  !*** ./component/Read.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ReadData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReadData */ \"./component/ReadData.js\");\nvar _jsxFileName = \"/Users/kkm/dev/koren/front/component/Read.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nclass Read extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  shouldComponentUpdate(nextProps, nextState) {\n    return nextProps.data !== this.props.data;\n  }\n\n  render() {\n    const {\n      blockdata\n    } = this.props;\n    const list = blockdata.map(data => __jsx(_ReadData__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      data: data,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 22\n      }\n    }));\n    return __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 13\n      }\n    }, list);\n  }\n\n}\n\n_defineProperty(Read, \"defaultProps\", {\n  blockdata: []\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Read);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvUmVhZC5qcz8zOTI3Il0sIm5hbWVzIjpbIlJlYWQiLCJDb21wb25lbnQiLCJzaG91bGRDb21wb25lbnRVcGRhdGUiLCJuZXh0UHJvcHMiLCJuZXh0U3RhdGUiLCJkYXRhIiwicHJvcHMiLCJyZW5kZXIiLCJibG9ja2RhdGEiLCJsaXN0IiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLE1BQU1BLElBQU4sU0FBbUJDLCtDQUFuQixDQUE2QjtBQUt6QkMsdUJBQXFCLENBQUNDLFNBQUQsRUFBWUMsU0FBWixFQUF1QjtBQUN4QyxXQUFPRCxTQUFTLENBQUNFLElBQVYsS0FBbUIsS0FBS0MsS0FBTCxDQUFXRCxJQUFyQztBQUNIOztBQUVERSxRQUFNLEdBQUc7QUFDTCxVQUFNO0FBQUVDO0FBQUYsUUFBZ0IsS0FBS0YsS0FBM0I7QUFDQSxVQUFNRyxJQUFJLEdBQUdELFNBQVMsQ0FBQ0UsR0FBVixDQUNUTCxJQUFJLElBQUssTUFBQyxpREFBRDtBQUFVLFVBQUksRUFBRUEsSUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURBLENBQWI7QUFJQSxXQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDS0ksSUFETCxDQURKO0FBS0g7O0FBcEJ3Qjs7Z0JBQXZCVCxJLGtCQUNvQjtBQUNsQlEsV0FBUyxFQUFFO0FBRE8sQzs7QUF1QlhSLG1FQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50L1JlYWQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWREYXRhIGZyb20gJy4vUmVhZERhdGEnO1xuXG5jbGFzcyBSZWFkIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBibG9ja2RhdGE6IFtdXG4gICAgfVxuXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgICAgIHJldHVybiBuZXh0UHJvcHMuZGF0YSAhPT0gdGhpcy5wcm9wcy5kYXRhO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBibG9ja2RhdGEgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IGxpc3QgPSBibG9ja2RhdGEubWFwKFxuICAgICAgICAgICAgZGF0YSA9PiAoPFJlYWREYXRhIGRhdGE9e2RhdGF9Lz4pXG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge2xpc3R9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWFkOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./component/Read.js\n");

/***/ }),

/***/ "./component/ReadData.js":
/*!*******************************!*\
  !*** ./component/ReadData.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/kkm/dev/koren/front/component/ReadData.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nclass ReadData extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  render() {\n    const style = {\n      border: '1px solid black',\n      padding: '8px',\n      margin: '8px'\n    };\n    const {\n      name,\n      hospital,\n      data\n    } = this.props.data;\n    return __jsx(\"div\", {\n      style: style,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 11\n      }\n    }, __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 13\n      }\n    }, __jsx(\"b\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 18\n      }\n    }, name)), __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 13\n      }\n    }, __jsx(\"b\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 18\n      }\n    }, hospital)), __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 13\n      }\n    }, __jsx(\"b\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 18\n      }\n    }, data)));\n  }\n\n}\n\n_defineProperty(ReadData, \"defaultProps\", {\n  data: {\n    name: 'name',\n    hospital: 'hospital',\n    data: 'data'\n  }\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ReadData);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvUmVhZERhdGEuanM/NDE5MyJdLCJuYW1lcyI6WyJSZWFkRGF0YSIsIkNvbXBvbmVudCIsInJlbmRlciIsInN0eWxlIiwiYm9yZGVyIiwicGFkZGluZyIsIm1hcmdpbiIsIm5hbWUiLCJob3NwaXRhbCIsImRhdGEiLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxRQUFOLFNBQXVCQywrQ0FBdkIsQ0FBaUM7QUFTN0JDLFFBQU0sR0FBRztBQUNMLFVBQU1DLEtBQUssR0FBRztBQUNWQyxZQUFNLEVBQUUsaUJBREU7QUFFVkMsYUFBTyxFQUFFLEtBRkM7QUFHVkMsWUFBTSxFQUFFO0FBSEUsS0FBZDtBQU1BLFVBQU07QUFDRkMsVUFERTtBQUNJQyxjQURKO0FBQ2NDO0FBRGQsUUFFRixLQUFLQyxLQUFMLENBQVdELElBRmY7QUFJQSxXQUNFO0FBQUssV0FBSyxFQUFFTixLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFJSSxJQUFKLENBQUwsQ0FERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUlDLFFBQUosQ0FBTCxDQUZGLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSUMsSUFBSixDQUFMLENBSEYsQ0FERjtBQU9IOztBQTNCNEI7O2dCQUEzQlQsUSxrQkFDb0I7QUFDbEJTLE1BQUksRUFBRTtBQUNGRixRQUFJLEVBQUUsTUFESjtBQUVGQyxZQUFRLEVBQUUsVUFGUjtBQUdGQyxRQUFJLEVBQUU7QUFISjtBQURZLEM7O0FBNkJYVCx1RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudC9SZWFkRGF0YS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIFJlYWREYXRhIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBuYW1lOiAnbmFtZScsXG4gICAgICAgICAgICBob3NwaXRhbDogJ2hvc3BpdGFsJyxcbiAgICAgICAgICAgIGRhdGE6ICdkYXRhJyxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSB7XG4gICAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQgYmxhY2snLFxuICAgICAgICAgICAgcGFkZGluZzogJzhweCcsXG4gICAgICAgICAgICBtYXJnaW46ICc4cHgnXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBuYW1lLCBob3NwaXRhbCwgZGF0YVxuICAgICAgICB9ID0gdGhpcy5wcm9wcy5kYXRhO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGV9PlxuICAgICAgICAgICAgPGRpdj48Yj57bmFtZX08L2I+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2PjxiPntob3NwaXRhbH08L2I+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2PjxiPntkYXRhfTwvYj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWREYXRhOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./component/ReadData.js\n");

/***/ }),

/***/ "./component/WriteForm.js":
/*!********************************!*\
  !*** ./component/WriteForm.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/kkm/dev/koren/front/component/WriteForm.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nclass WriteForm extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(...args) {\n    super(...args);\n\n    _defineProperty(this, \"state\", {\n      name: '',\n      hospital: '',\n      data: ''\n    });\n\n    _defineProperty(this, \"handleChange\", e => {\n      this.setState({\n        [e.target.name]: e.target.value\n      });\n    });\n\n    _defineProperty(this, \"handleSubmit\", e => {\n      e.preventDefault();\n      this.props.onCreate(this.state);\n      this.setState({\n        name: '',\n        hospital: '',\n        data: ''\n      });\n    });\n  }\n\n  render() {\n    return __jsx(\"form\", {\n      onSubmit: this.handleSubmit,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 11\n      }\n    }, __jsx(\"input\", {\n      placeholder: \"\\uC774\\uB984\",\n      value: this.state.name,\n      onChange: this.handleChange,\n      name: \"name\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 13\n      }\n    }), __jsx(\"input\", {\n      placeholder: \"\\uBCD1\\uC6D0\",\n      value: this.state.hospital,\n      onChange: this.handleChange,\n      name: \"hospital\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 13\n      }\n    }), __jsx(\"input\", {\n      placeholder: \"\\uB370\\uC774\\uD130\",\n      value: this.state.data,\n      onChange: this.handleChange,\n      name: \"data\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 13\n      }\n    }), __jsx(\"button\", {\n      type: \"submit\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 13\n      }\n    }, \"\\uB4F1\\uB85D\"));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (WriteForm);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvV3JpdGVGb3JtLmpzP2NiNTAiXSwibmFtZXMiOlsiV3JpdGVGb3JtIiwiQ29tcG9uZW50IiwibmFtZSIsImhvc3BpdGFsIiwiZGF0YSIsImUiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwicHJldmVudERlZmF1bHQiLCJwcm9wcyIsIm9uQ3JlYXRlIiwic3RhdGUiLCJyZW5kZXIiLCJoYW5kbGVTdWJtaXQiLCJoYW5kbGVDaGFuZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsU0FBTixTQUF3QkMsK0NBQXhCLENBQWtDO0FBQUE7QUFBQTs7QUFBQSxtQ0FDdEI7QUFDSkMsVUFBSSxFQUFFLEVBREY7QUFFSkMsY0FBUSxFQUFFLEVBRk47QUFHSkMsVUFBSSxFQUFFO0FBSEYsS0FEc0I7O0FBQUEsMENBT2RDLENBQUQsSUFBTztBQUNsQixXQUFLQyxRQUFMLENBQWM7QUFDVixTQUFDRCxDQUFDLENBQUNFLE1BQUYsQ0FBU0wsSUFBVixHQUFpQkcsQ0FBQyxDQUFDRSxNQUFGLENBQVNDO0FBRGhCLE9BQWQ7QUFHSCxLQVg2Qjs7QUFBQSwwQ0FhZEgsQ0FBRCxJQUFPO0FBQ2xCQSxPQUFDLENBQUNJLGNBQUY7QUFDQSxXQUFLQyxLQUFMLENBQVdDLFFBQVgsQ0FBb0IsS0FBS0MsS0FBekI7QUFDQSxXQUFLTixRQUFMLENBQWM7QUFDVkosWUFBSSxFQUFFLEVBREk7QUFFVkMsZ0JBQVEsRUFBRSxFQUZBO0FBR1ZDLFlBQUksRUFBRTtBQUhJLE9BQWQ7QUFLSCxLQXJCNkI7QUFBQTs7QUFzQjlCUyxRQUFNLEdBQUc7QUFDTCxXQUNFO0FBQU0sY0FBUSxFQUFFLEtBQUtDLFlBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUNFLGlCQUFXLEVBQUMsY0FEZDtBQUVFLFdBQUssRUFBRSxLQUFLRixLQUFMLENBQVdWLElBRnBCO0FBR0UsY0FBUSxFQUFFLEtBQUthLFlBSGpCO0FBSUUsVUFBSSxFQUFDLE1BSlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLEVBT0U7QUFDRSxpQkFBVyxFQUFDLGNBRGQ7QUFFRSxXQUFLLEVBQUUsS0FBS0gsS0FBTCxDQUFXVCxRQUZwQjtBQUdFLGNBQVEsRUFBRSxLQUFLWSxZQUhqQjtBQUlFLFVBQUksRUFBQyxVQUpQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFQRixFQWFFO0FBQ0UsaUJBQVcsRUFBQyxvQkFEZDtBQUVFLFdBQUssRUFBRSxLQUFLSCxLQUFMLENBQVdSLElBRnBCO0FBR0UsY0FBUSxFQUFFLEtBQUtXLFlBSGpCO0FBSUUsVUFBSSxFQUFDLE1BSlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQWJGLEVBbUJFO0FBQVEsVUFBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFuQkYsQ0FERjtBQXVCSDs7QUE5QzZCOztBQWtEbkJmLHdFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50L1dyaXRlRm9ybS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIFdyaXRlRm9ybSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGUgPSB7XG4gICAgICAgIG5hbWU6ICcnLFxuICAgICAgICBob3NwaXRhbDogJycsXG4gICAgICAgIGRhdGE6ICcnLFxuICAgIH1cblxuICAgIGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNyZWF0ZSh0aGlzLnN0YXRlKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgIGhvc3BpdGFsOiAnJyxcbiAgICAgICAgICAgIGRhdGE6ICcnLFxuICAgICAgICB9KVxuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuydtOumhFwiXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuuzkeybkFwiXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmhvc3BpdGFsfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgIG5hbWU9XCJob3NwaXRhbFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi642w7J207YSwXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZGF0YX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICBuYW1lPVwiZGF0YVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+65Ox66GdPC9idXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICApO1xuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBXcml0ZUZvcm07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./component/WriteForm.js\n");

/***/ }),

/***/ "./pages/Write.js":
/*!************************!*\
  !*** ./pages/Write.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _component_WriteForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/WriteForm */ \"./component/WriteForm.js\");\n/* harmony import */ var _component_Read__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/Read */ \"./component/Read.js\");\nvar _jsxFileName = \"/Users/kkm/dev/koren/front/pages/Write.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nclass Write extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(...args) {\n    super(...args);\n\n    _defineProperty(this, \"state\", {\n      blockdata: [{\n        name: \"kkm\",\n        hospital: \"korea\",\n        data: \"he is cancer\"\n      }],\n      keyword: \"\"\n    });\n\n    _defineProperty(this, \"handleChange\", e => {\n      this.setState({\n        keyword: e.target.value\n      });\n    });\n\n    _defineProperty(this, \"handleCreate\", data => {\n      const {\n        blockdata\n      } = this.state;\n      this.setState({\n        blockdata: blockdata.concat({\n          name: data.name,\n          hospital: data.hospital,\n          data: data.data\n        })\n      });\n    });\n  }\n\n  render() {\n    const {\n      blockdata,\n      keyword\n    } = this.state;\n    const filteredlist = blockdata.filter(data => data.name.indexOf(keyword) !== -1);\n    return __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 7\n      }\n    }, __jsx(_component_WriteForm__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      onCreate: this.handleCreate,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 9\n      }\n    }), __jsx(_component_Read__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      blockdata: filteredlist,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }\n    }), __jsx(\"p\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 9\n      }\n    }, __jsx(\"input\", {\n      placeholder: \"\\uC774\\uB984 \\uC785\\uB825\",\n      onChange: this.handleChange,\n      value: keyword,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 11\n      }\n    })));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Write);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9Xcml0ZS5qcz9kOWVlIl0sIm5hbWVzIjpbIldyaXRlIiwiQ29tcG9uZW50IiwiYmxvY2tkYXRhIiwibmFtZSIsImhvc3BpdGFsIiwiZGF0YSIsImtleXdvcmQiLCJlIiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInN0YXRlIiwiY29uY2F0IiwicmVuZGVyIiwiZmlsdGVyZWRsaXN0IiwiZmlsdGVyIiwiaW5kZXhPZiIsImhhbmRsZUNyZWF0ZSIsImhhbmRsZUNoYW5nZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxLQUFOLFNBQW9CQywrQ0FBcEIsQ0FBOEI7QUFBQTtBQUFBOztBQUFBLG1DQUNwQjtBQUNOQyxlQUFTLEVBQUUsQ0FDVDtBQUNFQyxZQUFJLEVBQUUsS0FEUjtBQUVFQyxnQkFBUSxFQUFFLE9BRlo7QUFHRUMsWUFBSSxFQUFFO0FBSFIsT0FEUyxDQURMO0FBUU5DLGFBQU8sRUFBRTtBQVJILEtBRG9COztBQUFBLDBDQVdaQyxDQUFELElBQU87QUFDcEIsV0FBS0MsUUFBTCxDQUFjO0FBQ1pGLGVBQU8sRUFBRUMsQ0FBQyxDQUFDRSxNQUFGLENBQVNDO0FBRE4sT0FBZDtBQUdELEtBZjJCOztBQUFBLDBDQWlCWkwsSUFBRCxJQUFVO0FBQ3ZCLFlBQU07QUFBRUg7QUFBRixVQUFnQixLQUFLUyxLQUEzQjtBQUNBLFdBQUtILFFBQUwsQ0FBYztBQUNaTixpQkFBUyxFQUFFQSxTQUFTLENBQUNVLE1BQVYsQ0FBaUI7QUFDMUJULGNBQUksRUFBRUUsSUFBSSxDQUFDRixJQURlO0FBRTFCQyxrQkFBUSxFQUFFQyxJQUFJLENBQUNELFFBRlc7QUFHMUJDLGNBQUksRUFBRUEsSUFBSSxDQUFDQTtBQUhlLFNBQWpCO0FBREMsT0FBZDtBQU9ELEtBMUIyQjtBQUFBOztBQTRCNUJRLFFBQU0sR0FBRztBQUNQLFVBQU07QUFBRVgsZUFBRjtBQUFhSTtBQUFiLFFBQXlCLEtBQUtLLEtBQXBDO0FBQ0EsVUFBTUcsWUFBWSxHQUFHWixTQUFTLENBQUNhLE1BQVYsQ0FDbEJWLElBQUQsSUFBVUEsSUFBSSxDQUFDRixJQUFMLENBQVVhLE9BQVYsQ0FBa0JWLE9BQWxCLE1BQStCLENBQUMsQ0FEdkIsQ0FBckI7QUFJQSxXQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLDREQUFEO0FBQVcsY0FBUSxFQUFFLEtBQUtXLFlBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQUVFLE1BQUMsdURBQUQ7QUFBTSxlQUFTLEVBQUVILFlBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFGRixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUNFLGlCQUFXLEVBQUMsMkJBRGQ7QUFFRSxjQUFRLEVBQUUsS0FBS0ksWUFGakI7QUFHRSxXQUFLLEVBQUVaLE9BSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBSEYsQ0FERjtBQWFEOztBQS9DMkI7O0FBa0RmTixvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL1dyaXRlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFdyaXRlRnJvbSBmcm9tIFwiLi4vY29tcG9uZW50L1dyaXRlRm9ybVwiO1xuaW1wb3J0IFJlYWQgZnJvbSBcIi4uL2NvbXBvbmVudC9SZWFkXCI7XG5cbmNsYXNzIFdyaXRlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgYmxvY2tkYXRhOiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwia2ttXCIsXG4gICAgICAgIGhvc3BpdGFsOiBcImtvcmVhXCIsXG4gICAgICAgIGRhdGE6IFwiaGUgaXMgY2FuY2VyXCIsXG4gICAgICB9LFxuICAgIF0sXG4gICAga2V5d29yZDogXCJcIixcbiAgfTtcbiAgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGtleXdvcmQ6IGUudGFyZ2V0LnZhbHVlLFxuICAgIH0pO1xuICB9O1xuXG4gIGhhbmRsZUNyZWF0ZSA9IChkYXRhKSA9PiB7XG4gICAgY29uc3QgeyBibG9ja2RhdGEgfSA9IHRoaXMuc3RhdGU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBibG9ja2RhdGE6IGJsb2NrZGF0YS5jb25jYXQoe1xuICAgICAgICBuYW1lOiBkYXRhLm5hbWUsXG4gICAgICAgIGhvc3BpdGFsOiBkYXRhLmhvc3BpdGFsLFxuICAgICAgICBkYXRhOiBkYXRhLmRhdGEsXG4gICAgICB9KSxcbiAgICB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBibG9ja2RhdGEsIGtleXdvcmQgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgZmlsdGVyZWRsaXN0ID0gYmxvY2tkYXRhLmZpbHRlcihcbiAgICAgIChkYXRhKSA9PiBkYXRhLm5hbWUuaW5kZXhPZihrZXl3b3JkKSAhPT0gLTFcbiAgICApO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxXcml0ZUZyb20gb25DcmVhdGU9e3RoaXMuaGFuZGxlQ3JlYXRlfSAvPlxuICAgICAgICA8UmVhZCBibG9ja2RhdGE9e2ZpbHRlcmVkbGlzdH0gLz5cbiAgICAgICAgPHA+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuydtOumhCDsnoXroKVcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgdmFsdWU9e2tleXdvcmR9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBXcml0ZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/Write.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });