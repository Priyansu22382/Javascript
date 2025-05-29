// let parent = document.getElementsByClassName('container');
// function changeText(){
//     let fpara = document.getElementById('fpara');
//     fpara.textContent = "Good Morning! Priyanshu" ;
// }
// let fpara = document.getElementById('fpara');

// // Adding the event listener to the first paragraph.
// // This will change the text of the first paragraph when it is clicked.
 
// fpara.addEventListener('click',changeText);

// // removing the event listener from the first paragraph.
// // This will remove the event listener from the first paragraph.

// // fpara.removeEventListener('click',changeText);

// let anchorElement = document.getElementById('fanchor');
// anchorElement.addEventListener('click',function(event){
//     event.preventDefault(); // This function stops the default behaviour of the element.
//     anchorElement.textContent = "Clicked Done Bhaii.";
//     anchorElement.style.textDecoration = 'none';
// });





// Multiple Listeners.


// Method-1

// let fpara = document.getElementById('fpara');
// let spara = document.getElementById('spara');
// let tpara = document.getElementById('tpara');
// let fopara = document.getElementById('fopara');

// fpara.addEventListener('click',function(event){
    // alert("You Have Clicked On Para : "+fpara.textContent);
// });

// spara.addEventListener('click',function(event){
//     alert("You Have Clicked On Para : "+spara.textContent);
// });

// tpara.addEventListener('click',function(event){
//     alert("You Have Clicked On Para : "+tpara.textContent);
// });

// fopara.addEventListener('click',function(event){
//     alert("You Have Clicked On Para : "+fopara.textContent);
// });

// Method-2

// let paras = document.querySelectorAll('p');
// for(let i = 0 ; i < paras.length ; i++){
//     let para = paras[i];
//     para.addEventListener('click',function(event){
//         alert("You Have Click on the Para : "+(i+1));
//         alert(para.textContent);
//     });
// }

// Method-3

// let paras = document.querySelectorAll('p');
// function alertFunction(event){
//     alert("You Have Clicked On Para : "+event.target.textContent); // Event : click , Target : p , textContent : p.textContent
// }

// for(let i = 0 ; i < paras.length ; i++){
//     let para = paras[i];
//     para.addEventListener('click',alertFunction);
// }


// Method-4

// function alertFunction(event){
//     alert("You Have Clicked On Para : "+event.target.textContent);
// }
// document.addEventListener('click',alertFunction);
