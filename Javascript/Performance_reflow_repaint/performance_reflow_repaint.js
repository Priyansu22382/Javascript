// Reflow : proces of calculating the position / dimension of element.
// Repaint : process of displaying the content/element pixel by pixel.

// For the fastest performance web page we have to ensure that minimum number of Reflow and minimum number of Repaint has to be done.




// We want to display 100 paras in the web page...

// Code 1
const t1 = performance.now();
for(let  i = 1 ; i <= 100 ; i++){
    let para = document.createElement('p');
    para.textContent = "This is Para "+ i;
    // 1 Reflow and 1 Repaint Everytime for the below line.
    document.body.appendChild(para);
}
const t2 = performance.now();

console.log("Total Time Taken By The Code 1 : "+ (t2-t1));


// Code 2
const t3 = performance.now();
let myDiv = document.createElement('div');
for(let i = 1 ; i <= 100 ; i++){
    let para = document.createElement('p');
    para.textContent = "This is Para "+ i;
    // No Reflow and No Repaint for the Below line.
    myDiv.appendChild(para);
}
document.body.appendChild(myDiv);
const t4 = performance.now();

console.log("Total Time Taken By The Code 2 : "+ (t4-t3));


// document.body.append() takes 1 Reflow and 1 Repaint.


// Conclusion...
// Accordind to you code 1 will be faster because we don't need to crate the div and directly append the paras into the body. but inreality code 2 will be faster because in code 2 there is only 1 Reflow process and 1 Repaint process.
// Code-1 : when para 1 is created and document.body.appendChild(para); after executing of the last line (document.body.appendChild(para);) first Reflow Process occurs then Repaint Process.
// and when para 49 is created and document.body.appendChild(para); after executing of the last line (document.body.appendChild(para);) 49th Reflow and 49th Repaint has to be done.
// and when the final 100th para is created and document.body.appendChild(para); after executing of the last line (document.body.appendChild(para);) 100th Reflow and 100th Repaint has to be done.

// Code-2 : when para 1 is created and myDiv.appendChild(para); no Reflow and no Repaint done.(because we are not appending this into the document right now.).
// when para 100th is created and myDiv.appendChild(para); no Reflow and no Repaint done. (because we are not appending this into the document right now.).
// after creating the 100 paras then the next line is document.body.appendChild(myDiv); now only one thing is appending in the document throughout the code-2 so only 1 Reflow and 1 Repaint has to be done.
// So, this is the reason why the code-2 is faster than the code-1 because code-1 has to done 100 Reflow and 100 Repaint Processes. while code-2 has to be done only 1 Reflow and 1 Repaint process.


// Best-Code

const t5 = performance.now();
let fragment = document.createDocumentFragment();
for(let i = 1 ; i <= 100 ; i++){
    let para = document.createElement('p');
    para.textContent = "This is Para " + i;
    // No Reflow and No Repaint for the Below line.
    fragment.appendChild(para);
}
document.body.appendChild(fragment);
const t6 = performance.now();
console.log("Total Time Taken By The Code  : "+(t6-t5));