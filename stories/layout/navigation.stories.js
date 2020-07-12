"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.NavigationStory = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _navigation = _interopRequireDefault(require("../../src/packages/layout/navigation"));

var _navigation2 = _interopRequireDefault(require("./navigation.md"));

var _header = require("./header.stories");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var NavigationStory = function NavigationStory() {
  return /*#__PURE__*/_react["default"].createElement(_navigation["default"], {
    open: (0, _addonKnobs["boolean"])('open', true),
    name: (0, _addonKnobs.text)('name', 'Welcome'),
    width: (0, _addonKnobs.text)('width', '240px'),
    onClose: (0, _addonActions.action)('close')
  }, /*#__PURE__*/_react["default"].createElement("div", null, "Hello"));
};

exports.NavigationStory = NavigationStory;
var _default = {
  title: 'MLambda/Layout/Navigation',
  component: NavigationStory,
  parameters: {
    notes: {
      Docs: _navigation2["default"]
    }
  }
};
exports["default"] = _default;