// for

for (let index = 0; index <= 10; index++) {
    const element = index;
    // console.log(element);
}

// console.log(element);

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(i + '*' + j + '=' + i*j );
    }
}

let myArray = ["flash", "Batman", "SPiderman"];

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}

// break and continue 

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        // console.log(`Detected 5`);
        break;
    }
    // console.log(`value of i is ${index}`);
}

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        // console.log(`Detected 5`);
        continue;
    }
    // console.log(`value of i is ${index}`);
}

// while 

let index = 0;
while (index <= 10) {
    // console.log(`Value of index is ${index}`); 
    index++;
}

let myArr = ['flash', 'Batman', 'superman'];
let arr = 0;
while(arr < myArr.length) {
    // console.log(`Value is ${myArr[arr]}`);
    arr++;
}

// do- while

let score = 11;
do {
    // console.log(`Score is ${score}`);
    score++;
} while (score <= 10);

//forof loop

const arrr = [1,2,3,4,5]

for (const num of arrr) {
    // console.log(num);
}

const greet = "Hello world!";

for (const greett of greet) {
    // console.log(`Each char is ${greett}`);
}

// Maps

const map = new Map();

map.set('IN', "INDIA");
map.set('US', "UNITED STATES OF AMERICA");
map.set('FR', "FRANCE");

// console.log(map);

for (const [key, value] of map) {
//    console.log(key, ':-', value);
}

const myObject = {
    game1 : 'NFS',
    game2 : 'Batman'
}


// for in loop

for(const key in myObject){
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "java", "c++", "c"];

for (const key in programming) {
    // console.log(programming[key]);
}

// for each loop 

const coding = ["js", "java", "c++", "c"];

coding.forEach( (item) => {
    // console.log(item);
})

function printMe(item) {
    // console.log(item);
}

coding.forEach(printMe);

coding.forEach((item, index, arr) => {  // foreach comes with item, index, arr
    // console.log(item, index, arr);
});

const myCoding = [  // array inside object declaration
    {
        languageName: "javavscript",
        languageFileName: "java"
    },
    {
        languageName: "Python",
        languageFileName: "py",
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
];

myCoding.forEach((item) => {
    console.log(item.languageFileName);
})



