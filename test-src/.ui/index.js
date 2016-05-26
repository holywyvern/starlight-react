'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});
exports.InputGroup = exports.Input = exports.MenuItem = exports.Menu = exports.Window = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _window = require('./components/window');

var _window2 = _interopRequireDefault(_window);

var _menu = require('./components/menu');

var _menu2 = _interopRequireDefault(_menu);

var _input = require('./components/input');

var _input2 = _interopRequireDefault(_input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MenuItem = _menu2.default.Item;
var InputGroup = _input2.default.Group;

exports.Window = _window2.default;
exports.Menu = _menu2.default;
exports.MenuItem = MenuItem;
exports.Input = _input2.default;
exports.InputGroup = InputGroup;
exports.default = {
   Window: _window2.default,
   Menu: _menu2.default,
   MenuItem: MenuItem,
   Input: _input2.default,
   InputGroup: InputGroup
};
//# sourceMappingURL=index.js.map
