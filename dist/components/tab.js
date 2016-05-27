'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TabPage = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tab = function (_React$Component) {
  _inherits(Tab, _React$Component);

  function Tab(props) {
    _classCallCheck(this, Tab);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Tab).call(this));

    _this.state = { index: props.selected || 0 };
    _this.selectItem = _this.selectItem.bind(_this);
    return _this;
  }

  _createClass(Tab, [{
    key: 'selectItem',
    value: function selectItem(e) {
      var index = Number(e.target.getAttribute('data-tab-index'));
      var child = this.children[index];
      if (!child.props.disabled) {
        this.setState({ index: index });
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      var selected = typeof props.selected != 'undefined' ? props.selected : this.state.selected;
      this.setState({ selected: selected });
    }
  }, {
    key: 'makeHeaders',
    value: function makeHeaders() {
      var result = [];
      var children = this.children;
      for (var i = 0, length = children.length; i < length; ++i) {
        var className = [];
        if (i === this.state.index) className.push('active');
        if (children[i].props.disabled) className.push('disabled');
        result.push(_react2.default.createElement(
          'li',
          { className: className.join(' '), key: i },
          _react2.default.createElement(
            'a',
            { href: '#', onClick: this.selectItem, 'data-tab-index': i },
            [children[i].props.title]
          )
        ));
      }
      return result;
    }
  }, {
    key: 'makeBodies',
    value: function makeBodies() {
      var result = [];
      var children = this.children;
      for (var i = 0, length = children.length; i < length; ++i) {
        var className = [];
        if (i === this.state.index) className.push('active');
        if (children[i].props.disabled) className.push('disabled');
        result.push(_react2.default.createElement(
          'div',
          { className: className.join(' '), key: i, 'data-tab-index': i },
          children[i]
        ));
      }
      return result;
    }
  }, {
    key: 'render',
    value: function render() {
      var headers = this.makeHeaders();
      var bodies = this.makeBodies();
      return _react2.default.createElement(
        'div',
        { className: 'tab-container' },
        _react2.default.createElement(
          'ul',
          { className: 'header' },
          headers
        ),
        _react2.default.createElement(
          'div',
          { className: 'body' },
          bodies
        )
      );
    }
  }, {
    key: 'children',
    get: function get() {
      return this.props.children instanceof Array ? this.props.children : [this.props.children];
    }
  }]);

  return Tab;
}(_react2.default.Component);

exports.default = Tab;

var TabPage = exports.TabPage = function (_React$Component2) {
  _inherits(TabPage, _React$Component2);

  function TabPage(props) {
    _classCallCheck(this, TabPage);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(TabPage).call(this));
  }

  _createClass(TabPage, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        this.props.children
      );
    }
  }]);

  return TabPage;
}(_react2.default.Component);

TabPage.defaultProps = {
  title: ''
};

Tab.Page = TabPage;
//# sourceMappingURL=tab.js.map
