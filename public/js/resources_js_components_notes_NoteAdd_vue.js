"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_notes_NoteAdd_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/notes/NoteAdd.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/notes/NoteAdd.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
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
  name: "note-add",
  data: function data() {
    return {
      nota: {
        id: null,
        title: "",
        note: ""
      },
      submitted: false,
      valid: true,
      nameRules: [function (v) {
        return !!v || 'Campo é obrigatório';
      }, function (v) {
        return v && v.length >= 10 || 'Campo precisa ter no mínimo 10 letras';
      }]
    };
  },
  methods: {
    validate: function validate() {
      this.$refs.form.validate();
    },
    saveNote: function saveNote() {
      var _this = this;

      var data = {
        title: this.nota.title,
        note: this.nota.note
      };
      _services_NoteDataService__WEBPACK_IMPORTED_MODULE_0__["default"].create(data).then(function (response) {
        _this.nota.id = response.data.id;
        console.log(response.data);
        _this.submitted = true;
      })["catch"](function (e) {
        console.log(e);
      });
    }
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

/***/ "./resources/js/components/notes/NoteAdd.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/notes/NoteAdd.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NoteAdd_vue_vue_type_template_id_72aac926___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NoteAdd.vue?vue&type=template&id=72aac926& */ "./resources/js/components/notes/NoteAdd.vue?vue&type=template&id=72aac926&");
/* harmony import */ var _NoteAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NoteAdd.vue?vue&type=script&lang=js& */ "./resources/js/components/notes/NoteAdd.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NoteAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NoteAdd_vue_vue_type_template_id_72aac926___WEBPACK_IMPORTED_MODULE_0__.render,
  _NoteAdd_vue_vue_type_template_id_72aac926___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/notes/NoteAdd.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/notes/NoteAdd.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/notes/NoteAdd.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NoteAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NoteAdd.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/notes/NoteAdd.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NoteAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/notes/NoteAdd.vue?vue&type=template&id=72aac926&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/notes/NoteAdd.vue?vue&type=template&id=72aac926& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NoteAdd_vue_vue_type_template_id_72aac926___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NoteAdd_vue_vue_type_template_id_72aac926___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NoteAdd_vue_vue_type_template_id_72aac926___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NoteAdd.vue?vue&type=template&id=72aac926& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/notes/NoteAdd.vue?vue&type=template&id=72aac926&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/notes/NoteAdd.vue?vue&type=template&id=72aac926&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/notes/NoteAdd.vue?vue&type=template&id=72aac926& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
  return !_vm.submitted
    ? _c(
        "div",
        [
          _c("h1", [_vm._v("Nova Nota")]),
          _vm._v(" "),
          _c(
            "v-form",
            {
              ref: "form",
              attrs: { "lazy-validation": "" },
              model: {
                value: _vm.valid,
                callback: function($$v) {
                  _vm.valid = $$v
                },
                expression: "valid"
              }
            },
            [
              _c("v-text-field", {
                attrs: {
                  counter: 10,
                  rules: _vm.nameRules,
                  label: "Titulo",
                  name: "title",
                  required: ""
                },
                model: {
                  value: _vm.nota.title,
                  callback: function($$v) {
                    _vm.$set(_vm.nota, "title", $$v)
                  },
                  expression: "nota.title"
                }
              }),
              _vm._v(" "),
              _c("v-text-field", {
                attrs: {
                  counter: 10,
                  rules: _vm.nameRules,
                  label: "Descrição",
                  name: "note",
                  required: ""
                },
                model: {
                  value: _vm.nota.note,
                  callback: function($$v) {
                    _vm.$set(_vm.nota, "note", $$v)
                  },
                  expression: "nota.note"
                }
              }),
              _vm._v(" "),
              _c("v-checkbox", {
                attrs: { label: "Realizada?", name: "done", required: "" },
                model: {
                  value: _vm.checkbox,
                  callback: function($$v) {
                    _vm.checkbox = $$v
                  },
                  expression: "checkbox"
                }
              }),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  staticClass: "mr-4",
                  attrs: { disabled: !_vm.valid, color: "success" },
                  on: { click: _vm.saveNote }
                },
                [_vm._v("\n      Cadastrar\n    ")]
              )
            ],
            1
          )
        ],
        1
      )
    : _c(
        "div",
        [
          _c("h4", [_vm._v("Sucesso!")]),
          _vm._v(" "),
          _c("v-btn", { attrs: { to: "/home" } }, [_vm._v("Voltar")])
        ],
        1
      )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);