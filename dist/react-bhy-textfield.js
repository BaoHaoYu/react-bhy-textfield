(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("immutable"), require("immutable/contrib/cursor"), require("prop-types"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["immutable", "immutable/contrib/cursor", "prop-types", "react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("immutable"), require("immutable/contrib/cursor"), require("prop-types"), require("react")) : factory(root["immutable"], root["immutable/contrib/cursor"], root["prop-types"], root["react"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = test;
function replaceLabel(text, props) {
    return text.replace('[label]', props.label);
}

function test(value, props) {
    var info = {};

    info = testRequire(value, props);
    if (!info.pass) {
        return info;
    }

    info = max(value, props);
    if (!info.pass) {
        return info;
    }

    info = min(value, props);
    if (!info.pass) {
        return info;
    }

    info = rex(value, props);
    if (!info.pass) {
        return info;
    }

    return { pass: !0, errorText: '' };
}

function max(value, props) {
    if (props.max && value.length > props.max) {
        return { pass: !1, errorText: replaceLabel(props.maxErrorText, props).replace('[max]', props.max) };
    }
    return { pass: !0, errorText: '' };
}

function min(value, props) {
    if (props.min && value.length < props.min) {
        return { pass: !1, errorText: replaceLabel(props.minErrorText, props).replace('[min]', props.min) };
    }
    return { pass: !0, errorText: '' };
}

function testRequire(value, props) {
    if (props.require && value.length == 0) {
        return { pass: !1, errorText: replaceLabel(props.emptyErrorText, props) };
    }
    return { pass: !0, errorText: '' };
}

function rex(value, props) {
    if (props.rex) {
        if (props.rex.test(value) && !props.rexPassIsRight || !props.rex.test(value) && props.rexPassIsRight) {
            return { pass: !1, errorText: replaceLabel(props.rexErrorText, props) };
        }
    } else if (props.rexs) {
        for (var i = 0; i < props.rexs.length; i++) {
            var v = props.rexs[i];
            var rex = v.rex || v;
            if (rex.test(value) && !v.passIsRight || !rex.test(value) && v.passIsRight) {
                return { pass: !1, errorText: replaceLabel(v.errorText || props.rexErrorText, props) };
            }
        }
    }

    return { pass: !0, errorText: '' };
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(7);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(9)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/.css-loader@0.28.1@css-loader/index.js??ref--1-1!../node_modules/.postcss-loader@2.0.5@postcss-loader/lib/index.js??ref--1-2!../node_modules/.stylus-loader@3.0.1@stylus-loader/index.js!./style.styl", function() {
			var newContent = require("!!../node_modules/.css-loader@0.28.1@css-loader/index.js??ref--1-1!../node_modules/.postcss-loader@2.0.5@postcss-loader/lib/index.js??ref--1-2!../node_modules/.stylus-loader@3.0.1@stylus-loader/index.js!./style.styl");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_styl__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_immutable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_testInput__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_immutable_contrib_cursor__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_immutable_contrib_cursor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_immutable_contrib_cursor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var Text = function (_React$Component) {
    _inherits(Text, _React$Component);

    function Text(props) {
        _classCallCheck(this, Text);

        var _this = _possibleConstructorReturn(this, (Text.__proto__ || Object.getPrototypeOf(Text)).call(this, props));

        _this.state = {
            $$s: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_immutable__["fromJS"])({
                data: {
                    focus: !1,
                    errorText: ''
                }
            })
        };
        return _this;
    }

    _createClass(Text, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var p = this.props;
            var $$data = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_immutable_contrib_cursor__["from"])(this.state.$$s, ['data'], function ($$newS) {
                return _this2._setIn($$newS);
            });
            var isWarn = this._isWarn();
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: this._rootClass({ $$data: $$data, isWarn: isWarn }) },
                p.label != '' && p.showLabel && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: __WEBPACK_IMPORTED_MODULE_1__style_styl___default.a['BhyTextFile-label'], style: { width: p.layout == 'y' ? '100%' : p.labelWith } },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'label',
                        { className: __WEBPACK_IMPORTED_MODULE_1__style_styl___default.a['BhyTextFile-label-name'], style: { color: isWarn ? p.errorTextColor : null } },
                        p.label
                    ),
                    p.layout != 'y' && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'label',
                        { className: __WEBPACK_IMPORTED_MODULE_1__style_styl___default.a['BhyTextFile-label-mao'], style: { color: isWarn ? p.errorTextColor : null } },
                        ':'
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: __WEBPACK_IMPORTED_MODULE_1__style_styl___default.a['BhyTextFile-input'] + ' ' + (p.iconClass && __WEBPACK_IMPORTED_MODULE_1__style_styl___default.a['hasIcon']), style: { width: p.full ? '100%' : p.inputWith } },
                    p.iconClass && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: __WEBPACK_IMPORTED_MODULE_1__style_styl___default.a['boxIcon'] },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: p.iconClass })
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
                        type: p.type,
                        title: p.title,
                        name: p.name,
                        value: p.value,
                        defaultValue: p.defaultValue,
                        placeholder: p.placeholder,
                        onChange: function onChange(e) {
                            return _this2.change(e, $$data);
                        },
                        onFocus: function onFocus(e) {
                            return _this2.focus(e, $$data);
                        },
                        onBlur: function onBlur(e) {
                            return _this2.blur(e, $$data);
                        }
                    }),
                    p.theme == 'line' && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: __WEBPACK_IMPORTED_MODULE_1__style_styl___default.a['BhyTextFile-boxLine'] + ' ' + ($$data.get('focus') && __WEBPACK_IMPORTED_MODULE_1__style_styl___default.a['focus']) },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('p', { className: '' + __WEBPACK_IMPORTED_MODULE_1__style_styl___default.a['before'], style: { backgroundColor: isWarn ? p.lineErrorColor : p.lineBorderColor } }),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('p', { className: '' + __WEBPACK_IMPORTED_MODULE_1__style_styl___default.a['after'], style: { backgroundColor: isWarn ? p.lineErrorColor : p.lineFocusColor } })
                    ),
                    isWarn && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'p',
                        { className: __WEBPACK_IMPORTED_MODULE_1__style_styl___default.a['BhyTextFile-errorText'], style: { color: p.errorTextColor } },
                        p.errorText || $$data.get('errorText')
                    )
                )
            );
        }
    }, {
        key: '_setIn',
        value: function _setIn($$s) {
            this.setState({ $$s: $$s });
        }
    }, {
        key: '_isWarn',
        value: function _isWarn() {
            var $$data = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_immutable_contrib_cursor__["from"])(this.state.$$s, ['data']);
            var p = this.props;
            return p.errorText !== '' || $$data.get('errorText') !== '';
        }
    }, {
        key: '_rootClass',
        value: function _rootClass(_ref) {
            var $$data = _ref.$$data,
                isWarn = _ref.isWarn;

            var p = this.props;
            return p.className + ' ' + __WEBPACK_IMPORTED_MODULE_1__style_styl___default.a['BhyTextFile'] + ' ' + (__WEBPACK_IMPORTED_MODULE_1__style_styl___default.a[p.size] || '') + ' ' + (__WEBPACK_IMPORTED_MODULE_1__style_styl___default.a[p.theme] || '') + ' ' + (__WEBPACK_IMPORTED_MODULE_1__style_styl___default.a['layout' + p.layout] || '') + ' ' + (isWarn ? __WEBPACK_IMPORTED_MODULE_1__style_styl___default.a['warn'] || '' : '') + ' ' + (p.full ? __WEBPACK_IMPORTED_MODULE_1__style_styl___default.a['full'] || '' : '') + ' ' + ($$data.get('focus') ? __WEBPACK_IMPORTED_MODULE_1__style_styl___default.a['focues'] || '' : '');
        }
    }, {
        key: 'focus',
        value: function focus(e, $$data) {
            var p = this.props;
            $$data.set('focus', !0);
            p.onFocus(e);
        }
    }, {
        key: 'blur',
        value: function blur(e, $$data) {
            var p = this.props;
            $$data.set('focus', !1);
            p.onBlur(e);
        }
    }, {
        key: 'change',
        value: function change(e, $$data) {
            var p = this.props;
            var value = e.target.value;
            var info = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util_testInput__["a" /* default */])(value, p);
            if (p.passSetValue && !info.pass) {} else {
                $$data.set('errorText', info.errorText);
                p.onChange(_extends({ e: e, value: value }, info));
            }
        }
    }]);

    return Text;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var cn = {
    maxErrorText: '[label]不可以超过[max]个字符！',
    minErrorText: '[label]不可少于[min]个字符！',
    rexErrorText: '[label]格式不对！',
    emptyErrorText: '[label]不可为空！'
};

