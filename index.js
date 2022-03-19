console.log("printed in console");
const customerInfo = [
    { name: "Amit", age: 45, location: "Hyd", channel: "Web" },
    { name: "Smit", age: 35, location: "Pune", channel: "Web" },
    { name: "Ram", age: 49, location: "Blr", channel: "Web" },
    { name: "Shatyam", age: 45, location: "Pune", channel: "Web" },
    { name: "Raju", age: 56, location: "Blr", channel: "Web" },
    { name: "Akash", age: 40, location: "Pune", channel: "Web" },
    { name: "Firangi", age: 32, location: "Chn", channel: "Web" },
    { name: "Anurag", age: 24, location: "Chn", channel: "Web" }
];

customerInfo.forEach((customer)=>{  
    console.log(customer.name)
})
