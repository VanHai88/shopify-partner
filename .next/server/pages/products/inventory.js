module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/products/inventory.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/products/inventory.css":
/*!**************************************!*\
  !*** ./pages/products/inventory.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/products/inventory.js":
/*!*************************************!*\
  !*** ./pages/products/inventory.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _inventory_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inventory.css */ "./pages/products/inventory.css");
/* harmony import */ var _inventory_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_inventory_css__WEBPACK_IMPORTED_MODULE_3__);






function Inventory() {
  const {
    0: selected,
    1: setSelected
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: value,
    1: setValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: tab,
    1: setTab
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    0: checked,
    1: setChecked
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const handleChange = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(newValue => setValue(newValue), []);
  const handleSelectChange = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(value => setSelected(value), []);
  const handleTabChange = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(selectedTabIndex => setTab(selectedTabIndex), []);
  const handleCheckedAllChange = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(newChecked => setChecked(newChecked), []);
  const tabs = [{
    id: 'all-customers',
    content: 'All',
    accessibilityLabel: 'All customers',
    panelID: 'all-customers-content'
  }];
  const options = [{
    label: 'Product variant (A–Z)',
    value: 'full_title asc'
  }, {
    label: 'Product variant (Z–A)',
    value: 'full_title desc'
  }, {
    label: 'SKU (ascending)',
    value: 'sku asc'
  }, {
    label: 'SKU (descending)',
    value: 'sku desc'
  }, {
    label: 'Available (ascending)',
    value: 'inventory_levels_available asc'
  }, {
    label: 'Available (descending)',
    value: 'inventory_levels_available desc'
  }, {
    label: 'When sold out (A–Z)',
    value: 'inventory_policy asc'
  }, {
    label: 'inventory_policy desc',
    value: 'inventory_policy desc'
  }];
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    className: "inventory__card",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Card"], {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Tabs"], {
        tabs: tabs,
        selected: tab,
        onSelect: handleTabChange,
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Card"].Section, {
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
            className: "inventory__filer-group",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
              className: "inventory-filer__button",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Button"], {
                children: "Filter"
              })
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
              className: "inventory-filer__input",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
                inventory__: true,
                value: value,
                onChange: handleChange,
                placeholder: "Search inventory"
              })
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
              className: "inventory-filer__select",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Select"], {
                label: "Sort by",
                options: options,
                onChange: handleSelectChange,
                value: selected
              })
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
            className: "inventory__table-product",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
              className: "table-product",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                className: "table__checked",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Checkbox"], {
                  checked: checked,
                  onChange: handleCheckedAllChange
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("ul", {
                className: "table__list",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
                  className: "table__item"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
                  className: "table__item",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
                    className: "table__item-title",
                    children: "Product"
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
                  className: "table__item",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
                    className: "table__item-title",
                    children: "SKU"
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
                  className: "table__item",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
                    className: "table__item-title",
                    children: "When sold out"
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
                  className: "table__item",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
                    className: "table__item-title",
                    children: "Incoming"
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
                  className: "table__item",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
                    className: "table__item-title",
                    children: "Available"
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
                  className: "table__item",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
                    className: "table__item-title",
                    children: "Edit quantity available"
                  })
                })]
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
              className: "table-product table-body",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                className: "table__checked",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Checkbox"], {
                  checked: checked,
                  onChange: handleCheckedAllChange
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("ul", {
                className: "table__list",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
                  className: "table__item",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                    className: "table-body__item-img",
                    src: "https://cdn.shopify.com/s/files/1/0504/4823/6696/products/woman-in-the-city_925x_34c54a7d-e2a0-48fe-a169-fde33a735aef.jpg?v=1604138685",
                    alt: "prodcut"
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("li", {
                  className: "table__item table-body__item-product",
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                    children: "Striped Skirt and Top"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                    children: "small"
                  })]
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
                  className: "table__item",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
                    children: "No SKU"
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
                  className: "table__item",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
                    children: "Continue selling"
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
                  className: "table__item",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("button", {
                    children: "0"
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
                  className: "table__item",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
                    children: "0"
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
                  className: "table__item",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("form", {
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("button", {
                          children: "Add"
                        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("button", {
                          children: "Set"
                        })]
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", {
                          min: "1",
                          type: "number",
                          className: "table-body__item-quantity",
                          name: "quantity",
                          value: "1"
                        })
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Button"], {
                        children: "Save"
                      })]
                    })
                  })
                })]
              })]
            })]
          })]
        })
      })
    })
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Inventory);

/***/ }),

