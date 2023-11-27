const promiseOne = new Promise(function(resolve,reject){
    // DB calls, cryptography, network

    setTimeout(function(){
        console.log('Async task is complete');
        //resolve()
    }, 1000)
});


promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task 2');
        resolve()
    },1000)
}).then(function(){
    console.log("Aysnc 2 resolved");
})

// Data Consumption

const promise3 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Ujjwal", email: "example.com"})
    },1000)
})

promise3.then(function(user){
    console.log(user);
})