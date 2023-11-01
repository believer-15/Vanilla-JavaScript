// Singleton

// const tinderUser = new Object(); //singleton object

const tinderUser = {}; // non-singletonobject  both work as same

tinderUser.userId = "123abc";
tinderUser.name = "Ujjwal";
tinderUser.isloggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "sum@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Ujjwal",
            lastname: "Sinha"
        }
    }
}

//  console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a", 2: "b"}
const obj2 = {3:"a", 4: "b"}
// const obj3 = Object.assign({}, obj1, obj2) // assign(target, source)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email:"ujjwal@gmail.com"
    },
    {
        id: 1,
        email:"ujjwal@gmail.com"
    },
    {
        id: 1,
        email:"ujjwal@gmail.com"
    },
]

// users[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser)); // get the keys of object
// console.log(Object.values(tinderUser)); // values of objects
// console.log(Object.entries(tinderUser)); // return with key and values in array 

// console.log(tinderUser.hasOwnProperty('islogged')); //tell property available or not

const course = {
    coursename : "js",
    price: "999",
    courseInstructor: "Ujjwal"
}

// course.courseInstructor  // one way of doing

const {courseInstructor : instructor} = course; // object destructuring

// console.log(courseInstructor);

console.log(instructor);

