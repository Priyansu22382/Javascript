console.log("Today we Learned about the Function Call Stack and Hoisting.");

// 1. Hoisting... (Only For Var decelaration of Variable and Plain Function).

// console.log(age); // Print Undefined because when we use the var keyword for the decelaration of the variable only (var (variable name); shifts to the top of the block scope. without the value assignment that's why it shows undefined).
// var age = 25;
// console.log(age);


// console.log(Age); // Throws an Reference Error because variable hoisting is defined for Var keyword decelaration.
// let Age = 25;
// console.log(Age);

// sayMyName("Priyanshu"); // It Prints Hello Priyanshu as normal because this is the plain function decelaration and when we use the plain function decelaration and before that we call the function it shifts to the top of the current block scope.
// function sayMyName(fullName){
//     console.log(`Hello ${fullName}`);
// }
// sayMyName("Priyanshu");


// sayMyName("Priyanshu"); // Throws an Reference Error Because Hoisting is defined only for the Plain Function Decelaration.
// let sayMyName = function(fullName){
//     console.log(`Hello ${fullName}`);
// }
// sayMyName("Priyanshu");




let arr = [
    function(a,b){
        return a+b;
    },
    function(a,b){
        return a-b;
    },
    function(a,b){
        return a*b;
    }
];

let first = arr[0];
let ans1 = first(5,10);
console.log(ans1);


function solve(number){
    return function(number){
        return number*number;
    }
}

let ans = solve(10);
let finalAns = ans(10);
// console.log(finalAns);

function greetMe(greet,fullName){
    console.log(`Hello ${fullName}`);
    greet();
}

// greetMe(greet,"Priyanshu");
function greet(){
    console.log("Greeting of the day!");
}
// greet();
// greetMe(greet,"Priyanshu");