var en = {
    maxErrorText: '[label] max length is [max]！',
    minErrorText: '[label] min length is [min]！',
    rexErrorText: '[label] format is wrong！',
    emptyErrorText: '[label] not allow empty！'
};
Text.defaultProps = _extends({
    theme: 'border',
    full: !1,
    require: !0,
    max: 20,
    min: 2,
    value: '',
    label: '',
    errorText: '',
    showLabel: !0,
    rexPassIsRight: !0,
    className: '',
    inputWith: '200px',
    size: 'default', // sm
    layout: 'x',
    onFocus: function onFocus() {},
    onBlur: function onBlur() {},
    onChange: function onChange() {}
}, en);

Text.propTypes = {
    className: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string,
    labelWith: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string,
    layout: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string,
    theme: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string,
    language: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string,
    size: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string,
    showLabel: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool,
    inputWith: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string,
    full: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool,
    label: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string,
    type: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string,
    title: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string,
    name: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string,
    placeholder: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string,
    passSetValue: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool,
    value: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.any.isRequired,
    defaultValue: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.any,

    max: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.number,
    min: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.number,
    maxErrorText: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string,
    minErrorText: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string,
    rexs: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.array,
    rex: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.any,
    rexErrorText: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string,
    emptyErrorText: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string,

    rexPassIsRight: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool,
    require: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool,
    onChange: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func,
    onFocus: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func,
    onBlur: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func,
    errorText: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string,

    lineBorderColor: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string,
    lineFocusColor: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string,
    lineErrorColor: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string,
    errorTextColor: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string,

    iconClass: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string
};

