var inquirer = require('inquirer');
var guessCount;

var Word = require("./word.js");

var dictionary = ["cat", "dog", "kitten", "painting", "parrot", "artist", "programmer"];

gameStart();

function randomO(){
    return Math.floor(Math.random() * dictionary.length) + 1;
}

// You must keep track of the user's remaining guesses and prompt the user if they would like to end the game if none remain.
//
// Each constructor function should be in it's own file and be exported and required wherever needed.
function uInput(check, count) {
    if (count > 0) {
        inquirer.promt([{
            type: "input",
            message: "Enter a letter: ",
            name: "guess"
            validate: function(value) {
                if (isNan(value) && value.length == 1 && check.newLetter(value)) {
                    return true;
                } else {
                    return false;
                },
            }
        }]).then(function(data) {
            if (check.checkLetter(data.guess.toLowerCase())) {
                check.showGuess();
                console.log("Correct!");
                console.log("Remaining Guesses: " + count);
                check.showWord();

                if (check.checkWin() == true) {
                    console.log("You win!");
                    replay();
                } else {
                    uInput(check, count);
                }
            } else {
                console.log("Incorrect Entry");
                count--;
                check.showGuess();
                console.log("Remaining Guesses: " + count);
                check.showWord();
                uInput(check, count);
            }
    });
    } else {
        console.log("You ran out of guesses!");
        replay();
    }
};

function gameStart(){
    console.log("\n------------- Guess a Letter! ---------------\n")
    var count = 10;
    var check = new Word(dictionary[randomO()]);
    check.showWord();
    check.functions();
    uInput(check, count);
}


//Replay
function replay(){
    inquirer.prompt({
      name: "again",
      type: "confirm",
      message: "Would you like to play another match?"
    }).then(function(answer) {
      if (answer.again === true) {
        // starts new match with the same players
        playGame();
      }
      else {
        console.log("Come back again soon!");
      }
    });
};
