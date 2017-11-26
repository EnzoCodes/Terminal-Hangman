//Word: Used to create an object representing the current word
//the user is attempting to guess. This should contain word specific
//logic and data.
var Letter = require("./letter.js");

var Word = function(word) {
    console.log("---------- CHOOSING WORD ----------");

    this.nWord = [];
    this.cLetter = [];
    this.word = word;
    this.randWord = this.word.split("");
    this.functions = function(flag){

        for (var i = 0; i < this.word.length; i++){
            var x = new Letterfy(this.word[i], flag)
            this.nWord.push( x.showLetter() );
        }
    }
    this.checkLetter =  function(letter) {
        if (this.randWord.indexOf(letter) > -1) {

            for (var i = 0; i < this.nWord.length; i++) {
                if (this.word.charAt(i) == letter) {
                    this.nWord[i] = new Letterfy(this.word[i], true).showLetter();
                }
            }
            return true
        } else {
            this.cLetter.push(letter);
            return false;
        }
    }

    this.checkWin = function(){
        for (var i = 0; i < this.randWord.length; i++) {
            if (this.randWord[i] != this.nWord[i]) {
                return false;
            }
        } else {
            return true;
        }
    }
    this.showWord = function(){
        console.log(this.nWord.join(" "));
    }
    this.showLetter = function(){
        console.log("Letter's Guessed: " + this.cLetter.join(" "));
    }
    this.letterGuess = function(letter){
        if (this.nWord.indexOf(letter) > -1 || this.cLetter.indexOf(letter) > -1) {
            return false;
        } else {
            return true;
        }
    }


};



module.export = Word;
