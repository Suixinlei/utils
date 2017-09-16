'use strict';

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
  arrayTag = '[object Array]',
  boolTag = '[object Boolean]',
  dateTag = '[object Date]',
  errorTag = '[object Error]',
  funcTag = '[object Function]',
  mapTag = '[object Map]',
  numberTag = '[object Number]',
  objectTag = '[object Object]',
  regexpTag = '[object RegExp]',
  setTag = '[object Set]',
  stringTag = '[object String]',
  weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
  float32Tag = '[object Float32Array]',
  float64Tag = '[object Float64Array]',
  int8Tag = '[object Int8Array]',
  int16Tag = '[object Int16Array]',
  int32Tag = '[object Int32Array]',
  uint8Tag = '[object Uint8Array]',
  uint8ClampedTag = '[object Uint8ClampedArray]',
  uint16Tag = '[object Uint16Array]',
  uint32Tag = '[object Uint32Array]';

/** Used for native method references. */
var arrayProto = Array.prototype,
  errorProto = Error.prototype,
  objectProto = Object.prototype,
  stringProto = String.prototype;

/** Used to resolve the decompiled source of functions. */
var fnToString = Function.prototype.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to generate unique IDs. */
var idCounter = 0;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objToString = objectProto.toString;

function isObject(value) {
  // Avoid a V8 JIT bug in Chrome 19-20.
  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in older versions of Chrome and Safari which return 'function' for regexes
  // and Safari 8 which returns 'object' for typed array constructors.
  return isObject(value) && objToString.call(value) == funcTag;
}

/**
 * 默认规则为创建一个新数组并包含原数组中所有的非假值元素。例如 false、null、 0、""、undefined 和 NaN 都是“假值”。
 * 也可自行传入某个函数作为规则，每个数值都会调用一次 rules(item): Boolean 来进行验证
 * @param array
 * @param rules
 */
function arrayCompact(array, rules) {
  rules = isFunction(rules) ? rules : null;
  let index = -1;
  const length = array ? array.length : 0;
  let resIndex = -1;
  const result = [];

  while (++index < length) {
    var value = array[index];
    if (rules) {
      if (rules(value)) {
        // 使用rules进行判断
        result[++resIndex] = value;
      }
    } else {
      // 判断是否为真值
      if (value) {
        result[++resIndex] = value;
      }
    }

  }
  return result;
}

module.exports = {
  deepCopy: require('./deepCopy'),
  arrayCompact: arrayCompact,
};
