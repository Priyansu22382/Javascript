class Human{
    fullName;
    age;
    weight;
    height;

    constructor(fullName,age,weight,height){
        this.fullName = fullName;
        this.age = age;
        this.weight = weight;
        this.height = height;
    }
    set setFullName(fullName){
        this.fullName = fullName;
    }
    get fetchFullName(){
        return this.fullName;
    }

    set setAge(age){
        this.age = age;
    }
    get fetchAge(){
        return this.age;
    }

    set setHeight(height){
        this.height = height;
    }
    get fetchHeight(){
        return this.height;
    }

    set setWeight(weight){
        this.weight = weight;
    }
    get fetchWeight(){
        return this.weight;
    }

    printFullName(){
        console.log(`Your Name is : ${this.fullName}`);
    }
    printAge(){
        console.log(`Your Age is : ${this.age}`);
    }
    printWeight(){
        console.log(`Your Weight is : ${this.weight} Kg`);
    }
    printHeight(){
        console.log(`Your Height is : ${this.height} Cm`);
    }

    walking(){
        console.log(`${this.fullName} is Walking.`);
    }
    running(){
        console.log(`${this.fullName} is Running.`);
    }
    sleeping(){
        console.log(`${this.fullName} is Sleeping.`);
    }
};


let obj1 = new Human();
obj1.fullName = "Priyanshu";
obj1.age = 20;
obj1.height = 173;
obj1.weight = 62.9;

// obj1.printFullName();
// obj1.printAge();
// obj1.printWeight();
// obj1.printHeight();

console.log(obj1);


let obj2 = new Human();
obj2.setFullName = "Vipul Yadav";
obj2.setAge = 23;
obj2.setHeight = 170;
obj2.setWeight = 73;


// console.log(obj2.fetchFullName);
// console.log(obj2.fetchAge);
// console.log(obj2.fetchHeight);
// console.log(obj2.fetchWeight);

console.log(obj2);

let obj3 = new Human("Nootan Sharma",21,70,170);
console.log(obj3);