/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/index.js":
/*!********************************!*\
  !*** ./src/assets/js/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _stylesheets_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../stylesheets/main.scss */ \"./stylesheets/main.scss\");\n// src/index.js\n\n\n\n/* Home iframe video */\n// function adjustVideoSize() {\n//   const container = document.querySelector('.video-container');\n//   if (!container) return; // Exit the function if container doesn't exist\n\n//   const iframe = container.querySelector('iframe');\n//   if (!iframe) return; // Exit the function if iframe doesn't exist\n\n//   const aspectRatio = 16 / 9; // Standard YouTube aspect ratio\n//   const containerWidth = container.offsetWidth;\n//   const containerHeight = container.offsetHeight;\n\n//   if (containerWidth / containerHeight > aspectRatio) {\n//     // Wider than aspect ratio, adjust height\n//     iframe.style.width = `${containerWidth}px`;\n//     iframe.style.height = `${containerWidth / aspectRatio}px`;\n//     iframe.style.top = `${(containerHeight - (containerWidth / aspectRatio)) / 2}px`;\n//     iframe.style.left = '0';\n//     iframe.style.transform = 'none';\n//   } else {\n//     // Taller than aspect ratio, adjust width\n//     iframe.style.width = `${containerHeight * aspectRatio}px`;\n//     iframe.style.height = `${containerHeight}px`;\n//     iframe.style.left = `${(containerWidth - (containerHeight * aspectRatio)) / 2}px`;\n//     iframe.style.top = '0';\n//     iframe.style.transform = 'none';\n//   }\n// }\n\n// function initVideoAdjustment() {\n//   if (document.querySelector('.video-container')) {\n//     adjustVideoSize();\n//     window.addEventListener('resize', adjustVideoSize);\n//   }\n// }\n\n// window.addEventListener('load', initVideoAdjustment);\n\n\n/* Offcanvas Menu */\nconsole.log(\"Script loaded.\");\n\n(function () {\n  // Global flag to ensure the script runs only once\n  if (window.__SCRIPT_INITIALIZED__) {\n    console.log(\"Script already initialized. Skipping...\");\n    return;\n  }\n  window.__SCRIPT_INITIALIZED__ = true;\n\n  console.log(\"Initializing script...\");\n\n  // Select elements\n  const toggleButton = document.getElementById('toggle');\n  const offCanvas = document.getElementById('offCanvas');\n  const overlay = document.getElementById('overlay');\n  const body = document.querySelector('body'); // Select the body element\n\n  // Ensure elements exist\n  if (!toggleButton || !offCanvas || !overlay || !body) {\n    console.error(\"One or more required elements are missing.\");\n    return;\n  }\n\n  // Function to toggle the off-canvas menu\n  function toggleMenu(event) {\n    event.preventDefault();\n    offCanvas.classList.toggle('active');\n    overlay.classList.toggle('active');\n\n    // Prevent background scrolling\n    if (offCanvas.classList.contains('active')) {\n      body.classList.add('no-scroll'); // Add class to prevent scrolling\n    } else {\n      body.classList.remove('no-scroll'); // Remove class to allow scrolling\n    }\n\n    console.log(offCanvas.classList.contains('active') ? \"Menu opened.\" : \"Menu closed.\");\n  }\n\n  // Function to close the menu when clicking on the overlay\n  function closeMenu() {\n    offCanvas.classList.remove('active');\n    overlay.classList.remove('active');\n    body.classList.remove('no-scroll'); // Allow scrolling when the menu is closed\n    console.log(\"Overlay clicked! Menu closed.\");\n  }\n\n  // Automatic closing on larger screens\n  const mediumBreakpoint = 768; // Define medium breakpoint (in pixels)\n\n  function closeMenuOnResize() {\n    if (window.innerWidth > mediumBreakpoint && offCanvas.classList.contains('active')) {\n      offCanvas.classList.remove('active');\n      overlay.classList.remove('active');\n      body.classList.remove('no-scroll'); // Allow scrolling\n      console.log(\"Menu closed due to screen size exceeding breakpoint.\");\n    }\n  }\n\n  // Add event listeners\n  toggleButton.addEventListener('click', toggleMenu);\n  overlay.addEventListener('click', closeMenu);\n  window.addEventListener('resize', closeMenuOnResize); // Keep this line\n\n  // Call it initially in case the screen already exceeds the breakpoint\n  closeMenuOnResize();\n})();\n\n\n/* Sticky bar */\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const stickyBar = document.getElementById(\"sticky-bar\");\n  const hero = document.getElementById(\"hero\");\n  const footer = document.getElementById(\"footer\");\n  const tabs = document.querySelectorAll('.tabs-title a');\n  const tabPanels = document.querySelectorAll('.tabs-panel');\n\n  // Function to show only the active tab's content\n  const showActiveTabContent = () => {\n    tabs.forEach(tab => {\n      const panelId = tab.getAttribute('href');\n      const panel = document.querySelector(panelId);\n      if (tab.parentElement.classList.contains('is-active')) {\n        panel.style.display = 'block';\n      } else {\n        panel.style.display = 'none';\n      }\n    });\n  };\n\n  // Sticky behavior\n  const handleScroll = () => {\n    if (!hero || !footer || !stickyBar) return;\n\n    const heroBottom = hero.getBoundingClientRect().bottom;\n    const footerTop = footer.getBoundingClientRect().top;\n    const stickyBarHeight = stickyBar.offsetHeight;\n\n    if (heroBottom <= 0 && footerTop > stickyBarHeight) {\n      stickyBar.classList.add(\"sticky\");\n    } else {\n      stickyBar.classList.remove(\"sticky\");\n    }\n  };\n\n  // Tab switching\n  tabs.forEach(tab => {\n    tab.addEventListener('click', (e) => {\n      e.preventDefault();\n      tabs.forEach(t => {\n        t.setAttribute('aria-selected', 'false');\n        t.parentElement.classList.remove('is-active');\n      });\n      tab.setAttribute('aria-selected', 'true');\n      tab.parentElement.classList.add('is-active');\n\n      // Show corresponding panel\n      showActiveTabContent();\n\n      // Prevent scrolling when switching tabs\n      setTimeout(() => {\n        window.scrollTo(window.scrollX, window.scrollY);\n      }, 1);\n    });\n  });\n\n  // Initial setup: Show only active tab's content on page load\n  showActiveTabContent();\n\n  if (hero && footer && stickyBar) {\n    window.addEventListener(\"scroll\", handleScroll);\n  }\n});\n\n\n/* Carousel */\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const carousel = document.querySelector(\".carousel\");\n  if (!carousel) return;\n\n  const imagesContainer = carousel.querySelector(\".carousel-images\");\n  const images = imagesContainer.querySelectorAll(\"img\");\n  const bulletsContainer = carousel.querySelector(\".carousel-bullets\");\n  const totalImages = images.length;\n\n  let currentIndex = 0;\n  const rotateInterval = 5000; // 5 seconds between rotations\n\n  // Create bullets and arrows\n  for (let i = 0; i < totalImages; i++) {\n    const bullet = document.createElement(\"span\");\n    bullet.addEventListener(\"click\", () => goToSlide(i));\n    bulletsContainer.appendChild(bullet);\n  }\n\n  const leftArrow = document.createElement(\"div\");\n  leftArrow.className = \"carousel-arrow left-arrow\";\n  leftArrow.innerHTML = \"&#10094;\";\n  leftArrow.addEventListener(\"click\", () => goToSlide(currentIndex - 1));\n\n  const rightArrow = document.createElement(\"div\");\n  rightArrow.className = \"carousel-arrow right-arrow\";\n  rightArrow.innerHTML = \"&#10095;\";\n  rightArrow.addEventListener(\"click\", () => goToSlide(currentIndex + 1));\n\n  carousel.appendChild(leftArrow);\n  carousel.appendChild(rightArrow);\n\n  const bullets = bulletsContainer.querySelectorAll(\"span\");\n\n  function updateCarousel() {\n    imagesContainer.style.transition = \"transform 0.5s ease-in-out\";\n    imagesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;\n\n    bullets.forEach((bullet, index) => {\n      bullet.classList.toggle(\"active\", index === currentIndex);\n    });\n  }\n\n  function goToSlide(index) {\n    currentIndex = (index + totalImages) % totalImages;\n    updateCarousel();\n    resetAutoRotate();\n  }\n\n  let autoRotateTimer;\n\n  function startAutoRotate() {\n    autoRotateTimer = setInterval(() => goToSlide(currentIndex + 1), rotateInterval);\n  }\n\n  function resetAutoRotate() {\n    clearInterval(autoRotateTimer);\n    startAutoRotate();\n  }\n\n  updateCarousel();\n  startAutoRotate();\n\n  window.addEventListener(\"resize\", updateCarousel);\n});\n\n\n//# sourceURL=webpack://sass-boilerplate/./src/assets/js/index.js?");

/***/ }),

/***/ "./stylesheets/main.scss":
/*!*******************************!*\
  !*** ./stylesheets/main.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://sass-boilerplate/./stylesheets/main.scss?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/assets/js/index.js");
/******/ 	
/******/ })()
;