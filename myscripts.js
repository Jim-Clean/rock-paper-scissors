/*
Make game of rock paper scissors using js. Need user to select entry and
computer to generate random entry of the three options.

- Get computer choice. randomly return one value of either "Rock", "Paper" or
"Scissors".

- Allow user to enter choice manually. Make this case insensitive. As long as
characters are in correct order it will accept selection.

- Allow user to play against computer and display the winner.

- Expand game to 5 rounds and keep score until there is a winner.
*/

//create array of options for computer to select

var optionArray = [
    "Rock",
    "Scissors",
    "Paper"
];

//select random choice from array by using Math.random with the length of 
//Array

function getComputerChoice(myArray){
    return myArray[Math.floor(Math.random() * myArray.length)];
}

//prompt user input of selection and get text entry

var userInput = prompt("Choose your fighter!");

//create capitilize function

function capitalize (str) {
    const lower = str.toLowerCase()
    return str.charAt(0).toUpperCase() + lower.slice(1)
}

//Edit userInput to allow all types of text entry

var playerSelection = capitalize(userInput);

var computerSelection = getComputerChoice(optionArray);

//make game logic for winner/loser.

//Create each array type.

var rock = [
    "Scissors",
    "Rock",
    "Paper"
]

var paper = [
    "Rock",
    "Paper",
    "Scissors"
]

var scissors = [
    "Paper",
    "Scissors",
    "Rock"
]

//function for deciding winner

function arrayLogic(Array) {
    if (Array.indexOf(playerSelection) > Array.indexOf(computerSelection)) {
        outcome =  "Winner"
    } else if (Array.indexOf(playerSelection) < Array.indexOf(computerSelection)) {
        outcome = "loser"
    } else {
        outcome = "draw"
    }
}

if (playerSelection === "Rock") {
    arrayLogic(rock)
} else if (playerSelection === "Paper") {
    arrayLogic(paper)
} else {
    arrayLogic(scissors)
}

console.log(playerSelection);
console.log(computerSelection);

console.log(outcome);