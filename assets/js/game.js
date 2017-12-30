$(document).ready(function() {
    //Variables
    var guessLetterStart = "";
    var possibleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    var wins = 0;
    var losses = 0;
    var guessesLeft = 10;
    var guessesSoFarCount = 0;

    //JQ to replace HTML
    randomLetter();
    $('#guessLetterStart').text("Guess what letter I'm thinking of: " + guessLetterStart);
    $('#wins').text("Wins: " + wins);
    $('#losses').text("Losses: " + losses);

    //Main Functions///////////////////////////////////////////////////

    //Function to randomize letter
    function randomLetter() {
        for (var i = 0; i < 1; i++) {
            guessLetterStart += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
        }


        //Main Function to capture inbox from text box upon button click and update page.
        $('#guessButton').click(function (event) {
            var guess = $('#guessBoxInput').val();
            $('#guessSoFar').text("Your guess: " + guess);
            guessesLeft--;
            $('#guessesLeft').text("Guesses Left: " + guessesLeft);

            //Keep counter at 0
            if (guessesLeft === 0) {
                guessesLeft++;
                //Refreshes page upon clicking OK of losing alert.
                if(!alert('Sorry you lose :(')){window.location.reload();}
            };

            //Wins
            if (guess === guessLetterStart) {
                wins++;
                //Refreshes page upon clicking OK of losing alert.
                if(!alert('Congratulations, you Win!!')){window.location.reload();}
            };

            //Losses
            if (guess != guessLetterStart) {
                losses++;
            };

            //Reset HTML
            $('#guessLetterStart').text("Guess what letter I'm thinking of: " + guessLetterStart);
            $('#wins').text("Wins: " + wins);
            $('#losses').text("Losses: " + losses);;
        });
    };



});