/***/ "@shopify/polaris":
/*!***********************************!*\
  !*** external "@shopify/polaris" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@shopify/polaris");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvcHJvZHVjdHMvaW52ZW50b3J5LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBzaG9waWZ5L3BvbGFyaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1ydW50aW1lXCIiXSwibmFtZXMiOlsiSW52ZW50b3J5Iiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsInVzZVN0YXRlIiwidmFsdWUiLCJzZXRWYWx1ZSIsInRhYiIsInNldFRhYiIsImNoZWNrZWQiLCJzZXRDaGVja2VkIiwiaGFuZGxlQ2hhbmdlIiwidXNlQ2FsbGJhY2siLCJuZXdWYWx1ZSIsImhhbmRsZVNlbGVjdENoYW5nZSIsImhhbmRsZVRhYkNoYW5nZSIsInNlbGVjdGVkVGFiSW5kZXgiLCJoYW5kbGVDaGVja2VkQWxsQ2hhbmdlIiwibmV3Q2hlY2tlZCIsInRhYnMiLCJpZCIsImNvbnRlbnQiLCJhY2Nlc3NpYmlsaXR5TGFiZWwiLCJwYW5lbElEIiwib3B0aW9ucyIsImxhYmVsIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMs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QixtQ0FBUyxFQUFDLDJCQUF2QztBQUFtRSw4QkFBSSxFQUFDLFVBQXhFO0FBQW1GLCtCQUFLLEVBQUM7QUFBekY7QUFERix3QkFMRixlQVFFLDhEQUFDLHVEQUFEO0FBQUE7QUFBQSx3QkFSRjtBQUFBO0FBREY7QUFERixrQkFwQkY7QUFBQSxnQkFQRjtBQUFBLGNBL0JGO0FBQUEsWUFqQkY7QUFBQTtBQURGO0FBREY7QUFERixJQURGO0FBcUdEOztBQUVjaEIsd0VBQWYsRTs7Ozs7Ozs7Ozs7QUN6SkEsNkM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoicGFnZXMvcHJvZHVjdHMvaW52ZW50b3J5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9wcm9kdWN0cy9pbnZlbnRvcnkuanNcIik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBUZXh0RmllbGQsXHJcbiAgU2VsZWN0LFxyXG4gIEJ1dHRvbixcclxuICBDYXJkLFxyXG4gIFRhYnMsXHJcbiAgQ2hlY2tib3hcclxufSBmcm9tICdAc2hvcGlmeS9wb2xhcmlzJztcclxuaW1wb3J0ICcuL2ludmVudG9yeS5jc3MnO1xyXG5cclxuZnVuY3Rpb24gSW52ZW50b3J5KCkge1xyXG4gIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFt0YWIsIHNldFRhYl0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbY2hlY2tlZCwgc2V0Q2hlY2tlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IHVzZUNhbGxiYWNrKChuZXdWYWx1ZSkgPT4gc2V0VmFsdWUobmV3VmFsdWUpLCBbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNlbGVjdENoYW5nZSA9IHVzZUNhbGxiYWNrKCh2YWx1ZSkgPT4gc2V0U2VsZWN0ZWQodmFsdWUpLCBbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVRhYkNoYW5nZSA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKHNlbGVjdGVkVGFiSW5kZXgpID0+IHNldFRhYihzZWxlY3RlZFRhYkluZGV4KSxcclxuICAgIFtdLFxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoZWNrZWRBbGxDaGFuZ2UgPSB1c2VDYWxsYmFjaygobmV3Q2hlY2tlZCkgPT4gc2V0Q2hlY2tlZChuZXdDaGVja2VkKSwgW10pO1xyXG5cclxuICBjb25zdCB0YWJzID0gW1xyXG4gICAge1xyXG4gICAgICBpZDogJ2FsbC1jdXN0b21lcnMnLFxyXG4gICAgICBjb250ZW50OiAnQWxsJyxcclxuICAgICAgYWNjZXNzaWJpbGl0eUxhYmVsOiAnQWxsIGN1c3RvbWVycycsXHJcbiAgICAgIHBhbmVsSUQ6ICdhbGwtY3VzdG9tZXJzLWNvbnRlbnQnLFxyXG4gICAgfSxcclxuICBdO1xyXG5cclxuXHJcbiAgY29uc3Qgb3B0aW9ucyA9IFtcclxuICAgIHtsYWJlbDogJ1Byb2R1Y3QgdmFyaWFudCAoQeKAk1opJywgdmFsdWU6ICdmdWxsX3RpdGxlIGFzYyd9LFxyXG4gICAge2xhYmVsOiAnUHJvZHVjdCB2YXJpYW50ICha4oCTQSknLCB2YWx1ZTogJ2Z1bGxfdGl0bGUgZGVzYyd9LFxyXG4gICAge2xhYmVsOiAnU0tVIChhc2NlbmRpbmcpJywgdmFsdWU6ICdza3UgYXNjJ30sXHJcbiAgICB7bGFiZWw6ICdTS1UgKGRlc2NlbmRpbmcpJywgdmFsdWU6ICdza3UgZGVzYyd9LFxyXG4gICAge2xhYmVsOiAnQXZhaWxhYmxlIChhc2NlbmRpbmcpJywgdmFsdWU6ICdpbnZlbnRvcnlfbGV2ZWxzX2F2YWlsYWJsZSBhc2MnfSxcclxuICAgIHtsYWJlbDogJ0F2YWlsYWJsZSAoZGVzY2VuZGluZyknLCB2YWx1ZTogJ2ludmVudG9yeV9sZXZlbHNfYXZhaWxhYmxlIGRlc2MnfSxcclxuICAgIHtsYWJlbDogJ1doZW4gc29sZCBvdXQgKEHigJNaKScsIHZhbHVlOiAnaW52ZW50b3J5X3BvbGljeSBhc2MnfSxcclxuICAgIHtsYWJlbDogJ2ludmVudG9yeV9wb2xpY3kgZGVzYycsIHZhbHVlOiAnaW52ZW50b3J5X3BvbGljeSBkZXNjJ30sXHJcbiAgXTtcclxuXHJcbiAgXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaW52ZW50b3J5X19jYXJkXCI+XHJcbiAgICAgIDxDYXJkPlxyXG4gICAgICAgIDxUYWJzIHRhYnM9e3RhYnN9IHNlbGVjdGVkPXt0YWJ9IG9uU2VsZWN0PXtoYW5kbGVUYWJDaGFuZ2V9PlxyXG4gICAgICAgICAgPENhcmQuU2VjdGlvbj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnZlbnRvcnlfX2ZpbGVyLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnZlbnRvcnktZmlsZXJfX2J1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiA+RmlsdGVyPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnZlbnRvcnktZmlsZXJfX2lucHV0XCI+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGludmVudG9yeV9fIHZhbHVlPXt2YWx1ZX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gcGxhY2Vob2xkZXI9XCJTZWFyY2ggaW52ZW50b3J5XCIvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW52ZW50b3J5LWZpbGVyX19zZWxlY3RcIj5cclxuICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTb3J0IGJ5XCJcclxuICAgICAgICAgICAgICAgICAgb3B0aW9ucz17b3B0aW9uc31cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNlbGVjdENoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW52ZW50b3J5X190YWJsZS1wcm9kdWN0XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZS1wcm9kdWN0XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlX19jaGVja2VkXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2NoZWNrZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoZWNrZWRBbGxDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ0YWJsZV9fbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidGFibGVfX2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRhYmxlX19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGFibGVfX2l0ZW0tdGl0bGVcIj5Qcm9kdWN0PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidGFibGVfX2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0YWJsZV9faXRlbS10aXRsZVwiPlNLVTwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRhYmxlX19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGFibGVfX2l0ZW0tdGl0bGVcIj5XaGVuIHNvbGQgb3V0PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidGFibGVfX2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0YWJsZV9faXRlbS10aXRsZVwiPkluY29taW5nPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidGFibGVfX2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0YWJsZV9faXRlbS10aXRsZVwiPkF2YWlsYWJsZTwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRhYmxlX19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGFibGVfX2l0ZW0tdGl0bGVcIj5FZGl0IHF1YW50aXR5IGF2YWlsYWJsZTwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZS1wcm9kdWN0IHRhYmxlLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGVfX2NoZWNrZWRcIj5cclxuICAgICAgICAgICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17Y2hlY2tlZH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hlY2tlZEFsbENoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInRhYmxlX19saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0YWJsZV9faXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidGFibGUtYm9keV9faXRlbS1pbWdcIiBzcmM9XCJodHRwczovL2Nkbi5zaG9waWZ5LmNvbS9zL2ZpbGVzLzEvMDUwNC80ODIzLzY2OTYvcHJvZHVjdHMvd29tYW4taW4tdGhlLWNpdHlfOTI1eF8zNGM1NGE3ZC1lMmEwLTQ4ZmUtYTE2OS1mZGUzM2E3MzVhZWYuanBnP3Y9MTYwNDEzODY4NVwiIGFsdD1cInByb2RjdXRcIj48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRhYmxlX19pdGVtIHRhYmxlLWJvZHlfX2l0ZW0tcHJvZHVjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGE+U3RyaXBlZCBTa2lydCBhbmQgVG9wPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGE+c21hbGw8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0YWJsZV9faXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPk5vIFNLVTwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRhYmxlX19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+Q29udGludWUgc2VsbGluZzwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRhYmxlX19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj4wPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0YWJsZV9faXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPjA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0YWJsZV9faXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uPkFkZDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24+U2V0PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBtaW49XCIxXCIgdHlwZT1cIm51bWJlclwiIGNsYXNzTmFtZT1cInRhYmxlLWJvZHlfX2l0ZW0tcXVhbnRpdHlcIiBuYW1lPVwicXVhbnRpdHlcIiB2YWx1ZT1cIjFcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbj5TYXZlPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvQ2FyZC5TZWN0aW9uPlxyXG4gICAgICAgIDwvVGFicz5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW52ZW50b3J5OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzaG9waWZ5L3BvbGFyaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==