// let firstPromise = new Promise((resolve,reject) => {
//     console.log("Priyanshu");
//     resolve("Promise Completed in Tasks");
// });

function sayMyName(){
    console.log("Hi, MySelf Priyanshu.");
}
// setTimeout(sayMyName,5000); // async Code...

// if we want to make the async code to work as the sync code we put the async code into the promise block. 

// let newPromise = new Promise((resolve,reject) => {
//     setTimeout(sayMyName,15000);
// })

// let promise1 = new Promise((resolve,reject) => {
//     let success = true;
//     if(success){
//         resolve("Promise Fulfilled.");
//     }
//     else{
//         reject("Promise Rejected.");
//     }
// });

// promise1.then((message) => {
//     console.log("Message of then block is : "+ message);
//     return "Promise fulfilled second message."
// }).catch((message) => {
//     console.log("Message of catch block is : "+ message);
// }).finally((message) => {
//     console.log("I will run everytime.")
// })


// Multiple then blocks

// promise1.then((message) => {
//     console.log("Message of then block is : "+ message);
//     return "Promise fulfilled second message."
// }).then((message) => {
//     console.log("Message of then block 2 is : "+ message);
//     return "Promise fullfilled third message."
// }).then((message) => {
//     console.log("Message of then block 3 is : "+message);
// }).finally((message) => {
//     console.log("I will run everytime.")
// })


// When we want to execute multiple promises concurrently...

let promise1 = new Promise((resolve,reject) => {
    setTimeout(resolve,1000,"First Promise");
});

let promise2 = new Promise((resolve,reject) => {
    setTimeout(resolve,2000,"Second Promise");
});

let promise3 = new Promise((resolve,reject) => {
    setTimeout(resolve,4000,"Third Promise");
});


Promise.all([promise1,promise2,promise3]).then((value) => {
    console.log(value);
});