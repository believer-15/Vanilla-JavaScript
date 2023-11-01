function sayMyName() {
    console.log("U");
}

// sayMyName()

// function add(num1, num2) {
//     console.log(num1 + num2);
// }

function add(num1, num2) {
    let result = num1 + num2;
    return result;
}


const result = add(3,null);

// console.log(result)


function userloginMessage(username){
    if(username === undefined){
        console.log('Please enter a username')
        return
    }
    return `${username} just looged in`
}

// console.log(userloginMessage("Ujjwal"));  // WHEN WE DON'T PASS THE VALUE UNDEFINED 
// console.log(userloginMessage()); 

function calculateCartPrice(val1, val2, ...num1) {
    return num1
}
// console.log(calculateCartPrice(200, 400, 500))

const user = {
    username: 'Ujjwal',
    price: 199
}

function handleObject(anyobject){
    console.log(`Ussername is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user);
handleObject({
    username : "Ujjwal",
    price: 200
})


const myNewArray = [200, 400, 500, 600];

function returnValue(getArray){
    return getArray[1];
}

// console.log(returnValue(myNewArray));

console.log(returnValue([200,400,500,600]));
