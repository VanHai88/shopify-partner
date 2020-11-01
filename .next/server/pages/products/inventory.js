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
/* harmony import */ var _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shopify/polaris-icons */ "@shopify/polaris-icons");
/* harmony import */ var _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _inventory_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inventory.css */ "./pages/products/inventory.css");
/* harmony import */ var _inventory_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_inventory_css__WEBPACK_IMPORTED_MODULE_4__);







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
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("section", {
    className: "section__inventory",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      className: "section__inventory-head",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h2", {
        className: "inventory-head__title",
        children: "Inventory"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
        className: "inventory-head__btn-group",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("button", {
          className: "btn btn--export",
          children: "Export"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("button", {
          className: "btn btn--import",
          children: "Import"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("button", {
          className: "btn btn--view",
          children: "View products"
        })]
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Card"], {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Tabs"], {
        tabs: tabs,
        selected: tab,
        onSelect: handleTabChange,
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Card"].Section, {
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
            className: "inventory__filer-group",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
              className: "inventory-filer__button",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Button"], {
                children: ["Filter ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
                  source: _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_3__["CaretDownMinor"]
                })]
              })
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
              className: "inventory-filer__input",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
                source: _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_3__["SearchMinor"]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
                inventory__: true,
                value: value,
                onChange: handleChange,
                placeholder: "Search inventory"
              })]
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
              className: "table-product table-head",
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
              className: "table-product table-body table-product-infor__list",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                className: "table-product-infor__item",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                  className: "table__checked",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Checkbox"], {
                    checked: checked,
                    onChange: handleCheckedAllChange
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("ul", {
                  className: "table__list table-body__list",
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
                    className: "table__item table-body__item",
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                      className: "table-body__item-img",
                      src: "https://cdn.shopify.com/s/files/1/0504/4823/6696/products/woman-in-the-city_925x_34c54a7d-e2a0-48fe-a169-fde33a735aef.jpg?v=1604138685",
                      alt: "prodcut"
                    })
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("li", {
                    className: "table__item table-body__item-product",
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                      className: "item-product__name",
                      children: "Striped Skirt and Top"
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                      className: "item-product__size",
                      children: "small"
                    })]
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
                    className: "table__item table-body__item",
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
                      className: "table-body__sku",
                      children: "No SKU"
                    })
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
                    className: "table__item table-body__item",
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
                      children: "Continue selling"
                    })
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
                    className: "table__item table-body__item",
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("button", {
                      className: "table-body__item-incoming",
                      children: "0"
                    })
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
                    className: "table__item table-body__item",
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
                      className: "table-body__item-available",
                      children: "0"
                    })
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
                    className: "table__item table-body__item",
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("form", {
                      className: "table-body__item-form",
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                        className: "item-form__btn-group",
                        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("button", {
                          className: "btn btn--add btn--active",
                          children: "Add"
                        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("button", {
                          className: "btn btn--set",
                          children: "Set"
                        })]
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", {
                        min: "1",
                        type: "number",
                        className: "table-body__item-quantity",
                        name: "quantity",
                        value: "0"
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Button"], {
                        disabled: true,
                        children: "Save"
                      })]
                    })
                  })]
                })]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                className: "table-product-infor__item",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                  className: "table__checked",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Checkbox"], {
                    checked: checked,
                    onChange: handleCheckedAllChange
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("ul", {
                  className: "table__list table-body__list",
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
                    className: "table__item table-body__item",
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                      className: "table-body__item-img",
                      src: "https://cdn.shopify.com/s/files/1/0504/4823/6696/products/woman-in-the-city_925x_34c54a7d-e2a0-48fe-a169-fde33a735aef.jpg?v=1604138685",
                      alt: "prodcut"
                    })
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("li", {
                    className: "table__item table-body__item-product",
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                      className: "item-product__name",
                      children: "Striped Skirt and Top"
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                      className: "item-product__size",
                      children: "small"
                    })]
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
                    className: "table__item table-body__item",
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
                      className: "table-body__sku",
                      children: "No SKU"
                    })
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
                    className: "table__item table-body__item",
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
                      children: "Continue selling"
                    })
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
                    className: "table__item table-body__item",
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("button", {
                      className: "table-body__item-incoming",
                      children: "0"
                    })
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
                    className: "table__item table-body__item",
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
                      className: "table-body__item-available",
                      children: "0"
                    })
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
                    className: "table__item table-body__item",
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("form", {
                      className: "table-body__item-form",
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                        className: "item-form__btn-group",
                        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("button", {
                          className: "btn btn--add btn--active",
                          children: "Add"
                        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("button", {
                          className: "btn btn--set",
                          children: "Set"
                        })]
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", {
                        min: "1",
                        type: "number",
                        className: "table-body__item-quantity",
                        name: "quantity",
                        value: "0"
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Button"], {
                        disabled: true,
                        children: "Save"
                      })]
                    })
                  })]
                })]
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
              className: "table-bottom",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Button"], {
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
                  source: _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_3__["ChevronLeftMinor"]
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Button"], {
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
                  source: _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_3__["ChevronRightMinor"]
                })
              })]
            })]
          })]
        })
      })
    })]
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

