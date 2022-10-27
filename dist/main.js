/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadHome)
/* harmony export */ });

 function createHome() {
  const home = document.createElement('div');
  home.classList.add('home');

  home.appendChild(createParagraph('For those foods that take you back to simpler times'));
  home.appendChild(createParagraph(`From the winter warmers to the summer coolers, 
  ome try our range of dishes from around the world`));

  return home;
}

function createParagraph(text) {
  const para = document.createElement('p');
  para.textContent = text;
  return para;
}

function loadHome() {
  const main = document.getElementById('main');
  main.textContent = '';
  main.appendChild(createHome());
}

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadMenu)
/* harmony export */ });
function createMenu() {
  const menu = document.createElement('div');
  menu.classList.add('menu');

  menu.appendChild(
    createDish(
      "Ramen",
      "Pork slices, bone broth, half-boiled egg, spring onion, udon noodles, bean sprouts"
     )
    );


  return menu;
}


function createDish(name, description) {
  const dish = document.createElement('div');
  dish.classList.add('dish');

  const dishName = document.createElement('h3');
  dishName.textContent = name;

  const dishInfo = document.createElement('p');
  dishInfo.textContent = description;

  const dishImg = document.createElement('img');
  dishImg.src = `../src/images/${name.toLowerCase()}.jpg`;

  dish.appendChild(dishName);
  dish.appendChild(dishInfo);
  dish.appendChild(dishImg);
  // dish.append(dishName, dishInfo, dishImg);
  return dish;
}


