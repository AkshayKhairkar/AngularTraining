// var x;
// console.log(x);
// console.log(y);
// var y=20;
// console.log(y);

// function somefun(){

// }
// somefun();

// //Function Expression
// //(function(){})

// //IIFE Immediately invoked function expression
// (function(){
//     var x=19;
//     console.log(x);
// }());

//implicit args => this, arguments
function sum(x,y){
    console.log("in sum ...");
    console.log(arguments);
}

sum(2,3);
sum();
sum(2,3,4,5);