let ids = {};

const CHARS = "ABCDEFGHIJKLMNOPRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890_-";

export function uniqueId() {
  let length = Math.floor(Math.random() * 10 + 10);
  result = '';
  for (let i = 0; i < length; ++i) {
    let c = CHARS.substr(Math.floor(Math.random() * CHARS.length), 1);
    result += c;
  }
  if (ids[result]) return uniqueId();
  ids[result] = true;
  return result;
}