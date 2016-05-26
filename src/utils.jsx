let ids = {};

const CHARS = "ABCDEFGHIJKLMNOPRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890_-";

export function uniqueId() {
  let length = Math.floor(Math.random() * 10 + 10);
  let result = '';
  for (let i = 0; i < length; ++i) {
    let c = CHARS.substr(Math.floor(Math.random() * CHARS.length), 1);
    result += c;
  }
  if (ids[result]) return uniqueId();
  ids[result] = true;
  return result;
}

export function shallowClone(obj) {
  let clone = {};
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
      clone = function (...args) { return obj.apply(this, args); };
      clone.prototype = shallowClone(obj.prototype);
      clone.prototype.constructor = clone;
    } else {
      clone = (...args) => obj.apply(this, args);
    }
  }  
  Object.setPrototypeOf(clone, Object.getPrototypeOf(obj));
  for (let p in obj) {
    if (obj.hasOwnProperty(p)) {
      clone[p] = obj[p];
    }
  }
  return clone;
}

export default {
  uniqueId,
  shallowClone
};