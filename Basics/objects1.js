//object literals 

let val1 = 2;
let val2 = 2;

if(val1 == val2){
    console.log("true");
}else {
    console.log("false");
}

const letters = new Set(["a","b","c"]);

// List all Elements
let text = "";
letters.forEach (function(value) {
  text += value;
})

console.log(letters.values());