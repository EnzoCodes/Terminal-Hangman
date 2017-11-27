// Letter: Used for each letter in the current word.
// Each letter object should either display an underlying character,
// or a blank placeholder (such as an underscore), depending on whether
// or not the user has guessed the letter. This should contain letter
// specific logic and data.

var Letter = function(letter, number){

    this.letter = letter;
    this.number = number;
    this.display = function() {
        if (this.letter == " ") {
            return " ";
        } else if (this.number == true){
            return letter; /* Maybe this.letter */
        } else {
            return "_";
        }
    }
};

module.exports = Letter;
