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
/* harmony import */ var _services_NoteDataService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/services/NoteDataService */ "./resources/js/services/NoteDataService.js");
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
  name: 'note-index',
  data: function data() {
    return {
      notes: [],
      checkbox: true,
      nota: {
        id: null
      }
    };
  },
  methods: {
    deleteNote: function deleteNote(id) {
      var _this = this;

      _services_NoteDataService__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"](id).then(function (response) {
        //Encontra o array que ira remove pelo id
        var noteRemove = _this.notes.find(function (notaa) {
          return notaa.id === id;
        }); //encontra o indice (index)


        var noteIndex = _this.notes.indexOf(noteRemove); //remove o item


        _this.notes.splice(noteIndex, 1);
      })["catch"](function (e) {
        console.log(e);
      });
    },
    updateNote: function updateNote(id) {
      //recupera a nota a ser atualizada
      var notaAtulizar = this.notes.find(function (notaa) {
        return notaa.id === id;
      }); //console.log(notaAtulizar.done);

      var data = {
        done: notaAtulizar.done
      };
      _services_NoteDataService__WEBPACK_IMPORTED_MODULE_0__["default"].update(id, data).then(function (response) {
        console.log(response.data);
      })["catch"](function (e) {
        console.log(e);
      });
    }
  },
  computed: {
    completedTasks: function completedTasks() {
      return this.notes.filter(function (notes) {
        return notes.done == "1";
      }).length;
    },
    progress: function progress() {
      return this.completedTasks / this.notes.length * 100;
    },
    remainingTasks: function remainingTasks() {
      return this.notes.length - this.completedTasks;
    }
  },
  // api,
  mounted: function mounted() {
    var _this2 = this;

    _services_NoteDataService__WEBPACK_IMPORTED_MODULE_0__["default"].getAll().then(function (response) {
      _this2.notes = response.data;
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
      return _http_common__WEBPACK_IMPORTED_MODULE_0__["default"].get("/api");
    }
  }, {
    key: "get",
    value: function get(id) {
      return _http_common__WEBPACK_IMPORTED_MODULE_0__["default"].get("/api/".concat(id));
    }
  }, {
    key: "create",
    value: function create(data) {
      return _http_common__WEBPACK_IMPORTED_MODULE_0__["default"].post("/api", data);
    }
  }, {
    key: "update",
    value: function update(id, data) {
      return _http_common__WEBPACK_IMPORTED_MODULE_0__["default"].put("/api/".concat(id), data);
    }
  }, {
    key: "delete",
    value: function _delete(id) {
      return _http_common__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"]("/api/".concat(id));
    } // deleteAll() {
    //   return http.delete(`/api`);
    // }
    // findByTitle(title) {
    //   return http.get(`/api?title=${title}`);
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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/notes/NoteIndex.vue?vue&type=style&index=0&id=fc39dcd2&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/notes/NoteIndex.vue?vue&type=style&index=0&id=fc39dcd2&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.v-progress-circular[data-v-fc39dcd2] {\r\n  margin: 1rem;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/notes/NoteIndex.vue?vue&type=style&index=0&id=fc39dcd2&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/notes/NoteIndex.vue?vue&type=style&index=0&id=fc39dcd2&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NoteIndex_vue_vue_type_style_index_0_id_fc39dcd2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NoteIndex.vue?vue&type=style&index=0&id=fc39dcd2&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/notes/NoteIndex.vue?vue&type=style&index=0&id=fc39dcd2&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NoteIndex_vue_vue_type_style_index_0_id_fc39dcd2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NoteIndex_vue_vue_type_style_index_0_id_fc39dcd2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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
/* harmony import */ var _NoteIndex_vue_vue_type_template_id_fc39dcd2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NoteIndex.vue?vue&type=template&id=fc39dcd2&scoped=true& */ "./resources/js/components/notes/NoteIndex.vue?vue&type=template&id=fc39dcd2&scoped=true&");
/* harmony import */ var _NoteIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NoteIndex.vue?vue&type=script&lang=js& */ "./resources/js/components/notes/NoteIndex.vue?vue&type=script&lang=js&");
/* harmony import */ var _NoteIndex_vue_vue_type_style_index_0_id_fc39dcd2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NoteIndex.vue?vue&type=style&index=0&id=fc39dcd2&scoped=true&lang=css& */ "./resources/js/components/notes/NoteIndex.vue?vue&type=style&index=0&id=fc39dcd2&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _NoteIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NoteIndex_vue_vue_type_template_id_fc39dcd2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _NoteIndex_vue_vue_type_template_id_fc39dcd2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "fc39dcd2",
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

/***/ "./resources/js/components/notes/NoteIndex.vue?vue&type=style&index=0&id=fc39dcd2&scoped=true&lang=css&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/notes/NoteIndex.vue?vue&type=style&index=0&id=fc39dcd2&scoped=true&lang=css& ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NoteIndex_vue_vue_type_style_index_0_id_fc39dcd2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NoteIndex.vue?vue&type=style&index=0&id=fc39dcd2&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/notes/NoteIndex.vue?vue&type=style&index=0&id=fc39dcd2&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/notes/NoteIndex.vue?vue&type=template&id=fc39dcd2&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/notes/NoteIndex.vue?vue&type=template&id=fc39dcd2&scoped=true& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NoteIndex_vue_vue_type_template_id_fc39dcd2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NoteIndex_vue_vue_type_template_id_fc39dcd2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NoteIndex_vue_vue_type_template_id_fc39dcd2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NoteIndex.vue?vue&type=template&id=fc39dcd2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/notes/NoteIndex.vue?vue&type=template&id=fc39dcd2&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/notes/NoteIndex.vue?vue&type=template&id=fc39dcd2&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/notes/NoteIndex.vue?vue&type=template&id=fc39dcd2&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "v-list",
    { attrs: { flat: "", subheader: "", "three-line": "" } },
    [
      _c("v-divider", { staticClass: "mt-1" }),
      _vm._v(" "),
      _c(
        "v-row",
        { attrs: { align: "center" } },
        [
          _c(
            "v-col",
            { attrs: { col: "6" } },
            [
              _c(
                "strong",
                { staticClass: " text--darken-2" },
                [
                  _vm._v("\n\t\t\t\t\tTotal:\n\t\t\t\t\t"),
                  _c("v-fade-transition", { attrs: { "leave-absolute": "" } }, [
                    _c("span", { key: "notas-" + _vm.notes.length }, [
                      _vm._v(
                        "\n\t\t\t\t\t\t\t" +
                          _vm._s(_vm.notes.length) +
                          "\n\t\t\t\t\t\t"
                      )
                    ])
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c("v-divider", { attrs: { vertical: "" } }),
              _vm._v(" "),
              _c("strong", { staticClass: " info--text text--darken-2" }, [
                _vm._v(
                  "\n\t\t\t\t\tRestantes: " +
                    _vm._s(_vm.remainingTasks) +
                    "\n\t\t\t\t"
                )
              ]),
              _vm._v(" "),
              _c("v-divider", { attrs: { vertical: "" } }),
              _vm._v(" "),
              _c("strong", { staticClass: "success--text text--darken-2" }, [
                _vm._v(
                  "\n\t\t\t\t\tRealizadas: " +
                    _vm._s(_vm.completedTasks) +
                    "\n\t\t\t\t"
                )
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { staticClass: "text-right", attrs: { col: "3" } },
            [
              _c(
                "v-progress-circular",
                {
                  attrs: {
                    value: _vm.progress,
                    rotate: 360,
                    size: 75,
                    width: 3,
                    color: "teal"
                  }
                },
                [
                  _vm._v(
                    "\n\t\t\t\t" + _vm._s(_vm.progress || 0) + "%\n\t\t\t\t"
                  )
                ]
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("v-divider", { staticClass: "mb-4" }),
      _vm._v(" "),
      _c(
        "v-list-item-group",
        { attrs: { multiple: "", "active-class": "" } },
        [
          _c(
            "v-fade-transition",
            { staticClass: "py-0", attrs: { group: "", tag: "v-list" } },
            _vm._l(_vm.notes, function(note) {
              return _c(
                "div",
                { key: note.id },
                [
                  _c(
                    "v-list-item",
                    [
                      [
                        _c(
                          "v-list-item-action",
                          [
                            _c("v-checkbox", {
                              attrs: { "true-value": "1", "false-value": "0" },
                              on: {
                                change: function($event) {
                                  return _vm.updateNote(note.id)
                                }
                              },
                              model: {
                                value: note.done,
                                callback: function($$v) {
                                  _vm.$set(note, "done", $$v)
                                },
                                expression: "note.done"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "v-list-item-content",
                          [
                            _c("v-list-item-title", [
                              _vm._v(_vm._s(note.title))
                            ]),
                            _vm._v(" "),
                            _c("v-list-item-subtitle", [
                              _vm._v(_vm._s(note.note))
                            ])
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "v-list-item-action",
                          [
                            _c(
                              "v-btn",
                              {
                                attrs: { icon: "" },
                                on: {
                                  click: function($event) {
                                    return _vm.deleteNote(note.id)
                                  }
                                }
                              },
                              [
                                _c(
                                  "v-icon",
                                  { attrs: { color: "grey lighten-1" } },
                                  [_vm._v("mdi-delete")]
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ]
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c("v-divider")
                ],
                1
              )
            }),
            0
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);