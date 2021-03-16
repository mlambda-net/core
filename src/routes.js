"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _store = _interopRequireDefault(require("./pages/store"));

var _login = _interopRequireDefault(require("./pages/login"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var routes = [{
  name: 'global',
  actual: 'login',
  routes: [{
    path: 'login',
    name: 'login',
    component: _login["default"]
  }, {
    path: 'store',
    name: 'store',
    component: _store["default"]
  }]
}, {
  name: 'other',
  actual: 'login',
  routes: [{
    path: 'login',
    name: 'login',
    component: _login["default"]
  }, {
    path: 'store',
    name: 'store',
    component: _store["default"]
  }]
}];
var _default = routes;
exports["default"] = _default;