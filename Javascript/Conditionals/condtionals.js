let age = 15;
if(age >= 18){
    console.log("You can vote!");
}
else{
    console.log("You are not eligible for vote!");
}

let num = 4;
if(num % 2 ==0){
    console.log("It's Even Number!");
}
else{
    console.log("It's Odd Number!");
}

let num1 = 6;
let num2 = 8;
let num3 = 1;
if(num1 > num2 && num1 > num3){
    console.log(`num1 ${num1} is greater.`);
}
else if(num2 > num1 && num2 > num3){
    console.log(`num2 ${num2} is greater.`);
}
else{
    console.log(`num3 ${num3} is greater.`);
}

let year = 2017;
if(year % 4 == 0 || year % 400 == 0){
    console.log("It's Leap Year.");
}
else{
    console.log("It's Normal Year.");
}

let tempInCelsius = 23;
if(tempInCelsius < 0){
    console.log("Freezing.");
}
else if(tempInCelsius >= 0 && tempInCelsius <= 15){
    console.log("Cold.");
}
else if(tempInCelsius >= 16 && tempInCelsius <= 30){
    console.log("Moderate.");
}
else{
    console.log("Hot.")
}