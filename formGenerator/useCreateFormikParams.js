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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Yup = __importStar(require("yup"));
var constants_1 = require("./constants");
exports.useCreateFormikParams = function (fields) {
    var initialValues = {};
    var validationSchemaShape = {};
    var renderReadyFields = react_1.useMemo(function () {
        return fields.map(function (_a) {
            var initialValue = _a.initialValue, validation = _a.validation, name = _a.name, component = _a.component, rest = __rest(_a, ["initialValue", "validation", "name", "component"]);
            var isUnregistredComponent = component && constants_1.UNREGISTRED_COMPONENTS.includes(component);
            if (isUnregistredComponent) {
                initialValues[name] = initialValue;
                if (validation) {
                    validationSchemaShape[name] = validation;
                }
            }
            return __assign({ name: name, component: component }, rest);
        });
    }, [fields]);
    var validationSchema = Yup.object().shape(__assign({}, validationSchemaShape));
    return { initialValues: initialValues, validationSchema: validationSchema, renderReadyFields: renderReadyFields };
};
