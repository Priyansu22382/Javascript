console.log("Priyanshu is here in the world of web development.");

// sync code.
// async code.
// sync code.
// Normally in the above case if async code handle to the browser and browser process until the process is complete then browser send the callback of async function into callback Queue then if the CallStack is empty then the Event Loop takes the function call from the CallBack Queue and load it into the CallStack then execute the function. and line 3 code does not wait for this process it execute before the async code process.

// But if we want that async code work as a sync code and wait for the async code and not to move on the next line. then we use the async-await.

// Like in the fetch API Case.
// Scenerio.
// Prepare URL / API endpoint -> sync
// await fetch data -> network call -> asyc
// process data -> sync

// async function getData(){
//     let response = await fetch('https://jsonplaceholder.typicode.com/comments?postId=1');
//     let data = await response.json(); // Convert the JSON String into the Javascript Object format for easy to use.
//     console.log(data);

// }
// getData(); 


// POST Request

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
const myRequest = new Request("https://jsonplaceholder.typicode.com/posts",{
    method : "POST",
    body : JSON.stringify({username : "Priyanshu Nigam"}),
    headers : myHeaders,
});


async function postData(){
    const response = await fetch(myRequest);
    let data = await response.json();
    console.log(data);
}
postData();