// // create a variable and set it to the html document body
// let body = document.querySelector('body');
// // set the text color of the body (and all its elements)
// body.setAttribute('style', 'color: teal');

// // create a variable and set it to a new button
// let newButton = document.createElement("button");
// // add that button to the body
// body.appendChild(newButton);
// // adding text to the button
// newButton.innerHTML = "ADD";

// let i = 0;

// function addButtonClicked(){
//     let newHeader = document.createElement('h2');
    
//     newHeader.innerHTML = "Big Blue Balloon";
//     newHeader.setAttribute('id', i);
//     body.appendChild(newHeader);

//     i++;
// }

// newButton.addEventListener('click', addButtonClicked);

// // create a variable and set it to a new button
// let newButton2 = document.createElement('button');
// // add that button to the body
// body.appendChild(newButton2);
// // adding text to the button
// newButton2.innerHTML = "REMOVE";

// function removeButtonClicked(){
//     let toDelete = document.getElementById(i - 1);
//     console.log(toDelete);
//     body.removeChild(toDelete);

//     i--;
// }

// newButton2.addEventListener('click', removeButtonClicked);

// // console.log(body);




// declare variables, including body, the buttons and the index
let body = document.querySelector('body');
let newButton = document.createElement('button');
let newButton2 = document.createElement('button');
let i = 0;

body.setAttribute('style', 'color: teal');
body.appendChild(newButton);
body.appendChild(newButton2);
newButton.innerHTML = "ADD";
newButton2.innerHTML = "REMOVE";

newButton.addEventListener('click', addButtonClicked);
newButton2.addEventListener('click', removeButtonClicked);

function addButtonClicked(){
    let newHeader = document.createElement('h2');
    
    newHeader.innerHTML = "Big Blue Balloon";
    newHeader.setAttribute('id', i);
    body.appendChild(newHeader);

    i++;
}

function removeButtonClicked(){
    let toDelete = document.getElementById(i - 1);

    if(toDelete !== null){
        console.log(toDelete);
    
        body.removeChild(toDelete);
    
        i--;
    } else {
        window.alert('Nothing to delete');
    }
}