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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var formik_antd_1 = require("@jbuschke/formik-antd");
var button_1 = __importDefault(require("antd/lib/button"));
var react_1 = __importDefault(require("react"));
exports.formComponentMapping = {
    autocomplete: function (params) { return react_1.default.createElement(formik_antd_1.AutoComplete, __assign({}, params)); },
    button: function (params) { return react_1.default.createElement(button_1.default, __assign({}, params)); },
    cascader: function (params) { return react_1.default.createElement(formik_antd_1.Cascader, __assign({}, params)); },
    checkbox: function (params) { return react_1.default.createElement(formik_antd_1.Checkbox, __assign({}, params)); },
    datePicker: function (params) { return react_1.default.createElement(formik_antd_1.DatePicker, __assign({}, params)); },
    input: function (params) { return react_1.default.createElement(formik_antd_1.Input, __assign({}, params)); },
    inputNumber: function (params) { return react_1.default.createElement(formik_antd_1.InputNumber, __assign({}, params)); },
    mention: function (params) { return react_1.default.createElement(formik_antd_1.Mention, __assign({}, params)); },
    radio: function (params) { return react_1.default.createElement(formik_antd_1.Radio, __assign({}, params)); },
    rate: function (params) { return react_1.default.createElement(formik_antd_1.Rate, __assign({}, params)); },
    select: function (params) { return react_1.default.createElement(formik_antd_1.Select, __assign({}, params)); },
    slider: function (params) { return react_1.default.createElement(formik_antd_1.Slider, __assign({}, params)); },
    switch: function (params) { return react_1.default.createElement(formik_antd_1.Switch, __assign({}, params)); },
    timePicker: function (params) { return react_1.default.createElement(formik_antd_1.TimePicker, __assign({}, params)); },
    transfer: function (params) { return react_1.default.createElement(formik_antd_1.Transfer, __assign({}, params)); },
    treeSelect: function (params) { return react_1.default.createElement(formik_antd_1.TreeSelect, __assign({}, params)); },
};