function loadMenu() {
  const main = document.getElementById('main');
  main.textContent = '';
  main.appendChild(createMenu());
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");




function createHeader() {
  const header = document.createElement('header');

  const title = document.createElement('h1');
  title.classList.add('title');
  title.textContent = `Home Comforts`;

  header.appendChild(title);
  header.appendChild(createNav());
  return header;
}


function createNav() {
  const nav = document.createElement('nav');

  const homeBtn = document.createElement('button');
  homeBtn.classList.add('nav-button');
  homeBtn.textContent = 'Home';
  homeBtn.addEventListener('click', (e) => {
    if(e.target.classList.contains('active')) return;
    setActiveButton(homeBtn);
    (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
  });

  const menuBtn = document.createElement('button');
  menuBtn.classList.add('nav-button');
  menuBtn.textContent = 'Menu';
  menuBtn.addEventListener('click', (e) => {
    if(e.target.classList.contains('active')) return;
    setActiveButton(menuBtn);
    (0,_menu__WEBPACK_IMPORTED_MODULE_1__["default"])();
  });

  // const contactBtn = document.createElement('button');
  // contactBtn.classList.add('nav-button');
  // contactBtn.textContent = 'Contact';
  // contactBtn.addEventListener('click', (e) => {
  //   if(e.target.classList.contains('active')) return;
  //   setActiveButton(contactBtn);
  //   loadContact();
  // });

  nav.appendChild(homeBtn);
  nav.appendChild(menuBtn);
  // nav,appendChild(contactBtn);
  return nav;
}

function setActiveButton(button) {
  const buttons = document.querySelectorAll('.nav-button');
  buttons.forEach((button) => {
    if(button !== this) {
      button.classList.remove('active');
    }
  });
  button.classList.add('active');
}

function createMain() {
  const main = document.createElement('main');
  main.classList.add('main');
  main.setAttribute('id', 'main');
  return main;
}


function init() {
  const content = document.getElementById('content');

  content.appendChild(createHeader());
  content.appendChild(createMain());

  setActiveButton(document.querySelector('.nav-button'));
  (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
}

init();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsaUNBQWlDLG1CQUFtQjs7QUFFcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUN6Q0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOOEI7QUFDQTs7O0FBRzlCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksaURBQVE7QUFDWixHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksaURBQVE7QUFDWixHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsRUFBRSxpREFBUTtBQUNWOztBQUVBLE8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG4gZnVuY3Rpb24gY3JlYXRlSG9tZSgpIHtcbiAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBob21lLmNsYXNzTGlzdC5hZGQoJ2hvbWUnKTtcblxuICBob21lLmFwcGVuZENoaWxkKGNyZWF0ZVBhcmFncmFwaCgnRm9yIHRob3NlIGZvb2RzIHRoYXQgdGFrZSB5b3UgYmFjayB0byBzaW1wbGVyIHRpbWVzJykpO1xuICBob21lLmFwcGVuZENoaWxkKGNyZWF0ZVBhcmFncmFwaChgRnJvbSB0aGUgd2ludGVyIHdhcm1lcnMgdG8gdGhlIHN1bW1lciBjb29sZXJzLCBcbiAgb21lIHRyeSBvdXIgcmFuZ2Ugb2YgZGlzaGVzIGZyb20gYXJvdW5kIHRoZSB3b3JsZGApKTtcblxuICByZXR1cm4gaG9tZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUGFyYWdyYXBoKHRleHQpIHtcbiAgY29uc3QgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcGFyYS50ZXh0Q29udGVudCA9IHRleHQ7XG4gIHJldHVybiBwYXJhO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkSG9tZSgpIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XG4gIG1haW4udGV4dENvbnRlbnQgPSAnJztcbiAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVIb21lKCkpO1xufSIsImZ1bmN0aW9uIGNyZWF0ZU1lbnUoKSB7XG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWVudS5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XG5cbiAgbWVudS5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVEaXNoKFxuICAgICAgXCJSYW1lblwiLFxuICAgICAgXCJQb3JrIHNsaWNlcywgYm9uZSBicm90aCwgaGFsZi1ib2lsZWQgZWdnLCBzcHJpbmcgb25pb24sIHVkb24gbm9vZGxlcywgYmVhbiBzcHJvdXRzXCJcbiAgICAgKVxuICAgICk7XG5cblxuICByZXR1cm4gbWVudTtcbn1cblxuXG5mdW5jdGlvbiBjcmVhdGVEaXNoKG5hbWUsIGRlc2NyaXB0aW9uKSB7XG4gIGNvbnN0IGRpc2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGlzaC5jbGFzc0xpc3QuYWRkKCdkaXNoJyk7XG5cbiAgY29uc3QgZGlzaE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBkaXNoTmFtZS50ZXh0Q29udGVudCA9IG5hbWU7XG5cbiAgY29uc3QgZGlzaEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGRpc2hJbmZvLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XG5cbiAgY29uc3QgZGlzaEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBkaXNoSW1nLnNyYyA9IGAuLi9zcmMvaW1hZ2VzLyR7bmFtZS50b0xvd2VyQ2FzZSgpfS5qcGdgO1xuXG4gIGRpc2guYXBwZW5kQ2hpbGQoZGlzaE5hbWUpO1xuICBkaXNoLmFwcGVuZENoaWxkKGRpc2hJbmZvKTtcbiAgZGlzaC5hcHBlbmRDaGlsZChkaXNoSW1nKTtcbiAgLy8gZGlzaC5hcHBlbmQoZGlzaE5hbWUsIGRpc2hJbmZvLCBkaXNoSW1nKTtcbiAgcmV0dXJuIGRpc2g7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZE1lbnUoKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpO1xuICBtYWluLnRleHRDb250ZW50ID0gJyc7XG4gIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlTWVudSgpKTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBsb2FkSG9tZSBmcm9tIFwiLi9ob21lXCI7XG5pbXBvcnQgbG9hZE1lbnUgZnJvbSBcIi4vbWVudVwiO1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IGBIb21lIENvbWZvcnRzYDtcblxuICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTmF2KCkpO1xuICByZXR1cm4gaGVhZGVyO1xufVxuXG5cbmZ1bmN0aW9uIGNyZWF0ZU5hdigpIHtcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG5cbiAgY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBob21lQnRuLmNsYXNzTGlzdC5hZGQoJ25hdi1idXR0b24nKTtcbiAgaG9tZUJ0bi50ZXh0Q29udGVudCA9ICdIb21lJztcbiAgaG9tZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkgcmV0dXJuO1xuICAgIHNldEFjdGl2ZUJ1dHRvbihob21lQnRuKTtcbiAgICBsb2FkSG9tZSgpO1xuICB9KTtcblxuICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIG1lbnVCdG4uY2xhc3NMaXN0LmFkZCgnbmF2LWJ1dHRvbicpO1xuICBtZW51QnRuLnRleHRDb250ZW50ID0gJ01lbnUnO1xuICBtZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZihlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSByZXR1cm47XG4gICAgc2V0QWN0aXZlQnV0dG9uKG1lbnVCdG4pO1xuICAgIGxvYWRNZW51KCk7XG4gIH0pO1xuXG4gIC8vIGNvbnN0IGNvbnRhY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgLy8gY29udGFjdEJ0bi5jbGFzc0xpc3QuYWRkKCduYXYtYnV0dG9uJyk7XG4gIC8vIGNvbnRhY3RCdG4udGV4dENvbnRlbnQgPSAnQ29udGFjdCc7XG4gIC8vIGNvbnRhY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAvLyAgIGlmKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHJldHVybjtcbiAgLy8gICBzZXRBY3RpdmVCdXR0b24oY29udGFjdEJ0bik7XG4gIC8vICAgbG9hZENvbnRhY3QoKTtcbiAgLy8gfSk7XG5cbiAgbmF2LmFwcGVuZENoaWxkKGhvbWVCdG4pO1xuICBuYXYuYXBwZW5kQ2hpbGQobWVudUJ0bik7XG4gIC8vIG5hdixhcHBlbmRDaGlsZChjb250YWN0QnRuKTtcbiAgcmV0dXJuIG5hdjtcbn1cblxuZnVuY3Rpb24gc2V0QWN0aXZlQnV0dG9uKGJ1dHRvbikge1xuICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdi1idXR0b24nKTtcbiAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICBpZihidXR0b24gIT09IHRoaXMpIHtcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB9XG4gIH0pO1xuICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1haW4oKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gIG1haW4uY2xhc3NMaXN0LmFkZCgnbWFpbicpO1xuICBtYWluLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWFpbicpO1xuICByZXR1cm4gbWFpbjtcbn1cblxuXG5mdW5jdGlvbiBpbml0KCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVNYWluKCkpO1xuXG4gIHNldEFjdGl2ZUJ1dHRvbihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2LWJ1dHRvbicpKTtcbiAgbG9hZEhvbWUoKTtcbn1cblxuaW5pdCgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==