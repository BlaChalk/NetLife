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

eval("var visible = 0;\n\ndocument.body.onmousewheel = function (e) {\n  diraction = e.deltaY;\n\n  if (diraction > 0 && visible < 9) {\n    $('#section' + visible).css('height', '0%').children('div').css('display', 'none');\n    visible += 1;\n    $('#section' + visible).css('height', '101%').children('div').css('display', 'flex');\n  } else if (diraction < 0 && visible > 0) {\n    $('#section' + visible).css('height', '0%').children('div').css('display', 'none');\n    visible -= 1;\n    $('#section' + visible).css('height', '101%').children('div').css('display', 'flex');\n  }\n\n  if (visible === 0) {\n    $('#ybox--1').removeClass('ybox__hide');\n  }\n};\n\n$('.ybox__close').click(function () {\n  $('#ybox--1').addClass('ybox__hide');\n}); // var timecount = 0;\n// setInterval(\n//     function () {\n//         timecount = timecount+1;\n//         if (timecount/1000 === 1 && visible === 0) {\n//             $('.ybox--1').removeClass('ybox__hide');\n//         }\n// }, 1000);\n// SVG clock\n\nvar hands = [];\nhands.push(document.querySelector('#secondhand > *'));\nhands.push(document.querySelector('#minutehand > *'));\nhands.push(document.querySelector('#hourhand > *'));\nvar cx = 100;\nvar cy = 100;\n\nfunction shifter(val) {\n  return [val, cx, cy].join(' ');\n}\n\nvar date = new Date();\nvar hoursAngle = 360 * date.getHours() / 12 + date.getMinutes() / 2;\nvar minuteAngle = 360 * date.getMinutes() / 60;\nvar secAngle = 360 * date.getSeconds() / 60;\nhands[0].setAttribute('from', shifter(secAngle));\nhands[0].setAttribute('to', shifter(secAngle + 360));\nhands[1].setAttribute('from', shifter(minuteAngle));\nhands[1].setAttribute('to', shifter(minuteAngle + 360));\nhands[2].setAttribute('from', shifter(hoursAngle));\nhands[2].setAttribute('to', shifter(hoursAngle + 360));\n\nfor (var i = 1; i <= 12; i++) {\n  var el = document.createElementNS('http://www.w3.org/2000/svg', 'line');\n  el.setAttribute('x1', '100');\n  el.setAttribute('y1', '30');\n  el.setAttribute('x2', '100');\n  el.setAttribute('y2', '40');\n  el.setAttribute('transform', 'rotate(' + i * 360 / 12 + ' 100 100)');\n  el.setAttribute('style', 'stroke: #ffffff;');\n  document.querySelector('svg').appendChild(el);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZnJvbnRlbmQuanM/ZmE1OCJdLCJuYW1lcyI6WyJ2aXNpYmxlIiwiZG9jdW1lbnQiLCJib2R5Iiwib25tb3VzZXdoZWVsIiwiZSIsImRpcmFjdGlvbiIsImRlbHRhWSIsIiQiLCJjc3MiLCJjaGlsZHJlbiIsInJlbW92ZUNsYXNzIiwiY2xpY2siLCJhZGRDbGFzcyIsImhhbmRzIiwicHVzaCIsInF1ZXJ5U2VsZWN0b3IiLCJjeCIsImN5Iiwic2hpZnRlciIsInZhbCIsImpvaW4iLCJkYXRlIiwiRGF0ZSIsImhvdXJzQW5nbGUiLCJnZXRIb3VycyIsImdldE1pbnV0ZXMiLCJtaW51dGVBbmdsZSIsInNlY0FuZ2xlIiwiZ2V0U2Vjb25kcyIsInNldEF0dHJpYnV0ZSIsImkiLCJlbCIsImNyZWF0ZUVsZW1lbnROUyIsImFwcGVuZENoaWxkIl0sIm1hcHBpbmdzIjoiQUFDQSxJQUFJQSxPQUFPLEdBQUcsQ0FBZDs7QUFFQUMsUUFBUSxDQUFDQyxJQUFULENBQWNDLFlBQWQsR0FBNkIsVUFBVUMsQ0FBVixFQUFhO0FBQ3RDQyxXQUFTLEdBQUdELENBQUMsQ0FBQ0UsTUFBZDs7QUFDQSxNQUFJRCxTQUFTLEdBQUMsQ0FBVixJQUFlTCxPQUFPLEdBQUMsQ0FBM0IsRUFBOEI7QUFDMUJPLEtBQUMsQ0FBQyxhQUFZUCxPQUFiLENBQUQsQ0FBdUJRLEdBQXZCLENBQTJCLFFBQTNCLEVBQXFDLElBQXJDLEVBQTJDQyxRQUEzQyxDQUFvRCxLQUFwRCxFQUEyREQsR0FBM0QsQ0FBK0QsU0FBL0QsRUFBMEUsTUFBMUU7QUFDQVIsV0FBTyxJQUFHLENBQVY7QUFDQU8sS0FBQyxDQUFDLGFBQVlQLE9BQWIsQ0FBRCxDQUF1QlEsR0FBdkIsQ0FBMkIsUUFBM0IsRUFBcUMsTUFBckMsRUFBNkNDLFFBQTdDLENBQXNELEtBQXRELEVBQTZERCxHQUE3RCxDQUFpRSxTQUFqRSxFQUE0RSxNQUE1RTtBQUNILEdBSkQsTUFLSyxJQUFJSCxT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QUFDM0IsTUFBSUMsRUFBRSxHQUFHOUIsUUFBUSxDQUFDK0IsZUFBVCxDQUF5Qiw0QkFBekIsRUFBdUQsTUFBdkQsQ0FBVDtBQUNBRCxJQUFFLENBQUNGLFlBQUgsQ0FBZ0IsSUFBaEIsRUFBc0IsS0FBdEI7QUFDQUUsSUFBRSxDQUFDRixZQUFILENBQWdCLElBQWhCLEVBQXNCLElBQXRCO0FBQ0FFLElBQUUsQ0FBQ0YsWUFBSCxDQUFnQixJQUFoQixFQUFzQixLQUF0QjtBQUNBRSxJQUFFLENBQUNGLFlBQUgsQ0FBZ0IsSUFBaEIsRUFBc0IsSUFBdEI7QUFDQUUsSUFBRSxDQUFDRixZQUFILENBQWdCLFdBQWhCLEVBQTZCLFlBQWFDLENBQUMsR0FBQyxHQUFGLEdBQU0sRUFBbkIsR0FBeUIsV0FBdEQ7QUFDQUMsSUFBRSxDQUFDRixZQUFILENBQWdCLE9BQWhCLEVBQXlCLGtCQUF6QjtBQUNBNUIsVUFBUSxDQUFDYyxhQUFULENBQXVCLEtBQXZCLEVBQThCa0IsV0FBOUIsQ0FBMENGLEVBQTFDO0FBQ0QiLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvZnJvbnRlbmQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmxldCB2aXNpYmxlID0gMDtcblxuZG9jdW1lbnQuYm9keS5vbm1vdXNld2hlZWwgPSBmdW5jdGlvbiAoZSkge1xuICAgIGRpcmFjdGlvbiA9IGUuZGVsdGFZO1xuICAgIGlmIChkaXJhY3Rpb24+MCAmJiB2aXNpYmxlPDkpIHtcbiAgICAgICAgJCgnI3NlY3Rpb24nKyB2aXNpYmxlKS5jc3MoJ2hlaWdodCcsICcwJScpLmNoaWxkcmVuKCdkaXYnKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgICAgICB2aXNpYmxlICs9MTtcbiAgICAgICAgJCgnI3NlY3Rpb24nKyB2aXNpYmxlKS5jc3MoJ2hlaWdodCcsICcxMDElJykuY2hpbGRyZW4oJ2RpdicpLmNzcygnZGlzcGxheScsICdmbGV4Jyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGRpcmFjdGlvbjwwICYmIHZpc2libGU+MCkge1xuICAgICAgICAkKCcjc2VjdGlvbicrIHZpc2libGUpLmNzcygnaGVpZ2h0JywgJzAlJykuY2hpbGRyZW4oJ2RpdicpLmNzcygnZGlzcGxheScsICdub25lJyk7XG4gICAgICAgIHZpc2libGUgLT0xO1xuICAgICAgICAkKCcjc2VjdGlvbicrIHZpc2libGUpLmNzcygnaGVpZ2h0JywgJzEwMSUnKS5jaGlsZHJlbignZGl2JykuY3NzKCdkaXNwbGF5JywgJ2ZsZXgnKTtcbiAgICB9XG4gICAgaWYgKHZpc2libGUgPT09IDApIHtcbiAgICAgICAgJCgnI3lib3gtLTEnKS5yZW1vdmVDbGFzcygneWJveF9faGlkZScpO1xuICAgIH1cbn07XG5cbiQoJy55Ym94X19jbG9zZScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICQoJyN5Ym94LS0xJykuYWRkQ2xhc3MoJ3lib3hfX2hpZGUnKTtcbn0pO1xuXG4vLyB2YXIgdGltZWNvdW50ID0gMDtcbi8vIHNldEludGVydmFsKFxuLy8gICAgIGZ1bmN0aW9uICgpIHtcbi8vICAgICAgICAgdGltZWNvdW50ID0gdGltZWNvdW50KzE7XG4vLyAgICAgICAgIGlmICh0aW1lY291bnQvMTAwMCA9PT0gMSAmJiB2aXNpYmxlID09PSAwKSB7XG4vLyAgICAgICAgICAgICAkKCcueWJveC0tMScpLnJlbW92ZUNsYXNzKCd5Ym94X19oaWRlJyk7XG4vLyAgICAgICAgIH1cbi8vIH0sIDEwMDApO1xuXG5cbi8vIFNWRyBjbG9ja1xudmFyIGhhbmRzID0gW107XG5oYW5kcy5wdXNoKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWNvbmRoYW5kID4gKicpKTtcbmhhbmRzLnB1c2goZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21pbnV0ZWhhbmQgPiAqJykpO1xuaGFuZHMucHVzaChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaG91cmhhbmQgPiAqJykpO1xuXG52YXIgY3ggPSAxMDA7XG52YXIgY3kgPSAxMDA7XG5cbmZ1bmN0aW9uIHNoaWZ0ZXIodmFsKSB7XG4gIHJldHVybiBbdmFsLCBjeCwgY3ldLmpvaW4oJyAnKTtcbn1cblxudmFyIGRhdGUgPSBuZXcgRGF0ZSgpO1xudmFyIGhvdXJzQW5nbGUgPSAzNjAgKiBkYXRlLmdldEhvdXJzKCkgLyAxMiArIGRhdGUuZ2V0TWludXRlcygpIC8gMjtcbnZhciBtaW51dGVBbmdsZSA9IDM2MCAqIGRhdGUuZ2V0TWludXRlcygpIC8gNjA7XG52YXIgc2VjQW5nbGUgPSAzNjAgKiBkYXRlLmdldFNlY29uZHMoKSAvIDYwO1xuXG5oYW5kc1swXS5zZXRBdHRyaWJ1dGUoJ2Zyb20nLCBzaGlmdGVyKHNlY0FuZ2xlKSk7XG5oYW5kc1swXS5zZXRBdHRyaWJ1dGUoJ3RvJywgc2hpZnRlcihzZWNBbmdsZSArIDM2MCkpO1xuaGFuZHNbMV0uc2V0QXR0cmlidXRlKCdmcm9tJywgc2hpZnRlcihtaW51dGVBbmdsZSkpO1xuaGFuZHNbMV0uc2V0QXR0cmlidXRlKCd0bycsIHNoaWZ0ZXIobWludXRlQW5nbGUgKyAzNjApKTtcbmhhbmRzWzJdLnNldEF0dHJpYnV0ZSgnZnJvbScsIHNoaWZ0ZXIoaG91cnNBbmdsZSkpO1xuaGFuZHNbMl0uc2V0QXR0cmlidXRlKCd0bycsIHNoaWZ0ZXIoaG91cnNBbmdsZSArIDM2MCkpO1xuXG5mb3IodmFyIGkgPSAxOyBpIDw9IDEyOyBpKyspIHtcbiAgdmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdsaW5lJyk7XG4gIGVsLnNldEF0dHJpYnV0ZSgneDEnLCAnMTAwJyk7XG4gIGVsLnNldEF0dHJpYnV0ZSgneTEnLCAnMzAnKTtcbiAgZWwuc2V0QXR0cmlidXRlKCd4MicsICcxMDAnKTtcbiAgZWwuc2V0QXR0cmlidXRlKCd5MicsICc0MCcpO1xuICBlbC5zZXRBdHRyaWJ1dGUoJ3RyYW5zZm9ybScsICdyb3RhdGUoJyArIChpKjM2MC8xMikgKyAnIDEwMCAxMDApJyk7XG4gIGVsLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnc3Ryb2tlOiAjZmZmZmZmOycpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzdmcnKS5hcHBlbmRDaGlsZChlbCk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/js/frontend.js\n");

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