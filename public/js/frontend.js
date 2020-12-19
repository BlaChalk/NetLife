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

eval("window.onload = function () {\n  var visible = 0;\n\n  function closeVisiblePage(visible) {\n    $('#section' + visible).css('height', '0%').children('div').css('display', 'none');\n  }\n\n  ;\n\n  function openVisiblePage(visible) {\n    $('#section' + visible).css('height', '101%').children('div').css('display', 'flex');\n  }\n\n  ;\n\n  document.body.onmousewheel = function (e) {\n    diraction = e.deltaY;\n\n    if (diraction > 0 && visible < 10) {\n      closeVisiblePage(visible);\n      visible += 1;\n      openVisiblePage(visible);\n    } else if (diraction < 0 && visible > 0) {\n      closeVisiblePage(visible);\n      visible -= 1;\n      openVisiblePage(visible);\n    }\n\n    if (visible === 0) {\n      $('#ybox--1').removeClass('ybox__hide');\n    }\n  };\n\n  $('.ybox__close').click(function () {\n    $('#ybox--1').addClass('ybox__hide');\n  });\n\n  changeVisible = function changeVisible(page) {\n    console.log(\"page:\" + page);\n    console.log(\"visible:\" + visible);\n    closeVisiblePage(visible);\n    visible = page;\n    openVisiblePage(visible);\n  }; // var timecount = 0;\n  // setInterval(\n  //     function () {\n  //         timecount = timecount+1;\n  //         if (timecount/1000 === 1 && visible === 0) {\n  //             $('.ybox--1').removeClass('ybox__hide');\n  //         }\n  // }, 1000);\n  // SVG clock\n\n\n  var hands = [];\n  hands.push(document.querySelector('#secondhand > *'));\n  hands.push(document.querySelector('#minutehand > *'));\n  hands.push(document.querySelector('#hourhand > *'));\n  var cx = 100;\n  var cy = 100;\n\n  function shifter(val) {\n    return [val, cx, cy].join(' ');\n  }\n\n  var date = new Date();\n  var hoursAngle = 360 * date.getHours() / 12 + date.getMinutes() / 2;\n  var minuteAngle = 360 * date.getMinutes() / 60;\n  var secAngle = 360 * date.getSeconds() / 60;\n  hands[0].setAttribute('from', shifter(secAngle));\n  hands[0].setAttribute('to', shifter(secAngle + 360));\n  hands[1].setAttribute('from', shifter(minuteAngle));\n  hands[1].setAttribute('to', shifter(minuteAngle + 360));\n  hands[2].setAttribute('from', shifter(hoursAngle));\n  hands[2].setAttribute('to', shifter(hoursAngle + 360));\n\n  for (var i = 1; i <= 12; i++) {\n    var el = document.createElementNS('http://www.w3.org/2000/svg', 'line');\n    el.setAttribute('x1', '100');\n    el.setAttribute('y1', '30');\n    el.setAttribute('x2', '100');\n    el.setAttribute('y2', '40');\n    el.setAttribute('transform', 'rotate(' + i * 360 / 12 + ' 100 100)');\n    el.setAttribute('style', 'stroke: #ffffff;');\n    document.querySelector('svg').appendChild(el);\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZnJvbnRlbmQuanM/ZmE1OCJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJvbmxvYWQiLCJ2aXNpYmxlIiwiY2xvc2VWaXNpYmxlUGFnZSIsIiQiLCJjc3MiLCJjaGlsZHJlbiIsIm9wZW5WaXNpYmxlUGFnZSIsImRvY3VtZW50IiwiYm9keSIsIm9ubW91c2V3aGVlbCIsImUiLCJkaXJhY3Rpb24iLCJkZWx0YVkiLCJyZW1vdmVDbGFzcyIsImNsaWNrIiwiYWRkQ2xhc3MiLCJjaGFuZ2VWaXNpYmxlIiwicGFnZSIsImNvbnNvbGUiLCJsb2ciLCJoYW5kcyIsInB1c2giLCJxdWVyeVNlbGVjdG9yIiwiY3giLCJjeSIsInNoaWZ0ZXIiLCJ2YWwiLCJqb2luIiwiZGF0ZSIsIkRhdGUiLCJob3Vyc0FuZ2xlIiwiZ2V0SG91cnMiLCJnZXRNaW51dGVzIiwibWludXRlQW5nbGUiLCJzZWNBbmdsZSIsImdldFNlY29uZHMiLCJzZXRBdHRyaWJ1dGUiLCJpIiwiZWwiLCJjcmVhdGVFbGVtZW50TlMiLCJhcHBlbmRDaGlsZCJdLCJtYXBwaW5ncyI6IkFBQUNBLE1BQU0sQ0FBQ0MsTUFBUCxHQUFnQixZQUFZO0FBQ3pCLE1BQUlDLE9BQU8sR0FBRyxDQUFkOztBQUVBLFdBQVNDLGdCQUFULENBQTBCRCxPQUExQixFQUFtQztBQUMvQkUsS0FBQyxDQUFDLGFBQVlGLE9BQWIsQ0FBRCxDQUF1QkcsR0FBdkIsQ0FBMkIsUUFBM0IsRUFBcUMsSUFBckMsRUFBMkNDLFFBQTNDLENBQW9ELEtBQXBELEVBQTJERCxHQUEzRCxDQUErRCxTQUEvRCxFQUEwRSxNQUExRTtBQUNIOztBQUFBOztBQUVELFdBQVNFLGVBQVQsQ0FBeUJMLE9BQXpCLEVBQWtDO0FBQzlCRSxLQUFDLENBQUMsYUFBWUYsT0FBYixDQUFELENBQXVCRyxHQUF2QixDQUEyQixRQUEzQixFQUFxQyxNQUFyQyxFQUE2Q0MsUUFBN0MsQ0FBc0QsS0FBdEQsRUFBNkRELEdBQTdE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c0IsSUFBdEIsRUFBNEJYLE9BQU8sQ0FBQ1EsV0FBVyxHQUFHLEdBQWYsQ0FBbkM7QUFDQWIsT0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTZ0IsWUFBVCxDQUFzQixNQUF0QixFQUE4QlgsT0FBTyxDQUFDSyxVQUFELENBQXJDO0FBQ0FWLE9BQUssQ0FBQyxDQUFELENBQUwsQ0FBU2dCLFlBQVQsQ0FBc0IsSUFBdEIsRUFBNEJYLE9BQU8sQ0FBQ0ssVUFBVSxHQUFHLEdBQWQsQ0FBbkM7O0FBRUEsT0FBSSxJQUFJTyxDQUFDLEdBQUcsQ0FBWixFQUFlQSxDQUFDLElBQUksRUFBcEIsRUFBd0JBLENBQUMsRUFBekIsRUFBNkI7QUFDN0IsUUFBSUMsRUFBRSxHQUFHL0IsUUFBUSxDQUFDZ0MsZUFBVCxDQUF5Qiw0QkFBekIsRUFBdUQsTUFBdkQsQ0FBVDtBQUNBRCxNQUFFLENBQUNGLFlBQUgsQ0FBZ0IsSUFBaEIsRUFBc0IsS0FBdEI7QUFDQUUsTUFBRSxDQUFDRixZQUFILENBQWdCLElBQWhCLEVBQXNCLElBQXRCO0FBQ0FFLE1BQUUsQ0FBQ0YsWUFBSCxDQUFnQixJQUFoQixFQUFzQixLQUF0QjtBQUNBRSxNQUFFLENBQUNGLFlBQUgsQ0FBZ0IsSUFBaEIsRUFBc0IsSUFBdEI7QUFDQUUsTUFBRSxDQUFDRixZQUFILENBQWdCLFdBQWhCLEVBQTZCLFlBQWFDLENBQUMsR0FBQyxHQUFGLEdBQU0sRUFBbkIsR0FBeUIsV0FBdEQ7QUFDQUMsTUFBRSxDQUFDRixZQUFILENBQWdCLE9BQWhCLEVBQXlCLGtCQUF6QjtBQUNBN0IsWUFBUSxDQUFDZSxhQUFULENBQXVCLEtBQXZCLEVBQThCa0IsV0FBOUIsQ0FBMENGLEVBQTFDO0FBQ0M7QUFDSixDQXpGRCIsImZpbGUiOiIuL3Jlc291cmNlcy9qcy9mcm9udGVuZC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIih3aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgIGxldCB2aXNpYmxlID0gMDtcblxuICAgIGZ1bmN0aW9uIGNsb3NlVmlzaWJsZVBhZ2UodmlzaWJsZSkge1xuICAgICAgICAkKCcjc2VjdGlvbicrIHZpc2libGUpLmNzcygnaGVpZ2h0JywgJzAlJykuY2hpbGRyZW4oJ2RpdicpLmNzcygnZGlzcGxheScsICdub25lJyk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIG9wZW5WaXNpYmxlUGFnZSh2aXNpYmxlKSB7XG4gICAgICAgICQoJyNzZWN0aW9uJysgdmlzaWJsZSkuY3NzKCdoZWlnaHQnLCAnMTAxJScpLmNoaWxkcmVuKCdkaXYnKS5jc3MoJ2Rpc3BsYXknLCAnZmxleCcpO1xuICAgIH07XG5cbiAgICBkb2N1bWVudC5ib2R5Lm9ubW91c2V3aGVlbCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGRpcmFjdGlvbiA9IGUuZGVsdGFZO1xuICAgICAgICBpZiAoZGlyYWN0aW9uPjAgJiYgdmlzaWJsZTwxMCkge1xuICAgICAgICAgICAgY2xvc2VWaXNpYmxlUGFnZSh2aXNpYmxlKTtcbiAgICAgICAgICAgIHZpc2libGUgKz0xO1xuICAgICAgICAgICAgb3BlblZpc2libGVQYWdlKHZpc2libGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRpcmFjdGlvbjwwICYmIHZpc2libGU+MCkge1xuICAgICAgICAgICAgY2xvc2VWaXNpYmxlUGFnZSh2aXNpYmxlKTtcbiAgICAgICAgICAgIHZpc2libGUgLT0xO1xuICAgICAgICAgICAgb3BlblZpc2libGVQYWdlKHZpc2libGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2aXNpYmxlID09PSAwKSB7XG4gICAgICAgICAgICAkKCcjeWJveC0tMScpLnJlbW92ZUNsYXNzKCd5Ym94X19oaWRlJyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgJCgnLnlib3hfX2Nsb3NlJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcjeWJveC0tMScpLmFkZENsYXNzKCd5Ym94X19oaWRlJyk7XG4gICAgfSk7XG5cbiAgICBjaGFuZ2VWaXNpYmxlID0gZnVuY3Rpb24gKHBhZ2UpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJwYWdlOlwiK3BhZ2UpO1xuICAgICAgICBjb25zb2xlLmxvZyhcInZpc2libGU6XCIrdmlzaWJsZSk7XG5cbiAgICAgICAgY2xvc2VWaXNpYmxlUGFnZSh2aXNpYmxlKTtcbiAgICAgICAgdmlzaWJsZSA9IHBhZ2U7XG4gICAgICAgIG9wZW5WaXNpYmxlUGFnZSh2aXNpYmxlKTtcblxuICAgIH07XG5cblxuXG4gICAgLy8gdmFyIHRpbWVjb3VudCA9IDA7XG4gICAgLy8gc2V0SW50ZXJ2YWwoXG4gICAgLy8gICAgIGZ1bmN0aW9uICgpIHtcbiAgICAvLyAgICAgICAgIHRpbWVjb3VudCA9IHRpbWVjb3VudCsxO1xuICAgIC8vICAgICAgICAgaWYgKHRpbWVjb3VudC8xMDAwID09PSAxICYmIHZpc2libGUgPT09IDApIHtcbiAgICAvLyAgICAgICAgICAgICAkKCcueWJveC0tMScpLnJlbW92ZUNsYXNzKCd5Ym94X19oaWRlJyk7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gfSwgMTAwMCk7XG5cblxuICAgIC8vIFNWRyBjbG9ja1xuICAgIHZhciBoYW5kcyA9IFtdO1xuICAgIGhhbmRzLnB1c2goZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlY29uZGhhbmQgPiAqJykpO1xuICAgIGhhbmRzLnB1c2goZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21pbnV0ZWhhbmQgPiAqJykpO1xuICAgIGhhbmRzLnB1c2goZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hvdXJoYW5kID4gKicpKTtcblxuICAgIHZhciBjeCA9IDEwMDtcbiAgICB2YXIgY3kgPSAxMDA7XG5cbiAgICBmdW5jdGlvbiBzaGlmdGVyKHZhbCkge1xuICAgIHJldHVybiBbdmFsLCBjeCwgY3ldLmpvaW4oJyAnKTtcbiAgICB9XG5cbiAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgdmFyIGhvdXJzQW5nbGUgPSAzNjAgKiBkYXRlLmdldEhvdXJzKCkgLyAxMiArIGRhdGUuZ2V0TWludXRlcygpIC8gMjtcbiAgICB2YXIgbWludXRlQW5nbGUgPSAzNjAgKiBkYXRlLmdldE1pbnV0ZXMoKSAvIDYwO1xuICAgIHZhciBzZWNBbmdsZSA9IDM2MCAqIGRhdGUuZ2V0U2Vjb25kcygpIC8gNjA7XG5cbiAgICBoYW5kc1swXS5zZXRBdHRyaWJ1dGUoJ2Zyb20nLCBzaGlmdGVyKHNlY0FuZ2xlKSk7XG4gICAgaGFuZHNbMF0uc2V0QXR0cmlidXRlKCd0bycsIHNoaWZ0ZXIoc2VjQW5nbGUgKyAzNjApKTtcbiAgICBoYW5kc1sxXS5zZXRBdHRyaWJ1dGUoJ2Zyb20nLCBzaGlmdGVyKG1pbnV0ZUFuZ2xlKSk7XG4gICAgaGFuZHNbMV0uc2V0QXR0cmlidXRlKCd0bycsIHNoaWZ0ZXIobWludXRlQW5nbGUgKyAzNjApKTtcbiAgICBoYW5kc1syXS5zZXRBdHRyaWJ1dGUoJ2Zyb20nLCBzaGlmdGVyKGhvdXJzQW5nbGUpKTtcbiAgICBoYW5kc1syXS5zZXRBdHRyaWJ1dGUoJ3RvJywgc2hpZnRlcihob3Vyc0FuZ2xlICsgMzYwKSk7XG5cbiAgICBmb3IodmFyIGkgPSAxOyBpIDw9IDEyOyBpKyspIHtcbiAgICB2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ2xpbmUnKTtcbiAgICBlbC5zZXRBdHRyaWJ1dGUoJ3gxJywgJzEwMCcpO1xuICAgIGVsLnNldEF0dHJpYnV0ZSgneTEnLCAnMzAnKTtcbiAgICBlbC5zZXRBdHRyaWJ1dGUoJ3gyJywgJzEwMCcpO1xuICAgIGVsLnNldEF0dHJpYnV0ZSgneTInLCAnNDAnKTtcbiAgICBlbC5zZXRBdHRyaWJ1dGUoJ3RyYW5zZm9ybScsICdyb3RhdGUoJyArIChpKjM2MC8xMikgKyAnIDEwMCAxMDApJyk7XG4gICAgZWwuc2V0QXR0cmlidXRlKCdzdHlsZScsICdzdHJva2U6ICNmZmZmZmY7Jyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc3ZnJykuYXBwZW5kQ2hpbGQoZWwpO1xuICAgIH1cbn0pO1xuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/js/frontend.js\n");

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