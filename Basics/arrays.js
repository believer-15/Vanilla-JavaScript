const myArr = [0,1,2,3,4,5];
const myHeroes = ["ShaktiMAN", "iRONMAN"];

const myArr2 = new Array(1,2,3,4);
// console.log(myArr[1]);

//Array methods

//myArr.push(6);
// myArr.pop();
// myArr.unshift(9); // add the element at 0 position.
// myArr.shift(); // remove at 0 position.

// console.log(myArr.includes(9));

// console.log(myArr.indexOf(5));

// const newArr = myArr.join(); // join binds and convert into string

// console.log(typeof myArr);
// console.log(newArr);


// slice, splice

// console.log("A ", myArr);

// const myn1 = myArr.slice(1,3);

// console.log(myn1);
// console.log("B ", myArr);

// const myn2 = myArr.splice(1,3);
// console.log("C ", myArr);
// console.log(myn2);


//++++++++++++++ Array2 --------------------//

const marvel = ['thor','IronMan','Spiderman'];
const DC = ['flash','Batman','superman'];

// marvel.push(DC);

//console.log(marvel);
//console.log(marvel[3][1]);

// const allheros = marvel.concat(DC);
// console.log(allheros);

const allnewheros = [...marvel, ...DC]; //spread operator spread into individual; 

//console.log(allnewheros);

// const another_array = [1, 2, 3, [4,5,6], 7, [6,7, [4,5]]];

// const real_another_array = another_array.flat(Infinity);

// console.log(real_another_array);


console.log(Array.isArray("Ujjwal")); // return false;

console.log(Array.from("Ujjwal")); // convert into arrays

console.log(Array.from({name : "Ujjwal"})); // It does not convert gives empty array you have to mention you want keys as array or value as array. if it doesnot convert gives empty array.

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // convert multiple variable into arrays


