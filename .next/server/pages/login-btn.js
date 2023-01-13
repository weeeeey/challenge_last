"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/login-btn";
exports.ids = ["pages/login-btn"];
exports.modules = {

/***/ "./pages/login-btn.tsx":
/*!*****************************!*\
  !*** ./pages/login-btn.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Component)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Component() {\n    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();\n    if (session) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                \"Signed in as \",\n                session.user.email,\n                \" \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\82102\\\\Documents\\\\GitHub\\\\challenge_last\\\\pages\\\\login-btn.tsx\",\n                    lineNumber: 7,\n                    columnNumber: 52\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signOut)()\n                    ,\n                    children: \"Sign out\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\82102\\\\Documents\\\\GitHub\\\\challenge_last\\\\pages\\\\login-btn.tsx\",\n                    lineNumber: 8,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true);\n    } else {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                \"Not signed in \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\82102\\\\Documents\\\\GitHub\\\\challenge_last\\\\pages\\\\login-btn.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 31\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signIn)()\n                    ,\n                    children: \"Sign in\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\82102\\\\Documents\\\\GitHub\\\\challenge_last\\\\pages\\\\login-btn.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi1idG4udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUE4RDtBQUMvQyxTQUFTRyxTQUFTLEdBQUc7SUFDaEMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLE9BQU8sR0FBRSxHQUFHTCwyREFBVSxFQUFFO0lBQ3RDLElBQUlLLE9BQU8sRUFBRTtRQUNULHFCQUNJOztnQkFBRSxlQUNlO2dCQUFDQSxPQUFPLENBQUNDLElBQUksQ0FBRUMsS0FBSztnQkFBQyxHQUFDOzhCQUFBLDhEQUFDQyxJQUFFOzs7O3dCQUFHOzhCQUN6Qyw4REFBQ0MsUUFBTTtvQkFBQ0MsT0FBTyxFQUFFLElBQU1SLHdEQUFPLEVBQUU7b0JBQUE7OEJBQUUsVUFBUTs7Ozs7d0JBQVM7O3dCQUNwRCxDQUNMO0tBQ0wsTUFBTTtRQUNILHFCQUNJOztnQkFBRSxnQkFDZ0I7OEJBQUEsOERBQUNNLElBQUU7Ozs7d0JBQUc7OEJBQ3BCLDhEQUFDQyxRQUFNO29CQUFDQyxPQUFPLEVBQUUsSUFBTVQsdURBQU0sRUFBRTtvQkFBQTs4QkFBRSxTQUFPOzs7Ozt3QkFBUzs7d0JBQ2xELENBQ0w7S0FDTDtDQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLXByaXNtYS10eXBlc2NyaXB0LXRhaWx3aW5kLWJsdWVwcmludC8uL3BhZ2VzL2xvZ2luLWJ0bi50c3g/MzJhOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTZXNzaW9uLCBzaWduSW4sIHNpZ25PdXQgfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbXBvbmVudCgpIHtcclxuICAgIGNvbnN0IHsgZGF0YTogc2Vzc2lvbiB9ID0gdXNlU2Vzc2lvbigpO1xyXG4gICAgaWYgKHNlc3Npb24pIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgU2lnbmVkIGluIGFzIHtzZXNzaW9uLnVzZXIhLmVtYWlsfSA8YnIgLz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2lnbk91dCgpfT5TaWduIG91dDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgTm90IHNpZ25lZCBpbiA8YnIgLz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2lnbkluKCl9PlNpZ24gaW48L2J1dHRvbj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iXSwibmFtZXMiOlsidXNlU2Vzc2lvbiIsInNpZ25JbiIsInNpZ25PdXQiLCJDb21wb25lbnQiLCJkYXRhIiwic2Vzc2lvbiIsInVzZXIiLCJlbWFpbCIsImJyIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/login-btn.tsx\n");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/login-btn.tsx"));
module.exports = __webpack_exports__;

})();