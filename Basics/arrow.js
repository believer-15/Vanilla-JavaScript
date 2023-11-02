const user = {
    username: "Ujjwal",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage();
// user.username = "sam";
// user.welcomeMessage();
// console.log(this);

function love(){
    let username = "Ujjwal"
    console.log(this.username);
}
// love(); // undefined

const coffee = () => {
    let username = "Ujjwal"
    console.log(this);
}

// coffee()

// const addTwo = (num1, num2) => num1 + num2;

//const addTwo = (num1, num2) => (num1 + num2);

const addTwo = (num1, num2) => ({username: "uJJWAL"});
console.log(addTwo(3, 4));


