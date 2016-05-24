'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});
exports.MenuItem = exports.Menu = exports.Window = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _window = require('./components/window');

var _window2 = _interopRequireDefault(_window);

var _menu = require('./components/menu');

var _menu2 = _interopRequireDefault(_menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MenuItem = _menu2.default.Item;

exports.Window = _window2.default;
exports.Menu = _menu2.default;
exports.MenuItem = MenuItem;
exports.default = {
   Window: _window2.default,
   Menu: _menu2.default,
   MenuItem: MenuItem
};
//# sourceMappingURL=index.js.map
