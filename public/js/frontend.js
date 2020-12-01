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

eval("$(window).scroll(function () {\n  var supportPageOffset = window.pageXOffset !== undefined;\n  var isCSS1Compat = (document.compatMode || \"\") === \"CSS1Compat\";\n  var y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;\n  var now = y / window.innerHeight;\n\n  if (now > 0.5 && now < 1) {\n    window.scrollTo({\n      top: 0 // behavior: \"smooth\",\n\n    });\n  } else if (now > 0 && now <= 0.5 || now > 1.5 && now < 2) {\n    window.scrollTo({\n      top: window.innerHeight // behavior: \"smooth\",\n\n    });\n  } else if (now > 1 && now <= 1.5 || now > 2.5 && now < 3) {\n    window.scrollTo({\n      top: window.innerHeight * 2 // behavior: \"smooth\"\n\n    });\n  } else if (now > 2 && now <= 2.5 || now > 3.5 && now < 4) {\n    window.scrollTo({\n      top: window.innerHeight * 3 // behavior: \"smooth\"\n\n    });\n  } else if (now > 3 && now <= 3.5 || now > 4.5 && now < 5) {\n    window.scrollTo({\n      top: window.innerHeight * 4 // behavior: \"smooth\"\n\n    });\n  } else if (now > 4 && now <= 4.5 || now > 5.5 && now < 6) {\n    window.scrollTo({\n      top: window.innerHeight * 5 // behavior: \"smooth\"\n\n    });\n  } else if (now > 5 && now <= 5.5 || now > 6.5 && now < 7) {\n    window.scrollTo({\n      top: window.innerHeight * 6 // behavior: \"smooth\"\n\n    });\n  } else if (now > 6 && now <= 6.5 || now > 7.5 && now < 8) {\n    window.scrollTo({\n      top: window.innerHeight * 7 // behavior: \"smooth\"\n\n    });\n  } else if (now > 7 && now <= 7.5 || now > 8.5 && now < 9) {\n    window.scrollTo({\n      top: window.innerHeight * 8 // behavior: \"smooth\"\n\n    });\n  } else if (now > 8 && now <= 8.5 || now > 9.5 && now < 10) {\n    window.scrollTo({\n      top: window.innerHeight * 9 // behavior: \"smooth\"\n\n    });\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZnJvbnRlbmQuanM/ZmE1OCJdLCJuYW1lcyI6WyIkIiwid2luZG93Iiwic2Nyb2xsIiwic3VwcG9ydFBhZ2VPZmZzZXQiLCJwYWdlWE9mZnNldCIsInVuZGVmaW5lZCIsImlzQ1NTMUNvbXBhdCIsImRvY3VtZW50IiwiY29tcGF0TW9kZSIsInkiLCJwYWdlWU9mZnNldCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbFRvcCIsImJvZHkiLCJub3ciLCJpbm5lckhlaWdodCIsInNjcm9sbFRvIiwidG9wIl0sIm1hcHBpbmdzIjoiQUFBQUEsQ0FBQyxDQUFDQyxNQUFELENBQUQsQ0FBVUMsTUFBVixDQUFpQixZQUFZO0FBQ3pCLE1BQUlDLGlCQUFpQixHQUFHRixNQUFNLENBQUNHLFdBQVAsS0FBdUJDLFNBQS9DO0FBQ0EsTUFBSUMsWUFBWSxHQUFJLENBQUNDLFFBQVEsQ0FBQ0MsVUFBVCxJQUF1QixFQUF4QixNQUFnQyxZQUFwRDtBQUNBLE1BQUlDLENBQUMsR0FBR04saUJBQWlCLEdBQUdGLE1BQU0sQ0FBQ1MsV0FBVixHQUF3QkosWUFBWSxHQUFHQyxRQUFRLENBQUNJLGVBQVQsQ0FBeUJDLFNBQTVCLEdBQXdDTCxRQUFRLENBQUNNLElBQVQsQ0FBY0QsU0FBbkg7QUFDQSxNQUFJRSxHQUFHLEdBQUdMLENBQUMsR0FBR1IsTUFBTSxDQUFDYyxXQUFyQjs7QUFFQSxNQUFHRCxHQUFHLEdBQUMsR0FBSixJQUFXQSxHQUFHLEdBQUMsQ0FBbEIsRUFBcUI7QUFDakJiLFVBQU0sQ0FBQ2UsUUFBUCxDQUFnQjtBQUNaQyxTQUFHLEVBQUUsQ0FETyxDQUVaOztBQUZZLEtBQWhCO0FBSUgsR0FMRCxNQU1LLElBQUdILEdBQUcsR0FBQyxDQUFKLElBQVNBLEdBQUcsSUFBRSxHQUFkLElBQXFCQSxHQUFHLEdBQUMsR0FBSixJQUFXQSxHQUFHLEdBQUMsQ0FBdkMsRUFBMEM7QUFDL0NiLFVBQU0sQ0FBQ2UsUUFBUCxDQUFnQjtBQUNSQyxTQUFHLEVBQUVoQixNQUFNLENBQUNjLFdBREosQ0FFUjs7QUFGUSxLQUFoQjtBQUlDLEdBTEksTUFNQSxJQUFHRCxHQUFHLEdBQUMsQ0FBSixJQUFTQSxHQUFHLElBQUUsR0FBZCxJQUFxQkEsR0FBRyxHQUFDLEdBQUosSUFBV0EsR0FBRyxHQUFDLENBQXZDLEVBQTBDO0FBQy9DYixVQUFNLENBQUNlLFFBQVAsQ0FBZ0I7QUFDUkMsU0FBRyxFQUFFaEIsTUFBTSxDQUFDYyxXQUFQLEdBQW1CLENBRGhCLENBRVI7O0FBRlEsS0FBaEI7QUFJQyxHQUxJLE1BTUEsSUFBR0QsR0FBRyxHQUFDLENBQUosSUFBU0EsR0FBRyxJQUFFLEdBQWQsSUFBcUJBLEdBQUcsR0FBQyxHQUFKLElBQVdBLEdBQUcsR0FBQyxDQUF2QyxFQUEwQztBQUMvQ2IsVUFBTSxDQUFDZSxRQUFQLENBQWdCO0FBQ1JDLFNBQUcsRUFBRWhCLE1BQU0sQ0FBQ2MsV0FBUCxHQUFtQixDQURoQixDQUVSOztBQUZRLEtBQWhCO0FBSUMsR0FMSSxNQU1BLElBQUdELEdBQUcsR0FBQyxDQUFKLElBQVNBLEdBQUcsSUFBRSxHQUFkLElBQXFCQSxHQUFHLEdBQUMsR0FBSixJQUFXQSxHQUFHLEdBQUMsQ0FBdkMsRUFBMEM7QUFDL0NiLFVBQU0sQ0FBQ2UsUUFBUCxDQUFnQjtBQUNSQyxTQUFHLEVBQUVoQixNQUFNLENBQUNjLFdBQVAsR0FBbUIsQ0FEaEIsQ0FFUjs7QUFGUSxLQUFoQjtBQUlDLEdBTEksTUFNQSxJQUFHRCxHQUFHLEdBQUMsQ0FBSixJQUFTQSxHQUFHLElBQUUsR0FBZCxJQUFxQkEsR0FBRyxHQUFDLEdBQUosSUFBV0EsR0FBRyxHQUFDLENBQXZDLEVBQTBDO0FBQy9DYixVQUFNLENBQUNlLFFBQVAsQ0FBZ0I7QUFDUkMsU0FBRyxFQUFFaEIsTUFBTSxDQUFDYyxXQUFQLEdBQW1CLENBRGhCLENBRVI7O0FBRlEsS0FBaEI7QUFJQyxHQUxJLE1BTUEsSUFBR0QsR0FBRyxHQUFDLENBQUosSUFBU0EsR0FBRyxJQUFFLEdBQWQsSUFBcUJBLEdBQUcsR0FBQyxHQUFKLElBQVdBLEdBQUcsR0FBQyxDQUF2QyxFQUEwQztBQUMvQ2IsVUFBTSxDQUFDZSxRQUFQLENBQWdCO0FBQ1JDLFNBQUcsRUFBRWhCLE1BQU0sQ0FBQ2MsV0FBUCxHQUFtQixDQURoQixDQUVSOztBQUZRLEtBQWhCO0FBSUMsR0FMSSxNQU1BLElBQUdELEdBQUcsR0FBQyxDQUFKLElBQVNBLEdBQUcsSUFBRSxHQUFkLElBQXFCQSxHQUFHLEdBQUMsR0FBSixJQUFXQSxHQUFHLEdBQUMsQ0FBdkMsRUFBMEM7QUFDL0NiLFVBQU0sQ0FBQ2UsUUFBUCxDQUFnQjtBQUNSQyxTQUFHLEVBQUVoQixNQUFNLENBQUNjLFdBQVAsR0FBbUIsQ0FEaEIsQ0FFUjs7QUFGUSxLQUFoQjtBQUlDLEdBTEksTUFNQSxJQUFHRCxHQUFHLEdBQUMsQ0FBSixJQUFTQSxHQUFHLElBQUUsR0FBZCxJQUFxQkEsR0FBRyxHQUFDLEdBQUosSUFBV0EsR0FBRyxHQUFDLENBQXZDLEVBQTBDO0FBQy9DYixVQUFNLENBQUNlLFFBQVAsQ0FBZ0I7QUFDUkMsU0FBRyxFQUFFaEIsTUFBTSxDQUFDYyxXQUFQLEdBQW1CLENBRGhCLENBRVI7O0FBRlEsS0FBaEI7QUFJQyxHQUxJLE1BTUEsSUFBR0QsR0FBRyxHQUFDLENBQUosSUFBU0EsR0FBRyxJQUFFLEdBQWQsSUFBcUJBLEdBQUcsR0FBQyxHQUFKLElBQVdBLEdBQUcsR0FBQyxFQUF2QyxFQUEyQztBQUNoRGIsVUFBTSxDQUFDZSxRQUFQLENBQWdCO0FBQ1JDLFNBQUcsRUFBRWhCLE1BQU0sQ0FBQ2MsV0FBUCxHQUFtQixDQURoQixDQUVSOztBQUZRLEtBQWhCO0FBSUM7QUFDSixDQWxFRCIsImZpbGUiOiIuL3Jlc291cmNlcy9qcy9mcm9udGVuZC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24gKCkge1xuICAgIHZhciBzdXBwb3J0UGFnZU9mZnNldCA9IHdpbmRvdy5wYWdlWE9mZnNldCAhPT0gdW5kZWZpbmVkO1xuICAgIHZhciBpc0NTUzFDb21wYXQgPSAoKGRvY3VtZW50LmNvbXBhdE1vZGUgfHwgXCJcIikgPT09IFwiQ1NTMUNvbXBhdFwiKTtcbiAgICB2YXIgeSA9IHN1cHBvcnRQYWdlT2Zmc2V0ID8gd2luZG93LnBhZ2VZT2Zmc2V0IDogaXNDU1MxQ29tcGF0ID8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA6IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO1xuICAgIHZhciBub3cgPSB5IC8gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gICAgaWYobm93PjAuNSAmJiBub3c8MSkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgLy8gYmVoYXZpb3I6IFwic21vb3RoXCIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIGlmKG5vdz4wICYmIG5vdzw9MC41IHx8IG5vdz4xLjUgJiYgbm93PDIpIHtcbuOAgOOAgOOAgOOAgHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICAgICAgICB0b3A6IHdpbmRvdy5pbm5lckhlaWdodCxcbiAgICAgICAgICAgIC8vIGJlaGF2aW9yOiBcInNtb290aFwiLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSBpZihub3c+MSAmJiBub3c8PTEuNSB8fCBub3c+Mi41ICYmIG5vdzwzKSB7XG7jgIDjgIDjgIDjgIB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgICAgICAgdG9wOiB3aW5kb3cuaW5uZXJIZWlnaHQqMixcbiAgICAgICAgICAgIC8vIGJlaGF2aW9yOiBcInNtb290aFwiXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIGlmKG5vdz4yICYmIG5vdzw9Mi41IHx8IG5vdz4zLjUgJiYgbm93PDQpIHtcbuOAgOOAgOOAgOOAgHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICAgICAgICB0b3A6IHdpbmRvdy5pbm5lckhlaWdodCozLFxuICAgICAgICAgICAgLy8gYmVoYXZpb3I6IFwic21vb3RoXCJcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2UgaWYobm93PjMgJiYgbm93PD0zLjUgfHwgbm93PjQuNSAmJiBub3c8NSkge1xu44CA44CA44CA44CAd2luZG93LnNjcm9sbFRvKHtcbiAgICAgICAgICAgIHRvcDogd2luZG93LmlubmVySGVpZ2h0KjQsXG4gICAgICAgICAgICAvLyBiZWhhdmlvcjogXCJzbW9vdGhcIlxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSBpZihub3c+NCAmJiBub3c8PTQuNSB8fCBub3c+NS41ICYmIG5vdzw2KSB7XG7jgIDjgIDjgIDjgIB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgICAgICAgdG9wOiB3aW5kb3cuaW5uZXJIZWlnaHQqNSxcbiAgICAgICAgICAgIC8vIGJlaGF2aW9yOiBcInNtb290aFwiXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIGlmKG5vdz41ICYmIG5vdzw9NS41IHx8IG5vdz42LjUgJiYgbm93PDcpIHtcbuOAgOOAgOOAgOOAgHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICAgICAgICB0b3A6IHdpbmRvdy5pbm5lckhlaWdodCo2LFxuICAgICAgICAgICAgLy8gYmVoYXZpb3I6IFwic21vb3RoXCJcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2UgaWYobm93PjYgJiYgbm93PD02LjUgfHwgbm93PjcuNSAmJiBub3c8OCkge1xu44CA44CA44CA44CAd2luZG93LnNjcm9sbFRvKHtcbiAgICAgICAgICAgIHRvcDogd2luZG93LmlubmVySGVpZ2h0KjcsXG4gICAgICAgICAgICAvLyBiZWhhdmlvcjogXCJzbW9vdGhcIlxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSBpZihub3c+NyAmJiBub3c8PTcuNSB8fCBub3c+OC41ICYmIG5vdzw5KSB7XG7jgIDjgIDjgIDjgIB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgICAgICAgdG9wOiB3aW5kb3cuaW5uZXJIZWlnaHQqOCxcbiAgICAgICAgICAgIC8vIGJlaGF2aW9yOiBcInNtb290aFwiXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIGlmKG5vdz44ICYmIG5vdzw9OC41IHx8IG5vdz45LjUgJiYgbm93PDEwKSB7XG7jgIDjgIDjgIDjgIB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgICAgICAgdG9wOiB3aW5kb3cuaW5uZXJIZWlnaHQqOSxcbiAgICAgICAgICAgIC8vIGJlaGF2aW9yOiBcInNtb290aFwiXG4gICAgICAgIH0pO1xuICAgIH1cbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/frontend.js\n");

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