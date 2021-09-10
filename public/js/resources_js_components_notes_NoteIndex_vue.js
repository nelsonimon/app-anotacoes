"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_notes_NoteIndex_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/notes/NoteIndex.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/notes/NoteIndex.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_NoteDataService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/NoteDataService */ "./resources/js/services/NoteDataService.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'note-index',
  data: function data() {
    return {
      notes: []
    };
  },
  // api,
  mounted: function mounted() {
    var _this = this;

    _services_NoteDataService__WEBPACK_IMPORTED_MODULE_0__["default"].getAll().then(function (response) {
      _this.notes = response.data;
    })["catch"](function (e) {
      console.log(e);
    });
  }
});

/***/ }),

/***/ "./resources/js/services/NoteDataService.js":
/*!**************************************************!*\
  !*** ./resources/js/services/NoteDataService.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _http_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http-common */ "./resources/js/services/http-common.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var NoteDataService = /*#__PURE__*/function () {
  function NoteDataService() {
    _classCallCheck(this, NoteDataService);
  }

  _createClass(NoteDataService, [{
    key: "getAll",
    value: function getAll() {
      return _http_common__WEBPACK_IMPORTED_MODULE_0__["default"].get("/note");
    }
  }, {
    key: "get",
    value: function get(id) {
      return _http_common__WEBPACK_IMPORTED_MODULE_0__["default"].get("/note/".concat(id));
    }
  }, {
    key: "create",
    value: function create(data) {
      return _http_common__WEBPACK_IMPORTED_MODULE_0__["default"].post("/note", data);
    }
  }, {
    key: "update",
    value: function update(id, data) {
      return _http_common__WEBPACK_IMPORTED_MODULE_0__["default"].put("/note/".concat(id), data);
    }
  }, {
    key: "delete",
    value: function _delete(id) {
      return _http_common__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"]("/note/".concat(id));
    } // deleteAll() {
    //   return http.delete(`/note`);
    // }
    // findByTitle(title) {
    //   return http.get(`/note?title=${title}`);
    // }

  }]);

  return NoteDataService;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new NoteDataService());

/***/ }),

/***/ "./resources/js/services/http-common.js":
/*!**********************************************!*\
  !*** ./resources/js/services/http-common.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: "http://127.0.0.1:8000/",
  headers: {
    "Content-type": "application/json"
  }
}));

/***/ }),

/***/ "./resources/js/components/notes/NoteIndex.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/notes/NoteIndex.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NoteIndex_vue_vue_type_template_id_fc39dcd2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NoteIndex.vue?vue&type=template&id=fc39dcd2& */ "./resources/js/components/notes/NoteIndex.vue?vue&type=template&id=fc39dcd2&");
/* harmony import */ var _NoteIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NoteIndex.vue?vue&type=script&lang=js& */ "./resources/js/components/notes/NoteIndex.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NoteIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NoteIndex_vue_vue_type_template_id_fc39dcd2___WEBPACK_IMPORTED_MODULE_0__.render,
  _NoteIndex_vue_vue_type_template_id_fc39dcd2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/notes/NoteIndex.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/notes/NoteIndex.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/notes/NoteIndex.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NoteIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NoteIndex.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/notes/NoteIndex.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NoteIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/notes/NoteIndex.vue?vue&type=template&id=fc39dcd2&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/notes/NoteIndex.vue?vue&type=template&id=fc39dcd2& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NoteIndex_vue_vue_type_template_id_fc39dcd2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NoteIndex_vue_vue_type_template_id_fc39dcd2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NoteIndex_vue_vue_type_template_id_fc39dcd2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NoteIndex.vue?vue&type=template&id=fc39dcd2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/notes/NoteIndex.vue?vue&type=template&id=fc39dcd2&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/notes/NoteIndex.vue?vue&type=template&id=fc39dcd2&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/notes/NoteIndex.vue?vue&type=template&id=fc39dcd2& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "col-12" }, [
      _c("table", { staticClass: "table table-striped" }, [
        _c("thead", [
          _c("tr", [
            _c("th", [_vm._v("Nota")]),
            _vm._v(" "),
            _c(
              "th",
              { staticClass: "text-right" },
              [
                _c("router-link", { attrs: { to: { name: "note-add" } } }, [
                  _c("button", { staticClass: "btn btn-primary" }, [
                    _vm._v("Adicionar")
                  ])
                ])
              ],
              1
            )
          ])
        ]),
        _vm._v(" "),
        _c(
          "tbody",
          _vm._l(_vm.notes, function(note) {
            return _c("tr", { key: note.id }, [
              _c("td", [
                _vm._v("\r\n                        " + _vm._s(note.title)),
                _c("br"),
                _vm._v(
                  "\r\n                        " +
                    _vm._s(note.note) +
                    "\r\n                    "
                )
              ]),
              _vm._v(" "),
              _c(
                "td",
                [
                  _c(
                    "router-link",
                    {
                      attrs: {
                        to: { name: "note-view", params: { id: note.id } }
                      }
                    },
                    [
                      _c("button", { staticClass: "btn btn-primary" }, [
                        _vm._v("Ver")
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    {
                      attrs: {
                        to: { name: "note-update", params: { id: note.id } }
                      }
                    },
                    [
                      _c("button", { staticClass: "btn btn-primary" }, [
                        _vm._v("Editar")
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    {
                      attrs: {
                        to: { name: "note-delete", params: { id: note.id } }
                      }
                    },
                    [
                      _c("button", { staticClass: "btn btn-primary" }, [
                        _vm._v("Deletar")
                      ])
                    ]
                  )
                ],
                1
              )
            ])
          }),
          0
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);