// Number()
// parseInt()
// parseFloat()
// isFinite()
// isInteger()
// toFixed()
// toPrecision(x)


var a="99"//99
var b="98.88"
var c=true;
var d="99 98"
var e="has 98"
var i=Infinity
var f=5.66786

var num = a + 10;
var numWithNumberFn= Number(a) + 10;
console.log("num : " + num + " of type " + typeof(num));//num : 9910 of type string
console.log("numWithNumberFn : " + numWithNumberFn+ " of type " + typeof(numWithNumberFn));//numWithNumberFn : 109 of type number

console.log(parseInt(b));//99
console.log(parseInt(d));//99
console.log(parseFloat(b))//99.88

console.log(parseInt(e));//NaN
console.log(Number(c))//1
console.log(Number(d))//NaN
console.log(Number(e))//NaN

console.log(isFinite(i))//false
console.log(isFinite(e))//false
console.log(isFinite(b))//true

console.log(Number.isInteger(parseInt(a)))//true
console.log(Number.isInteger(b))//fasle
console.log(Number.isInteger(e))//false

console.log(f.toFixed(3))//5.668
console.log(f.toPrecision(3))//5.67


