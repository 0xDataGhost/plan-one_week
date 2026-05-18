console.log(`type of undefined is "${typeof undefined}"`); // "undefined"
console.log(`type of 0 is "${typeof 0}"`); // "number"
console.log(`type of 10n is "${typeof 10n}"`); // "bigint"
console.log(`type of true is "${typeof true}"`); // "boolean"
console.log(`type of "foo" is "${typeof "foo"}"`); // "string"
console.log(`type of Symbol("id") is "${typeof Symbol("id")}"`); // "symbol"
console.log(`type of Math is "${typeof Math}"`); // "object"  (1)
console.log(`type of null is "${typeof null}"`); // "object"  (2)
console.log(`type of alert is "${typeof alert}"`); // "function"  (3)