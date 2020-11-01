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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdHMvaW52ZW50b3J5LmpzIl0sIm5hbWVzIjpbIkludmVudG9yeSIsInVzZVN0YXRlIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsInZhbHVlIiwic2V0VmFsdWUiLCJ0YWIiLCJzZXRUYWIiLCJjaGVja2VkIiwic2V0Q2hlY2tlZCIsImhhbmRsZUNoYW5nZSIsInVzZUNhbGxiYWNrIiwibmV3VmFsdWUiLCJoYW5kbGVTZWxlY3RDaGFuZ2UiLCJoYW5kbGVUYWJDaGFuZ2UiLCJzZWxlY3RlZFRhYkluZGV4IiwiaGFuZGxlQ2hlY2tlZEFsbENoYW5nZSIsIm5ld0NoZWNrZWQiLCJ0YWJzIiwiaWQiLCJjb250ZW50IiwiYWNjZXNzaWJpbGl0eUxhYmVsIiwicGFuZWxJRCIsIm9wdGlvbnMiLCJsYWJlbCIsIkNhcmV0RG93bk1pbm9yIiwiQ2hldnJvbkxlZnRNaW5vciIsIkNoZXZyb25SaWdodE1pbm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBU0E7QUFLQTs7QUFFQSxTQUFTQSxTQUFULEdBQXFCO0FBQUE7O0FBQUEsa0JBQ2FDLHNEQUFRLENBQUMsRUFBRCxDQURyQjtBQUFBLE1BQ1pDLFFBRFk7QUFBQSxNQUNGQyxXQURFOztBQUFBLG1CQUVPRixzREFBUSxDQUFDLEVBQUQsQ0FGZjtBQUFBLE1BRVpHLEtBRlk7QUFBQSxNQUVMQyxRQUZLOztBQUFBLG1CQUdHSixzREFBUSxDQUFDLENBQUQsQ0FIWDtBQUFBLE1BR1pLLEdBSFk7QUFBQSxNQUdQQyxNQUhPOztBQUFBLG1CQUlXTixzREFBUSxDQUFDLEtBQUQsQ0FKbkI7QUFBQSxNQUlaTyxPQUpZO0FBQUEsTUFJSEMsVUFKRzs7QUFNbkIsTUFBTUMsWUFBWSxHQUFHQyx5REFBVyxDQUFDLFVBQUNDLFFBQUQ7QUFBQSxXQUFjUCxRQUFRLENBQUNPLFFBQUQsQ0FBdEI7QUFBQSxHQUFELEVBQW1DLEVBQW5D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QSx1Q0FBUSw4REFBQyxxREFBRDtBQUFNLHdCQUFNLEVBQUVDLHdFQUFpQkE7QUFBL0I7QUFBUixnQkFGRjtBQUFBLGNBdEVGO0FBQUEsWUFsQkY7QUFBQTtBQURGO0FBREY7QUFERixJQURGO0FBc0dEOztHQTdJUTNCLFM7O0tBQUFBLFM7QUErSU1BLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2R1Y3RzL2ludmVudG9yeS40MTg5NDRhMTdjN2RhZGYxNGU2NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgVGV4dEZpZWxkLFxyXG4gIFNlbGVjdCxcclxuICBCdXR0b24sXHJcbiAgQ2FyZCxcclxuICBUYWJzLFxyXG4gIENoZWNrYm94LFxyXG4gIEljb25cclxufSBmcm9tICdAc2hvcGlmeS9wb2xhcmlzJztcclxuaW1wb3J0IHtcclxuICBDaGV2cm9uTGVmdE1pbm9yLFxyXG4gIENoZXZyb25SaWdodE1pbm9yLFxyXG4gIENhcmV0RG93bk1pbm9yXHJcbn0gZnJvbSAnQHNob3BpZnkvcG9sYXJpcy1pY29ucyc7XHJcbmltcG9ydCAnLi9pbnZlbnRvcnkuY3NzJztcclxuXHJcbmZ1bmN0aW9uIEludmVudG9yeSgpIHtcclxuICBjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjdGVkXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbdGFiLCBzZXRUYWJdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2NoZWNrZWQsIHNldENoZWNrZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSB1c2VDYWxsYmFjaygobmV3VmFsdWUpID0+IHNldFZhbHVlKG5ld1ZhbHVlKSwgW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVTZWxlY3RDaGFuZ2UgPSB1c2VDYWxsYmFjaygodmFsdWUpID0+IHNldFNlbGVjdGVkKHZhbHVlKSwgW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVUYWJDaGFuZ2UgPSB1c2VDYWxsYmFjayhcclxuICAgIChzZWxlY3RlZFRhYkluZGV4KSA9PiBzZXRUYWIoc2VsZWN0ZWRUYWJJbmRleCksXHJcbiAgICBbXSxcclxuICApO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGVja2VkQWxsQ2hhbmdlID0gdXNlQ2FsbGJhY2soKG5ld0NoZWNrZWQpID0+IHNldENoZWNrZWQobmV3Q2hlY2tlZCksIFtdKTtcclxuXHJcbiAgY29uc3QgdGFicyA9IFtcclxuICAgIHtcclxuICAgICAgaWQ6ICdhbGwtY3VzdG9tZXJzJyxcclxuICAgICAgY29udGVudDogJ0FsbCcsXHJcbiAgICAgIGFjY2Vzc2liaWxpdHlMYWJlbDogJ0FsbCBjdXN0b21lcnMnLFxyXG4gICAgICBwYW5lbElEOiAnYWxsLWN1c3RvbWVycy1jb250ZW50JyxcclxuICAgIH0sXHJcbiAgXTtcclxuXHJcblxyXG4gIGNvbnN0IG9wdGlvbnMgPSBbXHJcbiAgICB7bGFiZWw6ICdQcm9kdWN0IHZhcmlhbnQgKEHigJNaKScsIHZhbHVlOiAnZnVsbF90aXRsZSBhc2MnfSxcclxuICAgIHtsYWJlbDogJ1Byb2R1Y3QgdmFyaWFudCAoWuKAk0EpJywgdmFsdWU6ICdmdWxsX3RpdGxlIGRlc2MnfSxcclxuICAgIHtsYWJlbDogJ1NLVSAoYXNjZW5kaW5nKScsIHZhbHVlOiAnc2t1IGFzYyd9LFxyXG4gICAge2xhYmVsOiAnU0tVIChkZXNjZW5kaW5nKScsIHZhbHVlOiAnc2t1IGRlc2MnfSxcclxuICAgIHtsYWJlbDogJ0F2YWlsYWJsZSAoYXNjZW5kaW5nKScsIHZhbHVlOiAnaW52ZW50b3J5X2xldmVsc19hdmFpbGFibGUgYXNjJ30sXHJcbiAgICB7bGFiZWw6ICdBdmFpbGFibGUgKGRlc2NlbmRpbmcpJywgdmFsdWU6ICdpbnZlbnRvcnlfbGV2ZWxzX2F2YWlsYWJsZSBkZXNjJ30sXHJcbiAgICB7bGFiZWw6ICdXaGVuIHNvbGQgb3V0IChB4oCTWiknLCB2YWx1ZTogJ2ludmVudG9yeV9wb2xpY3kgYXNjJ30sXHJcbiAgICB7bGFiZWw6ICdpbnZlbnRvcnlfcG9saWN5IGRlc2MnLCB2YWx1ZTogJ2ludmVudG9yeV9wb2xpY3kgZGVzYyd9LFxyXG4gIF07XHJcblxyXG4gIFxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImludmVudG9yeV9fY2FyZFwiPlxyXG4gICAgICA8Q2FyZD5cclxuICAgICAgICA8VGFicyB0YWJzPXt0YWJzfSBzZWxlY3RlZD17dGFifSBvblNlbGVjdD17aGFuZGxlVGFiQ2hhbmdlfT5cclxuICAgICAgICAgIDxDYXJkLlNlY3Rpb24+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW52ZW50b3J5X19maWxlci1ncm91cFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW52ZW50b3J5LWZpbGVyX19idXR0b25cIj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gPkZpbHRlciA8SWNvbiBzb3VyY2U9e0NhcmV0RG93bk1pbm9yfSAvPjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnZlbnRvcnktZmlsZXJfX2lucHV0XCI+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGludmVudG9yeV9fIHZhbHVlPXt2YWx1ZX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gcGxhY2Vob2xkZXI9XCJTZWFyY2ggaW52ZW50b3J5XCIvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW52ZW50b3J5LWZpbGVyX19zZWxlY3RcIj5cclxuICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTb3J0IGJ5XCJcclxuICAgICAgICAgICAgICAgICAgb3B0aW9ucz17b3B0aW9uc31cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNlbGVjdENoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW52ZW50b3J5X190YWJsZS1wcm9kdWN0XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZS1wcm9kdWN0IHRhYmxlLWhlYWRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGVfX2NoZWNrZWRcIj5cclxuICAgICAgICAgICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17Y2hlY2tlZH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hlY2tlZEFsbENoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInRhYmxlX19saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0YWJsZV9faXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidGFibGVfX2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0YWJsZV9faXRlbS10aXRsZVwiPlByb2R1Y3Q8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0YWJsZV9faXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRhYmxlX19pdGVtLXRpdGxlXCI+U0tVPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidGFibGVfX2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0YWJsZV9faXRlbS10aXRsZVwiPldoZW4gc29sZCBvdXQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0YWJsZV9faXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRhYmxlX19pdGVtLXRpdGxlXCI+SW5jb21pbmc8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0YWJsZV9faXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRhYmxlX19pdGVtLXRpdGxlXCI+QXZhaWxhYmxlPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidGFibGVfX2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0YWJsZV9faXRlbS10aXRsZVwiPkVkaXQgcXVhbnRpdHkgYXZhaWxhYmxlPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlLXByb2R1Y3QgdGFibGUtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZV9fY2hlY2tlZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtjaGVja2VkfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGVja2VkQWxsQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwidGFibGVfX2xpc3QgdGFibGUtYm9keV9fbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidGFibGVfX2l0ZW0gdGFibGUtYm9keV9faXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidGFibGUtYm9keV9faXRlbS1pbWdcIiBzcmM9XCJodHRwczovL2Nkbi5zaG9waWZ5LmNvbS9zL2ZpbGVzLzEvMDUwNC80ODIzLzY2OTYvcHJvZHVjdHMvd29tYW4taW4tdGhlLWNpdHlfOTI1eF8zNGM1NGE3ZC1lMmEwLTQ4ZmUtYTE2OS1mZGUzM2E3MzVhZWYuanBnP3Y9MTYwNDEzODY4NVwiIGFsdD1cInByb2RjdXRcIj48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRhYmxlX19pdGVtIHRhYmxlLWJvZHlfX2l0ZW0tcHJvZHVjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaXRlbS1wcm9kdWN0X19uYW1lXCI+U3RyaXBlZCBTa2lydCBhbmQgVG9wPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaXRlbS1wcm9kdWN0X19zaXplXCI+c21hbGw8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0YWJsZV9faXRlbSB0YWJsZS1ib2R5X19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGFibGUtYm9keV9fc2t1XCI+Tm8gU0tVPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidGFibGVfX2l0ZW0gdGFibGUtYm9keV9faXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPkNvbnRpbnVlIHNlbGxpbmc8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0YWJsZV9faXRlbSB0YWJsZS1ib2R5X19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0YWJsZS1ib2R5X19pdGVtLWluY29taW5nXCI+MDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidGFibGVfX2l0ZW0gdGFibGUtYm9keV9faXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRhYmxlLWJvZHlfX2l0ZW0tYXZhaWxhYmxlXCI+MDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRhYmxlX19pdGVtIHRhYmxlLWJvZHlfX2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJ0YWJsZS1ib2R5X19pdGVtLWZvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS1mb3JtX19idG4tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLS1hZGQgYnRuLS1hY3RpdmVcIj5BZGQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLS1zZXRcIj5TZXQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IG1pbj1cIjFcIiB0eXBlPVwibnVtYmVyXCIgY2xhc3NOYW1lPVwidGFibGUtYm9keV9faXRlbS1xdWFudGl0eVwiIG5hbWU9XCJxdWFudGl0eVwiIHZhbHVlPVwiMFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGRpc2FibGVkPlNhdmU8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGUtYm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uPjxJY29uIHNvdXJjZT17Q2hldnJvbkxlZnRNaW5vcn0gLz48L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24+PEljb24gc291cmNlPXtDaGV2cm9uUmlnaHRNaW5vcn0gLz48L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0NhcmQuU2VjdGlvbj5cclxuICAgICAgICA8L1RhYnM+XHJcbiAgICAgIDwvQ2FyZD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEludmVudG9yeTsiXSwic291cmNlUm9vdCI6IiJ9