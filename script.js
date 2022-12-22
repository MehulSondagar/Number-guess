var msg1 = document.getElementById("message1");
var msg2 = document.getElementById("message2");
var msg3 = document.getElementById("message3");

var ans = Math.floor(Math.random() * 100) + 1;

var no_of_guesses = 0;
var guessed_nums = [];

function play() {
    var user_guess = document.getElementById("guess").value;

    if (user_guess < 1 || user_guess > 100) {
        alert("Please Enter a number between 1 and 100");
    }
    else {
        guessed_nums.push(user_guess);
        no_of_guesses += 1;

        if (user_guess < ans){
            msg1.textContent = "your guess is too low";
            msg2.textContent = "No. of guesses : " + no_of_guesses;
            msg3.textContent = "Guess numbered are: " + guessed_nums;
        }

        else if (user_guess > ans) {
                        msg1.textContent = "your guess is too high";
                        msg2.textContent = "No. of guesses : " + no_of_guesses;
                        msg3.textContent =
                          "Guess numbered are: " + guessed_nums;
            
        }
        else if (user_guess == ans) {
            msg1.textContent = "Your guess is correct!";
            msg2.textContent = "The Number was: " + answer;
            msg3.textContent = "you Guessed it in " + no_of_guesses + "guesses";
            document.getElementById("my_btn").disabled = true;

        }
    }
}
