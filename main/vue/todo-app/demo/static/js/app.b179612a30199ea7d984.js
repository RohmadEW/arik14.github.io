webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(13)
}
var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(8),
  /* template */
  __webpack_require__(23),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 7 */,
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sweetalert__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sweetalert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sweetalert__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_TodoList__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_TodoList___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_TodoList__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_CreateTodo__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_CreateTodo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_CreateTodo__);
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






/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'app',
    components: {
        TodoList: __WEBPACK_IMPORTED_MODULE_1__components_TodoList___default.a,
        CreateTodo: __WEBPACK_IMPORTED_MODULE_2__components_CreateTodo___default.a
    },
    data() {
        return {
            todos: [{
                title: 'Todo A',
                project: 'Project A',
                done: false
            }, {
                title: 'Todo B',
                project: 'Project B',
                done: true
            }, {
                title: 'Todo C',
                project: 'Project C',
                done: false
            }, {
                title: 'Todo D',
                project: 'Project D',
                done: false
            }]
        };
    },
    methods: {
        createTodo(newTodo) {
            this.todos.push(newTodo);
            __WEBPACK_IMPORTED_MODULE_0_sweetalert___default()('Success!', 'Todo created!', 'success');
        }
    }
});

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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

/* harmony default export */ __webpack_exports__["default"] = ({
	data() {
		return {
			titleText: '',
			projectText: '',
			isCreating: false
		};
	},
	methods: {
		openForm() {
			this.isCreating = true;
		},
		closeForm(e) {
			e.preventDefault();
			this.isCreating = false;
		},
		sendForm(e) {
			e.preventDefault();
			if (this.titleText.length > 0 && this.projectText.length > 0) {
				const title = this.titleText;
				const project = this.projectText;
				this.$emit('create-todo', {
					title,
					project,
					done: false
				});
				this.titleText = '';
				this.projectText = '';
				this.isCreating = false;
			}
		}
	}
});

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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

/* harmony default export */ __webpack_exports__["default"] = ({
	props: ['todo'],
	data() {
		return {
			isEditing: false
		};
	},
	methods: {
		completeTodo(todo) {
			this.$emit('complete-todo', todo);
		},
		deleteTodo(todo) {
			this.$emit('delete-todo', todo);
		},
		showForm() {
			this.isEditing = true;
		},
		hideForm(e) {
			e.preventDefault();
			this.isEditing = false;
		}
	}
});

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sweetalert__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sweetalert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sweetalert__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Todo__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Todo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Todo__);
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
	props: ['todos'],
	components: {
		Todo: __WEBPACK_IMPORTED_MODULE_1__Todo___default.a
	},
	methods: {
		deleteTodo(todo) {
			__WEBPACK_IMPORTED_MODULE_0_sweetalert___default()({
				title: 'Are you sure?',
				text: 'This Todo will be permanently deleted!',
				type: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#dd6b55',
				confirmButtonText: 'Yes, delete it',
				closeOnConfirm: false
			}, () => {
				const todoIndex = this.todos.indexOf(todo);
				this.todos.splice(todoIndex, 1);
				__WEBPACK_IMPORTED_MODULE_0_sweetalert___default()('Deleted!', 'Your Todo has been deleted.', 'success');
			});
		},
		completeTodo(todo) {
			const todoIndex = this.todos.indexOf(todo);
			this.todos[todoIndex].done = true;
			__WEBPACK_IMPORTED_MODULE_0_sweetalert___default()('Success!', 'Todo completed', 'success');
		}
	}
});

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.



__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].config.productionTip = false;

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
  el: '#app',
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_1__App___default.a }
});

