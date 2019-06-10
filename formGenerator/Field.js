"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var formik_antd_1 = require("@jbuschke/formik-antd");
var get_1 = __importDefault(require("lodash/get"));
var react_1 = __importDefault(require("react"));
var componentMapping_1 = require("./componentMapping");
var constants_1 = require("./constants");
var Field = function (props) {
    var _a = props.field, component = _a.component, inputStyle = _a.inputStyle, style = _a.style, label = _a.label, custom = _a.custom, propMapping = _a.propMapping, fieldProps = __rest(_a, ["component", "inputStyle", "style", "label", "custom", "propMapping"]), formProps = props.formProps;
    if (component === constants_1.CUSTOM_COMPONENT_KEY && !!custom) {
        return custom(formProps);
    }
    var mappedProps = propMapping && propMapping(props);
    var Component = get_1.default(componentMapping_1.formComponentMapping, component, componentMapping_1.formComponentMapping[constants_1.DEFAULT_COMPONENT]);
    return (react_1.default.createElement(formik_antd_1.Form.Item, __assign({}, fieldProps, { style: style, label: label }),
        react_1.default.createElement(Component, __assign({}, fieldProps, mappedProps, { style: inputStyle }))));
};
exports.default = Field;
