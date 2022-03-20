/* 23 String Methods */

var stringOne = "freeCodeCamp is the best place to learn"
var stringTwo = "frontend and backend development"
//length()
console.log("length: " + stringOne.length)//r


// charAt():string
//charAt() is a method that returns the character from the specified index. Characters in a string are indexed from left to right
console.log(stringOne.charAt(1))//r

// charCodeAt():number
//The charCodeAt() method returns the Unicode of the character at a specified index (position) in a string. 
console.log(stringOne.charCodeAt(1))//114

// concat():string
console.log(stringOne.concat(stringTwo))
//freeCodeCamp is the best place to learnfrontend and backend development

// endsWith():boolean
console.log(stringOne.endsWith("to"))//false

// fromCharCode()
console.log(String.fromCharCode(114))//r


// includes():boolean
console.log(stringTwo.includes("end"))//true


// indexOf():number
console.log(stringTwo.indexOf("end"))//5

// lastIndexOf():{-1 if not found}
console.log(stringTwo.lastIndexOf("f"))//0

// match():[]
//The match() method retrieves the result of matching a string against a regular expression.
console.log(stringTwo.match(/end/g))//(2) ['end', 'end']

// repeat()
console.log(stringOne.repeat(3))
//freeCodeCamp is the best place to learnfreeCodeCamp is the best place to learnfreeCodeCamp is the best place to learn


// replace()
console.log(stringTwo.replace(/end/g, "END"))
//frontEND and backEND development

// search():index number {-1 if not found}
//The search() method returns the index (position) of the first match. The search() method returns -1 if no match is found. 
console.log(stringTwo.search("end"))//5

// slice()
//The slice(from,before) method returns selected elements in an array, as a new array. The slice() method selects from a given start, up to a (not inclusive) given end.
console.log(stringTwo.slice(2, 4))//on

// split()
//The split() method splits a string into an array of substrings. The split() method returns the new array.
console.log(stringOne.split(" "))
//(7) ['freeCodeCamp', 'is', 'the', 'best', 'place', 'to', 'learn']

// startsWith()
console.log(stringOne.startsWith("free"))//true

// substr()
//substr() represent the starting index and the number of characters to include in the returned string.
console.log(stringTwo.substr(0, 4))//onte

// substring()
//The arguments of substring() represent the starting and ending indexes
console.log(stringTwo.substring(0, 4))//on

// toLowerCase()
console.log(stringOne.toLowerCase())
//freecodecamp is the best place to learn

// toUpperCase()
console.log(stringOne.toUpperCase())
//FREECODECAMP IS THE BEST PLACE TO LEARN

// trim()
//The trim() method removes whitespace from both sides of a string.
var stringThree = "     Space Removed now!      ";
console.log(stringThree.trim())
//Space Removed now!

//toString()
//The toString() method in Javascript is used with a number and converts the number to a string. It is used to return a string representing the specified Number object.
var numberString = "555";
console.log(numberString + 90 + " of type " + typeof(numberString))//55590 of type string


//valueOf()
//The valueOf() method returns the primitive value of a string.
//The valueOf() method can be used to convert a string object into a string.
console.log(stringTwo.valueOf())
//frontend and backend development