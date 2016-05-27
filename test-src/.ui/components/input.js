'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputGroup = exports.TYPES_WITH_LABEL = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TYPES_WITH_LABEL = exports.TYPES_WITH_LABEL = ['radio', 'checkbox', 'submit', 'reset'];

function onChange(e) {
  switch (this.props.type) {
    case 'radio':
    case 'checkbox':
      this.setState({ checked: e.target.checked });
      break;
    default:
      this.setState({ value: e.target.value });
      break;
  }
}

var Input = function (_React$Component) {
  _inherits(Input, _React$Component);

  function Input(props) {
    _classCallCheck(this, Input);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Input).call(this, props));

    _this.state = {
      checked: props.checked || false,
      value: props.value || void 0,
      id: props.id || (0, _utils.uniqueId)()
    };
    _this.onChange = props.onChange || onChange.bind(_this);
    return _this;
  }

  _createClass(Input, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      var id = typeof props.id != 'undefined' ? props.id : this.state.id;
      var checked = typeof props.checked != 'undefined' ? props.checked : this.state.checked;
      var value = typeof props.value != 'undefined' ? props.value : this.state.value;
      this.setState({ id: id, checked: checked, value: value });
    }
  }, {
    key: 'renderTextarea',
    value: function renderTextarea(id, props) {
      props.id = id;
      props.value = props.value || this.state.value;
      if (!props.onChange) {
        props.onChange = this.onChange;
      }
      return _react2.default.createElement('textarea', props);
    }
  }, {
    key: 'renderSelect',
    value: function renderSelect(id, props) {
      props.id = id;
      return _react2.default.createElement(
        'select',
        props,
        this.props.children
      );
    }
  }, {
    key: 'renderDefault',
    value: function renderDefault(id, props) {
      props.id = id;
      props.defaultValue = this.state.value;
      delete props.value;
      delete props.checked;
      return _react2.default.createElement('input', props);
    }
  }, {
    key: 'renderCheckbox',
    value: function renderCheckbox(id, props) {
      props.id = id;
      props.checked = this.state.checked;
      props.defaultChecked = props.checked;
      delete props.checked;
      return _react2.default.createElement(
        'div',
        { className: props.type },
        _react2.default.createElement('input', props),
        _react2.default.createElement(
          'label',
          { htmlFor: id },
          this.props.label
        )
      );
    }
  }, {
    key: 'renderSet',
    value: function renderSet(id, props) {
      return _react2.default.createElement(
        'div',
        { className: 'control' },
        this.props.children
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var id = this.state.id;
      var props = (0, _utils.shallowClone)(this.props);
      delete props.children;
      delete props.label;
      switch (props.type || 'text') {
        case 'textarea':
          return this.renderTextarea(id, props);
        case 'select':
          return this.renderSelect(id, props);
        case 'radio':
        case 'checkbox':
          return this.renderCheckbox(id, props);
        case 'set':
          return this.renderSet(id, props);
        default:
          return this.renderDefault(id, props);
      }
    }
  }]);

  return Input;
}(_react2.default.Component);

exports.default = Input;

var InputGroup = exports.InputGroup = function (_React$Component2) {
  _inherits(InputGroup, _React$Component2);

  function InputGroup(props) {
    _classCallCheck(this, InputGroup);

    var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(InputGroup).call(this, props));

    _this2.state = {
      checked: props.checked,
      value: props.value,
      disabled: props.disabled
    };
    _this2.onChange = onChange.bind(_this2);
    return _this2;
  }

  _createClass(InputGroup, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      var id = typeof props.id != 'undefined' ? props.id : this.state.id;
      var checked = typeof props.checked != 'undefined' ? props.checked : this.state.checked;
      var value = typeof props.value != 'undefined' ? props.value : this.state.value;
      this.setState({ id: id, checked: checked, value: value });
    }
  }, {
    key: 'makeInput',
    value: function makeInput(id, props) {
      props.id = id;
      props.onChange = this.onChange;
      props.checked = this.state.checked;
      props.value = this.state.value;
      switch (props.type) {
        case 'checkbox':
        case 'radio':
          return _react2.default.createElement(Input, props);
        default:

          return _react2.default.createElement(
            'div',
            { className: 'control' },
            _react2.default.createElement(Input, props)
          );
      }
    }
  }, {
    key: 'hasOwnLabel',
    value: function hasOwnLabel() {
      return TYPES_WITH_LABEL.indexOf(this.props.type) !== -1;
    }
  }, {
    key: 'renderWithoutLabel',
    value: function renderWithoutLabel(id, props) {
      return _react2.default.createElement(
        'div',
        { className: 'group' },
        _react2.default.createElement('div', { className: 'control' }),
        this.makeInput(id, props)
      );
    }
  }, {
    key: 'renderWithLabel',
    value: function renderWithLabel(id, props) {
      delete props.label;
      return _react2.default.createElement(
        'div',
        { className: 'group' },
        _react2.default.createElement(
          'label',
          { htmlFor: id },
          this.props.label
        ),
        this.makeInput(id, props)
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var id = this.props.id || (0, _utils.uniqueId)();
      var props = (0, _utils.shallowClone)(this.props);
      return this.hasOwnLabel() ? this.renderWithoutLabel(id, props) : this.renderWithLabel(id, props);
    }
  }]);

  return InputGroup;
}(_react2.default.Component);

Input.Group = InputGroup;
//# sourceMappingURL=input.js.map
