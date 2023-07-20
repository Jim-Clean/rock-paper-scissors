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

//make game logic for winner/loser in function
function playRound(playerSelection, computerSelection) {

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
            outcome = "Loser"
        } else {
            outcome = "Draw"
        }
    }

    //Decide which array to use based of user selection
    if (playerSelection === "Rock") {
        arrayLogic(rock)
    } else if (playerSelection === "Paper") {
        arrayLogic(paper)
    } else {
        arrayLogic(scissors)
    }



        if (outcome === "Winner") {
            score = score+1
        } else if (outcome === "Loser") {
            score = score-1
        } else {
            score = score*1
        }

        console.log(score);

        if (score === 5) {
            winner.innerHTML = "Player wins!";
        } else if (score === -5) {
            winner.innerHTML = "Computer wins!";
        }
        
        const scoreCount = document.getElementById("score");
        scoreCount.innerHTML = score;

        const winner = document.getElementById("winner");
    //return outcome

}

let optionArray = [
    "Rock",
    "Scissors",
    "Paper"
]

let computerSelection = getComputerChoice(optionArray);

//select random choice from array by using Math.random with the length of 
//Array
function getComputerChoice(myArray){
    return myArray[Math.floor(Math.random() * myArray.length)];
}

let score = 0;

/*
- loop function to play 5 rounds
- keep score of game for these 5 rounds
- display the ongoing score to the user and then show end result
*/

/*
function game() {

    for (let round = 0; round > 5; round++) {

        //create array of options for computer to select
        var optionArray = [
            "Rock",
            "Scissors",
            "Paper"
        ]
        
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

        console.log(playerSelection);
        console.log(computerSelection);
        console.log(playRound(playerSelection, computerSelection));

        //increment/decrement score variable for each round
        if (outcome === "Winner") {
            score = score+1
        } else if (outcome === "Loser") {
            score = score-1
        } else {
            score = score*1
        }

        console.log(score);

        //decide overall winner and output result
        if (round === 4 && score > 0) {
            alert("Player wins!")
        } else if (round === 4 && score < 0 ) {
            alert("Computer wins!")
        } else if (round === 4 && score === 0 ) {
            alert("Draw game! Refresh to play again")
        }
    }
}
*/

/*
const rock = document.getElementById('Rock');
    
rock.addEventListener('click', () => {
    playerSelection = "Rock";
    computerSelection = getComputerChoice(optionArray);
    console.log(playerSelection);
    console.log(computerSelection);
    console.log(playRound(playerSelection, computerSelection));
});
*/


const buttons = document.querySelectorAll('button');
// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    playerSelection = button.id;
    computerSelection = getComputerChoice(optionArray);
    console.log(playerSelection);
    console.log(computerSelection);
    console.log(playRound(playerSelection,computerSelection));
  });
});

/*
const scoreCount = document.getElementById("score");
scoreCount.innerHTML += score;
*/
/*
function game() {
    for (let round = 0; round > 5; round++) {

        if (outcome === "Winner") {
            score = score+1
        } else if (outcome === "Loser") {
            score = score-1
        } else {
            score = score*1
        }

        console.log(score);

        //decide overall winner and output result
        if (score === 5) {
            console.log("Player wins!")
        } else if (score === -5) {
            console.log("Computer wins!")
        }
    }
}
*/

//console.log(playerSelection);
//console.log(computerSelection);
//console.log(game());