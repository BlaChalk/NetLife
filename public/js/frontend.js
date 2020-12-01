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

eval("$(window).scroll(function () {\n  var supportPageOffset = window.pageXOffset !== undefined;\n  var isCSS1Compat = (document.compatMode || \"\") === \"CSS1Compat\";\n  var y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;\n  var now = y / window.innerHeight;\n\n  if (now > 0.5 && now < 1) {\n    window.scrollTo({\n      top: 0 // behavior: \"smooth\",\n\n    });\n  } else if (now > 0 && now <= 0.5 || now > 1.5 && now < 2) {\n    window.scrollTo({\n      top: window.innerHeight // behavior: \"smooth\",\n\n    });\n  } else if (now > 1 && now <= 1.5 || now > 2.5 && now < 3) {\n    window.scrollTo({\n      top: window.innerHeight * 2 // behavior: \"smooth\"\n\n    });\n  } else if (now > 2 && now <= 2.5 || now > 3.5 && now < 4) {\n    window.scrollTo({\n      top: window.innerHeight * 3 // behavior: \"smooth\"\n\n    });\n  } else if (now > 3 && now <= 3.5 || now > 4.5 && now < 5) {\n    window.scrollTo({\n      top: window.innerHeight * 4 // behavior: \"smooth\"\n\n    });\n  } else if (now > 4 && now <= 4.5 || now > 5.5 && now < 6) {\n    window.scrollTo({\n      top: window.innerHeight * 5 // behavior: \"smooth\"\n\n    });\n  } else if (now > 5 && now <= 5.5 || now > 6.5 && now < 7) {\n    window.scrollTo({\n      top: window.innerHeight * 6 // behavior: \"smooth\"\n\n    });\n  } else if (now > 6 && now <= 6.5 || now > 7.5 && now < 8) {\n    window.scrollTo({\n      top: window.innerHeight * 7 // behavior: \"smooth\"\n\n    });\n  } else if (now > 7 && now <= 7.5 || now > 8.5 && now < 9) {\n    window.scrollTo({\n      top: window.innerHeight * 8 // behavior: \"smooth\"\n\n    });\n  } else if (now > 8 && now <= 8.5 || now > 9.5 && now < 10) {\n    window.scrollTo({\n      top: window.innerHeight * 9 // behavior: \"smooth\"\n\n    });\n  }\n});\n$(\".decoration\").css(\"width\", window.innerWidth);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZnJvbnRlbmQuanM/ZmE1OCJdLCJuYW1lcyI6WyIkIiwid2luZG93Iiwic2Nyb2xsIiwic3VwcG9ydFBhZ2VPZmZzZXQiLCJwYWdlWE9mZnNldCIsInVuZGVmaW5lZCIsImlzQ1NTMUNvbXBhdCIsImRvY3VtZW50IiwiY29tcGF0TW9kZSIsInkiLCJwYWdlWU9mZnNldCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbFRvcCIsImJvZHkiLCJub3ciLCJpbm5lckhlaWdodCIsInNjcm9sbFRvIiwidG9wIiwiY3NzIiwiaW5uZXJXaWR0aCJdLCJtYXBwaW5ncyI6IkFBQUFBLENBQUMsQ0FBQ0MsTUFBRCxDQUFELENBQVVDLE1BQVYsQ0FBaUIsWUFBWTtBQUN6QixNQUFJQyxpQkFBaUIsR0FBR0YsTUFBTSxDQUFDRyxXQUFQLEtBQXVCQyxTQUEvQztBQUNBLE1BQUlDLFlBQVksR0FBSSxDQUFDQyxRQUFRLENBQUNDLFVBQVQsSUFBdUIsRUFBeEIsTUFBZ0MsWUFBcEQ7QUFDQSxNQUFJQyxDQUFDLEdBQUdOLGlCQUFpQixHQUFHRixNQUFNLENBQUNTLFdBQVYsR0FBd0JKLFlBQVksR0FBR0MsUUFBUSxDQUFDSSxlQUFULENBQXlCQyxTQUE1QixHQUF3Q0wsUUFBUSxDQUFDTSxJQUFULENBQWNELFNBQW5IO0FBQ0EsTUFBSUUsR0FBRyxHQUFHTCxDQUFDLEdBQUdSLE1BQU0sQ0FBQ2MsV0FBckI7O0FBRUEsTUFBR0QsR0FBRyxHQUFDLEdBQUosSUFBV0EsR0FBRyxHQUFDLENBQWxCLEVBQXFCO0FBQ2pCYixVQUFNLENBQUNlLFFBQVAsQ0FBZ0I7QUFDWkMsU0FBRyxFQUFFLENBRE8sQ0FFWjs7QUFGWSxLQUFoQjtBQUlILEdBTEQsTUFNSyxJQUFHSCxHQUFHLEdBQUMsQ0FBSixJQUFTQSxHQUFHLElBQUUsR0FBZCxJQUFxQkEsR0FBRyxHQUFDLEdBQUosSUFBV0EsR0FBRyxHQUFDLENBQXZDLEVBQTBDO0FBQy9DYixV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c291cmNlc0NvbnRlbnQiOlsiJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHN1cHBvcnRQYWdlT2Zmc2V0ID0gd2luZG93LnBhZ2VYT2Zmc2V0ICE9PSB1bmRlZmluZWQ7XG4gICAgdmFyIGlzQ1NTMUNvbXBhdCA9ICgoZG9jdW1lbnQuY29tcGF0TW9kZSB8fCBcIlwiKSA9PT0gXCJDU1MxQ29tcGF0XCIpO1xuICAgIHZhciB5ID0gc3VwcG9ydFBhZ2VPZmZzZXQgPyB3aW5kb3cucGFnZVlPZmZzZXQgOiBpc0NTUzFDb21wYXQgPyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIDogZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XG4gICAgdmFyIG5vdyA9IHkgLyB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgICBpZihub3c+MC41ICYmIG5vdzwxKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAvLyBiZWhhdmlvcjogXCJzbW9vdGhcIixcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2UgaWYobm93PjAgJiYgbm93PD0wLjUgfHwgbm93PjEuNSAmJiBub3c8Mikge1xu44CA44CA44CA44CAd2luZG93LnNjcm9sbFRvKHtcbiAgICAgICAgICAgIHRvcDogd2luZG93LmlubmVySGVpZ2h0LFxuICAgICAgICAgICAgLy8gYmVoYXZpb3I6IFwic21vb3RoXCIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIGlmKG5vdz4xICYmIG5vdzw9MS41IHx8IG5vdz4yLjUgJiYgbm93PDMpIHtcbuOAgOOAgOOAgOOAgHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICAgICAgICB0b3A6IHdpbmRvdy5pbm5lckhlaWdodCoyLFxuICAgICAgICAgICAgLy8gYmVoYXZpb3I6IFwic21vb3RoXCJcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2UgaWYobm93PjIgJiYgbm93PD0yLjUgfHwgbm93PjMuNSAmJiBub3c8NCkge1xu44CA44CA44CA44CAd2luZG93LnNjcm9sbFRvKHtcbiAgICAgICAgICAgIHRvcDogd2luZG93LmlubmVySGVpZ2h0KjMsXG4gICAgICAgICAgICAvLyBiZWhhdmlvcjogXCJzbW9vdGhcIlxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSBpZihub3c+MyAmJiBub3c8PTMuNSB8fCBub3c+NC41ICYmIG5vdzw1KSB7XG7jgIDjgIDjgIDjgIB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgICAgICAgdG9wOiB3aW5kb3cuaW5uZXJIZWlnaHQqNCxcbiAgICAgICAgICAgIC8vIGJlaGF2aW9yOiBcInNtb290aFwiXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIGlmKG5vdz40ICYmIG5vdzw9NC41IHx8IG5vdz41LjUgJiYgbm93PDYpIHtcbuOAgOOAgOOAgOOAgHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICAgICAgICB0b3A6IHdpbmRvdy5pbm5lckhlaWdodCo1LFxuICAgICAgICAgICAgLy8gYmVoYXZpb3I6IFwic21vb3RoXCJcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2UgaWYobm93PjUgJiYgbm93PD01LjUgfHwgbm93PjYuNSAmJiBub3c8Nykge1xu44CA44CA44CA44CAd2luZG93LnNjcm9sbFRvKHtcbiAgICAgICAgICAgIHRvcDogd2luZG93LmlubmVySGVpZ2h0KjYsXG4gICAgICAgICAgICAvLyBiZWhhdmlvcjogXCJzbW9vdGhcIlxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSBpZihub3c+NiAmJiBub3c8PTYuNSB8fCBub3c+Ny41ICYmIG5vdzw4KSB7XG7jgIDjgIDjgIDjgIB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgICAgICAgdG9wOiB3aW5kb3cuaW5uZXJIZWlnaHQqNyxcbiAgICAgICAgICAgIC8vIGJlaGF2aW9yOiBcInNtb290aFwiXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIGlmKG5vdz43ICYmIG5vdzw9Ny41IHx8IG5vdz44LjUgJiYgbm93PDkpIHtcbuOAgOOAgOOAgOOAgHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICAgICAgICB0b3A6IHdpbmRvdy5pbm5lckhlaWdodCo4LFxuICAgICAgICAgICAgLy8gYmVoYXZpb3I6IFwic21vb3RoXCJcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2UgaWYobm93PjggJiYgbm93PD04LjUgfHwgbm93PjkuNSAmJiBub3c8MTApIHtcbuOAgOOAgOOAgOOAgHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICAgICAgICB0b3A6IHdpbmRvdy5pbm5lckhlaWdodCo5LFxuICAgICAgICAgICAgLy8gYmVoYXZpb3I6IFwic21vb3RoXCJcbiAgICAgICAgfSk7XG4gICAgfVxufSk7XG5cbiQoXCIuZGVjb3JhdGlvblwiKS5jc3MoXCJ3aWR0aFwiLCB3aW5kb3cuaW5uZXJXaWR0aCk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/js/frontend.js\n");

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