"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.HeaderStory = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonActions = require("@storybook/addon-actions");

var _header = _interopRequireDefault(require("../../src/packages/layout/header"));

var _addonKnobs = require("@storybook/addon-knobs");

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _icons = require("@material-ui/icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var HeaderStory = function HeaderStory() {
  return /*#__PURE__*/_react["default"].createElement(_header["default"], {
    name: (0, _addonKnobs.text)('Name', 'App'),
    onClick: (0, _addonActions.action)('button-click')
  }, /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
    "aria-label": "account of current user",
    "aria-controls": "menu-appbar",
    "aria-haspopup": "true",
    onClick: (0, _addonActions.action)('profile'),
    color: "inherit"
  }, /*#__PURE__*/_react["default"].createElement(_icons.AccountCircle, null)));
};

exports.HeaderStory = HeaderStory;
var _default = {
  title: 'MLambda/Layout/Header',
  component: HeaderStory
};
exports["default"] = _default;