// const coding = ["js", "java", "c++", "c"];

// const values = coding.forEach((item) => {  
//     //console.log(item);
//     return item
// })

// console.log(values); // here return undefined because for each doesnot return anything


///  filter methods

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const unums = myNums.filter( (num) => { // if openscope { } then return otherwise ((num) => num > 4)
    return num > 4;
}) // filter does condition check and return the value 
// console.log(unums);

const newNums = [];

myNums.forEach ( (num) => {
    if(num > 4){
        newNums.push(num);
    }
})

// console.log(newNums);

const books = [
    {title: 'Book One', genre: 'History', publish: 1981, edition: 2004},
    {title: 'Book two', genre: 'Science', publish: 1981, edition: 2009},
    {title: 'Book three', genre: 'Gk', publish: 2009, edition: 1987},
    {title: 'Book four', genre: 'socio', publish: 1981, edition: 1986},
    {title: 'Book five', genre: 'Math', publish: 2004, edition: 2011},
    {title: 'Book six', genre: 'History', publish: 1981, edition: 1981},
    {title: 'Book seven', genre: 'History', publish: 2000, edition: 2000},
    {title: 'Book eight', genre: 'History', publish: 1981, edition: 1995},
    {title: 'Book nine', genre: 'hindi', publish: 2004, edition: 2004},
];

let userBooks = books.filter((bk) => bk.genre === 'History');

userBooks = books.filter((bk) => bk.publish >= 1995 && bk.genre === "History");
// console.log(userBooks);


// Map methods


const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNum = myNumers.map( (num) => (num + 10));

const newNum = myNums   // chaining method 
                .map((num) => num * 10)
                .map((num) => num + 1)
                .filter((num) => num >= 40);
// console.log(newNum);

// reduce methods

const Nums = [1, 2, 3];

const myTotal = Nums.reduce((accumalotrs, currentvalue) => {
    // console.log(`acc: ${accumalotrs} and currval: ${currentvalue}`);
    return accumalotrs + currentvalue
}, 0) // here 0 is initial value for accumalotrs

// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "jscourse",
        price: 2000
    },
    {
        itemName: "mobile dev course",
        price: 5000
    },
    {
        itemName: "Python course",
        price: 999
    },
    {
        itemName: "Data Science",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(priceToPay);