/* harmony default export */ __webpack_exports__["default"] = (Text);

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(undefined);
// imports


// module
exports.push([module.i, ".BhyTextFile__2qCkP {\n  position: relative;\n  display: table;\n}\n.BhyTextFile__2qCkP.name__1B72S {\n  display: block;\n}\n.BhyTextFile__2qCkP * {\n  margin: 0;\n  padding: 0;\n  -webkit-box-sizing: border-box;\n     -moz-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.BhyTextFile__2qCkP input {\n  outline: 0;\n}\n.BhyTextFile__2qCkP.line__1_edJ {\n  position: static;\n}\n.BhyTextFile__2qCkP.line__1_edJ .BhyTextFile-input__1GDB_ input {\n  -webkit-box-shadow: none;\n     -moz-box-shadow: none;\n          box-shadow: none;\n  border: none;\n  padding-left: 2px;\n  padding-bottom: 6px;\n}\n.BhyTextFile__2qCkP.line__1_edJ .BhyTextFile-input__1GDB_ input:focus {\n  -webkit-box-shadow: none;\n     -moz-box-shadow: none;\n          box-shadow: none;\n  outline: 0;\n  border: none;\n}\n.BhyTextFile__2qCkP.line__1_edJ .BhyTextFile-boxLine__2PrI6 {\n  position: absolute;\n  width: 100%;\n}\n.BhyTextFile__2qCkP.line__1_edJ .BhyTextFile-boxLine__2PrI6 .before__3x7FU, .BhyTextFile__2qCkP.line__1_edJ .BhyTextFile-boxLine__2PrI6 .after__1ZMNA {\n  width: 100%;\n  content: '';\n  position: absolute;\n  bottom: 0;\n}\n.BhyTextFile__2qCkP.line__1_edJ .BhyTextFile-boxLine__2PrI6 .before__3x7FU {\n  content: '';\n  height: 1px;\n  background: #dcdcdc;\n}\n.BhyTextFile__2qCkP.line__1_edJ .BhyTextFile-boxLine__2PrI6 .after__1ZMNA {\n  height: 2px;\n  background: #69d8ff;\n  -webkit-transition: all 0.3s;\n  -o-transition: all 0.3s;\n  -moz-transition: all 0.3s;\n  transition: all 0.3s;\n  margin: auto;\n  width: 0;\n  position: relative;\n  bottom: -1px;\n}\n.BhyTextFile__2qCkP.line__1_edJ .BhyTextFile-boxLine__2PrI6.focus__w05wE .after__1ZMNA {\n  width: 100%;\n}\n.BhyTextFile__2qCkP.border__3GkEX {\n  position: static;\n}\n.BhyTextFile__2qCkP.border__3GkEX .BhyTextFile-input__1GDB_ input {\n  border: 1px solid #ccc;\n  -webkit-border-radius: 4px;\n     -moz-border-radius: 4px;\n          border-radius: 4px;\n  -webkit-transition: border-color ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;\n  transition: border-color ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;\n  -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n  -moz-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s, -moz-box-shadow ease-in-out 0.15s;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s, -moz-box-shadow ease-in-out 0.15s;\n}\n.BhyTextFile__2qCkP.border__3GkEX .BhyTextFile-input__1GDB_ input:focus {\n  -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,0.075), 0 0 8px rgba(102,175,233,0.6);\n     -moz-box-shadow: inset 0 1px 1px rgba(0,0,0,0.075), 0 0 8px rgba(102,175,233,0.6);\n          box-shadow: inset 0 1px 1px rgba(0,0,0,0.075), 0 0 8px rgba(102,175,233,0.6);\n  outline: 0;\n  border-color: #66afe9;\n}\n.BhyTextFile__2qCkP.sm__1hHBN {\n  position: static;\n}\n.BhyTextFile__2qCkP.sm__1hHBN .BhyTextFile-input__1GDB_ input {\n  padding: 3px 5px;\n  height: auto;\n}\n.BhyTextFile__2qCkP.layouty__3_MwW .BhyTextFile-label__HZgu7 {\n  display: block;\n  text-align: left;\n  margin-bottom: 2px;\n}\n.BhyTextFile__2qCkP.layouty__3_MwW .BhyTextFile-input__1GDB_ {\n  display: block;\n}\n.BhyTextFile__2qCkP.layouty__3_MwW .BhyTextFile-input__1GDB_ .boxIcon__35u3c {\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  top: 50%;\n  margin-top: -10px;\n  text-align: center;\n}\n.BhyTextFile__2qCkP.layouty__3_MwW .BhyTextFile-input__1GDB_ .boxIcon__35u3c i {\n  color: #a2a2a2;\n  font-size: 17px;\n}\n.BhyTextFile__2qCkP.layouty__3_MwW.line__1_edJ .BhyTextFile-label__HZgu7 {\n  margin-bottom: 0;\n}\n.BhyTextFile__2qCkP.layouty__3_MwW.line__1_edJ .BhyTextFile-input__1GDB_ {\n  display: block;\n}\n.BhyTextFile__2qCkP.layouty__3_MwW.line__1_edJ .BhyTextFile-input__1GDB_ input {\n  padding-left: 25px !important;\n}\n.BhyTextFile__2qCkP.layouty__3_MwW.line__1_edJ .BhyTextFile-input__1GDB_ .boxIcon__35u3c {\n  left: 0;\n}\n.BhyTextFile__2qCkP.warn__IJQC6 {\n  position: static;\n}\n.BhyTextFile__2qCkP.warn__IJQC6 .BhyTextFile-label-name__31sW9, .BhyTextFile__2qCkP.warn__IJQC6 .BhyTextFile-label-mao__12F-d {\n  color: #a94442;\n}\n.BhyTextFile__2qCkP.warn__IJQC6.border__3GkEX .BhyTextFile-input__1GDB_ input {\n  -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);\n     -moz-box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);\n          box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);\n  border-color: #a94442;\n}\n.BhyTextFile__2qCkP.warn__IJQC6.border__3GkEX .BhyTextFile-input__1GDB_ input:focus {\n  border-color: #843534;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,0.075), 0 0 6px #ce8483;\n     -moz-box-shadow: inset 0 1px 1px rgba(0,0,0,0.075), 0 0 6px #ce8483;\n          box-shadow: inset 0 1px 1px rgba(0,0,0,0.075), 0 0 6px #ce8483;\n}\n.BhyTextFile__2qCkP.warn__IJQC6.line__1_edJ .BhyTextFile-boxLine__2PrI6 .before__3x7FU, .BhyTextFile__2qCkP.warn__IJQC6.line__1_edJ .BhyTextFile-boxLine__2PrI6 .after__1ZMNA {\n  background: #a94442;\n}\n.BhyTextFile__2qCkP.full__1jffd {\n  width: 100%;\n}\n.BhyTextFile__2qCkP.full__1jffd .BhyTextFile-input__1GDB_ {\n  width: 100%;\n}\n.BhyTextFile__2qCkP.focus__w05wE {\n  position: static;\n}\n.BhyTextFile-label__HZgu7 {\n  display: table-cell;\n  vertical-align: middle;\n  text-align: right;\n}\n.BhyTextFile-label__HZgu7 > * {\n  display: inline-block;\n  font-size: 14px;\n  color: #575757;\n  position: relative;\n  top: -1px;\n}\n.BhyTextFile-label-mao__12F-d {\n  margin: 0 5px;\n}\n.BhyTextFile-input__1GDB_ {\n  vertical-align: middle;\n  position: relative;\n}\n.BhyTextFile-input__1GDB_.hasIcon__ysp82 {\n  position: relative;\n}\n.BhyTextFile-input__1GDB_.hasIcon__ysp82 .boxIcon__35u3c {\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  top: 50%;\n  margin-top: -10px;\n  left: 8px;\n  text-align: center;\n}\n.BhyTextFile-input__1GDB_.hasIcon__ysp82 .boxIcon__35u3c i {\n  color: #a2a2a2;\n  font-size: 17px;\n}\n.BhyTextFile-input__1GDB_.hasIcon__ysp82 input {\n  padding-left: 34px !important;\n}\n.BhyTextFile-input__1GDB_ input {\n  display: block;\n  width: 100%;\n  height: 34px;\n  padding: 6px 8px;\n  font-size: 14px;\n  line-height: 1.428;\n  color: #555;\n  background-color: #fff;\n  background-image: none;\n}\n.BhyTextFile-input__1GDB_ input::-webkit-input-placeholder {\n  color: #b6b6b6;\n}\n.BhyTextFile-input__1GDB_ input:-moz-placeholder {\n  color: #b6b6b6;\n}\n.BhyTextFile-input__1GDB_ input::-moz-placeholder {\n  color: #b6b6b6;\n}\n.BhyTextFile-input__1GDB_ input:-ms-input-placeholder {\n  color: #b6b6b6;\n}\n.BhyTextFile-input__1GDB_ input::placeholder {\n  color: #b6b6b6;\n}\n.BhyTextFile-errorText__1Oyhs {\n  font-size: 12px;\n  color: #a94442;\n  position: absolute;\n  margin-top: 3px;\n}\n", ""]);

