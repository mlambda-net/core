"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.MenuStory = void 0;

var _react = _interopRequireDefault(require("react"));

var _menu = _interopRequireDefault(require("@mlambda-net/core/common/menu"));

var _addonKnobs = require("@storybook/addon-knobs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var MenuStory = function MenuStory() {
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_menu["default"], {
    name: (0, _addonKnobs.text)('Name', 'App')
  }));
};

exports.MenuStory = MenuStory;
var _default = {
  title: 'MLambda/Layout/Menu',
  component: MenuStory
};
exports["default"] = _default;