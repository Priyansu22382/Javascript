console.log("This File is all about the Object Cloning and Garbage Collector...");

let obj = {
    fullName : "Priyanshu",
    age : 20,
    weight : 62.9,
    height : 173,
    sex : "Male"
}

// console.log(obj);
// let obj2 = obj;

//This Create The Shallow Copy means The Data is same in both the cases but 2 different pointers obj2 and obj points this data and the obj and obj2 are stored in the Stack and while the data is stored in the Heap Memory.
//What changes we do in the obj same changes also happens in the obj2 because they are pointing the same data.
//similarly what changes we makes in the obj2 same changes also happens in the obj.

// console.log("\n");
// console.log(obj2);

// obj2.friend = "Vipul Yadav"; // Adding the new Entry in the object as a key-value pair.

// console.log(obj);
// console.log(obj2);



// "Method-1"if we want to make the cloning of the object we can use "Spread" Operator also.
// when we do the cloning of objects let's say obj2 is the clone of the original obj like in the below so now whatever changes we make in the obj then obj2 remains same it doesn't change and vice-versa.
// let obj2 = {...obj};
// console.log("\nObject : Obj\n");
// console.log(obj);
// console.log("\nObject : Obj2\n");
// console.log(obj2);

// obj2.friend = "Vipul Yadav";
// console.log("\nObject : Obj\n");
// console.log(obj);
// console.log("\nObject : Obj2\n");
// console.log(obj2);



// "Method-2" Cloning using assign keyword.
// obj2 = Object.assign({},obj);
// console.log("\nObject : Obj\n");
// console.log(obj);
// console.log("\nObject : Obj2\n");
// console.log(obj2);

// obj.bike = "Standard Bullet 350";
// obj2.bike = "Classic Bullet 350";
// obj2.fullName = "Vipul Yadav";
// obj2.age = 23;
// console.log("\nObject : Obj\n");
// console.log(obj);
// console.log("\nObject : Obj2\n");
// console.log(obj2);


// Cloning a multiple object in one object.

// let obj2 = {
//     Bike : "Bullet 350",
//     CC : "350cc",
//     Gears : 5
// }

// let finalObj = Object.assign(obj,obj2);
// console.log(finalObj);

// "Method-3" Cloning using Iteration.

let finalObj = {};
for(key in obj){
    newKey = key;
    newValue = obj[key];
    finalObj[newKey] = newValue;
}

// console.log(finalObj);
obj.bike = "Bullet 350cc";
console.log(obj);
console.log(finalObj);
