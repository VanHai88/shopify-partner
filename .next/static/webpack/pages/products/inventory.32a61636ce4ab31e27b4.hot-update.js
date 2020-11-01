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
                    children: "Product"
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
                  className: "table__item",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
                    children: "SKU"
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
                  className: "table__item",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
                    children: "When sold out"
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
                  className: "table__item",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
                    children: "Incoming"
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
                  className: "table__item",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
                    children: "Available"
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
                  className: "table__item",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
                    children: "Edit quantity available"
                  })
                })]
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
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
                  className: "table__item",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("image", {
                    src: "https://cdn.shopify.com/s/files/1/0504/4823/6696/products/woman-in-the-city_925x_34c54a7d-e2a0-48fe-a169-fde33a735aef.jpg?v=1604138685"
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
                  className: "table__item",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
                    children: "Product"
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
                  className: "table__item",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
                    children: "SKU"
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
                  className: "table__item",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
                    children: "When sold out"
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
                  className: "table__item",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
                    children: "Incoming"
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
                  className: "table__item",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
                    children: "Available"
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
                  className: "table__item",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
                    children: "Edit quantity available"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdHMvaW52ZW50b3J5LmpzIl0sIm5hbWVzIjpbIkludmVudG9yeSIsInVzZVN0YXRlIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsInZhbHVlIiwic2V0VmFsdWUiLCJ0YWIiLCJzZXRUYWIiLCJjaGVja2VkIiwic2V0Q2hlY2tlZCIsImhhbmRsZUNoYW5nZSIsInVzZUNhbGxiYWNrIiwibmV3VmFsdWUiLCJoYW5kbGVTZWxlY3RDaGFuZ2UiLCJoYW5kbGVUYWJDaGFuZ2UiLCJzZWxlY3RlZFRhYkluZGV4IiwiaGFuZGxlQ2hlY2tlZEFsbENoYW5nZSIsIm5ld0NoZWNrZWQiLCJ0YWJzIiwiaWQiLCJjb250ZW50IiwiYWNjZXNzaWJpbGl0eUxhYmVsIiwicGFuZWxJRCIsIm9wdGlvbnMiLCJsYWJlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBUUE7O0FBRUEsU0FBU0EsU0FBVCxHQUFxQjtBQUFBOztBQUFBLGtCQUNhQyxzREFBUSxDQUFDLEVBQUQsQ0FEckI7QUFBQSxNQUNaQyxRQURZO0FBQUEsTUFDRkMsV0FERTs7QUFBQSxtQkFFT0Ysc0RBQVEsQ0FBQyxFQUFELENBRmY7QUFBQSxNQUVaRyxLQUZZO0FBQUEsTUFFTEMsUUFGSzs7QUFBQSxtQkFHR0osc0RBQVEsQ0FBQyxDQUFELENBSFg7QUFBQSxNQUdaSyxHQUhZO0FBQUEsTUFHUEMsTUFITzs7QUFBQSxtQkFJV04sc0RBQVEsQ0FBQyxLQUFELENBSm5CO0FBQUEsTUFJWk8sT0FKWTtBQUFBLE1BSUhDLFVBSkc7O0FBTW5CLE1BQU1DLFlBQVksR0FBR0MseURBQVcsQ0FBQyxVQUFDQyxRQUFEO0FBQUEsV0FBY1AsUUFBUSxDQUFDTyxRQUFELENBQXRCO0FBQUEsR0FBRCxFQUFtQyxFQUFuQyxDQUFoQztBQUVBLE1BQU1DLGtCQUFrQixHQUFHRix5REFBVyxDQUFDLFVBQUNQLEtBQUQ7QUFBQSxXQUFX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QUFBQTtBQURGO0FBREY7QUFERixJQURGO0FBeUZEOztHQWhJUWhCLFM7O0tBQUFBLFM7QUFrSU1BLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2R1Y3RzL2ludmVudG9yeS4zMmE2MTYzNmNlNGFiMzFlMjdiNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgVGV4dEZpZWxkLFxyXG4gIFNlbGVjdCxcclxuICBCdXR0b24sXHJcbiAgQ2FyZCxcclxuICBUYWJzLFxyXG4gIENoZWNrYm94XHJcbn0gZnJvbSAnQHNob3BpZnkvcG9sYXJpcyc7XHJcbmltcG9ydCAnLi9pbnZlbnRvcnkuY3NzJztcclxuXHJcbmZ1bmN0aW9uIEludmVudG9yeSgpIHtcclxuICBjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjdGVkXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbdGFiLCBzZXRUYWJdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2NoZWNrZWQsIHNldENoZWNrZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSB1c2VDYWxsYmFjaygobmV3VmFsdWUpID0+IHNldFZhbHVlKG5ld1ZhbHVlKSwgW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVTZWxlY3RDaGFuZ2UgPSB1c2VDYWxsYmFjaygodmFsdWUpID0+IHNldFNlbGVjdGVkKHZhbHVlKSwgW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVUYWJDaGFuZ2UgPSB1c2VDYWxsYmFjayhcclxuICAgIChzZWxlY3RlZFRhYkluZGV4KSA9PiBzZXRUYWIoc2VsZWN0ZWRUYWJJbmRleCksXHJcbiAgICBbXSxcclxuICApO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGVja2VkQWxsQ2hhbmdlID0gdXNlQ2FsbGJhY2soKG5ld0NoZWNrZWQpID0+IHNldENoZWNrZWQobmV3Q2hlY2tlZCksIFtdKTtcclxuXHJcbiAgY29uc3QgdGFicyA9IFtcclxuICAgIHtcclxuICAgICAgaWQ6ICdhbGwtY3VzdG9tZXJzJyxcclxuICAgICAgY29udGVudDogJ0FsbCcsXHJcbiAgICAgIGFjY2Vzc2liaWxpdHlMYWJlbDogJ0FsbCBjdXN0b21lcnMnLFxyXG4gICAgICBwYW5lbElEOiAnYWxsLWN1c3RvbWVycy1jb250ZW50JyxcclxuICAgIH0sXHJcbiAgXTtcclxuXHJcblxyXG4gIGNvbnN0IG9wdGlvbnMgPSBbXHJcbiAgICB7bGFiZWw6ICdQcm9kdWN0IHZhcmlhbnQgKEHigJNaKScsIHZhbHVlOiAnZnVsbF90aXRsZSBhc2MnfSxcclxuICAgIHtsYWJlbDogJ1Byb2R1Y3QgdmFyaWFudCAoWuKAk0EpJywgdmFsdWU6ICdmdWxsX3RpdGxlIGRlc2MnfSxcclxuICAgIHtsYWJlbDogJ1NLVSAoYXNjZW5kaW5nKScsIHZhbHVlOiAnc2t1IGFzYyd9LFxyXG4gICAge2xhYmVsOiAnU0tVIChkZXNjZW5kaW5nKScsIHZhbHVlOiAnc2t1IGRlc2MnfSxcclxuICAgIHtsYWJlbDogJ0F2YWlsYWJsZSAoYXNjZW5kaW5nKScsIHZhbHVlOiAnaW52ZW50b3J5X2xldmVsc19hdmFpbGFibGUgYXNjJ30sXHJcbiAgICB7bGFiZWw6ICdBdmFpbGFibGUgKGRlc2NlbmRpbmcpJywgdmFsdWU6ICdpbnZlbnRvcnlfbGV2ZWxzX2F2YWlsYWJsZSBkZXNjJ30sXHJcbiAgICB7bGFiZWw6ICdXaGVuIHNvbGQgb3V0IChB4oCTWiknLCB2YWx1ZTogJ2ludmVudG9yeV9wb2xpY3kgYXNjJ30sXHJcbiAgICB7bGFiZWw6ICdpbnZlbnRvcnlfcG9saWN5IGRlc2MnLCB2YWx1ZTogJ2ludmVudG9yeV9wb2xpY3kgZGVzYyd9LFxyXG4gIF07XHJcblxyXG4gIFxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImludmVudG9yeV9fY2FyZFwiPlxyXG4gICAgICA8Q2FyZD5cclxuICAgICAgICA8VGFicyB0YWJzPXt0YWJzfSBzZWxlY3RlZD17dGFifSBvblNlbGVjdD17aGFuZGxlVGFiQ2hhbmdlfT5cclxuICAgICAgICAgIDxDYXJkLlNlY3Rpb24+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW52ZW50b3J5X19maWxlci1ncm91cFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW52ZW50b3J5LWZpbGVyX19idXR0b25cIj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gPkZpbHRlcjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW52ZW50b3J5LWZpbGVyX19pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZCBpbnZlbnRvcnlfXyB2YWx1ZT17dmFsdWV9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IHBsYWNlaG9sZGVyPVwiU2VhcmNoIGludmVudG9yeVwiLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImludmVudG9yeS1maWxlcl9fc2VsZWN0XCI+XHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU29ydCBieVwiXHJcbiAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e29wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTZWxlY3RDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImludmVudG9yeV9fdGFibGUtcHJvZHVjdFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGUtcHJvZHVjdFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZV9fY2hlY2tlZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtjaGVja2VkfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGVja2VkQWxsQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwidGFibGVfX2xpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRhYmxlX19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0YWJsZV9faXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlByb2R1Y3Q8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0YWJsZV9faXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlNLVTwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRhYmxlX19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+V2hlbiBzb2xkIG91dDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRhYmxlX19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+SW5jb21pbmc8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0YWJsZV9faXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPkF2YWlsYWJsZTwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRhYmxlX19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+RWRpdCBxdWFudGl0eSBhdmFpbGFibGU8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGUtcHJvZHVjdFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZV9fY2hlY2tlZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtjaGVja2VkfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGVja2VkQWxsQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwidGFibGVfX2xpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRhYmxlX19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltYWdlIHNyYz1cImh0dHBzOi8vY2RuLnNob3BpZnkuY29tL3MvZmlsZXMvMS8wNTA0LzQ4MjMvNjY5Ni9wcm9kdWN0cy93b21hbi1pbi10aGUtY2l0eV85MjV4XzM0YzU0YTdkLWUyYTAtNDhmZS1hMTY5LWZkZTMzYTczNWFlZi5qcGc/dj0xNjA0MTM4Njg1XCI+PC9pbWFnZT5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRhYmxlX19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+UHJvZHVjdDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRhYmxlX19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+U0tVPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidGFibGVfX2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8cD5XaGVuIHNvbGQgb3V0PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidGFibGVfX2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8cD5JbmNvbWluZzwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRhYmxlX19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+QXZhaWxhYmxlPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidGFibGVfX2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8cD5FZGl0IHF1YW50aXR5IGF2YWlsYWJsZTwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9DYXJkLlNlY3Rpb24+XHJcbiAgICAgICAgPC9UYWJzPlxyXG4gICAgICA8L0NhcmQ+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnZlbnRvcnk7Il0sInNvdXJjZVJvb3QiOiIifQ==