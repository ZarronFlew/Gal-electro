/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function() {

eval("// burger menu\r\nlet burgerBtn = document.querySelector('.burger');\r\nlet burgerMenu = document.querySelector('.mobile-menu');\r\nlet body = document.querySelector('body');\r\nburgerBtn.addEventListener('click', () => {\r\n    burgerBtn.classList.toggle('open');\r\n    if (burgerMenu.classList.contains('open')) {\r\n        burgerMenu.style.left = '100%';\r\n        burgerMenu.classList.remove('open');\r\n        body.style.overflow = 'auto';\r\n    } else {\r\n        burgerMenu.style.left = '0';\r\n        burgerMenu.classList.add('open');\r\n        body.style.overflow = 'hidden';\r\n    }\r\n})\r\n\r\nlet menu = document.querySelector('.nav');\r\nconst headerNav = menu.querySelectorAll('[data-scroll]');\r\nheaderNav.forEach(link => {\r\n    link.addEventListener('click', e => {\r\n        e.preventDefault();\r\n        const target = document.getElementById(link.dataset.scroll);\r\n        if (target) {\r\n            target.scrollIntoView({ behavior: 'smooth' });\r\n        }\r\n    });\r\n});\r\n\r\nconst burgerNav = burgerMenu.querySelectorAll('[data-scroll]');\r\nburgerNav.forEach(link => {\r\n    link.addEventListener('click', e => {\r\n        e.preventDefault();\r\n        if (burgerMenu.classList.contains('open')) {\r\n            burgerMenu.style.left = '100%';\r\n            burgerMenu.classList.remove('open');\r\n            body.style.overflow = 'auto';\r\n        } else {\r\n            burgerMenu.style.left = '0';\r\n            burgerMenu.classList.add('open');\r\n            body.style.overflow = 'hidden';\r\n        }\r\n        const target = document.getElementById(link.dataset.scroll);\r\n        if (target) {\r\n            target.scrollIntoView({ behavior: 'smooth' });\r\n        }\r\n    });\r\n});\r\n\r\n// faq\r\nlet faq = document.querySelector('.faq');\r\nlet card = faq.querySelectorAll('.card');\r\n\r\ncard.forEach(item => {\r\n    item.addEventListener('click', () => {\r\n        cardOpen(item)\r\n    })\r\n})\r\n\r\nfunction cardOpen(card) {\r\n    let p = card.querySelector('p')\r\n    if (p.classList.contains('open')) {\r\n        openCloseCard(p)\r\n    } else {\r\n        closeAllCards(card);\r\n        openCloseCard(p)\r\n    }\r\n}\r\nfunction openCloseCard(p) {\r\n    p.classList.toggle('open')\r\n}\r\nfunction closeAllCards(card) {\r\n    let allParagraphs = card.parentElement.querySelectorAll('p')\r\n    allParagraphs.forEach(item => {\r\n        item.classList.remove('open')\r\n    })\r\n}\r\n\r\n// Swiper\r\n\r\nvar swiper = new Swiper('.swiper', {\r\n    slidesPerView: 1,\r\n    spaceBetween: 20,\r\n    navigation: {\r\n        nextEl: '.swiper-button-next',\r\n        prevEl: '.swiper-button-prev',\r\n    },\r\n    breakpoints: {\r\n        1140: {\r\n            slidesPerView: 3,\r\n            spaceBetween: 30,\r\n        },\r\n    }\r\n})\r\n\n\n//# sourceURL=webpack://mygulp/./src/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/main.js"]();
/******/ 	
/******/ })()
;
