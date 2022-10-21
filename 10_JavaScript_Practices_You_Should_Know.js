//https://jsmanifest.com/10-javascript-practices-you-should-know-before-tomorrow/

// Filtering Arrays To Unique
// ES6 introduced features that influenced the majority of our code base today. 
// There is the spread operator as well as the Set object. 
// These two can be combined to a one liner that filters an array of primitive values to be fully unique:

const symb1 = Symbol('hello')
const symb2 = Symbol('hello')

// prettier-ignore
const arr = [1, '1',1, 3, 'morning', null, '', 3, 121,true,symb1,symb1, 121, true, symb1, symb2]
const uniqueArr = [...new Set(arr)]
// Result:
// [1, '1', 3, 'morning', null, '', 121, true, Symbol(hello), Symbol(hello)]




// Converting to Boolean
// JavaScript treats all values as truthy or falsey except for the true and false values themselves. 
// This is intended by the semantics of the language:

if ('true') {
  // Truthy
}
if ('false') {
  // Truthy
}
if (null) {
  // Falsy
}
if (0) {
  // Falsy
} else if (function () {}) {
  // Truthy
}
if (new Array().fill(null)) {
  // Truthy
}
if (Object.create(null)) {
  // Truthy
}
if (1) {
  // Truthy
}


// The most concise way to convert values to boolean (true or false) 
// is by negating values with ! as shown below:

const isTrue = !0
const isFalse = !1
const alsoFalse = !!0
console.log(isTrue) // Result: true
console.log(typeof true) // Result: "boolean"

// This type of coercion can become really useful when handling functions that take multiple input especially when you're looking to create simple and smaller functions:
// Also, with 0 and 1 we can also convert them to true and false just as easily:
console.log(+true) // Result: 1
console.log(+false) // Result: 0