/***/ }),
/* 13 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 14 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 15 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(9),
  /* template */
  __webpack_require__(24),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(15)
}
var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(10),
  /* template */
  __webpack_require__(26),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(14)
}
var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(11),
  /* template */
  __webpack_require__(25),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-975d2b2a",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container",
    attrs: {
      "id": "app"
    }
  }, [_c('div', {
    staticClass: "page-header"
  }, [_c('h1', [_vm._v("Vue.js Todo App")]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-4"
  }), _vm._v(" "), _c('div', {
    staticClass: "col-md-4"
  }, [_c('todo-list', {
    attrs: {
      "todos": _vm.todos
    }
  }), _vm._v(" "), _c('create-todo', {
    on: {
      "create-todo": _vm.createTodo
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "col-md-4"
  })])])])
},staticRenderFns: []}

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {}, [_c('button', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.isCreating),
      expression: "!isCreating"
    }],
    staticClass: "btn btn-default",
    attrs: {
      "data-toggle": "modal",
      "data-target": "#myModal"
    },
    on: {
      "click": _vm.openForm
    }
  }, [_vm._v("\n\t\tAdd\n\t")]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isCreating),
      expression: "isCreating"
    }],
    staticClass: "modal fade",
    attrs: {
      "id": "myModal",
      "tabindex": "-1",
      "role": "dialog"
    }
  }, [_c('div', {
    staticClass: "modal-dialog",
    attrs: {
      "role": "document"
    }
  }, [_c('div', {
    staticClass: "modal-content"
  }, [_c('div', {
    staticClass: "modal-header"
  }), _vm._v(" "), _c('div', {
    staticClass: "modal-body"
  }, [_c('form', [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Title")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.titleText),
      expression: "titleText"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": (_vm.titleText)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.titleText = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Project")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.projectText),
      expression: "projectText"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": (_vm.projectText)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.projectText = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-default",
    attrs: {
      "data-dismiss": "modal"
    },
    on: {
      "click": _vm.sendForm
    }
  }, [_vm._v("\n\t\t\t\t\t\t\tCreate\n\t\t\t\t\t\t")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-default",
    attrs: {
      "data-dismiss": "modal"
    },
    on: {
      "click": _vm.closeForm
    }
  }, [_vm._v("\n\t\t\t\t\t\t\tCancel\n\t\t\t\t\t\t")])])])])])])])
},staticRenderFns: []}

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('p', [_vm._v("Completed Tasks: " + _vm._s(_vm.todos.filter(function (todo) {
    return todo.done === true
  }).length))]), _vm._v(" "), _c('p', [_vm._v("Pending Tasks: " + _vm._s(_vm.todos.filter(function (todo) {
    return todo.done === false
  }).length))]), _vm._v(" "), _vm._l((_vm.todos), function(todo) {
    return _c('todo', {
      attrs: {
        "todo": todo
      },
      on: {
        "delete-todo": _vm.deleteTodo,
        "complete-todo": _vm.completeTodo
      }
    })
  })], 2)
},staticRenderFns: []}

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {}, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.isEditing),
      expression: "!isEditing"
    }],
    staticClass: "panel panel-primary"
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.todo.title) + "\n\t\t")]), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.todo.project) + "\n\t\t")]), _vm._v(" "), _c('div', {
    staticClass: "panel-footer"
  }, [_c('button', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.isEditing && _vm.todo.done),
      expression: "!isEditing && todo.done"
    }],
    staticClass: "btn btn-success",
    attrs: {
      "disabled": ""
    }
  }, [_vm._v("\n\t\t\t\tCompleted\n\t\t\t")]), _vm._v(" "), _c('button', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.isEditing && !_vm.todo.done),
      expression: "!isEditing && !todo.done"
    }],
    staticClass: "btn btn-info",
    on: {
      "click": function($event) {
        _vm.completeTodo(_vm.todo)
      }
    }
  }, [_vm._v("\n\t\t\t\tPending\n\t\t\t")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-default",
    on: {
      "click": _vm.showForm
    }
  }, [_vm._v("\n\t\t\t\tEdit\n\t\t\t")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-default",
    on: {
      "click": function($event) {
        _vm.deleteTodo(_vm.todo)
      }
    }
  }, [_vm._v("\n\t\t\t\tDelete\n\t\t\t")])])]), _vm._v("\n\n\t//form is visible in editing mode\n\t"), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isEditing),
      expression: "isEditing"
    }],
    staticClass: "panel panel-primary"
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.todo.title) + "\n\t\t")]), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_c('form', [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Title")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.todo.title),
      expression: "todo.title"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": (_vm.todo.title)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.todo.title = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Project")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.todo.project),
      expression: "todo.project"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": (_vm.todo.project)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.todo.project = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('button', {
    on: {
      "click": _vm.hideForm
    }
  }, [_vm._v("\n\t\t\t\t\tClose\n\t\t\t\t")])])])])])
},staticRenderFns: []}

/***/ })
],[12]);
//# sourceMappingURL=app.b179612a30199ea7d984.js.map