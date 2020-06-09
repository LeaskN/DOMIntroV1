// create a variable and set it to the html document body
let body = document.querySelector('body');
// set the text color of the body (and all its elements)
body.setAttribute('style', 'color: teal');

// create a variable and set it to a new button
let newButton = document.createElement('button');
// add that button to the body
body.appendChild(newButton);
// adding text to the button
newButton.innerHTML = "ADD";

let i = 0;

function addButtonClicked(){
    // console.log('hit');
    // alert("Good job clicking the button!");

    let newHeader = document.createElement('h2');
    newHeader.innerHTML = "Big Blue Balloon";
    newHeader.setAttribute('id', i);
    body.appendChild(newHeader);

    console.log(newHeader);
}

newButton.addEventListener('click', addButtonClicked);

// create a variable and set it to a new button
let newButton2 = document.createElement('button');
// add that button to the body
body.appendChild(newButton2);
// adding text to the button
newButton2.innerHTML = "REMOVE";

function removeButtonClicked(){
    // console.log('hit');
    // alert("Good job clicking the button!");

    let newHeader = document.createElement('h2');
    newHeader.innerHTML = "Big Blue Balloon";
    body.appendChild(newHeader);
}

newButton2.addEventListener('click', removeButtonClicked);

// console.log(body);