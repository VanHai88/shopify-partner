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
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Card"], {
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
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          className: "inventory__table-product",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
            className: "table-product__head",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
              className: "table-head__checked",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Checkbox"], {
                checked: checked,
                onChange: handleCheckedAllChange
              })
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("ul", {
              className: "table-head__list",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
                className: "table-head__item",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
                  children: "Product"
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
                className: "table-head__item",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
                  children: "SKU"
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
                className: "table-head__item",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
                  children: "When sold out"
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
                className: "table-head__item",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
                  children: "Incoming"
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
                className: "table-head__item",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
                  children: "Available"
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
                className: "table-head__item",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
                  children: "Edit quantity available"
                })
              })]
            })]
          })
        })]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdHMvaW52ZW50b3J5LmpzIl0sIm5hbWVzIjpbIkludmVudG9yeSIsInVzZVN0YXRlIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsInZhbHVlIiwic2V0VmFsdWUiLCJ0YWIiLCJzZXRUYWIiLCJjaGVja2VkIiwic2V0Q2hlY2tlZCIsImhhbmRsZUNoYW5nZSIsInVzZUNhbGxiYWNrIiwibmV3VmFsdWUiLCJoYW5kbGVTZWxlY3RDaGFuZ2UiLCJoYW5kbGVUYWJDaGFuZ2UiLCJzZWxlY3RlZFRhYkluZGV4IiwiaGFuZGxlQ2hlY2tlZEFsbENoYW5nZSIsIm5ld0NoZWNrZWQiLCJ0YWJzIiwiaWQiLCJjb250ZW50IiwiYWNjZXNzaWJpbGl0eUxhYmVsIiwicGFuZWxJRCIsIm9wdGlvbnMiLCJsYWJlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBUUE7O0FBRUEsU0FBU0EsU0FBVCxHQUFxQjtBQUFBOztBQUFBLGtCQUNhQyxzREFBUSxDQUFDLEVBQUQsQ0FEckI7QUFBQSxNQUNaQyxRQURZO0FBQUEsTUFDRkMsV0FERTs7QUFBQSxtQkFFT0Ysc0RBQVEsQ0FBQyxFQUFELENBRmY7QUFBQSxNQUVaRyxLQUZZO0FBQUEsTUFFTEMsUUFGSzs7QUFBQSxtQkFHR0osc0RBQVEsQ0FBQyxDQUFELENBSFg7QUFBQSxNQUdaSyxHQUhZO0FBQUEsTUFHUEMsTUFITzs7QUFBQSxtQkFJV04sc0RBQVEsQ0FBQyxLQUFELENBSm5CO0FBQUEsTUFJWk8sT0FKWTtBQUFBLE1BSUhDLFVBSkc7O0FBTW5CLE1BQU1DLFlBQVksR0FBR0MseURBQVcsQ0FBQyxVQUFDQyxRQUFEO0FBQUEsV0FBY1AsUUFBUSxDQUFDTyxRQUFELENBQXRCO0FBQUEsR0FBRCxFQUFtQyxFQUFuQyxDQUFoQztBQUVBLE1BQU1DLGtCQUFrQixHQUFHRix5REFBVyxDQUFDLFVBQUNQLEtBQUQ7QUFBQSxXQUFX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O0FBQUE7QUFERixnQkFQRixlQVVFO0FBQUkseUJBQVMsRUFBQyxrQkFBZDtBQUFBLHVDQUNFO0FBQUE7QUFBQTtBQURGLGdCQVZGLGVBYUU7QUFBSSx5QkFBUyxFQUFDLGtCQUFkO0FBQUEsdUNBQ0U7QUFBQTtBQUFBO0FBREYsZ0JBYkYsZUFnQkU7QUFBSSx5QkFBUyxFQUFDLGtCQUFkO0FBQUEsdUNBQ0U7QUFBQTtBQUFBO0FBREYsZ0JBaEJGO0FBQUEsY0FQRjtBQUFBO0FBREYsVUFqQkY7QUFBQTtBQURGO0FBREYsSUFERjtBQXNERDs7R0E3RlFoQixTOztLQUFBQSxTO0FBK0ZNQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9kdWN0cy9pbnZlbnRvcnkuMDc3ZTE3YjQ5ZmM0NWU4YTU1ZDguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIFRleHRGaWVsZCxcclxuICBTZWxlY3QsXHJcbiAgQnV0dG9uLFxyXG4gIENhcmQsXHJcbiAgVGFicyxcclxuICBDaGVja2JveFxyXG59IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMnO1xyXG5pbXBvcnQgJy4vaW52ZW50b3J5LmNzcyc7XHJcblxyXG5mdW5jdGlvbiBJbnZlbnRvcnkoKSB7XHJcbiAgY29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3RhYiwgc2V0VGFiXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtjaGVja2VkLCBzZXRDaGVja2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gdXNlQ2FsbGJhY2soKG5ld1ZhbHVlKSA9PiBzZXRWYWx1ZShuZXdWYWx1ZSksIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2VsZWN0Q2hhbmdlID0gdXNlQ2FsbGJhY2soKHZhbHVlKSA9PiBzZXRTZWxlY3RlZCh2YWx1ZSksIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlVGFiQ2hhbmdlID0gdXNlQ2FsbGJhY2soXHJcbiAgICAoc2VsZWN0ZWRUYWJJbmRleCkgPT4gc2V0VGFiKHNlbGVjdGVkVGFiSW5kZXgpLFxyXG4gICAgW10sXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hlY2tlZEFsbENoYW5nZSA9IHVzZUNhbGxiYWNrKChuZXdDaGVja2VkKSA9PiBzZXRDaGVja2VkKG5ld0NoZWNrZWQpLCBbXSk7XHJcblxyXG4gIGNvbnN0IHRhYnMgPSBbXHJcbiAgICB7XHJcbiAgICAgIGlkOiAnYWxsLWN1c3RvbWVycycsXHJcbiAgICAgIGNvbnRlbnQ6ICdBbGwnLFxyXG4gICAgICBhY2Nlc3NpYmlsaXR5TGFiZWw6ICdBbGwgY3VzdG9tZXJzJyxcclxuICAgICAgcGFuZWxJRDogJ2FsbC1jdXN0b21lcnMtY29udGVudCcsXHJcbiAgICB9LFxyXG4gIF07XHJcblxyXG5cclxuICBjb25zdCBvcHRpb25zID0gW1xyXG4gICAge2xhYmVsOiAnUHJvZHVjdCB2YXJpYW50IChB4oCTWiknLCB2YWx1ZTogJ2Z1bGxfdGl0bGUgYXNjJ30sXHJcbiAgICB7bGFiZWw6ICdQcm9kdWN0IHZhcmlhbnQgKFrigJNBKScsIHZhbHVlOiAnZnVsbF90aXRsZSBkZXNjJ30sXHJcbiAgICB7bGFiZWw6ICdTS1UgKGFzY2VuZGluZyknLCB2YWx1ZTogJ3NrdSBhc2MnfSxcclxuICAgIHtsYWJlbDogJ1NLVSAoZGVzY2VuZGluZyknLCB2YWx1ZTogJ3NrdSBkZXNjJ30sXHJcbiAgICB7bGFiZWw6ICdBdmFpbGFibGUgKGFzY2VuZGluZyknLCB2YWx1ZTogJ2ludmVudG9yeV9sZXZlbHNfYXZhaWxhYmxlIGFzYyd9LFxyXG4gICAge2xhYmVsOiAnQXZhaWxhYmxlIChkZXNjZW5kaW5nKScsIHZhbHVlOiAnaW52ZW50b3J5X2xldmVsc19hdmFpbGFibGUgZGVzYyd9LFxyXG4gICAge2xhYmVsOiAnV2hlbiBzb2xkIG91dCAoQeKAk1opJywgdmFsdWU6ICdpbnZlbnRvcnlfcG9saWN5IGFzYyd9LFxyXG4gICAge2xhYmVsOiAnaW52ZW50b3J5X3BvbGljeSBkZXNjJywgdmFsdWU6ICdpbnZlbnRvcnlfcG9saWN5IGRlc2MnfSxcclxuICBdO1xyXG5cclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPENhcmQ+XHJcbiAgICAgIDxUYWJzIHRhYnM9e3RhYnN9IHNlbGVjdGVkPXt0YWJ9IG9uU2VsZWN0PXtoYW5kbGVUYWJDaGFuZ2V9PlxyXG4gICAgICAgIDxDYXJkLlNlY3Rpb24+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImludmVudG9yeV9fZmlsZXItZ3JvdXBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnZlbnRvcnktZmlsZXJfX2J1dHRvblwiPlxyXG4gICAgICAgICAgICAgIDxCdXR0b24gPkZpbHRlcjwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnZlbnRvcnktZmlsZXJfX2lucHV0XCI+XHJcbiAgICAgICAgICAgICAgPFRleHRGaWVsZCBpbnZlbnRvcnlfXyB2YWx1ZT17dmFsdWV9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IHBsYWNlaG9sZGVyPVwiU2VhcmNoIGludmVudG9yeVwiLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW52ZW50b3J5LWZpbGVyX19zZWxlY3RcIj5cclxuICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlNvcnQgYnlcIlxyXG4gICAgICAgICAgICAgICAgb3B0aW9ucz17b3B0aW9uc31cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTZWxlY3RDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWR9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW52ZW50b3J5X190YWJsZS1wcm9kdWN0XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGUtcHJvZHVjdF9faGVhZFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGUtaGVhZF9fY2hlY2tlZFwiPlxyXG4gICAgICAgICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2NoZWNrZWR9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGVja2VkQWxsQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwidGFibGUtaGVhZF9fbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRhYmxlLWhlYWRfX2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgPHA+UHJvZHVjdDwvcD5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidGFibGUtaGVhZF9faXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICA8cD5TS1U8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRhYmxlLWhlYWRfX2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgPHA+V2hlbiBzb2xkIG91dDwvcD5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidGFibGUtaGVhZF9faXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICA8cD5JbmNvbWluZzwvcD5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidGFibGUtaGVhZF9faXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICA8cD5BdmFpbGFibGU8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRhYmxlLWhlYWRfX2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgPHA+RWRpdCBxdWFudGl0eSBhdmFpbGFibGU8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9DYXJkLlNlY3Rpb24+XHJcbiAgICAgIDwvVGFicz5cclxuICAgIDwvQ2FyZD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnZlbnRvcnk7Il0sInNvdXJjZVJvb3QiOiIifQ==