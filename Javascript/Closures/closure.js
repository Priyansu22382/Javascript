// Closure : Function Bind Withs Their Required Data / Lexical Scope / Surrounding State.

// let firstName = "Sunil";
// function outerFunction(){
//     let firstName = "Priyanshu";
//     function innerFunction(){
//         // let firstName = "Sumit";
//         console.log("My Name Is : ",firstName);
//     }
//     innerFunction();
// }
// outerFunction();

// Closures Property Shown

function outerFunction(){
    let firstName = "Priyanshu";
    function innerFunction(){
        console.log(firstName);
    }
    return innerFunction;
}
let inner = outerFunction(); // After Calling the outerFunction the firstName memory is free after the function call and now if we call the inner() it prints undefined? but it prints Priyanshu because the innerFunction is Binds with the Required Field firtName. this is we called closures.
inner(); 