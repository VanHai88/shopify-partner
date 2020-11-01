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
                source: SearchMinor
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdHMvaW52ZW50b3J5LmpzIl0sIm5hbWVzIjpbIkludmVudG9yeSIsInVzZVN0YXRlIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsInZhbHVlIiwic2V0VmFsdWUiLCJ0YWIiLCJzZXRUYWIiLCJjaGVja2VkIiwic2V0Q2hlY2tlZCIsImhhbmRsZUNoYW5nZSIsInVzZUNhbGxiYWNrIiwibmV3VmFsdWUiLCJoYW5kbGVTZWxlY3RDaGFuZ2UiLCJoYW5kbGVUYWJDaGFuZ2UiLCJzZWxlY3RlZFRhYkluZGV4IiwiaGFuZGxlQ2hlY2tlZEFsbENoYW5nZSIsIm5ld0NoZWNrZWQiLCJ0YWJzIiwiaWQiLCJjb250ZW50IiwiYWNjZXNzaWJpbGl0eUxhYmVsIiwicGFuZWxJRCIsIm9wdGlvbnMiLCJsYWJlbCIsIkNhcmV0RG93bk1pbm9yIiwiU2VhcmNoTWlub3IiLCJDaGV2cm9uTGVmdE1pbm9yIiwiQ2hldnJvblJpZ2h0TWlub3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFTQTtBQUtBOztBQUVBLFNBQVNBLFNBQVQsR0FBcUI7QUFBQTs7QUFBQSxrQkFDYUMsc0RBQVEsQ0FBQyxFQUFELENBRHJCO0FBQUEsTUFDWkMsUUFEWTtBQUFBLE1BQ0ZDLFdBREU7O0FBQUEsbUJBRU9GLHNEQUFRLENBQUMsRUFBRCxDQUZmO0FBQUEsTUFFWkcsS0FGWTtBQUFBLE1BRUxDLFFBRks7O0FBQUEsbUJBR0dKLHNEQUFRLENBQUMsQ0FBRCxDQUhYO0FBQUEsTUFHWkssR0FIWTtBQUFBLE1BR1BDLE1BSE87O0FBQUEsbUJBSVdOLHNEQUFRLENBQUMsS0FBRCxDQUpuQjtBQUFBLE1BSVpPLE9BSlk7QUFBQSxNQUlIQyxVQUpHOztBQU1uQixNQUFNQyxZQUFZLEdBQUdDLHlEQUFXLENBQUMsVUFBQ0MsUUFBRDtBQUFBLFdBQWNQLFFBQVEsQ0FBQ08sUUFBRCxDQUF0QjtBQUFBLEdB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QUQ7QUFBTSx3QkFBTSxFQUFFVyx1RUFBZ0JBO0FBQTlCO0FBQVIsZ0JBREYsZUFFRSw4REFBQyx1REFBRDtBQUFBLHVDQUFRLDhEQUFDLHFEQUFEO0FBQU0sd0JBQU0sRUFBRUMsd0VBQWlCQTtBQUEvQjtBQUFSLGdCQUZGO0FBQUEsY0F0RUY7QUFBQSxZQW5CRjtBQUFBO0FBREY7QUFERjtBQURGLElBREY7QUF1R0Q7O0dBOUlRNUIsUzs7S0FBQUEsUztBQWdKTUEsd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdHMvaW52ZW50b3J5LjdkOWU3MzJmNTZmZWU3ZGIxMDYzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBUZXh0RmllbGQsXHJcbiAgU2VsZWN0LFxyXG4gIEJ1dHRvbixcclxuICBDYXJkLFxyXG4gIFRhYnMsXHJcbiAgQ2hlY2tib3gsXHJcbiAgSWNvblxyXG59IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMnO1xyXG5pbXBvcnQge1xyXG4gIENoZXZyb25MZWZ0TWlub3IsXHJcbiAgQ2hldnJvblJpZ2h0TWlub3IsXHJcbiAgQ2FyZXREb3duTWlub3JcclxufSBmcm9tICdAc2hvcGlmeS9wb2xhcmlzLWljb25zJztcclxuaW1wb3J0ICcuL2ludmVudG9yeS5jc3MnO1xyXG5cclxuZnVuY3Rpb24gSW52ZW50b3J5KCkge1xyXG4gIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFt0YWIsIHNldFRhYl0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbY2hlY2tlZCwgc2V0Q2hlY2tlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IHVzZUNhbGxiYWNrKChuZXdWYWx1ZSkgPT4gc2V0VmFsdWUobmV3VmFsdWUpLCBbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNlbGVjdENoYW5nZSA9IHVzZUNhbGxiYWNrKCh2YWx1ZSkgPT4gc2V0U2VsZWN0ZWQodmFsdWUpLCBbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVRhYkNoYW5nZSA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKHNlbGVjdGVkVGFiSW5kZXgpID0+IHNldFRhYihzZWxlY3RlZFRhYkluZGV4KSxcclxuICAgIFtdLFxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoZWNrZWRBbGxDaGFuZ2UgPSB1c2VDYWxsYmFjaygobmV3Q2hlY2tlZCkgPT4gc2V0Q2hlY2tlZChuZXdDaGVja2VkKSwgW10pO1xyXG5cclxuICBjb25zdCB0YWJzID0gW1xyXG4gICAge1xyXG4gICAgICBpZDogJ2FsbC1jdXN0b21lcnMnLFxyXG4gICAgICBjb250ZW50OiAnQWxsJyxcclxuICAgICAgYWNjZXNzaWJpbGl0eUxhYmVsOiAnQWxsIGN1c3RvbWVycycsXHJcbiAgICAgIHBhbmVsSUQ6ICdhbGwtY3VzdG9tZXJzLWNvbnRlbnQnLFxyXG4gICAgfSxcclxuICBdO1xyXG5cclxuXHJcbiAgY29uc3Qgb3B0aW9ucyA9IFtcclxuICAgIHtsYWJlbDogJ1Byb2R1Y3QgdmFyaWFudCAoQeKAk1opJywgdmFsdWU6ICdmdWxsX3RpdGxlIGFzYyd9LFxyXG4gICAge2xhYmVsOiAnUHJvZHVjdCB2YXJpYW50ICha4oCTQSknLCB2YWx1ZTogJ2Z1bGxfdGl0bGUgZGVzYyd9LFxyXG4gICAge2xhYmVsOiAnU0tVIChhc2NlbmRpbmcpJywgdmFsdWU6ICdza3UgYXNjJ30sXHJcbiAgICB7bGFiZWw6ICdTS1UgKGRlc2NlbmRpbmcpJywgdmFsdWU6ICdza3UgZGVzYyd9LFxyXG4gICAge2xhYmVsOiAnQXZhaWxhYmxlIChhc2NlbmRpbmcpJywgdmFsdWU6ICdpbnZlbnRvcnlfbGV2ZWxzX2F2YWlsYWJsZSBhc2MnfSxcclxuICAgIHtsYWJlbDogJ0F2YWlsYWJsZSAoZGVzY2VuZGluZyknLCB2YWx1ZTogJ2ludmVudG9yeV9sZXZlbHNfYXZhaWxhYmxlIGRlc2MnfSxcclxuICAgIHtsYWJlbDogJ1doZW4gc29sZCBvdXQgKEHigJNaKScsIHZhbHVlOiAnaW52ZW50b3J5X3BvbGljeSBhc2MnfSxcclxuICAgIHtsYWJlbDogJ2ludmVudG9yeV9wb2xpY3kgZGVzYycsIHZhbHVlOiAnaW52ZW50b3J5X3BvbGljeSBkZXNjJ30sXHJcbiAgXTtcclxuXHJcbiAgXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaW52ZW50b3J5X19jYXJkXCI+XHJcbiAgICAgIDxDYXJkPlxyXG4gICAgICAgIDxUYWJzIHRhYnM9e3RhYnN9IHNlbGVjdGVkPXt0YWJ9IG9uU2VsZWN0PXtoYW5kbGVUYWJDaGFuZ2V9PlxyXG4gICAgICAgICAgPENhcmQuU2VjdGlvbj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnZlbnRvcnlfX2ZpbGVyLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnZlbnRvcnktZmlsZXJfX2J1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiA+RmlsdGVyIDxJY29uIHNvdXJjZT17Q2FyZXREb3duTWlub3J9IC8+PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImludmVudG9yeS1maWxlcl9faW5wdXRcIj5cclxuICAgICAgICAgICAgICAgIDxJY29uIHNvdXJjZT17U2VhcmNoTWlub3J9IC8+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGludmVudG9yeV9fIHZhbHVlPXt2YWx1ZX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gcGxhY2Vob2xkZXI9XCJTZWFyY2ggaW52ZW50b3J5XCIvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW52ZW50b3J5LWZpbGVyX19zZWxlY3RcIj5cclxuICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTb3J0IGJ5XCJcclxuICAgICAgICAgICAgICAgICAgb3B0aW9ucz17b3B0aW9uc31cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNlbGVjdENoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW52ZW50b3J5X190YWJsZS1wcm9kdWN0XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZS1wcm9kdWN0IHRhYmxlLWhlYWRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGVfX2NoZWNrZWRcIj5cclxuICAgICAgICAgICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17Y2hlY2tlZH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hlY2tlZEFsbENoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInRhYmxlX19saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0YWJsZV9faXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidGFibGVfX2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0YWJsZV9faXRlbS10aXRsZVwiPlByb2R1Y3Q8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0YWJsZV9faXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRhYmxlX19pdGVtLXRpdGxlXCI+U0tVPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidGFibGVfX2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0YWJsZV9faXRlbS10aXRsZVwiPldoZW4gc29sZCBvdXQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0YWJsZV9faXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRhYmxlX19pdGVtLXRpdGxlXCI+SW5jb21pbmc8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0YWJsZV9faXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRhYmxlX19pdGVtLXRpdGxlXCI+QXZhaWxhYmxlPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidGFibGVfX2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0YWJsZV9faXRlbS10aXRsZVwiPkVkaXQgcXVhbnRpdHkgYXZhaWxhYmxlPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlLXByb2R1Y3QgdGFibGUtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZV9fY2hlY2tlZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtjaGVja2VkfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGVja2VkQWxsQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwidGFibGVfX2xpc3QgdGFibGUtYm9keV9fbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidGFibGVfX2l0ZW0gdGFibGUtYm9keV9faXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidGFibGUtYm9keV9faXRlbS1pbWdcIiBzcmM9XCJodHRwczovL2Nkbi5zaG9waWZ5LmNvbS9zL2ZpbGVzLzEvMDUwNC80ODIzLzY2OTYvcHJvZHVjdHMvd29tYW4taW4tdGhlLWNpdHlfOTI1eF8zNGM1NGE3ZC1lMmEwLTQ4ZmUtYTE2OS1mZGUzM2E3MzVhZWYuanBnP3Y9MTYwNDEzODY4NVwiIGFsdD1cInByb2RjdXRcIj48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRhYmxlX19pdGVtIHRhYmxlLWJvZHlfX2l0ZW0tcHJvZHVjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaXRlbS1wcm9kdWN0X19uYW1lXCI+U3RyaXBlZCBTa2lydCBhbmQgVG9wPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaXRlbS1wcm9kdWN0X19zaXplXCI+c21hbGw8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0YWJsZV9faXRlbSB0YWJsZS1ib2R5X19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGFibGUtYm9keV9fc2t1XCI+Tm8gU0tVPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidGFibGVfX2l0ZW0gdGFibGUtYm9keV9faXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPkNvbnRpbnVlIHNlbGxpbmc8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0YWJsZV9faXRlbSB0YWJsZS1ib2R5X19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0YWJsZS1ib2R5X19pdGVtLWluY29taW5nXCI+MDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidGFibGVfX2l0ZW0gdGFibGUtYm9keV9faXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRhYmxlLWJvZHlfX2l0ZW0tYXZhaWxhYmxlXCI+MDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRhYmxlX19pdGVtIHRhYmxlLWJvZHlfX2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJ0YWJsZS1ib2R5X19pdGVtLWZvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS1mb3JtX19idG4tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLS1hZGQgYnRuLS1hY3RpdmVcIj5BZGQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLS1zZXRcIj5TZXQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IG1pbj1cIjFcIiB0eXBlPVwibnVtYmVyXCIgY2xhc3NOYW1lPVwidGFibGUtYm9keV9faXRlbS1xdWFudGl0eVwiIG5hbWU9XCJxdWFudGl0eVwiIHZhbHVlPVwiMFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGRpc2FibGVkPlNhdmU8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGUtYm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uPjxJY29uIHNvdXJjZT17Q2hldnJvbkxlZnRNaW5vcn0gLz48L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24+PEljb24gc291cmNlPXtDaGV2cm9uUmlnaHRNaW5vcn0gLz48L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0NhcmQuU2VjdGlvbj5cclxuICAgICAgICA8L1RhYnM+XHJcbiAgICAgIDwvQ2FyZD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEludmVudG9yeTsiXSwic291cmNlUm9vdCI6IiJ9