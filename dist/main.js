/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadContact)
/* harmony export */ });
function createContact() {
  const contact = document.createElement('div');
  contact.classList.add('contact');

  const title = document.createElement('h1');
  title.classList.add('title');
  title.textContent = 'Contact Us';

  const contactNumber = document.createElement('p');
  contactNumber.textContent = '01234 567 899';

  const address = document.createElement('p');
  address.textContent = '4 Privet Drive, Little Whinging, Surrey';

  contact.appendChild(title);
  contact.appendChild(contactNumber);
  contact.appendChild(address);

  return contact;
}

function loadContact() {
  const main = document.getElementById('main');
  main.textContent = '';
  main.appendChild(createContact());  
}

/***/ }),

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
  home.appendChild(createParagraph(`From the winter warmers to the summer coolers`)); 
  home.appendChild(createParagraph(`Come try our range of dishes from around the world`));

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
      "A hearty broth from Japan which is sure to satisfy",
     )
  );
  menu.appendChild(
    createDish(
      "Roast-Dinner",
      "A British classic, roast beef, roast potatoes, vegetables and a good helpful of gravy"
    )
  );
  menu.appendChild(
    createDish(
      "Borscht",
      "Beet and cabbage borscht, a staple soup in many Eastern European homes"
    )
  );
  menu.appendChild(
    createDish(
      "Congee",
      "A creamy rice porridge from China that is eaten across Asia for breakfast"
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
  dishImg.src = `images/${name}.jpg`;

  dish.appendChild(dishName);
  dish.appendChild(dishInfo);
  dish.appendChild(dishImg);
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
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");





function createHeader() {
  const header = document.createElement('header');
  header.classList.add('header');

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

  const contactBtn = document.createElement('button');
  contactBtn.classList.add('nav-button');
  contactBtn.textContent = 'Contact';
  contactBtn.addEventListener('click', (e) => {
    if(e.target.classList.contains('active')) return;
    setActiveButton(contactBtn);
    (0,_contact__WEBPACK_IMPORTED_MODULE_2__["default"])();
  });

  nav.appendChild(homeBtn);
  nav.appendChild(menuBtn);
  nav.appendChild(contactBtn);
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

function createFooter() {
  const footer = document.createElement('footer');
  footer.classList.add('footer');

  const copyright = document.createElement("p");
  copyright.textContent = `Copyright © ${new Date().getFullYear()} Nick Herring`;

  footer.appendChild(copyright);
  return footer
}


function init() {
  const content = document.getElementById('content');
  content.appendChild(createHeader());
  content.appendChild(createMain());
  content.appendChild(createFooter());

  setActiveButton(document.querySelector('.nav-button'));
  (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
}


init();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEIsS0FBSzs7QUFFL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDekRBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ044QjtBQUNBO0FBQ007OztBQUdwQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksaURBQVE7QUFDWixHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksaURBQVE7QUFDWixHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksb0RBQVc7QUFDZixHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUNBQXlDLDBCQUEwQjs7QUFFbkU7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRSxpREFBUTtBQUNWOzs7QUFHQSxPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3QoKSB7XG4gIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFjdC5jbGFzc0xpc3QuYWRkKCdjb250YWN0Jyk7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9ICdDb250YWN0IFVzJztcblxuICBjb25zdCBjb250YWN0TnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb250YWN0TnVtYmVyLnRleHRDb250ZW50ID0gJzAxMjM0IDU2NyA4OTknO1xuXG4gIGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGFkZHJlc3MudGV4dENvbnRlbnQgPSAnNCBQcml2ZXQgRHJpdmUsIExpdHRsZSBXaGluZ2luZywgU3VycmV5JztcblxuICBjb250YWN0LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgY29udGFjdC5hcHBlbmRDaGlsZChjb250YWN0TnVtYmVyKTtcbiAgY29udGFjdC5hcHBlbmRDaGlsZChhZGRyZXNzKTtcblxuICByZXR1cm4gY29udGFjdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZENvbnRhY3QoKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpO1xuICBtYWluLnRleHRDb250ZW50ID0gJyc7XG4gIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlQ29udGFjdCgpKTsgIFxufSIsIlxuIGZ1bmN0aW9uIGNyZWF0ZUhvbWUoKSB7XG4gIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaG9tZS5jbGFzc0xpc3QuYWRkKCdob21lJyk7XG5cbiAgaG9tZS5hcHBlbmRDaGlsZChjcmVhdGVQYXJhZ3JhcGgoJ0ZvciB0aG9zZSBmb29kcyB0aGF0IHRha2UgeW91IGJhY2sgdG8gc2ltcGxlciB0aW1lcycpKTtcbiAgaG9tZS5hcHBlbmRDaGlsZChjcmVhdGVQYXJhZ3JhcGgoYEZyb20gdGhlIHdpbnRlciB3YXJtZXJzIHRvIHRoZSBzdW1tZXIgY29vbGVyc2ApKTsgXG4gIGhvbWUuYXBwZW5kQ2hpbGQoY3JlYXRlUGFyYWdyYXBoKGBDb21lIHRyeSBvdXIgcmFuZ2Ugb2YgZGlzaGVzIGZyb20gYXJvdW5kIHRoZSB3b3JsZGApKTtcblxuICByZXR1cm4gaG9tZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUGFyYWdyYXBoKHRleHQpIHtcbiAgY29uc3QgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcGFyYS50ZXh0Q29udGVudCA9IHRleHQ7XG4gIHJldHVybiBwYXJhO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkSG9tZSgpIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XG4gIG1haW4udGV4dENvbnRlbnQgPSAnJztcbiAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVIb21lKCkpO1xufSIsImZ1bmN0aW9uIGNyZWF0ZU1lbnUoKSB7XG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWVudS5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XG5cbiAgbWVudS5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVEaXNoKFxuICAgICAgXCJSYW1lblwiLFxuICAgICAgXCJBIGhlYXJ0eSBicm90aCBmcm9tIEphcGFuIHdoaWNoIGlzIHN1cmUgdG8gc2F0aXNmeVwiLFxuICAgICApXG4gICk7XG4gIG1lbnUuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlRGlzaChcbiAgICAgIFwiUm9hc3QtRGlubmVyXCIsXG4gICAgICBcIkEgQnJpdGlzaCBjbGFzc2ljLCByb2FzdCBiZWVmLCByb2FzdCBwb3RhdG9lcywgdmVnZXRhYmxlcyBhbmQgYSBnb29kIGhlbHBmdWwgb2YgZ3JhdnlcIlxuICAgIClcbiAgKTtcbiAgbWVudS5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVEaXNoKFxuICAgICAgXCJCb3JzY2h0XCIsXG4gICAgICBcIkJlZXQgYW5kIGNhYmJhZ2UgYm9yc2NodCwgYSBzdGFwbGUgc291cCBpbiBtYW55IEVhc3Rlcm4gRXVyb3BlYW4gaG9tZXNcIlxuICAgIClcbiAgKTtcbiAgbWVudS5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVEaXNoKFxuICAgICAgXCJDb25nZWVcIixcbiAgICAgIFwiQSBjcmVhbXkgcmljZSBwb3JyaWRnZSBmcm9tIENoaW5hIHRoYXQgaXMgZWF0ZW4gYWNyb3NzIEFzaWEgZm9yIGJyZWFrZmFzdFwiXG4gICAgKVxuICApO1xuXG4gIHJldHVybiBtZW51O1xufVxuXG5cbmZ1bmN0aW9uIGNyZWF0ZURpc2gobmFtZSwgZGVzY3JpcHRpb24pIHtcbiAgY29uc3QgZGlzaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXNoLmNsYXNzTGlzdC5hZGQoJ2Rpc2gnKTtcblxuICBjb25zdCBkaXNoTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIGRpc2hOYW1lLnRleHRDb250ZW50ID0gbmFtZTtcblxuICBjb25zdCBkaXNoSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZGlzaEluZm8udGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcblxuICBjb25zdCBkaXNoSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGRpc2hJbWcuc3JjID0gYGltYWdlcy8ke25hbWV9LmpwZ2A7XG5cbiAgZGlzaC5hcHBlbmRDaGlsZChkaXNoTmFtZSk7XG4gIGRpc2guYXBwZW5kQ2hpbGQoZGlzaEluZm8pO1xuICBkaXNoLmFwcGVuZENoaWxkKGRpc2hJbWcpO1xuICByZXR1cm4gZGlzaDtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkTWVudSgpIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XG4gIG1haW4udGV4dENvbnRlbnQgPSAnJztcbiAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVNZW51KCkpO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGxvYWRIb21lIGZyb20gXCIuL2hvbWVcIjtcbmltcG9ydCBsb2FkTWVudSBmcm9tIFwiLi9tZW51XCI7XG5pbXBvcnQgbG9hZENvbnRhY3QgZnJvbSBcIi4vY29udGFjdFwiO1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gYEhvbWUgQ29tZm9ydHNgO1xuXG4gIGhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChjcmVhdGVOYXYoKSk7XG4gIHJldHVybiBoZWFkZXI7XG59XG5cblxuZnVuY3Rpb24gY3JlYXRlTmF2KCkge1xuICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcblxuICBjb25zdCBob21lQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGhvbWVCdG4uY2xhc3NMaXN0LmFkZCgnbmF2LWJ1dHRvbicpO1xuICBob21lQnRuLnRleHRDb250ZW50ID0gJ0hvbWUnO1xuICBob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZihlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSByZXR1cm47XG4gICAgc2V0QWN0aXZlQnV0dG9uKGhvbWVCdG4pO1xuICAgIGxvYWRIb21lKCk7XG4gIH0pO1xuXG4gIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgbWVudUJ0bi5jbGFzc0xpc3QuYWRkKCduYXYtYnV0dG9uJyk7XG4gIG1lbnVCdG4udGV4dENvbnRlbnQgPSAnTWVudSc7XG4gIG1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHJldHVybjtcbiAgICBzZXRBY3RpdmVCdXR0b24obWVudUJ0bik7XG4gICAgbG9hZE1lbnUoKTtcbiAgfSk7XG5cbiAgY29uc3QgY29udGFjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjb250YWN0QnRuLmNsYXNzTGlzdC5hZGQoJ25hdi1idXR0b24nKTtcbiAgY29udGFjdEJ0bi50ZXh0Q29udGVudCA9ICdDb250YWN0JztcbiAgY29udGFjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkgcmV0dXJuO1xuICAgIHNldEFjdGl2ZUJ1dHRvbihjb250YWN0QnRuKTtcbiAgICBsb2FkQ29udGFjdCgpO1xuICB9KTtcblxuICBuYXYuYXBwZW5kQ2hpbGQoaG9tZUJ0bik7XG4gIG5hdi5hcHBlbmRDaGlsZChtZW51QnRuKTtcbiAgbmF2LmFwcGVuZENoaWxkKGNvbnRhY3RCdG4pO1xuICByZXR1cm4gbmF2O1xufVxuXG5cbmZ1bmN0aW9uIHNldEFjdGl2ZUJ1dHRvbihidXR0b24pIHtcbiAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXYtYnV0dG9uJyk7XG4gIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgaWYoYnV0dG9uICE9PSB0aGlzKSB7XG4gICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgfVxuICB9KTtcbiAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xufVxuXG5cbmZ1bmN0aW9uIGNyZWF0ZU1haW4oKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gIG1haW4uY2xhc3NMaXN0LmFkZCgnbWFpbicpO1xuICBtYWluLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWFpbicpO1xuICByZXR1cm4gbWFpbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpO1xuXG4gIGNvbnN0IGNvcHlyaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb3B5cmlnaHQudGV4dENvbnRlbnQgPSBgQ29weXJpZ2h0IMKpICR7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfSBOaWNrIEhlcnJpbmdgO1xuXG4gIGZvb3Rlci5hcHBlbmRDaGlsZChjb3B5cmlnaHQpO1xuICByZXR1cm4gZm9vdGVyXG59XG5cblxuZnVuY3Rpb24gaW5pdCgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyKCkpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU1haW4oKSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vdGVyKCkpO1xuXG4gIHNldEFjdGl2ZUJ1dHRvbihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2LWJ1dHRvbicpKTtcbiAgbG9hZEhvbWUoKTtcbn1cblxuXG5pbml0KCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9