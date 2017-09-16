Number.isInteger = Number.isInteger || function(value) {
  return typeof value === "number" &&
    isFinite(value) &&
    Math.floor(value) === value;
};

function deepCopy(copyTarget) {
  if (!copyTarget) return null;
  // isArray
  if (Array.isArray(copyTarget)) return copyTarget.slice();
  // isInteger
  if (Number.isInteger(copyTarget)) {
    const newNumber = copyTarget;
    return newNumber;
  }
  // isObject
}

module.exports = deepCopy;