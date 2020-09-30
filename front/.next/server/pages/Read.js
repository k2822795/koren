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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/Read.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./component/ReadData.js":
/*!*******************************!*\
  !*** ./component/ReadData.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/kkm/dev/koren/front/component/ReadData.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nclass ReadData extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  render() {\n    const style = {\n      border: '1px solid black',\n      padding: '8px',\n      margin: '8px'\n    };\n    const {\n      name,\n      hospital,\n      data\n    } = this.props.data;\n    return __jsx(\"div\", {\n      style: style,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 11\n      }\n    }, __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 13\n      }\n    }, __jsx(\"b\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 18\n      }\n    }, name)), __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 13\n      }\n    }, __jsx(\"b\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 18\n      }\n    }, hospital)), __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 13\n      }\n    }, __jsx(\"b\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 18\n      }\n    }, data)));\n  }\n\n}\n\n_defineProperty(ReadData, \"defaultProps\", {\n  data: {\n    name: 'name',\n    hospital: 'hospital',\n    data: 'data'\n  }\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ReadData);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvUmVhZERhdGEuanM/NDE5MyJdLCJuYW1lcyI6WyJSZWFkRGF0YSIsIkNvbXBvbmVudCIsInJlbmRlciIsInN0eWxlIiwiYm9yZGVyIiwicGFkZGluZyIsIm1hcmdpbiIsIm5hbWUiLCJob3NwaXRhbCIsImRhdGEiLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxRQUFOLFNBQXVCQywrQ0FBdkIsQ0FBaUM7QUFTN0JDLFFBQU0sR0FBRztBQUNMLFVBQU1DLEtBQUssR0FBRztBQUNWQyxZQUFNLEVBQUUsaUJBREU7QUFFVkMsYUFBTyxFQUFFLEtBRkM7QUFHVkMsWUFBTSxFQUFFO0FBSEUsS0FBZDtBQU1BLFVBQU07QUFDRkMsVUFERTtBQUNJQyxjQURKO0FBQ2NDO0FBRGQsUUFFRixLQUFLQyxLQUFMLENBQVdELElBRmY7QUFJQSxXQUNFO0FBQUssV0FBSyxFQUFFTixLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFJSSxJQUFKLENBQUwsQ0FERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUlDLFFBQUosQ0FBTCxDQUZGLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSUMsSUFBSixDQUFMLENBSEYsQ0FERjtBQU9IOztBQTNCNEI7O2dCQUEzQlQsUSxrQkFDb0I7QUFDbEJTLE1BQUksRUFBRTtBQUNGRixRQUFJLEVBQUUsTUFESjtBQUVGQyxZQUFRLEVBQUUsVUFGUjtBQUdGQyxRQUFJLEVBQUU7QUFISjtBQURZLEM7O0FBNkJYVCx1RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudC9SZWFkRGF0YS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIFJlYWREYXRhIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBuYW1lOiAnbmFtZScsXG4gICAgICAgICAgICBob3NwaXRhbDogJ2hvc3BpdGFsJyxcbiAgICAgICAgICAgIGRhdGE6ICdkYXRhJyxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSB7XG4gICAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQgYmxhY2snLFxuICAgICAgICAgICAgcGFkZGluZzogJzhweCcsXG4gICAgICAgICAgICBtYXJnaW46ICc4cHgnXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBuYW1lLCBob3NwaXRhbCwgZGF0YVxuICAgICAgICB9ID0gdGhpcy5wcm9wcy5kYXRhO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGV9PlxuICAgICAgICAgICAgPGRpdj48Yj57bmFtZX08L2I+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2PjxiPntob3NwaXRhbH08L2I+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2PjxiPntkYXRhfTwvYj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWREYXRhOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./component/ReadData.js\n");

/***/ }),

/***/ "./pages/Read.js":
/*!***********************!*\
  !*** ./pages/Read.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _component_ReadData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/ReadData */ \"./component/ReadData.js\");\nvar _jsxFileName = \"/Users/kkm/dev/koren/front/pages/Read.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nclass Read extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  render() {\n    const {\n      blockdata\n    } = this.props;\n    const list = blockdata.map(data => __jsx(_component_ReadData__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      data: data,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 22\n      }\n    }));\n    return __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 13\n      }\n    }, list);\n  }\n\n}\n\n_defineProperty(Read, \"defaultProps\", {\n  blockdata: []\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Read);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9SZWFkLmpzPzgxZDEiXSwibmFtZXMiOlsiUmVhZCIsIkNvbXBvbmVudCIsInJlbmRlciIsImJsb2NrZGF0YSIsInByb3BzIiwibGlzdCIsIm1hcCIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsTUFBTUEsSUFBTixTQUFtQkMsK0NBQW5CLENBQTZCO0FBS3pCQyxRQUFNLEdBQUc7QUFDTCxVQUFNO0FBQUVDO0FBQUYsUUFBZ0IsS0FBS0MsS0FBM0I7QUFDQSxVQUFNQyxJQUFJLEdBQUdGLFNBQVMsQ0FBQ0csR0FBVixDQUNUQyxJQUFJLElBQUssTUFBQywyREFBRDtBQUFVLFVBQUksRUFBRUEsSUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURBLENBQWI7QUFJQSxXQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDS0YsSUFETCxDQURKO0FBS0g7O0FBaEJ3Qjs7Z0JBQXZCTCxJLGtCQUNvQjtBQUNsQkcsV0FBUyxFQUFFO0FBRE8sQzs7QUFtQlhILG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvUmVhZC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhZERhdGEgZnJvbSAnLi4vY29tcG9uZW50L1JlYWREYXRhJztcblxuY2xhc3MgUmVhZCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgYmxvY2tkYXRhOiBbXVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBibG9ja2RhdGEgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IGxpc3QgPSBibG9ja2RhdGEubWFwKFxuICAgICAgICAgICAgZGF0YSA9PiAoPFJlYWREYXRhIGRhdGE9e2RhdGF9Lz4pXG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge2xpc3R9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWFkOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/Read.js\n");

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