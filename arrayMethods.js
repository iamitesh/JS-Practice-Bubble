console.log("printed in console");
const customerInfo = [
  { name: "Amit", age: 45, location: "Hyd", channel: "Mobile" },
  { name: "Sumit", age: 35, location: "Pune", channel: "Web" },
  { name: "Ram", age: 49, location: "Blr", channel: "Moile" },
  { name: "Shatyam", age: 45, location: "Pune", channel: "Web" },
  { name: "Raju", age: 56, location: "Blr", channel: "Web" },
  { name: "Akash", age: 40, location: "Pune", channel: "Moile" },
  { name: "Firangi", age: 32, location: "Chn", channel: "Web" },
  { name: "Anurag", age: 24, location: "Chn", channel: "Web" },
];
const numberArray = [1, 13, 62, 7, 5, 13, 62, 92];

//forEach
//The forEach() method executes a provided function once for each array element.
customerInfo.forEach((customer) => {
  console.log(customer.name);
});

//filter
//The filter() method creates a new array with all elements that pass the test implemented by the provided function.
const customerUnderfourty = customerInfo.filter((customer) => {
  return customer.age <= 40;
});
console.log("customerUnderfourty : " + customerUnderfourty);

//includes
//The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
const ifArrIncludesSeven = numberArray.includes(7);
console.log("ifArrIncludesSeven : " + ifArrIncludesSeven);

//reduce
//The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.
const sumOfArray = numberArray.reduce((total, value) => total + value, 0);
console.log("sumOfArray : " + sumOfArray);

//map
//The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
const nameMapped = customerUnderfourty.map((customer) => customer.name);
console.log("nameMapped  : " + nameMapped);
const ageMapped = customerInfo.map((customer) => customer.age);
console.log("nameMapped  : " + nameMapped);

//some
//The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.
const ifArrayHasSomeVaue = customerInfo.some((cust) => cust.age > 30);
console.log("ifArrayHasSomeVaue  : " + ifArrayHasSomeVaue);

//every
//The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
const ifArrayHasEveryVaue = customerInfo.every((cust) => cust.age < 50);
console.log("ifArrayHasSomeVaue  : " + ifArrayHasEveryVaue);

//sortinASC-sortin Ascending Order
ascOrder = ageMapped.sort((a, b) => (a > b ? -1 : 1));
console.log("ascOrder : " + ascOrder);

//sortinDSC-sort in Descending Order
dscOrder = ageMapped.sort((a, b) => (a > b ? 1 : -1));
console.log("dscOrder : " + dscOrder);

//Array.from
const StringDestructuring = Array.from(nameMapped[0]);
console.log("StringDestructuring : " + StringDestructuring);

//Array.of
//The Array.of() method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.
const StringRestructuring = Array.of(1, 2, 3, 4, 6, 7);
console.log("StringRestructuring : " + StringRestructuring);
