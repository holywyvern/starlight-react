'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uniqueId = uniqueId;
exports.shallowClone = shallowClone;
var ids = {};

var CHARS = "ABCDEFGHIJKLMNOPRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890_-";

function uniqueId() {
  var length = Math.floor(Math.random() * 10 + 10);
  var result = '';
  for (var i = 0; i < length; ++i) {
    var c = CHARS.substr(Math.floor(Math.random() * CHARS.length), 1);
    result += c;
  }
  if (ids[result]) return uniqueId();
  ids[result] = true;
  return result;
}

function shallowClone(obj) {
  var _this = this;

  var clone = {};
  if (typeof obj == 'undefined') {
    return void 0;
  }
  if (typeof obj == 'string' || typeof obj == 'number' || typeof obj == 'boolean') {
    return obj;
  }
  if (obj === null) {
    return null;
  }
  if (typeof obj == 'function') {
    if (obj.prototype) {
      clone = function clone() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return obj.apply(this, args);
      };
      clone.prototype = shallowClone(obj.prototype);
      clone.prototype.constructor = clone;
    } else {
      clone = function clone() {
        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        return obj.apply(_this, args);
      };
    }
  }
  Object.setPrototypeOf(clone, Object.getPrototypeOf(obj));
  for (var p in obj) {
    if (obj.hasOwnProperty(p)) {
      clone[p] = obj[p];
    }
  }
  return clone;
}

exports.default = {
  uniqueId: uniqueId,
  shallowClone: shallowClone
};
//# sourceMappingURL=utils.js.map
