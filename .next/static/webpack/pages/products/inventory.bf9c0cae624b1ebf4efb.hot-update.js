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
                  className: "table-head__item"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdHMvaW52ZW50b3J5LmpzIl0sIm5hbWVzIjpbIkludmVudG9yeSIsInVzZVN0YXRlIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsInZhbHVlIiwic2V0VmFsdWUiLCJ0YWIiLCJzZXRUYWIiLCJjaGVja2VkIiwic2V0Q2hlY2tlZCIsImhhbmRsZUNoYW5nZSIsInVzZUNhbGxiYWNrIiwibmV3VmFsdWUiLCJoYW5kbGVTZWxlY3RDaGFuZ2UiLCJoYW5kbGVUYWJDaGFuZ2UiLCJzZWxlY3RlZFRhYkluZGV4IiwiaGFuZGxlQ2hlY2tlZEFsbENoYW5nZSIsIm5ld0NoZWNrZWQiLCJ0YWJzIiwiaWQiLCJjb250ZW50IiwiYWNjZXNzaWJpbGl0eUxhYmVsIiwicGFuZWxJRCIsIm9wdGlvbnMiLCJsYWJlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBUUE7O0FBRUEsU0FBU0EsU0FBVCxHQUFxQjtBQUFBOztBQUFBLGtCQUNhQyxzREFBUSxDQUFDLEVBQUQsQ0FEckI7QUFBQSxNQUNaQyxRQURZO0FBQUEsTUFDRkMsV0FERTs7QUFBQSxtQkFFT0Ysc0RBQVEsQ0FBQyxFQUFELENBRmY7QUFBQSxNQUVaRyxLQUZZO0FBQUEsTUFFTEMsUUFGSzs7QUFBQSxtQkFHR0osc0RBQVEsQ0FBQyxDQUFELENBSFg7QUFBQSxNQUdaSyxHQUhZO0FBQUEsTUFHUEMsTUFITzs7QUFBQSxtQkFJV04sc0RBQVEsQ0FBQyxLQUFELENBSm5CO0FBQUEsTUFJWk8sT0FKWTtBQUFBLE1BSUhDLFVBSkc7O0FBTW5CLE1BQU1DLFlBQVksR0FBR0MseURBQVcsQ0FBQyxVQUFDQyxRQUFEO0FBQUEsV0FBY1AsUUFBUSxDQUFDTyxRQUFELENBQXRCO0FBQUEsR0FBRCxFQUFtQyxFQUFuQyxDQUFoQztBQUVBLE1BQU1DLGtCQUFrQixHQUFHRix5REFBVyxDQUFDLFVBQUNQLEtBQUQ7QUFBQSxXQUFX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QUNFO0FBQUE7QUFBQTtBQURGLGtCQU5GLGVBU0U7QUFBSSwyQkFBUyxFQUFDLGtCQUFkO0FBQUEseUNBQ0U7QUFBQTtBQUFBO0FBREYsa0JBVEYsZUFZRTtBQUFJLDJCQUFTLEVBQUMsa0JBQWQ7QUFBQSx5Q0FDRTtBQUFBO0FBQUE7QUFERixrQkFaRixlQWVFO0FBQUksMkJBQVMsRUFBQyxrQkFBZDtBQUFBLHlDQUNFO0FBQUE7QUFBQTtBQURGLGtCQWZGLGVBa0JFO0FBQUksMkJBQVMsRUFBQyxrQkFBZDtBQUFBLHlDQUNFO0FBQUE7QUFBQTtBQURGLGtCQWxCRjtBQUFBLGdCQVBGO0FBQUE7QUFERixZQWpCRjtBQUFBO0FBREY7QUFERjtBQURGLElBREY7QUEwREQ7O0dBakdRaEIsUzs7S0FBQUEsUztBQW1HTUEsd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdHMvaW52ZW50b3J5LmJmOWMwY2FlNjI0YjFlYmY0ZWZiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBUZXh0RmllbGQsXHJcbiAgU2VsZWN0LFxyXG4gIEJ1dHRvbixcclxuICBDYXJkLFxyXG4gIFRhYnMsXHJcbiAgQ2hlY2tib3hcclxufSBmcm9tICdAc2hvcGlmeS9wb2xhcmlzJztcclxuaW1wb3J0ICcuL2ludmVudG9yeS5jc3MnO1xyXG5cclxuZnVuY3Rpb24gSW52ZW50b3J5KCkge1xyXG4gIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFt0YWIsIHNldFRhYl0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbY2hlY2tlZCwgc2V0Q2hlY2tlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IHVzZUNhbGxiYWNrKChuZXdWYWx1ZSkgPT4gc2V0VmFsdWUobmV3VmFsdWUpLCBbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNlbGVjdENoYW5nZSA9IHVzZUNhbGxiYWNrKCh2YWx1ZSkgPT4gc2V0U2VsZWN0ZWQodmFsdWUpLCBbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVRhYkNoYW5nZSA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKHNlbGVjdGVkVGFiSW5kZXgpID0+IHNldFRhYihzZWxlY3RlZFRhYkluZGV4KSxcclxuICAgIFtdLFxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoZWNrZWRBbGxDaGFuZ2UgPSB1c2VDYWxsYmFjaygobmV3Q2hlY2tlZCkgPT4gc2V0Q2hlY2tlZChuZXdDaGVja2VkKSwgW10pO1xyXG5cclxuICBjb25zdCB0YWJzID0gW1xyXG4gICAge1xyXG4gICAgICBpZDogJ2FsbC1jdXN0b21lcnMnLFxyXG4gICAgICBjb250ZW50OiAnQWxsJyxcclxuICAgICAgYWNjZXNzaWJpbGl0eUxhYmVsOiAnQWxsIGN1c3RvbWVycycsXHJcbiAgICAgIHBhbmVsSUQ6ICdhbGwtY3VzdG9tZXJzLWNvbnRlbnQnLFxyXG4gICAgfSxcclxuICBdO1xyXG5cclxuXHJcbiAgY29uc3Qgb3B0aW9ucyA9IFtcclxuICAgIHtsYWJlbDogJ1Byb2R1Y3QgdmFyaWFudCAoQeKAk1opJywgdmFsdWU6ICdmdWxsX3RpdGxlIGFzYyd9LFxyXG4gICAge2xhYmVsOiAnUHJvZHVjdCB2YXJpYW50ICha4oCTQSknLCB2YWx1ZTogJ2Z1bGxfdGl0bGUgZGVzYyd9LFxyXG4gICAge2xhYmVsOiAnU0tVIChhc2NlbmRpbmcpJywgdmFsdWU6ICdza3UgYXNjJ30sXHJcbiAgICB7bGFiZWw6ICdTS1UgKGRlc2NlbmRpbmcpJywgdmFsdWU6ICdza3UgZGVzYyd9LFxyXG4gICAge2xhYmVsOiAnQXZhaWxhYmxlIChhc2NlbmRpbmcpJywgdmFsdWU6ICdpbnZlbnRvcnlfbGV2ZWxzX2F2YWlsYWJsZSBhc2MnfSxcclxuICAgIHtsYWJlbDogJ0F2YWlsYWJsZSAoZGVzY2VuZGluZyknLCB2YWx1ZTogJ2ludmVudG9yeV9sZXZlbHNfYXZhaWxhYmxlIGRlc2MnfSxcclxuICAgIHtsYWJlbDogJ1doZW4gc29sZCBvdXQgKEHigJNaKScsIHZhbHVlOiAnaW52ZW50b3J5X3BvbGljeSBhc2MnfSxcclxuICAgIHtsYWJlbDogJ2ludmVudG9yeV9wb2xpY3kgZGVzYycsIHZhbHVlOiAnaW52ZW50b3J5X3BvbGljeSBkZXNjJ30sXHJcbiAgXTtcclxuXHJcbiAgXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaW52ZW50b3J5X19jYXJkXCI+XHJcbiAgICAgIDxDYXJkPlxyXG4gICAgICAgIDxUYWJzIHRhYnM9e3RhYnN9IHNlbGVjdGVkPXt0YWJ9IG9uU2VsZWN0PXtoYW5kbGVUYWJDaGFuZ2V9PlxyXG4gICAgICAgICAgPENhcmQuU2VjdGlvbj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnZlbnRvcnlfX2ZpbGVyLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnZlbnRvcnktZmlsZXJfX2J1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiA+RmlsdGVyPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnZlbnRvcnktZmlsZXJfX2lucHV0XCI+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGludmVudG9yeV9fIHZhbHVlPXt2YWx1ZX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gcGxhY2Vob2xkZXI9XCJTZWFyY2ggaW52ZW50b3J5XCIvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW52ZW50b3J5LWZpbGVyX19zZWxlY3RcIj5cclxuICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTb3J0IGJ5XCJcclxuICAgICAgICAgICAgICAgICAgb3B0aW9ucz17b3B0aW9uc31cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNlbGVjdENoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW52ZW50b3J5X190YWJsZS1wcm9kdWN0XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZS1wcm9kdWN0X19oZWFkXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlLWhlYWRfX2NoZWNrZWRcIj5cclxuICAgICAgICAgICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17Y2hlY2tlZH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hlY2tlZEFsbENoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInRhYmxlLWhlYWRfX2xpc3RcIj5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0YWJsZS1oZWFkX19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0YWJsZS1oZWFkX19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+UHJvZHVjdDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRhYmxlLWhlYWRfX2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8cD5TS1U8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0YWJsZS1oZWFkX19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+V2hlbiBzb2xkIG91dDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRhYmxlLWhlYWRfX2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8cD5JbmNvbWluZzwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRhYmxlLWhlYWRfX2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8cD5BdmFpbGFibGU8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0YWJsZS1oZWFkX19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+RWRpdCBxdWFudGl0eSBhdmFpbGFibGU8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvQ2FyZC5TZWN0aW9uPlxyXG4gICAgICAgIDwvVGFicz5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnZlbnRvcnk7Il0sInNvdXJjZVJvb3QiOiIifQ==