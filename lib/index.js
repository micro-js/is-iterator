/**
 * Modules
 */

var isFunction = require('@f/is-function')

/**
 * Vars
 */

var validKeys = [
  'next',
  'result',
  'throw'
]

/**
 * Expose isIterator
 */

module.exports = isIterator['default'] = isIterator

/**
 * Check if iterator
 * @param  {Mixed}  obj Object to check interface of.
 * @return {Boolean}
 */

function isIterator (obj, strict) {
  return !!obj &&
    isFunction(obj.next) &&
    (obj.throw ? isFunction(obj.throw) : !strict) &&
    (obj.result ? isFunction(obj.result) : true) &&
    Object.keys(obj).every(isValidKey)
}

/**
 * Check if key is valid action key
 * @param  {String}  key
 * @return {Boolean}
 */

function isValidKey (key) {
  return validKeys.indexOf(key) > -1
}
