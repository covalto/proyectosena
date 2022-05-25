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
exports.id = "pages/api/products";
exports.ids = ["pages/api/products"];
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

/***/ "(api)/./pages/api/products/index.js":
/*!*************************************!*\
  !*** ./pages/api/products/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _config_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../config/db */ \"(api)/./config/db.js\");\n\nasync function handler(req, res) {\n    switch(req.method){\n        case \"GET\":\n            return await getProducts(req, res);\n        case \"POST\":\n            return await saveProduct(req, res);\n    }\n};\nconst getProducts = async (req, res)=>{\n    try {\n        const [result] = await _config_db__WEBPACK_IMPORTED_MODULE_0__.pool.query(\"SELECT * FROM product\");\n        return res.status(200).json(result);\n    } catch (error) {\n        return res.status(500).json({\n            error\n        });\n    }\n};\nconst saveProduct = async (req, res)=>{\n    try {\n        const { name , description , price  } = req.body;\n        const [result] = await _config_db__WEBPACK_IMPORTED_MODULE_0__.pool.query(\"INSERT INTO product SET ?\", {\n            name,\n            description,\n            price\n        });\n        return res.status(200).json({\n            name,\n            description,\n            price,\n            id: result.insertId\n        });\n    } catch (error) {\n        return res.status(500).json({\n            message: error.message\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcHJvZHVjdHMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBeUM7QUFFMUIsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRSxDQUFDO0lBQy9DLE1BQU0sQ0FBRUQsR0FBRyxDQUFDRSxNQUFNO1FBQ2hCLElBQUksQ0FBQyxDQUFLO1lBQ1IsTUFBTSxDQUFDLEtBQUssQ0FBQ0MsV0FBVyxDQUFDSCxHQUFHLEVBQUVDLEdBQUc7UUFFbkMsSUFBSSxDQUFDLENBQU07WUFDVCxNQUFNLENBQUMsS0FBSyxDQUFDRyxXQUFXLENBQUNKLEdBQUcsRUFBRUMsR0FBRzs7QUFFdkMsQ0FBQztBQUVELEtBQUssQ0FBQ0UsV0FBVyxVQUFVSCxHQUFHLEVBQUVDLEdBQUcsR0FBSyxDQUFDO0lBQ3ZDLEdBQUcsQ0FBQyxDQUFDO1FBQ0gsS0FBSyxFQUFFSSxNQUFNLElBQUksS0FBSyxDQUFDUCxrREFBVSxDQUFDLENBQXVCO1FBQ3pELE1BQU0sQ0FBQ0csR0FBRyxDQUFDTSxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUNILE1BQU07SUFDcEMsQ0FBQyxDQUFDLEtBQUssRUFBRUksS0FBSyxFQUFFLENBQUM7UUFDZixNQUFNLENBQUNSLEdBQUcsQ0FBQ00sTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDLENBQUM7WUFBQ0MsS0FBSztRQUFDLENBQUM7SUFDdkMsQ0FBQztBQUNILENBQUM7QUFFRCxLQUFLLENBQUNMLFdBQVcsVUFBVUosR0FBRyxFQUFFQyxHQUFHLEdBQUssQ0FBQztJQUN2QyxHQUFHLENBQUMsQ0FBQztRQUNILEtBQUssQ0FBQyxDQUFDLENBQUNTLElBQUksR0FBRUMsV0FBVyxHQUFFQyxLQUFLLEVBQUMsQ0FBQyxHQUFHWixHQUFHLENBQUNhLElBQUk7UUFDN0MsS0FBSyxFQUFFUixNQUFNLElBQUksS0FBSyxDQUFDUCxrREFBVSxDQUFDLENBQTJCLDRCQUFFLENBQUM7WUFDOURZLElBQUk7WUFDSkMsV0FBVztZQUNYQyxLQUFLO1FBQ1AsQ0FBQztRQUVELE1BQU0sQ0FBQ1gsR0FBRyxDQUNQTSxNQUFNLENBQUMsR0FBRyxFQUNWQyxJQUFJLENBQUMsQ0FBQztZQUFDRSxJQUFJO1lBQUVDLFdBQVc7WUFBRUMsS0FBSztZQUFFRSxFQUFFLEVBQUVULE1BQU0sQ0FBQ1UsUUFBUTtRQUFDLENBQUM7SUFDM0QsQ0FBQyxDQUFDLEtBQUssRUFBRU4sS0FBSyxFQUFFLENBQUM7UUFDZixNQUFNLENBQUNSLEdBQUcsQ0FBQ00sTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDLENBQUM7WUFBQ1EsT0FBTyxFQUFFUCxLQUFLLENBQUNPLE9BQU87UUFBQyxDQUFDO0lBQ3hELENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3Rvci1hcHAvLi9wYWdlcy9hcGkvcHJvZHVjdHMvaW5kZXguanM/NTk3MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwb29sIH0gZnJvbSBcIi4uLy4uLy4uL2NvbmZpZy9kYlwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIHN3aXRjaCAocmVxLm1ldGhvZCkge1xyXG4gICAgY2FzZSBcIkdFVFwiOlxyXG4gICAgICByZXR1cm4gYXdhaXQgZ2V0UHJvZHVjdHMocmVxLCByZXMpO1xyXG5cclxuICAgIGNhc2UgXCJQT1NUXCI6XHJcbiAgICAgIHJldHVybiBhd2FpdCBzYXZlUHJvZHVjdChyZXEsIHJlcyk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBnZXRQcm9kdWN0cyA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBbcmVzdWx0XSA9IGF3YWl0IHBvb2wucXVlcnkoXCJTRUxFQ1QgKiBGUk9NIHByb2R1Y3RcIik7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24ocmVzdWx0KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3IgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3Qgc2F2ZVByb2R1Y3QgPSBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBuYW1lLCBkZXNjcmlwdGlvbiwgcHJpY2UgfSA9IHJlcS5ib2R5O1xyXG4gICAgY29uc3QgW3Jlc3VsdF0gPSBhd2FpdCBwb29sLnF1ZXJ5KFwiSU5TRVJUIElOVE8gcHJvZHVjdCBTRVQgP1wiLCB7XHJcbiAgICAgIG5hbWUsXHJcbiAgICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgICBwcmljZSxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiByZXNcclxuICAgICAgLnN0YXR1cygyMDApXHJcbiAgICAgIC5qc29uKHsgbmFtZSwgZGVzY3JpcHRpb24sIHByaWNlLCBpZDogcmVzdWx0Lmluc2VydElkIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIH0pO1xyXG4gIH1cclxufTtcclxuIl0sIm5hbWVzIjpbInBvb2wiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiZ2V0UHJvZHVjdHMiLCJzYXZlUHJvZHVjdCIsInJlc3VsdCIsInF1ZXJ5Iiwic3RhdHVzIiwianNvbiIsImVycm9yIiwibmFtZSIsImRlc2NyaXB0aW9uIiwicHJpY2UiLCJib2R5IiwiaWQiLCJpbnNlcnRJZCIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/products/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/products/index.js"));
module.exports = __webpack_exports__;

})();