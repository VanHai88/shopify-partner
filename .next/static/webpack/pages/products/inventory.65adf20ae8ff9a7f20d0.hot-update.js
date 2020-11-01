webpackHotUpdate_N_E("pages/products/inventory",{

/***/ "./pages/products/inventory.js":
/*!*************************************!*\
  !*** ./pages/products/inventory.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/polaris */ "./node_modules/@shopify/polaris/dist/esm/index.js");
/* harmony import */ var _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shopify/polaris-icons */ "./node_modules/@shopify/polaris-icons/dist/index.mjs");
/* harmony import */ var _inventory_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inventory.css */ "./pages/products/inventory.css");
/* harmony import */ var _inventory_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_inventory_css__WEBPACK_IMPORTED_MODULE_4__);



var _s = $RefreshSig$();






function Inventory() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      selected = _useState[0],
      setSelected = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      value = _useState2[0],
      setValue = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      tab = _useState3[0],
      setTab = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      checked = _useState4[0],
      setChecked = _useState4[1];

  var handleChange = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (newValue) {
    return setValue(newValue);
  }, []);
  var handleSelectChange = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (value) {
    return setSelected(value);
  }, []);
  var handleTabChange = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (selectedTabIndex) {
    return setTab(selectedTabIndex);
  }, []);
  var handleCheckedAllChange = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (newChecked) {
    return setChecked(newChecked);
  }, []);
  var tabs = [{
    id: 'all-customers',
    content: 'All',
    accessibilityLabel: 'All customers',
    panelID: 'all-customers-content'
  }];
  var options = [{
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
              className: "table-product table-body",
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
    })
  });
}

_s(Inventory, "sfV5zAz6x+PqLwn3qBoERfRmwWc=");

_c = Inventory;
/* harmony default export */ __webpack_exports__["default"] = (Inventory);

var _c;

