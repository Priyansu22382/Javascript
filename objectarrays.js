// let obj = {
//     fullName : "Priyanshu Nigam",
//     age : 20,
//     rollNo : 2022382,
//     contactNumber : 9315580536,
//     sayMyDetails : function(){
//         console.log(`Your Name : ${this.fullName}`);
//         console.log(`Your Age : ${this.age}`);
//         console.log(`Your Roll Number : ${this.rollNo}`);
//         console.log(`Your Contact Number : ${this.contactNumber}`);
//     }
// }

// console.log(obj);
// console.log(typeof(obj));

// obj.sayMyDetails();

// let obj1 = obj; // This Create a Shallow Copy whatever changes i made in obj1 it also happen in the obj. because obj1 and obj are references but the data of object is in heap which the references points.

// Creatio of Arrays...

// let arr = [3,5,1,7,8];
// console.log(arr);

// let brr = new Array("Priyanshu","Apple","PineApple",442,9983);
// console.log(brr);
// brr.push("Kavya");
// console.log(brr);
// brr.pop();
// console.log(brr);
// brr.shift();
// console.log(brr);
// brr.unshift("Priyanshu");
// console.log(brr);
// console.log(brr.slice(1,3));
// brr.splice(1,2,"Kavya"); // Starting Index, no of delete items, inserting element
// console.log(brr);

// let arr1 = new Array(10,40,90,30,21,455,14,155,252,551,15,53,52,56,98,96,99);
// console.log(arr1);

// let ansArray = arr1.map((number) => {
//     return number*number;
// });

// console.log(ansArray);

// arr1.map((number)=>{
//     console.log(number);
// });

// arr1.map((number,index)=>{
//     console.log(number);
//     console.log(index);
// })


// For this filetering process we don't use the function map because it take the value from an original array and apply the logic of function defined in the map and then process the each data of arraya and store them in the ansArray.
// but if we want to do filtering the unecessary data is mapped with undefined but we want only defined data that's why we use the filter function for the filtering not map.


// let ansArray = arr1.map((number) => {
//     if(number%2 == 0){
//         return number;
//     }
// });

// console.log(ansArray);


// let ansArray = arr1.filter((number)=>{
//     if(number%2 == 0){
//         return number;
//     }
// });

// let ansArray = arr1.filter((number)=>{
//     if(number%2==0){
//         return true;
//     }
//     else{
//         return false;
//     }
// });
// console.log(ansArray);

// let arra = new Array(10,20,30,40,50);
// let ans = arra.reduce((acc,curr)=>{
//     return acc+curr;
// },0);

// let ans = arra.reduce((acc,curr)=>{
//     return acc+curr;
// });

// console.log(ans);


// let arr = [10,20,30];
// let ans = arr.forEach((value,index)=>{
    // console.log("Number : ",value , " ", "Index : ",index);
    // return value*2; // it return undefined...  beacuase forEach is used for iteration not for transform and return new Array.
// });

// let obj = {
//     fullName : "Priyanshu Nigam",
//     age : 20,
//     rollNo : 2022382,
//     contactNumber : 9315580536,
//     sayMyDetails : function(){
//         console.log(`Your Name : ${this.fullName}`);
//         console.log(`Your Age : ${this.age}`);
//         console.log(`Your Roll Number : ${this.rollNo}`);
//         console.log(`Your Contact Number : ${this.contactNumber}`);
//     }
// }

// for(key in obj){
//     console.log(key, ": ", obj[key]);
// }

// for(val of arr){
//     console.log(val);
// }

// let fullName = "Priyanshu";
// for(val of fullName){
//     console.log(val);
// }


let arr = [10,20,30,40,50];
// let sum = arr.reduce((acc,curr)=>{
//     return acc+curr;
// });

// console.log(sum);

function getSum(arr){
    let length = arr.length;
    let sum = 0;
    for(let index = 0 ; index < length ; index++){
        sum = sum + arr[index];
    }

    return sum;
};

console.log(getSum(arr));