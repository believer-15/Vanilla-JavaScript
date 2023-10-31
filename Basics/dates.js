let myDate = new Date();

// console.log(myDate.toString());

// console.log(myDate.toDateString());

// console.log(myDate.toLocaleDateString());

// console.log(typeof myDate);

//let createDate = new Date(2023, 0, 23);

// let createDate = new Date(2023, 0, 23, 5, 3);

// let createDate = new Date("2023-01-14");

let createDate = new Date("10-15-2001");

// console.log(createDate.toLocaleString());

let myTimeStamp  = Date.now();

// console.log(myTimeStamp);
// console.log(createDate.getTime());

//console.log(Math.floor(Date.now()/1000)); // Covert date.now into second by dividing with 1000;

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth());

console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "long",
})

