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
/* harmony import */ var _inventory_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inventory.css */ "./pages/products/inventory.css");
/* harmony import */ var _inventory_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_inventory_css__WEBPACK_IMPORTED_MODULE_3__);



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
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Button"], {
                        className: "active",
                        children: "Add"
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Button"], {
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
                      disabled: true,
                      children: "Save"
                    })]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdHMvaW52ZW50b3J5LmpzIl0sIm5hbWVzIjpbIkludmVudG9yeSIsInVzZVN0YXRlIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsInZhbHVlIiwic2V0VmFsdWUiLCJ0YWIiLCJzZXRUYWIiLCJjaGVja2VkIiwic2V0Q2hlY2tlZCIsImhhbmRsZUNoYW5nZSIsInVzZUNhbGxiYWNrIiwibmV3VmFsdWUiLCJoYW5kbGVTZWxlY3RDaGFuZ2UiLCJoYW5kbGVUYWJDaGFuZ2UiLCJzZWxlY3RlZFRhYkluZGV4IiwiaGFuZGxlQ2hlY2tlZEFsbENoYW5nZSIsIm5ld0NoZWNrZWQiLCJ0YWJzIiwiaWQiLCJjb250ZW50IiwiYWNjZXNzaWJpbGl0eUxhYmVsIiwicGFuZWxJRCIsIm9wdGlvbnMiLCJsYWJlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBUUE7O0FBRUEsU0FBU0EsU0FBVCxHQUFxQjtBQUFBOztBQUFBLGtCQUNhQyxzREFBUSxDQUFDLEVBQUQsQ0FEckI7QUFBQSxNQUNaQyxRQURZO0FBQUEsTUFDRkMsV0FERTs7QUFBQSxtQkFFT0Ysc0RBQVEsQ0FBQyxFQUFELENBRmY7QUFBQSxNQUVaRyxLQUZZO0FBQUEsTUFFTEMsUUFGSzs7QUFBQSxtQkFHR0osc0RBQVEsQ0FBQyxDQUFELENBSFg7QUFBQSxNQUdaSyxHQUhZO0FBQUEsTUFHUEMsTUFITzs7QUFBQSxtQkFJV04sc0RBQVEsQ0FBQyxLQUFELENBSm5CO0FBQUEsTUFJWk8sT0FKWTtBQUFBLE1BSUhDLFVBSkc7O0FBTW5CLE1BQU1DLFlBQVksR0FBR0MseURBQVcsQ0FBQyxVQUFDQyxRQUFEO0FBQUEsV0FBY1AsUUFBUSxDQUFDTyxRQUFELENBQXRCO0FBQUEsR0FBRCxFQUFtQyxFQUFuQyxDQUFoQztBQUVBLE1BQU1DLGtCQUFrQixHQUFHRix5REFBVyxDQUFDLFVBQUNQLEtBQUQ7QUFBQSxXQUFX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REYsa0JBUkYsZUFXRTtBQUFJLDJCQUFTLEVBQUMsOEJBQWQ7QUFBQSx5Q0FDRTtBQUFBO0FBQUE7QUFERixrQkFYRixlQWNFO0FBQUksMkJBQVMsRUFBQyw4QkFBZDtBQUFBLHlDQUNFO0FBQVEsNkJBQVMsRUFBQywyQkFBbEI7QUFBQTtBQUFBO0FBREYsa0JBZEYsZUFpQkU7QUFBSSwyQkFBUyxFQUFDLDhCQUFkO0FBQUEseUNBQ0U7QUFBRyw2QkFBUyxFQUFDLDRCQUFiO0FBQUE7QUFBQTtBQURGLGtCQWpCRixlQW9CRTtBQUFJLDJCQUFTLEVBQUMsOEJBQWQ7QUFBQSx5Q0FDRTtBQUFNLDZCQUFTLEVBQUMsdUJBQWhCO0FBQUEsNENBQ0U7QUFBSywrQkFBUyxFQUFDLHNCQUFmO0FBQUEsOENBQ0UsOERBQUMsdURBQUQ7QUFBUSxpQ0FBUyxFQUFDLFFBQWxCO0FBQUE7QUFBQSx3QkFERixlQUVFLDhEQUFDLHVEQUFEO0FBQUE7QUFBQSx3QkFGRjtBQUFBLHNCQURGLGVBS0U7QUFBQSw2Q0FDRTtBQUFPLDJCQUFHLEVBQUMsR0FBWDtBQUFlLDRCQUFJLEVBQUMsUUFBcEI7QUFBNkIsaUNBQVMsRUFBQywyQkFBdkM7QUFBbUUsNEJBQUksRUFBQyxVQUF4RTtBQUFtRiw2QkFBSyxFQUFDO0FBQXpGO0FBREYsc0JBTEYsZUFRRSw4REFBQyx1REFBRDtBQUFRLDhCQUFRLE1BQWhCO0FBQUE7QUFBQSxzQkFSRjtBQUFBO0FBREYsa0JBcEJGO0FBQUEsZ0JBUEY7QUFBQSxjQS9CRjtBQUFBLFlBakJGO0FBQUE7QUFERjtBQURGO0FBREYsSUFERjtBQW1HRDs7R0ExSVFoQixTOztLQUFBQSxTO0FBNElNQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9kdWN0cy9pbnZlbnRvcnkuMzRmYjA5MzAyMmQ3YzliOGE1NDIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIFRleHRGaWVsZCxcclxuICBTZWxlY3QsXHJcbiAgQnV0dG9uLFxyXG4gIENhcmQsXHJcbiAgVGFicyxcclxuICBDaGVja2JveFxyXG59IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMnO1xyXG5pbXBvcnQgJy4vaW52ZW50b3J5LmNzcyc7XHJcblxyXG5mdW5jdGlvbiBJbnZlbnRvcnkoKSB7XHJcbiAgY29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3RhYiwgc2V0VGFiXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtjaGVja2VkLCBzZXRDaGVja2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gdXNlQ2FsbGJhY2soKG5ld1ZhbHVlKSA9PiBzZXRWYWx1ZShuZXdWYWx1ZSksIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2VsZWN0Q2hhbmdlID0gdXNlQ2FsbGJhY2soKHZhbHVlKSA9PiBzZXRTZWxlY3RlZCh2YWx1ZSksIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlVGFiQ2hhbmdlID0gdXNlQ2FsbGJhY2soXHJcbiAgICAoc2VsZWN0ZWRUYWJJbmRleCkgPT4gc2V0VGFiKHNlbGVjdGVkVGFiSW5kZXgpLFxyXG4gICAgW10sXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hlY2tlZEFsbENoYW5nZSA9IHVzZUNhbGxiYWNrKChuZXdDaGVja2VkKSA9PiBzZXRDaGVja2VkKG5ld0NoZWNrZWQpLCBbXSk7XHJcblxyXG4gIGNvbnN0IHRhYnMgPSBbXHJcbiAgICB7XHJcbiAgICAgIGlkOiAnYWxsLWN1c3RvbWVycycsXHJcbiAgICAgIGNvbnRlbnQ6ICdBbGwnLFxyXG4gICAgICBhY2Nlc3NpYmlsaXR5TGFiZWw6ICdBbGwgY3VzdG9tZXJzJyxcclxuICAgICAgcGFuZWxJRDogJ2FsbC1jdXN0b21lcnMtY29udGVudCcsXHJcbiAgICB9LFxyXG4gIF07XHJcblxyXG5cclxuICBjb25zdCBvcHRpb25zID0gW1xyXG4gICAge2xhYmVsOiAnUHJvZHVjdCB2YXJpYW50IChB4oCTWiknLCB2YWx1ZTogJ2Z1bGxfdGl0bGUgYXNjJ30sXHJcbiAgICB7bGFiZWw6ICdQcm9kdWN0IHZhcmlhbnQgKFrigJNBKScsIHZhbHVlOiAnZnVsbF90aXRsZSBkZXNjJ30sXHJcbiAgICB7bGFiZWw6ICdTS1UgKGFzY2VuZGluZyknLCB2YWx1ZTogJ3NrdSBhc2MnfSxcclxuICAgIHtsYWJlbDogJ1NLVSAoZGVzY2VuZGluZyknLCB2YWx1ZTogJ3NrdSBkZXNjJ30sXHJcbiAgICB7bGFiZWw6ICdBdmFpbGFibGUgKGFzY2VuZGluZyknLCB2YWx1ZTogJ2ludmVudG9yeV9sZXZlbHNfYXZhaWxhYmxlIGFzYyd9LFxyXG4gICAge2xhYmVsOiAnQXZhaWxhYmxlIChkZXNjZW5kaW5nKScsIHZhbHVlOiAnaW52ZW50b3J5X2xldmVsc19hdmFpbGFibGUgZGVzYyd9LFxyXG4gICAge2xhYmVsOiAnV2hlbiBzb2xkIG91dCAoQeKAk1opJywgdmFsdWU6ICdpbnZlbnRvcnlfcG9saWN5IGFzYyd9LFxyXG4gICAge2xhYmVsOiAnaW52ZW50b3J5X3BvbGljeSBkZXNjJywgdmFsdWU6ICdpbnZlbnRvcnlfcG9saWN5IGRlc2MnfSxcclxuICBdO1xyXG5cclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJpbnZlbnRvcnlfX2NhcmRcIj5cclxuICAgICAgPENhcmQ+XHJcbiAgICAgICAgPFRhYnMgdGFicz17dGFic30gc2VsZWN0ZWQ9e3RhYn0gb25TZWxlY3Q9e2hhbmRsZVRhYkNoYW5nZX0+XHJcbiAgICAgICAgICA8Q2FyZC5TZWN0aW9uPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImludmVudG9yeV9fZmlsZXItZ3JvdXBcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImludmVudG9yeS1maWxlcl9fYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uID5GaWx0ZXI8L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImludmVudG9yeS1maWxlcl9faW5wdXRcIj5cclxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgaW52ZW50b3J5X18gdmFsdWU9e3ZhbHVlfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSBwbGFjZWhvbGRlcj1cIlNlYXJjaCBpbnZlbnRvcnlcIi8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnZlbnRvcnktZmlsZXJfX3NlbGVjdFwiPlxyXG4gICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIlNvcnQgYnlcIlxyXG4gICAgICAgICAgICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2VsZWN0Q2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWR9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnZlbnRvcnlfX3RhYmxlLXByb2R1Y3RcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlLXByb2R1Y3RcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGVfX2NoZWNrZWRcIj5cclxuICAgICAgICAgICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17Y2hlY2tlZH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hlY2tlZEFsbENoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInRhYmxlX19saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0YWJsZV9faXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidGFibGVfX2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0YWJsZV9faXRlbS10aXRsZVwiPlByb2R1Y3Q8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0YWJsZV9faXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRhYmxlX19pdGVtLXRpdGxlXCI+U0tVPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidGFibGVfX2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0YWJsZV9faXRlbS10aXRsZVwiPldoZW4gc29sZCBvdXQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0YWJsZV9faXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRhYmxlX19pdGVtLXRpdGxlXCI+SW5jb21pbmc8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0YWJsZV9faXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRhYmxlX19pdGVtLXRpdGxlXCI+QXZhaWxhYmxlPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidGFibGVfX2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0YWJsZV9faXRlbS10aXRsZVwiPkVkaXQgcXVhbnRpdHkgYXZhaWxhYmxlPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlLXByb2R1Y3QgdGFibGUtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZV9fY2hlY2tlZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtjaGVja2VkfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGVja2VkQWxsQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwidGFibGVfX2xpc3QgdGFibGUtYm9keV9fbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidGFibGVfX2l0ZW0gdGFibGUtYm9keV9faXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidGFibGUtYm9keV9faXRlbS1pbWdcIiBzcmM9XCJodHRwczovL2Nkbi5zaG9waWZ5LmNvbS9zL2ZpbGVzLzEvMDUwNC80ODIzLzY2OTYvcHJvZHVjdHMvd29tYW4taW4tdGhlLWNpdHlfOTI1eF8zNGM1NGE3ZC1lMmEwLTQ4ZmUtYTE2OS1mZGUzM2E3MzVhZWYuanBnP3Y9MTYwNDEzODY4NVwiIGFsdD1cInByb2RjdXRcIj48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRhYmxlX19pdGVtIHRhYmxlLWJvZHlfX2l0ZW0tcHJvZHVjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaXRlbS1wcm9kdWN0X19uYW1lXCI+U3RyaXBlZCBTa2lydCBhbmQgVG9wPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaXRlbS1wcm9kdWN0X19zaXplXCI+c21hbGw8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0YWJsZV9faXRlbSB0YWJsZS1ib2R5X19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGFibGUtYm9keV9fc2t1XCI+Tm8gU0tVPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidGFibGVfX2l0ZW0gdGFibGUtYm9keV9faXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPkNvbnRpbnVlIHNlbGxpbmc8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0YWJsZV9faXRlbSB0YWJsZS1ib2R5X19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0YWJsZS1ib2R5X19pdGVtLWluY29taW5nXCI+MDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidGFibGVfX2l0ZW0gdGFibGUtYm9keV9faXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRhYmxlLWJvZHlfX2l0ZW0tYXZhaWxhYmxlXCI+MDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRhYmxlX19pdGVtIHRhYmxlLWJvZHlfX2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJ0YWJsZS1ib2R5X19pdGVtLWZvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS1mb3JtX19idG4tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJhY3RpdmVcIj5BZGQ8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbj5TZXQ8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IG1pbj1cIjFcIiB0eXBlPVwibnVtYmVyXCIgY2xhc3NOYW1lPVwidGFibGUtYm9keV9faXRlbS1xdWFudGl0eVwiIG5hbWU9XCJxdWFudGl0eVwiIHZhbHVlPVwiMVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gZGlzYWJsZWQ+U2F2ZTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9DYXJkLlNlY3Rpb24+XHJcbiAgICAgICAgPC9UYWJzPlxyXG4gICAgICA8L0NhcmQ+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnZlbnRvcnk7Il0sInNvdXJjZVJvb3QiOiIifQ==