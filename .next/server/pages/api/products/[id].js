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
exports.id = "pages/api/products/[id]";
exports.ids = ["pages/api/products/[id]"];
exports.modules = {

/***/ "mysql2/promise":
/*!*********************************!*\
  !*** external "mysql2/promise" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("mysql2/promise");

/***/ }),

/***/ "(api)/./config/db.js":
/*!**********************!*\
  !*** ./config/db.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pool\": () => (/* binding */ pool)\n/* harmony export */ });\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql2/promise */ \"mysql2/promise\");\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mysql2_promise__WEBPACK_IMPORTED_MODULE_0__);\n\nconst pool = (0,mysql2_promise__WEBPACK_IMPORTED_MODULE_0__.createPool)({\n    host: \"localhost\",\n    user: \"root\",\n    password: \"\",\n    database: \"productsdb\"\n});\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9jb25maWcvZGIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTJDO0FBQzNDLEtBQUssQ0FBQ0MsSUFBSSxHQUFHRCwwREFBVSxDQUFFLENBQUM7SUFDdEJFLElBQUksRUFBRSxDQUFXO0lBQ2pCQyxJQUFJLEVBQUUsQ0FBTTtJQUNaQyxRQUFRLEVBQUcsQ0FBRTtJQUNiQyxRQUFRLEVBQUUsQ0FBWTtBQUMxQixDQUFDO0FBRVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdG9yLWFwcC8uL2NvbmZpZy9kYi5qcz9iNDkzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVBvb2wgfSBmcm9tIFwibXlzcWwyL3Byb21pc2VcIjtcclxuY29uc3QgcG9vbCA9IGNyZWF0ZVBvb2wgKHtcclxuICAgIGhvc3Q6IFwibG9jYWxob3N0XCIsXHJcbiAgICB1c2VyOiBcInJvb3RcIixcclxuICAgIHBhc3N3b3JkIDogXCJcIixcclxuICAgIGRhdGFiYXNlOiBcInByb2R1Y3RzZGJcIixcclxufSk7XHJcblxyXG5leHBvcnQge3Bvb2x9O1xyXG4iXSwibmFtZXMiOlsiY3JlYXRlUG9vbCIsInBvb2wiLCJob3N0IiwidXNlciIsInBhc3N3b3JkIiwiZGF0YWJhc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./config/db.js\n");

/***/ }),

/***/ "(api)/./pages/api/products/[id].js":
/*!************************************!*\
  !*** ./pages/api/products/[id].js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _config_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../config/db */ \"(api)/./config/db.js\");\n\nasync function handler(req, res) {\n    switch(req.method){\n        case \"GET\":\n            return await getProducts(req, res);\n        case \"DELETE\":\n            return await deleteProduct(req, res);\n        case \"PUT\":\n            return await updateProduct(req, res);\n        default:\n            break;\n    }\n};\nconst getProducts = async (req, res)=>{\n    try {\n        const { id  } = req.query;\n        await _config_db__WEBPACK_IMPORTED_MODULE_0__.pool.query(\"SELECT * FROM product WHERE id=?\", [\n            id\n        ]);\n        return res.status(200).json();\n    } catch (error) {\n        return res.status(500).json({\n            message: error.message\n        });\n    }\n};\nconst deleteProduct = async (req, res)=>{\n    try {\n        const { id  } = req.query;\n        await _config_db__WEBPACK_IMPORTED_MODULE_0__.pool.query(\"DELETE FROM product WHERE id = ?\", [\n            id\n        ]);\n        return res.status(204).json();\n    } catch (error) {\n        return res.status(500).json({\n            message: error.message\n        });\n    }\n};\nconst updateProduct = async (req, res)=>{\n    const { id  } = req.query;\n    const { name , description , price  } = req.body;\n    try {\n        await _config_db__WEBPACK_IMPORTED_MODULE_0__.pool.query(\"UPDATE product SET name = ?, description = ?, price= ? WHERE id = ?\", [\n            name,\n            description,\n            price,\n            id\n        ]);\n        return res.status(204).json();\n    } catch (error) {\n        return res.status(500).json({\n            message: error.message\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdG9yLWFwcC8uL3BhZ2VzL2FwaS9wcm9kdWN0cy9baWRdLmpzPzgyZTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcG9vbCB9IGZyb20gXCIuLi8uLi8uLi9jb25maWcvZGJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICBzd2l0Y2ggKHJlcS5tZXRob2QpIHtcclxuICAgIGNhc2UgXCJHRVRcIjpcclxuICAgICAgcmV0dXJuIGF3YWl0IGdldFByb2R1Y3RzKHJlcSwgcmVzKTtcclxuXHJcbiAgICBjYXNlIFwiREVMRVRFXCI6XHJcbiAgICAgIHJldHVybiBhd2FpdCBkZWxldGVQcm9kdWN0KHJlcSwgcmVzKTtcclxuXHJcbiAgICBjYXNlIFwiUFVUXCI6XHJcbiAgICAgIHJldHVybiBhd2FpdCB1cGRhdGVQcm9kdWN0KHJlcSwgcmVzKTtcclxuXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICBicmVhaztcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGdldFByb2R1Y3RzID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgaWQgfSA9IHJlcS5xdWVyeTtcclxuICAgIGF3YWl0IHBvb2wucXVlcnkoXCJTRUxFQ1QgKiBGUk9NIHByb2R1Y3QgV0hFUkUgaWQ9P1wiLCBbaWRdKTtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbigpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGRlbGV0ZVByb2R1Y3QgPSBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBpZCB9ID0gcmVxLnF1ZXJ5O1xyXG4gICAgYXdhaXQgcG9vbC5xdWVyeShcIkRFTEVURSBGUk9NIHByb2R1Y3QgV0hFUkUgaWQgPSA/XCIsIFtpZF0pO1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjA0KS5qc29uKCk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgdXBkYXRlUHJvZHVjdCA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gIGNvbnN0IHsgaWQgfSA9IHJlcS5xdWVyeTtcclxuICBjb25zdCB7IG5hbWUsIGRlc2NyaXB0aW9uLCBwcmljZSB9ID0gcmVxLmJvZHk7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwb29sLnF1ZXJ5KFxyXG4gICAgICBcIlVQREFURSBwcm9kdWN0IFNFVCBuYW1lID0gPywgZGVzY3JpcHRpb24gPSA/LCBwcmljZT0gPyBXSEVSRSBpZCA9ID9cIixcclxuICAgICAgW25hbWUsIGRlc2NyaXB0aW9uLCBwcmljZSwgaWRdXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjA0KS5qc29uKCk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfSk7XHJcbiAgfVxyXG59O1xyXG4iXSwibmFtZXMiOlsicG9vbCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJnZXRQcm9kdWN0cyIsImRlbGV0ZVByb2R1Y3QiLCJ1cGRhdGVQcm9kdWN0IiwiaWQiLCJxdWVyeSIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsIm1lc3NhZ2UiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJwcmljZSIsImJvZHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/products/[id].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/products/[id].js"));
module.exports = __webpack_exports__;

})();