$(document).ready(function() {
    //Variables
    var guessLetterStart = "";
    var possibleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    var wins = 0;
    var losses = 0;
    var guessesLeft = 10;
    var guessesSoFarCount = 0;





    $('#guessButton').click(function (event) {
        var guess = $('#guessBoxInput').val();
        $('#guessSoFar').text("Guesses so far Test: " + guess);
    });

    //Main Functions
    function randomLetter() {
        for (var i = 0; i < 1; i++) {
            guessLetterStart += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
        }
    };


    //JQ to replace HTML
    randomLetter();



    $('#guessLetterStart').text("Guess what letter I'm thinking of: " + guessLetterStart);
    $('#wins').text("Wins: " + wins);
    $('#losses').text("Losses: " + losses);
    $('#guessesLeft').text("Guesses left: " + guessesLeft);


});

