"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Window = function (_React$Component) {
  _inherits(Window, _React$Component);

  function Window(props) {
    _classCallCheck(this, Window);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Window).call(this, props));
  }

  _createClass(Window, [{
    key: "render",
    value: function render() {
      var minButton = this.props.onMinimize ? _react2.default.createElement(
        "button",
        { key: "min-btn" },
        _react2.default.createElement("i", { className: "fa fa-fw fa-minus fa-fw", onClick: this.props.onMinimize })
      ) : _react2.default.createElement("span", { key: "min-span" });
      var maxButton = this.props.onMaximize ? _react2.default.createElement(
        "button",
        { key: "max-btn" },
        _react2.default.createElement("i", { className: "fa fa-fw fa-" + (this.props.maximized ? 'clone' : 'square-o') + " fa-flip-horizontal fa-fw", onClick: this.props.onMaximize })
      ) : _react2.default.createElement("span", { key: "max-span" });
      var closeButton = this.props.onClose ? _react2.default.createElement(
        "button",
        { key: "close-btn", className: "danger" },
        _react2.default.createElement("i", { className: "fa fa-fw fa-times fa-fw", onClick: this.props.onClose })
      ) : _react2.default.createElement("span", { key: "close-span" });
      return _react2.default.createElement(
        "div",
        { className: "window" },
        [_react2.default.createElement(
          "header",
          { key: "header" },
          [_react2.default.createElement(
            "div",
            { className: "top", key: "header-top" },
            [_react2.default.createElement(
              "h1",
              { key: "title" },
              this.props.title
            ), _react2.default.createElement(
              "div",
              { className: "button-group", key: "buttons" },
              [minButton, maxButton, closeButton]
            )]
          ), this.props.menu ? this.props.menu : _react2.default.createElement("span", { key: "menu" })]
        ), _react2.default.createElement(
          "div",
          { className: "content", key: "content" },
          this.props.children
        ), _react2.default.createElement(
          "footer",
          { key: "footer" },
          this.props.footer
        )]
      );
    }
  }]);

  return Window;
}(_react2.default.Component);

exports.default = Window;


Window.propTypes = {
  title: _react2.default.PropTypes.string.isRequired,
  onMinimize: _react2.default.PropTypes.func,
  onMaximize: _react2.default.PropTypes.func,
  onClose: _react2.default.PropTypes.func,
  footer: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.element),
  menu: _react2.default.PropTypes.element,
  maximized: _react2.default.PropTypes.bool
};

Window.defaultProps = {
  title: '',
  onMinimize: null,
  onMaximize: null,
  onClose: null,
  footer: [],
  menu: null,
  maximized: false
};
//# sourceMappingURL=window.js.map
