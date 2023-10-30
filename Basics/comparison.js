// console.log("02" > 1);

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

// console.log(undefined > 0);
// console.log(undefined == 0);
// console.log(undefined >= 0);

///// +++++++++++++++++++++++++++++++++++

// Stack(Primitive), Heap(Non-Primitive)

let myName = "ujjwal sinha";
let another = myName;
another = "chaiaurcode";
console.log(myName);
console.log(another);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne;

userTwo.email = "ujjwal@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);
