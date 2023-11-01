// singleton or constructor method
// Object.create()


//object literals 

const mySym = Symbol("key1");

const jsUser = {
    name: "Ujjwal",
    "full name" : "uJJWAL sINHA",
    [mySym] : "mykey1",
    age: 18,
    location: "Jaipur",
    email: "ujjwalsinha@gmail.com",
    isLoggedIn: false,
    lastLogindays: ["Monday", "Saturday"]
};

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

jsUser.email = "ujjwal@chatgpt.com";
// Object.freeze(jsUser);
jsUser.email = "chatgpt@microsoft.com";
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello Js User");
}

console.log(jsUser.greeting);

jsUser.greeting2 = function(){
    console.log(`Hello Js User, ${this.name}`);
}
console.log(jsUser.greeting2());