/***/ "@shopify/polaris-icons":
/*!*****************************************!*\
  !*** external "@shopify/polaris-icons" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@shopify/polaris-icons");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvcHJvZHVjdHMvaW52ZW50b3J5LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBzaG9waWZ5L3BvbGFyaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2hvcGlmeS9wb2xhcmlzLWljb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtcnVudGltZVwiIl0sIm5hbWVzIjpbIkludmVudG9yeSIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJ1c2VTdGF0ZSIsInZhbHVlIiwic2V0VmFsdWUiLCJ0YWIiLCJzZXRUYWIiLCJjaGVja2VkIiwic2V0Q2hlY2tlZCIsImhhbmRsZUNoYW5nZSIsInVzZUNhbGxiYWNrIiwibmV3VmFsdWUiLCJoYW5kbGVTZWxlY3RDaGFuZ2UiLCJoYW5kbGVUYWJDaGFuZ2UiLCJzZWxlY3RlZFRhYkluZGV4IiwiaGFuZGxlQ2hlY2tlZEFsbENoYW5nZSIsIm5ld0NoZWNrZWQiLCJ0YWJzIiwiaWQiLCJjb250ZW50IiwiYWNjZXNzaWJpbGl0eUxhYmVsIiwicGFuZWxJRCIsIm9wdGlvbnMiLCJsYWJlbCIsIkNhcmV0RG93bk1pbm9yIiwiU2VhcmNoTWlub3IiLCJDaGV2cm9uTGVmdE1pbm9yIiwiQ2hldnJvblJpZ2h0TWlub3IiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FB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REYsZUFLRTtBQUFPLDJCQUFHLEVBQUMsR0FBWDtBQUFlLDRCQUFJLEVBQUMsUUFBcEI7QUFBNkIsaUNBQVMsRUFBQywyQkFBdkM7QUFBbUUsNEJBQUksRUFBQyxVQUF4RTtBQUFtRiw2QkFBSyxFQUFDO0FBQXpGLHdCQUxGLGVBTUUsOERBQUMsdURBQUQ7QUFBUSxnQ0FBUSxNQUFoQjtBQUFBO0FBQUEsd0JBTkY7QUFBQTtBQURGLG9CQXBCRjtBQUFBLGtCQVBGO0FBQUEsZ0JBeENGO0FBQUEsY0EvQkYsZUErR0U7QUFBSyx1QkFBUyxFQUFDLGNBQWY7QUFBQSxzQ0FDRSw4REFBQyx1REFBRDtBQUFBLHVDQUFRLDhEQUFDLHFEQUFEO0FBQU0sd0JBQU0sRUFBRVcsdUVBQWdCQTtBQUE5QjtBQUFSLGdCQURGLGVBRUUsOERBQUMsdURBQUQ7QUFBQSx1Q0FBUSw4REFBQyxxREFBRDtBQUFNLHdCQUFNLEVBQUVDLHdFQUFpQkE7QUFBL0I7QUFBUixnQkFGRjtBQUFBLGNBL0dGO0FBQUEsWUFuQkY7QUFBQTtBQURGO0FBREYsTUFURjtBQUFBLElBREY7QUF3SkQ7O0FBRWM1Qix3RUFBZixFOzs7Ozs7Ozs7OztBQ25OQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJwYWdlcy9wcm9kdWN0cy9pbnZlbnRvcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL3Byb2R1Y3RzL2ludmVudG9yeS5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIFRleHRGaWVsZCxcclxuICBTZWxlY3QsXHJcbiAgQnV0dG9uLFxyXG4gIENhcmQsXHJcbiAgVGFicyxcclxuICBDaGVja2JveCxcclxuICBJY29uXHJcbn0gZnJvbSAnQHNob3BpZnkvcG9sYXJpcyc7XHJcbmltcG9ydCB7XHJcbiAgQ2hldnJvbkxlZnRNaW5vcixcclxuICBDaGV2cm9uUmlnaHRNaW5vcixcclxuICBDYXJldERvd25NaW5vcixcclxuICBTZWFyY2hNaW5vclxyXG59IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMtaWNvbnMnO1xyXG5pbXBvcnQgJy4vaW52ZW50b3J5LmNzcyc7XHJcblxyXG5mdW5jdGlvbiBJbnZlbnRvcnkoKSB7XHJcbiAgY29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3RhYiwgc2V0VGFiXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtjaGVja2VkLCBzZXRDaGVja2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gdXNlQ2FsbGJhY2soKG5ld1ZhbHVlKSA9PiBzZXRWYWx1ZShuZXdWYWx1ZSksIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2VsZWN0Q2hhbmdlID0gdXNlQ2FsbGJhY2soKHZhbHVlKSA9PiBzZXRTZWxlY3RlZCh2YWx1ZSksIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlVGFiQ2hhbmdlID0gdXNlQ2FsbGJhY2soXHJcbiAgICAoc2VsZWN0ZWRUYWJJbmRleCkgPT4gc2V0VGFiKHNlbGVjdGVkVGFiSW5kZXgpLFxyXG4gICAgW10sXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hlY2tlZEFsbENoYW5nZSA9IHVzZUNhbGxiYWNrKChuZXdDaGVja2VkKSA9PiBzZXRDaGVja2VkKG5ld0NoZWNrZWQpLCBbXSk7XHJcblxyXG4gIGNvbnN0IHRhYnMgPSBbXHJcbiAgICB7XHJcbiAgICAgIGlkOiAnYWxsLWN1c3RvbWVycycsXHJcbiAgICAgIGNvbnRlbnQ6ICdBbGwnLFxyXG4gICAgICBhY2Nlc3NpYmlsaXR5TGFiZWw6ICdBbGwgY3VzdG9tZXJzJyxcclxuICAgICAgcGFuZWxJRDogJ2FsbC1jdXN0b21lcnMtY29udGVudCcsXHJcbiAgICB9LFxyXG4gIF07XHJcblxyXG5cclxuICBjb25zdCBvcHRpb25zID0gW1xyXG4gICAge2xhYmVsOiAnUHJvZHVjdCB2YXJpYW50IChB4oCTWiknLCB2YWx1ZTogJ2Z1bGxfdGl0bGUgYXNjJ30sXHJcbiAgICB7bGFiZWw6ICdQcm9kdWN0IHZhcmlhbnQgKFrigJNBKScsIHZhbHVlOiAnZnVsbF90aXRsZSBkZXNjJ30sXHJcbiAgICB7bGFiZWw6ICdTS1UgKGFzY2VuZGluZyknLCB2YWx1ZTogJ3NrdSBhc2MnfSxcclxuICAgIHtsYWJlbDogJ1NLVSAoZGVzY2VuZGluZyknLCB2YWx1ZTogJ3NrdSBkZXNjJ30sXHJcbiAgICB7bGFiZWw6ICdBdmFpbGFibGUgKGFzY2VuZGluZyknLCB2YWx1ZTogJ2ludmVudG9yeV9sZXZlbHNfYXZhaWxhYmxlIGFzYyd9LFxyXG4gICAge2xhYmVsOiAnQXZhaWxhYmxlIChkZXNjZW5kaW5nKScsIHZhbHVlOiAnaW52ZW50b3J5X2xldmVsc19hdmFpbGFibGUgZGVzYyd9LFxyXG4gICAge2xhYmVsOiAnV2hlbiBzb2xkIG91dCAoQeKAk1opJywgdmFsdWU6ICdpbnZlbnRvcnlfcG9saWN5IGFzYyd9LFxyXG4gICAge2xhYmVsOiAnaW52ZW50b3J5X3BvbGljeSBkZXNjJywgdmFsdWU6ICdpbnZlbnRvcnlfcG9saWN5IGRlc2MnfSxcclxuICBdO1xyXG5cclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2VjdGlvbl9faW52ZW50b3J5XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbl9faW52ZW50b3J5LWhlYWRcIj5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwiaW52ZW50b3J5LWhlYWRfX3RpdGxlXCI+SW52ZW50b3J5PC9oMj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImludmVudG9yeS1oZWFkX19idG4tZ3JvdXBcIj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi0tZXhwb3J0XCI+RXhwb3J0PC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tLWltcG9ydFwiPkltcG9ydDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLS12aWV3XCI+VmlldyBwcm9kdWN0czwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPENhcmQ+XHJcbiAgICAgICAgPFRhYnMgdGFicz17dGFic30gc2VsZWN0ZWQ9e3RhYn0gb25TZWxlY3Q9e2hhbmRsZVRhYkNoYW5nZX0+XHJcbiAgICAgICAgICA8Q2FyZC5TZWN0aW9uPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImludmVudG9yeV9fZmlsZXItZ3JvdXBcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImludmVudG9yeS1maWxlcl9fYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uID5GaWx0ZXIgPEljb24gc291cmNlPXtDYXJldERvd25NaW5vcn0gLz48L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW52ZW50b3J5LWZpbGVyX19pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgPEljb24gc291cmNlPXtTZWFyY2hNaW5vcn0gLz5cclxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgaW52ZW50b3J5X18gdmFsdWU9e3ZhbHVlfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSBwbGFjZWhvbGRlcj1cIlNlYXJjaCBpbnZlbnRvcnlcIi8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnZlbnRvcnktZmlsZXJfX3NlbGVjdFwiPlxyXG4gICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIlNvcnQgYnlcIlxyXG4gICAgICAgICAgICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2VsZWN0Q2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWR9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnZlbnRvcnlfX3RhYmxlLXByb2R1Y3RcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlLXByb2R1Y3QgdGFibGUtaGVhZFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZV9fY2hlY2tlZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtjaGVja2VkfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGVja2VkQWxsQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwidGFibGVfX2xpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRhYmxlX19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0YWJsZV9faXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRhYmxlX19pdGVtLXRpdGxlXCI+UHJvZHVjdDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRhYmxlX19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGFibGVfX2l0ZW0tdGl0bGVcIj5TS1U8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0YWJsZV9faXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRhYmxlX19pdGVtLXRpdGxlXCI+V2hlbiBzb2xkIG91dDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRhYmxlX19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGFibGVfX2l0ZW0tdGl0bGVcIj5JbmNvbWluZzwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRhYmxlX19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGFibGVfX2l0ZW0tdGl0bGVcIj5BdmFpbGFibGU8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0YWJsZV9faXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRhYmxlX19pdGVtLXRpdGxlXCI+RWRpdCBxdWFudGl0eSBhdmFpbGFibGU8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGUtcHJvZHVjdCB0YWJsZS1ib2R5IHRhYmxlLXByb2R1Y3QtaW5mb3JfX2xpc3RcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGUtcHJvZHVjdC1pbmZvcl9faXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlX19jaGVja2VkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtjaGVja2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoZWNrZWRBbGxDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ0YWJsZV9fbGlzdCB0YWJsZS1ib2R5X19saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRhYmxlX19pdGVtIHRhYmxlLWJvZHlfX2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidGFibGUtYm9keV9faXRlbS1pbWdcIiBzcmM9XCJodHRwczovL2Nkbi5zaG9waWZ5LmNvbS9zL2ZpbGVzLzEvMDUwNC80ODIzLzY2OTYvcHJvZHVjdHMvd29tYW4taW4tdGhlLWNpdHlfOTI1eF8zNGM1NGE3ZC1lMmEwLTQ4ZmUtYTE2OS1mZGUzM2E3MzVhZWYuanBnP3Y9MTYwNDEzODY4NVwiIGFsdD1cInByb2RjdXRcIj48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0YWJsZV9faXRlbSB0YWJsZS1ib2R5X19pdGVtLXByb2R1Y3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaXRlbS1wcm9kdWN0X19uYW1lXCI+U3RyaXBlZCBTa2lydCBhbmQgVG9wPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJpdGVtLXByb2R1Y3RfX3NpemVcIj5zbWFsbDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0YWJsZV9faXRlbSB0YWJsZS1ib2R5X19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0YWJsZS1ib2R5X19za3VcIj5ObyBTS1U8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidGFibGVfX2l0ZW0gdGFibGUtYm9keV9faXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHA+Q29udGludWUgc2VsbGluZzwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0YWJsZV9faXRlbSB0YWJsZS1ib2R5X19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRhYmxlLWJvZHlfX2l0ZW0taW5jb21pbmdcIj4wPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidGFibGVfX2l0ZW0gdGFibGUtYm9keV9faXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGFibGUtYm9keV9faXRlbS1hdmFpbGFibGVcIj4wPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRhYmxlX19pdGVtIHRhYmxlLWJvZHlfX2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInRhYmxlLWJvZHlfX2l0ZW0tZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tZm9ybV9fYnRuLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLS1hZGQgYnRuLS1hY3RpdmVcIj5BZGQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tLXNldFwiPlNldDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IG1pbj1cIjFcIiB0eXBlPVwibnVtYmVyXCIgY2xhc3NOYW1lPVwidGFibGUtYm9keV9faXRlbS1xdWFudGl0eVwiIG5hbWU9XCJxdWFudGl0eVwiIHZhbHVlPVwiMFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gZGlzYWJsZWQ+U2F2ZTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGUtcHJvZHVjdC1pbmZvcl9faXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlX19jaGVja2VkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtjaGVja2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoZWNrZWRBbGxDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ0YWJsZV9fbGlzdCB0YWJsZS1ib2R5X19saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRhYmxlX19pdGVtIHRhYmxlLWJvZHlfX2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidGFibGUtYm9keV9faXRlbS1pbWdcIiBzcmM9XCJodHRwczovL2Nkbi5zaG9waWZ5LmNvbS9zL2ZpbGVzLzEvMDUwNC80ODIzLzY2OTYvcHJvZHVjdHMvd29tYW4taW4tdGhlLWNpdHlfOTI1eF8zNGM1NGE3ZC1lMmEwLTQ4ZmUtYTE2OS1mZGUzM2E3MzVhZWYuanBnP3Y9MTYwNDEzODY4NVwiIGFsdD1cInByb2RjdXRcIj48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0YWJsZV9faXRlbSB0YWJsZS1ib2R5X19pdGVtLXByb2R1Y3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaXRlbS1wcm9kdWN0X19uYW1lXCI+U3RyaXBlZCBTa2lydCBhbmQgVG9wPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJpdGVtLXByb2R1Y3RfX3NpemVcIj5zbWFsbDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0YWJsZV9faXRlbSB0YWJsZS1ib2R5X19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0YWJsZS1ib2R5X19za3VcIj5ObyBTS1U8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidGFibGVfX2l0ZW0gdGFibGUtYm9keV9faXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHA+Q29udGludWUgc2VsbGluZzwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0YWJsZV9faXRlbSB0YWJsZS1ib2R5X19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRhYmxlLWJvZHlfX2l0ZW0taW5jb21pbmdcIj4wPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidGFibGVfX2l0ZW0gdGFibGUtYm9keV9faXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGFibGUtYm9keV9faXRlbS1hdmFpbGFibGVcIj4wPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRhYmxlX19pdGVtIHRhYmxlLWJvZHlfX2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInRhYmxlLWJvZHlfX2l0ZW0tZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tZm9ybV9fYnRuLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLS1hZGQgYnRuLS1hY3RpdmVcIj5BZGQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tLXNldFwiPlNldDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IG1pbj1cIjFcIiB0eXBlPVwibnVtYmVyXCIgY2xhc3NOYW1lPVwidGFibGUtYm9keV9faXRlbS1xdWFudGl0eVwiIG5hbWU9XCJxdWFudGl0eVwiIHZhbHVlPVwiMFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gZGlzYWJsZWQ+U2F2ZTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlLWJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbj48SWNvbiBzb3VyY2U9e0NoZXZyb25MZWZ0TWlub3J9IC8+PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uPjxJY29uIHNvdXJjZT17Q2hldnJvblJpZ2h0TWlub3J9IC8+PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9DYXJkLlNlY3Rpb24+XHJcbiAgICAgICAgPC9UYWJzPlxyXG4gICAgICA8L0NhcmQ+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW52ZW50b3J5OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzaG9waWZ5L3BvbGFyaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNob3BpZnkvcG9sYXJpcy1pY29uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9