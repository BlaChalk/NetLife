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

eval("window.onload = function () {\n  var visible = 0;\n\n  function closeVisiblePage(visible) {\n    $('#section' + visible).css('height', '0%').children('div').css('display', 'none');\n  }\n\n  ;\n\n  function openVisiblePage(visible) {\n    $('#section' + visible).css('height', '101%').children('div').css('display', 'flex');\n  }\n\n  ;\n\n  document.body.onmousewheel = function (e) {\n    diraction = e.deltaY;\n\n    if (diraction > 0 && visible < 11) {\n      closeVisiblePage(visible);\n      visible += 1;\n      openVisiblePage(visible);\n    } else if (diraction < 0 && visible > 0) {\n      closeVisiblePage(visible);\n      visible -= 1;\n      openVisiblePage(visible);\n    }\n\n    if (visible === 0) {\n      $('#ybox--1').removeClass('ybox__hide');\n    }\n  };\n\n  $('.ybox__close').click(function () {\n    $('#ybox--1').addClass('ybox__hide');\n  });\n\n  changeVisible = function changeVisible(page) {\n    closeVisiblePage(visible);\n    visible = page;\n    openVisiblePage(visible);\n  }; // var timecount = 0;\n  // setInterval(\n  //     function () {\n  //         timecount = timecount+1;\n  //         if (timecount/1000 === 1 && visible === 0) {\n  //             $('.ybox--1').removeClass('ybox__hide');\n  //         }\n  // }, 1000);\n  // SVG clock\n\n\n  var hands = [];\n  hands.push(document.querySelector('#secondhand > *'));\n  hands.push(document.querySelector('#minutehand > *'));\n  hands.push(document.querySelector('#hourhand > *'));\n  var cx = 100;\n  var cy = 100;\n\n  function shifter(val) {\n    return [val, cx, cy].join(' ');\n  }\n\n  var date = new Date();\n  var hoursAngle = 360 * date.getHours() / 12 + date.getMinutes() / 2;\n  var minuteAngle = 360 * date.getMinutes() / 60;\n  var secAngle = 360 * date.getSeconds() / 60;\n  hands[0].setAttribute('from', shifter(secAngle));\n  hands[0].setAttribute('to', shifter(secAngle + 360));\n  hands[1].setAttribute('from', shifter(minuteAngle));\n  hands[1].setAttribute('to', shifter(minuteAngle + 360));\n  hands[2].setAttribute('from', shifter(hoursAngle));\n  hands[2].setAttribute('to', shifter(hoursAngle + 360));\n\n  for (var i = 1; i <= 12; i++) {\n    var el = document.createElementNS('http://www.w3.org/2000/svg', 'line');\n    el.setAttribute('x1', '100');\n    el.setAttribute('y1', '30');\n    el.setAttribute('x2', '100');\n    el.setAttribute('y2', '40');\n    el.setAttribute('transform', 'rotate(' + i * 360 / 12 + ' 100 100)');\n    el.setAttribute('style', 'stroke: #ffffff;');\n    document.querySelector('svg').appendChild(el);\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZnJvbnRlbmQuanM/ZmE1OCJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJvbmxvYWQiLCJ2aXNpYmxlIiwiY2xvc2VWaXNpYmxlUGFnZSIsIiQiLCJjc3MiLCJjaGlsZHJlbiIsIm9wZW5WaXNpYmxlUGFnZSIsImRvY3VtZW50IiwiYm9keSIsIm9ubW91c2V3aGVlbCIsImUiLCJkaXJhY3Rpb24iLCJkZWx0YVkiLCJyZW1vdmVDbGFzcyIsImNsaWNrIiwiYWRkQ2xhc3MiLCJjaGFuZ2VWaXNpYmxlIiwicGFnZSIsImhhbmRzIiwicHVzaCIsInF1ZXJ5U2VsZWN0b3IiLCJjeCIsImN5Iiwic2hpZnRlciIsInZhbCIsImpvaW4iLCJkYXRlIiwiRGF0ZSIsImhvdXJzQW5nbGUiLCJnZXRIb3VycyIsImdldE1pbnV0ZXMiLCJtaW51dGVBbmdsZSIsInNlY0FuZ2xlIiwiZ2V0U2Vjb25kcyIsInNldEF0dHJpYnV0ZSIsImkiLCJlbCIsImNyZWF0ZUVsZW1lbnROUyIsImFwcGVuZENoaWxkIl0sIm1hcHBpbmdzIjoiQUFBQ0EsTUFBTSxDQUFDQyxNQUFQLEdBQWdCLFlBQVk7QUFDekIsTUFBSUMsT0FBTyxHQUFHLENBQWQ7O0FBRUEsV0FBU0MsZ0JBQVQsQ0FBMEJELE9BQTFCLEVBQW1DO0FBQy9CRSxLQUFDLENBQUMsYUFBWUYsT0FBYixDQUFELENBQXVCRyxHQUF2QixDQUEyQixRQUEzQixFQUFxQyxJQUFyQyxFQUEyQ0MsUUFBM0MsQ0FBb0QsS0FBcEQsRUFBMkRELEdBQTNELENBQStELFNBQS9ELEVBQTBFLE1BQTFFO0FBQ0g7O0FBQUE7O0FBRUQsV0FBU0UsZUFBVCxDQUF5QkwsT0FBekIsRUFBa0M7QUFDOUJFLEtBQUMsQ0FBQyxhQUFZRixPQUFiLENBQUQsQ0FBdUJHLEdBQXZCLENBQTJCLFFBQTNCLEVBQXFDLE1BQXJDLEVBQTZDQyxRQUE3QyxDQUFzRCxLQUF0RCxFQUE2REQsR0FBN0QsQ0FBaUUsU0FBakUsRUFB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dEIsRUFBOEJYLE9BQU8sQ0FBQ0ssVUFBRCxDQUFyQztBQUNBVixPQUFLLENBQUMsQ0FBRCxDQUFMLENBQVNnQixZQUFULENBQXNCLElBQXRCLEVBQTRCWCxPQUFPLENBQUNLLFVBQVUsR0FBRyxHQUFkLENBQW5DOztBQUVBLE9BQUksSUFBSU8sQ0FBQyxHQUFHLENBQVosRUFBZUEsQ0FBQyxJQUFJLEVBQXBCLEVBQXdCQSxDQUFDLEVBQXpCLEVBQTZCO0FBQzdCLFFBQUlDLEVBQUUsR0FBRzdCLFFBQVEsQ0FBQzhCLGVBQVQsQ0FBeUIsNEJBQXpCLEVBQXVELE1BQXZELENBQVQ7QUFDQUQsTUFBRSxDQUFDRixZQUFILENBQWdCLElBQWhCLEVBQXNCLEtBQXRCO0FBQ0FFLE1BQUUsQ0FBQ0YsWUFBSCxDQUFnQixJQUFoQixFQUFzQixJQUF0QjtBQUNBRSxNQUFFLENBQUNGLFlBQUgsQ0FBZ0IsSUFBaEIsRUFBc0IsS0FBdEI7QUFDQUUsTUFBRSxDQUFDRixZQUFILENBQWdCLElBQWhCLEVBQXNCLElBQXRCO0FBQ0FFLE1BQUUsQ0FBQ0YsWUFBSCxDQUFnQixXQUFoQixFQUE2QixZQUFhQyxDQUFDLEdBQUMsR0FBRixHQUFNLEVBQW5CLEdBQXlCLFdBQXREO0FBQ0FDLE1BQUUsQ0FBQ0YsWUFBSCxDQUFnQixPQUFoQixFQUF5QixrQkFBekI7QUFDQTNCLFlBQVEsQ0FBQ2EsYUFBVCxDQUF1QixLQUF2QixFQUE4QmtCLFdBQTlCLENBQTBDRixFQUExQztBQUNDO0FBQ0osQ0FyRkQiLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvZnJvbnRlbmQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIod2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCB2aXNpYmxlID0gMDtcclxuXHJcbiAgICBmdW5jdGlvbiBjbG9zZVZpc2libGVQYWdlKHZpc2libGUpIHtcclxuICAgICAgICAkKCcjc2VjdGlvbicrIHZpc2libGUpLmNzcygnaGVpZ2h0JywgJzAlJykuY2hpbGRyZW4oJ2RpdicpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIG9wZW5WaXNpYmxlUGFnZSh2aXNpYmxlKSB7XHJcbiAgICAgICAgJCgnI3NlY3Rpb24nKyB2aXNpYmxlKS5jc3MoJ2hlaWdodCcsICcxMDElJykuY2hpbGRyZW4oJ2RpdicpLmNzcygnZGlzcGxheScsICdmbGV4Jyk7XHJcbiAgICB9O1xyXG5cclxuICAgIGRvY3VtZW50LmJvZHkub25tb3VzZXdoZWVsID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBkaXJhY3Rpb24gPSBlLmRlbHRhWTtcclxuICAgICAgICBpZiAoZGlyYWN0aW9uPjAgJiYgdmlzaWJsZTwxMSkge1xyXG4gICAgICAgICAgICBjbG9zZVZpc2libGVQYWdlKHZpc2libGUpO1xyXG4gICAgICAgICAgICB2aXNpYmxlICs9MTtcclxuICAgICAgICAgICAgb3BlblZpc2libGVQYWdlKHZpc2libGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChkaXJhY3Rpb248MCAmJiB2aXNpYmxlPjApIHtcclxuICAgICAgICAgICAgY2xvc2VWaXNpYmxlUGFnZSh2aXNpYmxlKTtcclxuICAgICAgICAgICAgdmlzaWJsZSAtPTE7XHJcbiAgICAgICAgICAgIG9wZW5WaXNpYmxlUGFnZSh2aXNpYmxlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHZpc2libGUgPT09IDApIHtcclxuICAgICAgICAgICAgJCgnI3lib3gtLTEnKS5yZW1vdmVDbGFzcygneWJveF9faGlkZScpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgJCgnLnlib3hfX2Nsb3NlJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJyN5Ym94LS0xJykuYWRkQ2xhc3MoJ3lib3hfX2hpZGUnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNoYW5nZVZpc2libGUgPSBmdW5jdGlvbiAocGFnZSkge1xyXG4gICAgICAgIGNsb3NlVmlzaWJsZVBhZ2UodmlzaWJsZSk7XHJcbiAgICAgICAgdmlzaWJsZSA9IHBhZ2U7XHJcbiAgICAgICAgb3BlblZpc2libGVQYWdlKHZpc2libGUpO1xyXG4gICAgfTtcclxuXHJcblxyXG5cclxuICAgIC8vIHZhciB0aW1lY291bnQgPSAwO1xyXG4gICAgLy8gc2V0SW50ZXJ2YWwoXHJcbiAgICAvLyAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gICAgICAgICB0aW1lY291bnQgPSB0aW1lY291bnQrMTtcclxuICAgIC8vICAgICAgICAgaWYgKHRpbWVjb3VudC8xMDAwID09PSAxICYmIHZpc2libGUgPT09IDApIHtcclxuICAgIC8vICAgICAgICAgICAgICQoJy55Ym94LS0xJykucmVtb3ZlQ2xhc3MoJ3lib3hfX2hpZGUnKTtcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gfSwgMTAwMCk7XHJcblxyXG5cclxuICAgIC8vIFNWRyBjbG9ja1xyXG4gICAgdmFyIGhhbmRzID0gW107XHJcbiAgICBoYW5kcy5wdXNoKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWNvbmRoYW5kID4gKicpKTtcclxuICAgIGhhbmRzLnB1c2goZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21pbnV0ZWhhbmQgPiAqJykpO1xyXG4gICAgaGFuZHMucHVzaChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaG91cmhhbmQgPiAqJykpO1xyXG5cclxuICAgIHZhciBjeCA9IDEwMDtcclxuICAgIHZhciBjeSA9IDEwMDtcclxuXHJcbiAgICBmdW5jdGlvbiBzaGlmdGVyKHZhbCkge1xyXG4gICAgcmV0dXJuIFt2YWwsIGN4LCBjeV0uam9pbignICcpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBkYXRlID0gbmV3IERhdGUoKTtcclxuICAgIHZhciBob3Vyc0FuZ2xlID0gMzYwICogZGF0ZS5nZXRIb3VycygpIC8gMTIgKyBkYXRlLmdldE1pbnV0ZXMoKSAvIDI7XHJcbiAgICB2YXIgbWludXRlQW5nbGUgPSAzNjAgKiBkYXRlLmdldE1pbnV0ZXMoKSAvIDYwO1xyXG4gICAgdmFyIHNlY0FuZ2xlID0gMzYwICogZGF0ZS5nZXRTZWNvbmRzKCkgLyA2MDtcclxuXHJcbiAgICBoYW5kc1swXS5zZXRBdHRyaWJ1dGUoJ2Zyb20nLCBzaGlmdGVyKHNlY0FuZ2xlKSk7XHJcbiAgICBoYW5kc1swXS5zZXRBdHRyaWJ1dGUoJ3RvJywgc2hpZnRlcihzZWNBbmdsZSArIDM2MCkpO1xyXG4gICAgaGFuZHNbMV0uc2V0QXR0cmlidXRlKCdmcm9tJywgc2hpZnRlcihtaW51dGVBbmdsZSkpO1xyXG4gICAgaGFuZHNbMV0uc2V0QXR0cmlidXRlKCd0bycsIHNoaWZ0ZXIobWludXRlQW5nbGUgKyAzNjApKTtcclxuICAgIGhhbmRzWzJdLnNldEF0dHJpYnV0ZSgnZnJvbScsIHNoaWZ0ZXIoaG91cnNBbmdsZSkpO1xyXG4gICAgaGFuZHNbMl0uc2V0QXR0cmlidXRlKCd0bycsIHNoaWZ0ZXIoaG91cnNBbmdsZSArIDM2MCkpO1xyXG5cclxuICAgIGZvcih2YXIgaSA9IDE7IGkgPD0gMTI7IGkrKykge1xyXG4gICAgdmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdsaW5lJyk7XHJcbiAgICBlbC5zZXRBdHRyaWJ1dGUoJ3gxJywgJzEwMCcpO1xyXG4gICAgZWwuc2V0QXR0cmlidXRlKCd5MScsICczMCcpO1xyXG4gICAgZWwuc2V0QXR0cmlidXRlKCd4MicsICcxMDAnKTtcclxuICAgIGVsLnNldEF0dHJpYnV0ZSgneTInLCAnNDAnKTtcclxuICAgIGVsLnNldEF0dHJpYnV0ZSgndHJhbnNmb3JtJywgJ3JvdGF0ZSgnICsgKGkqMzYwLzEyKSArICcgMTAwIDEwMCknKTtcclxuICAgIGVsLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnc3Ryb2tlOiAjZmZmZmZmOycpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc3ZnJykuYXBwZW5kQ2hpbGQoZWwpO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/frontend.js\n");

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