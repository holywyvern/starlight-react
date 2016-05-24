"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuSeparator = exports.MenuItem = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Menu = function (_React$Component) {
  _inherits(Menu, _React$Component);

  function Menu(props) {
    _classCallCheck(this, Menu);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Menu).call(this));
  }

  _createClass(Menu, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "nav",
        { className: "menu", role: "menu" },
        _react2.default.createElement(
          "ul",
          null,
          this.props.children
        )
      );
    }
  }]);

  return Menu;
}(_react2.default.Component);

exports.default = Menu;

var MenuItem = exports.MenuItem = function (_React$Component2) {
  _inherits(MenuItem, _React$Component2);

  function MenuItem(props) {
    _classCallCheck(this, MenuItem);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(MenuItem).call(this));
  }

  _createClass(MenuItem, [{
    key: "render",
    value: function render() {
      var header = void 0,
          dropdown = void 0;
      var title = _react2.default.createElement(
        "span",
        { key: "title" },
        this.props.title
      );
      if (this.props.children && this.props.children.length) {
        header = [title, ' ', _react2.default.createElement("span", { className: "caret", key: "real-caret" })];
        dropdown = _react2.default.createElement(
          "ul",
          { key: "real-dropdown", className: this.props.disabled ? 'disabled' : this.props.active ? 'active' : '' },
          this.props.children
        );
      } else {
        header = title;
        dropdown = _react2.default.createElement("span", { key: "dropdown" });
      }
      return _react2.default.createElement(
        "li",
        null,
        [_react2.default.createElement(
          "a",
          { href: "#", onClick: this.onClick, key: "link" },
          header
        ), dropdown]
      );
    }
  }]);

  return MenuItem;
}(_react2.default.Component);

var MenuSeparator = exports.MenuSeparator = function (_React$Component3) {
  _inherits(MenuSeparator, _React$Component3);

  function MenuSeparator(props) {
    _classCallCheck(this, MenuSeparator);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(MenuSeparator).call(this));
  }

  _createClass(MenuSeparator, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "li",
        null,
        _react2.default.createElement("span", { className: "divider" })
      );
    }
  }]);

  return MenuSeparator;
}(_react2.default.Component);

Menu.Separator = MenuSeparator;
Menu.Item = MenuItem;
//# sourceMappingURL=menu.js.map
