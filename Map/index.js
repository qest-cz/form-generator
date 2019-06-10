"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var get_1 = __importDefault(require("lodash/get"));
var map_1 = __importDefault(require("lodash/map"));
var react_1 = __importDefault(require("react"));
var Map = function (_a) {
    var collection = _a.collection, children = _a.children, keySelector = _a.keySelector;
    return (react_1.default.createElement(react_1.default.Fragment, null, map_1.default(collection, function (item, key) {
        var uniqueKey = getUniqueKey(item, key, keySelector);
        return children(item, uniqueKey, collection);
    })));
};
var getUniqueKey = function (item, key, keySelector) {
    if (keySelector === void 0) { keySelector = ""; }
    return get_1.default(item, keySelector) || get_1.default(item, "id", key);
};
exports.default = Map;