$RefreshReg$(_c, "Inventory");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdHMvaW52ZW50b3J5LmpzIl0sIm5hbWVzIjpbIkludmVudG9yeSIsInVzZVN0YXRlIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsInZhbHVlIiwic2V0VmFsdWUiLCJ0YWIiLCJzZXRUYWIiLCJjaGVja2VkIiwic2V0Q2hlY2tlZCIsImhhbmRsZUNoYW5nZSIsInVzZUNhbGxiYWNrIiwibmV3VmFsdWUiLCJoYW5kbGVTZWxlY3RDaGFuZ2UiLCJoYW5kbGVUYWJDaGFuZ2UiLCJzZWxlY3RlZFRhYkluZGV4IiwiaGFuZGxlQ2hlY2tlZEFsbENoYW5nZSIsIm5ld0NoZWNrZWQiLCJ0YWJzIiwiaWQiLCJjb250ZW50IiwiYWNjZXNzaWJpbGl0eUxhYmVsIiwicGFuZWxJRCIsIm9wdGlvbnMiLCJsYWJlbCIsIkNhcmV0RG93bk1pbm9yIiwiU2VhcmNoTWlub3IiLCJDaGV2cm9uTGVmdE1pbm9yIiwiQ2hldnJvblJpZ2h0TWlub3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFTQTtBQU1BOztBQUVBLFNBQVNBLFNBQVQsR0FBcUI7QUFBQTs7QUFBQSxrQkFDYUMsc0RBQVEsQ0FBQyxFQUFELENBRHJCO0FBQUEsTUFDWkMsUUFEWTtBQUFBLE1BQ0ZDLFdBREU7O0FBQUEsbUJBRU9GLHNEQUFRLENBQUMsRUFBRCxDQUZmO0FBQUEsTUFFWkcsS0FGWTtBQUFBLE1BRUxDLFFBRks7O0FBQUEsbUJBR0dKLHNEQUFRLENBQUMsQ0FBRCxDQUhYO0FBQUEsTUFHWkssR0FIWTtBQUFBLE1BR1BDLE1BSE87O0FBQUEsbUJBSVdOLHNEQUFRLENBQUMsS0FBRCxDQUpuQjtBQUFBLE1BSVpPLE9BSlk7QUFBQSxNQUlIQyxVQUpHOztBQU1uQixNQUFNQyxZQUFZLEdBQUdDLHlEQUFXLENBQUMsVUFBQ0MsUUFBRDtBQUFBLFdBQWNQLFFBQVEsQ0FBQ08sUUFBRCxDQUF0QjtBQUFBLEdB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REFBQyxxREFBRDtBQUFNLHdCQUFNLEVBQUVXLHVFQUFnQkE7QUFBOUI7QUFBUixnQkFERixlQUVFLDhEQUFDLHVEQUFEO0FBQUEsdUNBQVEsOERBQUMscURBQUQ7QUFBTSx3QkFBTSxFQUFFQyx3RUFBaUJBO0FBQS9CO0FBQVIsZ0JBRkY7QUFBQSxjQXRFRjtBQUFBLFlBbkJGO0FBQUE7QUFERjtBQURGO0FBREYsSUFERjtBQXVHRDs7R0E5SVE1QixTOztLQUFBQSxTO0FBZ0pNQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9kdWN0cy9pbnZlbnRvcnkuNjVhZGYyMGFlOGZmOWE3ZjIwZDAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIFRleHRGaWVsZCxcclxuICBTZWxlY3QsXHJcbiAgQnV0dG9uLFxyXG4gIENhcmQsXHJcbiAgVGFicyxcclxuICBDaGVja2JveCxcclxuICBJY29uXHJcbn0gZnJvbSAnQHNob3BpZnkvcG9sYXJpcyc7XHJcbmltcG9ydCB7XHJcbiAgQ2hldnJvbkxlZnRNaW5vcixcclxuICBDaGV2cm9uUmlnaHRNaW5vcixcclxuICBDYXJldERvd25NaW5vcixcclxuICBTZWFyY2hNaW5vclxyXG59IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMtaWNvbnMnO1xyXG5pbXBvcnQgJy4vaW52ZW50b3J5LmNzcyc7XHJcblxyXG5mdW5jdGlvbiBJbnZlbnRvcnkoKSB7XHJcbiAgY29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3RhYiwgc2V0VGFiXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtjaGVja2VkLCBzZXRDaGVja2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gdXNlQ2FsbGJhY2soKG5ld1ZhbHVlKSA9PiBzZXRWYWx1ZShuZXdWYWx1ZSksIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2VsZWN0Q2hhbmdlID0gdXNlQ2FsbGJhY2soKHZhbHVlKSA9PiBzZXRTZWxlY3RlZCh2YWx1ZSksIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlVGFiQ2hhbmdlID0gdXNlQ2FsbGJhY2soXHJcbiAgICAoc2VsZWN0ZWRUYWJJbmRleCkgPT4gc2V0VGFiKHNlbGVjdGVkVGFiSW5kZXgpLFxyXG4gICAgW10sXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hlY2tlZEFsbENoYW5nZSA9IHVzZUNhbGxiYWNrKChuZXdDaGVja2VkKSA9PiBzZXRDaGVja2VkKG5ld0NoZWNrZWQpLCBbXSk7XHJcblxyXG4gIGNvbnN0IHRhYnMgPSBbXHJcbiAgICB7XHJcbiAgICAgIGlkOiAnYWxsLWN1c3RvbWVycycsXHJcbiAgICAgIGNvbnRlbnQ6ICdBbGwnLFxyXG4gICAgICBhY2Nlc3NpYmlsaXR5TGFiZWw6ICdBbGwgY3VzdG9tZXJzJyxcclxuICAgICAgcGFuZWxJRDogJ2FsbC1jdXN0b21lcnMtY29udGVudCcsXHJcbiAgICB9LFxyXG4gIF07XHJcblxyXG5cclxuICBjb25zdCBvcHRpb25zID0gW1xyXG4gICAge2xhYmVsOiAnUHJvZHVjdCB2YXJpYW50IChB4oCTWiknLCB2YWx1ZTogJ2Z1bGxfdGl0bGUgYXNjJ30sXHJcbiAgICB7bGFiZWw6ICdQcm9kdWN0IHZhcmlhbnQgKFrigJNBKScsIHZhbHVlOiAnZnVsbF90aXRsZSBkZXNjJ30sXHJcbiAgICB7bGFiZWw6ICdTS1UgKGFzY2VuZGluZyknLCB2YWx1ZTogJ3NrdSBhc2MnfSxcclxuICAgIHtsYWJlbDogJ1NLVSAoZGVzY2VuZGluZyknLCB2YWx1ZTogJ3NrdSBkZXNjJ30sXHJcbiAgICB7bGFiZWw6ICdBdmFpbGFibGUgKGFzY2VuZGluZyknLCB2YWx1ZTogJ2ludmVudG9yeV9sZXZlbHNfYXZhaWxhYmxlIGFzYyd9LFxyXG4gICAge2xhYmVsOiAnQXZhaWxhYmxlIChkZXNjZW5kaW5nKScsIHZhbHVlOiAnaW52ZW50b3J5X2xldmVsc19hdmFpbGFibGUgZGVzYyd9LFxyXG4gICAge2xhYmVsOiAnV2hlbiBzb2xkIG91dCAoQeKAk1opJywgdmFsdWU6ICdpbnZlbnRvcnlfcG9saWN5IGFzYyd9LFxyXG4gICAge2xhYmVsOiAnaW52ZW50b3J5X3BvbGljeSBkZXNjJywgdmFsdWU6ICdpbnZlbnRvcnlfcG9saWN5IGRlc2MnfSxcclxuICBdO1xyXG5cclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJpbnZlbnRvcnlfX2NhcmRcIj5cclxuICAgICAgPENhcmQ+XHJcbiAgICAgICAgPFRhYnMgdGFicz17dGFic30gc2VsZWN0ZWQ9e3RhYn0gb25TZWxlY3Q9e2hhbmRsZVRhYkNoYW5nZX0+XHJcbiAgICAgICAgICA8Q2FyZC5TZWN0aW9uPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImludmVudG9yeV9fZmlsZXItZ3JvdXBcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImludmVudG9yeS1maWxlcl9fYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uID5GaWx0ZXIgPEljb24gc291cmNlPXtDYXJldERvd25NaW5vcn0gLz48L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW52ZW50b3J5LWZpbGVyX19pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgPEljb24gc291cmNlPXtTZWFyY2hNaW5vcn0gLz5cclxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgaW52ZW50b3J5X18gdmFsdWU9e3ZhbHVlfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSBwbGFjZWhvbGRlcj1cIlNlYXJjaCBpbnZlbnRvcnlcIi8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnZlbnRvcnktZmlsZXJfX3NlbGVjdFwiPlxyXG4gICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIlNvcnQgYnlcIlxyXG4gICAgICAgICAgICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2VsZWN0Q2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWR9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnZlbnRvcnlfX3RhYmxlLXByb2R1Y3RcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlLXByb2R1Y3QgdGFibGUtaGVhZFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZV9fY2hlY2tlZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtjaGVja2VkfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGVja2VkQWxsQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwidGFibGVfX2xpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRhYmxlX19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0YWJsZV9faXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRhYmxlX19pdGVtLXRpdGxlXCI+UHJvZHVjdDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRhYmxlX19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGFibGVfX2l0ZW0tdGl0bGVcIj5TS1U8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0YWJsZV9faXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRhYmxlX19pdGVtLXRpdGxlXCI+V2hlbiBzb2xkIG91dDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRhYmxlX19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGFibGVfX2l0ZW0tdGl0bGVcIj5JbmNvbWluZzwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRhYmxlX19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGFibGVfX2l0ZW0tdGl0bGVcIj5BdmFpbGFibGU8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0YWJsZV9faXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRhYmxlX19pdGVtLXRpdGxlXCI+RWRpdCBxdWFudGl0eSBhdmFpbGFibGU8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGUtcHJvZHVjdCB0YWJsZS1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlX19jaGVja2VkXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2NoZWNrZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoZWNrZWRBbGxDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ0YWJsZV9fbGlzdCB0YWJsZS1ib2R5X19saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0YWJsZV9faXRlbSB0YWJsZS1ib2R5X19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ0YWJsZS1ib2R5X19pdGVtLWltZ1wiIHNyYz1cImh0dHBzOi8vY2RuLnNob3BpZnkuY29tL3MvZmlsZXMvMS8wNTA0LzQ4MjMvNjY5Ni9wcm9kdWN0cy93b21hbi1pbi10aGUtY2l0eV85MjV4XzM0YzU0YTdkLWUyYTAtNDhmZS1hMTY5LWZkZTMzYTczNWFlZi5qcGc/dj0xNjA0MTM4Njg1XCIgYWx0PVwicHJvZGN1dFwiPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidGFibGVfX2l0ZW0gdGFibGUtYm9keV9faXRlbS1wcm9kdWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJpdGVtLXByb2R1Y3RfX25hbWVcIj5TdHJpcGVkIFNraXJ0IGFuZCBUb3A8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJpdGVtLXByb2R1Y3RfX3NpemVcIj5zbWFsbDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRhYmxlX19pdGVtIHRhYmxlLWJvZHlfX2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0YWJsZS1ib2R5X19za3VcIj5ObyBTS1U8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0YWJsZV9faXRlbSB0YWJsZS1ib2R5X19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+Q29udGludWUgc2VsbGluZzwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRhYmxlX19pdGVtIHRhYmxlLWJvZHlfX2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRhYmxlLWJvZHlfX2l0ZW0taW5jb21pbmdcIj4wPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0YWJsZV9faXRlbSB0YWJsZS1ib2R5X19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGFibGUtYm9keV9faXRlbS1hdmFpbGFibGVcIj4wPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidGFibGVfX2l0ZW0gdGFibGUtYm9keV9faXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInRhYmxlLWJvZHlfX2l0ZW0tZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLWZvcm1fX2J0bi1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tLWFkZCBidG4tLWFjdGl2ZVwiPkFkZDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tLXNldFwiPlNldDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbWluPVwiMVwiIHR5cGU9XCJudW1iZXJcIiBjbGFzc05hbWU9XCJ0YWJsZS1ib2R5X19pdGVtLXF1YW50aXR5XCIgbmFtZT1cInF1YW50aXR5XCIgdmFsdWU9XCIwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gZGlzYWJsZWQ+U2F2ZTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZS1ib3R0b21cIj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24+PEljb24gc291cmNlPXtDaGV2cm9uTGVmdE1pbm9yfSAvPjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbj48SWNvbiBzb3VyY2U9e0NoZXZyb25SaWdodE1pbm9yfSAvPjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvQ2FyZC5TZWN0aW9uPlxyXG4gICAgICAgIDwvVGFicz5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW52ZW50b3J5OyJdLCJzb3VyY2VSb290IjoiIn0=