// exports
exports.locals = {
	"BhyTextFile": "BhyTextFile__2qCkP",
	"name": "name__1B72S",
	"line": "line__1_edJ",
	"BhyTextFile-input": "BhyTextFile-input__1GDB_",
	"BhyTextFile-boxLine": "BhyTextFile-boxLine__2PrI6",
	"before": "before__3x7FU",
	"after": "after__1ZMNA",
	"focus": "focus__w05wE",
	"border": "border__3GkEX",
	"sm": "sm__1hHBN",
	"layouty": "layouty__3_MwW",
	"BhyTextFile-label": "BhyTextFile-label__HZgu7",
	"boxIcon": "boxIcon__35u3c",
	"warn": "warn__IJQC6",
	"BhyTextFile-label-name": "BhyTextFile-label-name__31sW9",
	"BhyTextFile-label-mao": "BhyTextFile-label-mao__12F-d",
	"full": "full__1jffd",
	"hasIcon": "hasIcon__ysp82",
	"BhyTextFile-errorText": "BhyTextFile-errorText__1Oyhs"
};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		// Test for IE <= 9 as proposed by Browserhacks
		// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
		// Tests for existence of standard globals is to allow style-loader 
		// to operate correctly into non-standard environments
		// @see https://github.com/webpack-contrib/style-loader/issues/177
		return window && document && document.all && !window.atob;
	}),
	getElement = (function(fn) {
		var memo = {};
		return function(selector) {
			if (typeof memo[selector] === "undefined") {
				memo[selector] = fn.call(this, selector);
			}
			return memo[selector]
		};
	})(function (styleTarget) {
		return document.querySelector(styleTarget)
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [],
	fixUrls = __webpack_require__(10);

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (typeof options.insertInto === "undefined") options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list, options);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list, options) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var styleTarget = getElement(options.insertInto)
	if (!styleTarget) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			styleTarget.insertBefore(styleElement, styleTarget.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			styleTarget.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			styleTarget.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		styleTarget.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	options.attrs.type = "text/css";

	attachTagAttrs(styleElement, options.attrs);
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	attachTagAttrs(linkElement, options.attrs);
	insertStyleElement(options, linkElement);
	return linkElement;
}

function attachTagAttrs(element, attrs) {
	Object.keys(attrs).forEach(function (key) {
		element.setAttribute(key, attrs[key]);
	});
}

function addStyle(obj, options) {
	var styleElement, update, remove, transformResult;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    transformResult = options.transform(obj.css);
	    
	    if (transformResult) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = transformResult;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css. 
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement, options);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/* If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
	and there is no publicPath defined then lets turn convertToAbsoluteUrls
	on by default.  Otherwise default to the convertToAbsoluteUrls option
	directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls){
		css = fixUrls(css);
	}

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 10 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);
});