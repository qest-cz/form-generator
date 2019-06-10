"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var formik_1 = require("formik");
var react_1 = __importDefault(require("react"));
var Map_1 = __importDefault(require("../Map"));
var Field_1 = __importDefault(require("./Field"));
var useCreateFormikParams_1 = require("./useCreateFormikParams");
exports.formGenerator = function (_a) {
    var onSubmit = _a.onSubmit, fields = _a.fields;
    var _b = useCreateFormikParams_1.useCreateFormikParams(fields), initialValues = _b.initialValues, validationSchema = _b.validationSchema, renderReadyFields = _b.renderReadyFields;
    return (react_1.default.createElement(formik_1.Formik, { initialValues: initialValues, validationSchema: validationSchema, onSubmit: onSubmit }, function (formProps) { return (react_1.default.createElement(formik_1.Form, null,
        react_1.default.createElement(Map_1.default, { collection: renderReadyFields, keySelector: "name" }, function (field, key) { return react_1.default.createElement(Field_1.default, { field: field, key: key, formProps: formProps }); }))); }));
};
