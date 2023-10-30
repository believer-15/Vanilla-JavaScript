const name = "Ujjwal";

const repoCount = 50;

// console.log(name + repoCount + " Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // Using backtick :- moder way to write the code where string interpolation means we directly insert value in placeholder.

const gameName = new String('Ujjwal-Sinha');

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('j'));

const newString = gameName.substring(0,4);
// console.log(newString);

const anotherstr = gameName.slice(-6, 1);
console.log(anotherstr);

const newStringOne = "  Ujjwal  ";
console.log(newStringOne.trim());

const url = "https://ujjwal.com/ujjwal%20sinha";

console.log(url.replace('%20', '-'));

console.log(url.includes('ujj'));

console.log(gameName.split('-'));


