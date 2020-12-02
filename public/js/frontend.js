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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/frontend.js":
/*!**********************************!*\
  !*** ./resources/js/frontend.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("visible = 0;\n\ndocument.body.onmousewheel = function (e) {\n  diraction = e.deltaY;\n\n  if (diraction > 0 && visible < 9) {\n    $('#section' + visible).css('height', '0%').children('div').css('display', 'none');\n    visible += 1;\n    $('#section' + visible).css('height', '101%').children('div').css('display', 'flex');\n  } else if (diraction < 0 && visible > 0) {\n    $('#section' + visible).css('height', '0%').children('div').css('display', 'none');\n    visible -= 1;\n    $('#section' + visible).css('height', '101%').children('div').css('display', 'flex');\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZnJvbnRlbmQuanM/ZmE1OCJdLCJuYW1lcyI6WyJ2aXNpYmxlIiwiZG9jdW1lbnQiLCJib2R5Iiwib25tb3VzZXdoZWVsIiwiZSIsImRpcmFjdGlvbiIsImRlbHRhWSIsIiQiLCJjc3MiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6IkFBQUFBLE9BQU8sR0FBRyxDQUFWOztBQUVBQyxRQUFRLENBQUNDLElBQVQsQ0FBY0MsWUFBZCxHQUE2QixVQUFVQyxDQUFWLEVBQWE7QUFDdENDLFdBQVMsR0FBR0QsQ0FBQyxDQUFDRSxNQUFkOztBQUNBLE1BQUlELFNBQVMsR0FBQyxDQUFWLElBQWVMLE9BQU8sR0FBQyxDQUEzQixFQUE4QjtBQUMxQk8sS0FBQyxDQUFDLGFBQVlQLE9BQWIsQ0FBRCxDQUF1QlEsR0FBdkIsQ0FBMkIsUUFBM0IsRUFBcUMsSUFBckMsRUFBMkNDLFFBQTNDLENBQW9ELEtBQXBELEVBQTJERCxHQUEzRCxDQUErRCxTQUEvRCxFQUEwRSxNQUExRTtBQUNBUixXQUFPLElBQUcsQ0FBVjtBQUNBTyxLQUFDLENBQUMsYUFBWVAsT0FBYixDQUFELENBQXVCUSxHQUF2QixDQUEyQixRQUEzQixFQUFxQyxNQUFyQyxFQUE2Q0MsUUFBN0MsQ0FBc0QsS0FBdEQsRUFBNkRELEdBQTdELENBQWlFLFNBQWpFLEVBQTRFLE1BQTVFO0FBQ0gsR0FKRCxNQUtLLElBQUlILFNBQVMsR0FBQyxDQUFWLElBQWVMLE9BQU8sR0FBQyxDQUEzQixFQUE4QjtBQUMvQk8sS0FBQyxDQUFDLGFBQVlQLE9BQWIsQ0FBRCxDQUF1QlEsR0FBdkIsQ0FBMkIsUUFBM0IsRUFBcUMsSUFBckMsRUFBMkNDLFFBQTNDLENBQW9ELEtBQXBELEVBQTJERCxHQUEzRCxDQUErRCxTQUEvRCxFQUEwRSxNQUExRTtBQUNBUixXQUFPLElBQUcsQ0FBVjtBQUNBTyxLQUFDLENBQUMsYUFBWVAsT0FBYixDQUFELENBQXVCUSxHQUF2QixDQUEyQixRQUEzQixFQUFxQyxNQUFyQyxFQUE2Q0MsUUFBN0MsQ0FBc0QsS0FBdEQsRUFBNkRELEdBQTdELENBQWlFLFNBQWpFLEVBQTRFLE1BQTVFO0FBQ0g7QUFDSixDQVpEIiwiZmlsZSI6Ii4vcmVzb3VyY2VzL2pzL2Zyb250ZW5kLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmlzaWJsZSA9IDA7XG5cbmRvY3VtZW50LmJvZHkub25tb3VzZXdoZWVsID0gZnVuY3Rpb24gKGUpIHtcbiAgICBkaXJhY3Rpb24gPSBlLmRlbHRhWTtcbiAgICBpZiAoZGlyYWN0aW9uPjAgJiYgdmlzaWJsZTw5KSB7XG4gICAgICAgICQoJyNzZWN0aW9uJysgdmlzaWJsZSkuY3NzKCdoZWlnaHQnLCAnMCUnKS5jaGlsZHJlbignZGl2JykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICAgICAgdmlzaWJsZSArPTE7XG4gICAgICAgICQoJyNzZWN0aW9uJysgdmlzaWJsZSkuY3NzKCdoZWlnaHQnLCAnMTAxJScpLmNoaWxkcmVuKCdkaXYnKS5jc3MoJ2Rpc3BsYXknLCAnZmxleCcpO1xuICAgIH1cbiAgICBlbHNlIGlmIChkaXJhY3Rpb248MCAmJiB2aXNpYmxlPjApIHtcbiAgICAgICAgJCgnI3NlY3Rpb24nKyB2aXNpYmxlKS5jc3MoJ2hlaWdodCcsICcwJScpLmNoaWxkcmVuKCdkaXYnKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgICAgICB2aXNpYmxlIC09MTtcbiAgICAgICAgJCgnI3NlY3Rpb24nKyB2aXNpYmxlKS5jc3MoJ2hlaWdodCcsICcxMDElJykuY2hpbGRyZW4oJ2RpdicpLmNzcygnZGlzcGxheScsICdmbGV4Jyk7XG4gICAgfVxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/frontend.js\n");

/***/ }),

/***/ 1:
/*!****************************************!*\
  !*** multi ./resources/js/frontend.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\LaravelWeb\NetLife\resources\js\frontend.js */"./resources/js/frontend.js");


/***/ })

/******/ });