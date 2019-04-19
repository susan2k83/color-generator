//this variable stores the 'pick a color' button

const originalButton = document.getElementById("original-button");
//this var stores the 'mystery color' button
const mysteryButton = document.getElementById("mystery-button");

//this random number function that will create color codes for the randomColor variable



//rgb(255, 255, 255 )
//first is for reds, 2nd is for green, third is for yellows

function randomNumber(num) {
    return Math.floor(Math.random() * num);
}

//write your code below
function colorChange(event) {
    const randomColor = 'rgb(' + randomNumber(255) + ' , ' + randomNumber(255) + ', ' + randomNumber(255) + ')';

event.target.style.backgroundColor = randomColor;
}
originalButton.onclick = colorChange;
mysteryButton.onwheel = colorChange;
