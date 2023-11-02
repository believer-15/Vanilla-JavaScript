// Immediately invoked function expressions

(function chai(){
    console.log(`DB CONNECTED`);
})();

((name) => {
    console.log(`DB CONNECTED ${name}`)
})('Ujjwal')