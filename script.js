
// Global Variables

var wins = 0;
var losses = 0;
var ties = 0;

// Array of options for the computer to choose FormData

var options = ["R", "P", "S"];

var playGame = function() {
    // Ask the user for their choice
    var userChoice = window.prompt("Enter R, P, or S:")

    // If the user presses cancel or types nothing in, immediately end the function
    if(!userChoice) {
        return;
    }


    // Convert to uppercase to make for easier comparison
    userChoice = userChoice.toUpperCase();

    // Get a random index from array of options
    // length of options is 3
    // math.random = 0.10
    // 0.10 * 3 = 0
    // .5 * 3 = 1
    // .99 * 3 = 2.97 BUT with math.floor it will equal 2
    // Math.floor is going to round the answers down to the closest number
    var index = Math.floor(Math.random() * options.length);
    var computerChoice = options[index];

    window.alert("The computer chose " + computerChoice);

    // If the choices are the same, the result is a tie
    if(userChoice === computerChoice) {
        ties++;
        window.alert("It's a Tie!");

        // Check every win condition for the player 
    } else if(
        (userChoice === "R" && computerChoice === "S") ||
        (userChoice === "P" && computerChoice === "R") ||
        (userChoice === "S" && computerChoice === "P")
    ) {
        wins++;
        window.alert("You Win!");

        // If above conditions failed, assume the player lost
    } else {
        losses++;
        window.alert("You Lost!");
    }

    //Print stats with line breaks 
    window.alert(
        "Stats: \nWins " + wins + "\nLosses: " + losses + "\nTies: " + ties); 

        //Ask the user to play again
        var playAgain = window.confirm("Play Again?");

        //If the user presses ok, run the function again
        if(playAgain) {
            playGame()
        }
};

//This runs the game for the first time
playGame();