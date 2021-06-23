
//Variables to tap userchices:

var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

// Since the password will have special characters, numbers, and alphabets, we should create corresponding arrays:

// Array of Special characters

character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

// Array of numbers
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Array of alphabets
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Space is for the Uppercase conversion
space = [];

// Choices declared outside the if statement so they can be concatenated upon condition
var choices;

// converts letters to uppercase 
var toUpper = function (x) {
    return x.toUpperCase();
};

// creates a variable for uppercase conversion
alpha2 = alpha.map(toUpper);


//We want to add an event listener to the button with the id generate
//We can create a new variable 'get'

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
    ps = generatePassword();
    document.getElementById("password").placeholder = ps;
});

// Defining the function to generate a password
function generatePassword() {
    // Asks for user input and makes sure its converted to an integer
    enter = parseInt(prompt("How many characters would you like in your password? You must choose between 8 and 128"));
    // First if statement for user validation 
    if (!enter) {
        alert("You need to enter a value");
    } else if (enter < 8 || enter > 128) {
        // Validates user input
        // Start sending out input prompts
        enter = parseInt(prompt("You must choose between 8 and 128"));

    } else {
        // Continues sending out prompts once user input is validated
        confirmNumberChoice = confirm("Will this password contain numbers?");
        confirmCharacterChoice = confirm("Will this password contain special characters?");
        confirmUppercaseChoice = confirm("Will this password contain Uppercase letters?");
        confirmLowercaseChoice = confirm("Will this password contain Lowercase letters?");
    };

    // Else if the user doesn't choose any of the options
    if (!confirmCharacterChoice && !confirmNumberChoice && !confirmUppercaseChoice && !confirmLowercaseChoice) {
        choices = alert("You must choose a criteria!");

    }
    // First if statement that uses user input prompts to determine choices
    // Else if the user confirms all four options 
    else if (confirmCharacterChoice && confirmNumberChoice && confirmUppercaseChoice && confirmLowercaseChoice) {

      //merging all the arrays into one array
        choices = character.concat(number, alpha, alpha2);
    }
    // Else if the user goes for 3 options, then merging those 3 choices into one array
    else if (confirmCharacterChoice && confirmNumberChoice && confirmUppercaseChoice) {
        choices = character.concat(number, alpha2);
    }
    else if (confirmCharacterChoice && confirmNumberChoice && confirmLowercaseChoice) {
        choices = character.concat(number, alpha);
    }
    else if (confirmCharacterChoice && confirmLowercaseChoice && confirmUppercaseChoice) {
        choices = character.concat(alpha, alpha2);
    }
    else if (confirmNumberChoice && confirmLowercaseChoice && confirmUppercaseChoice) {
        choices = number.concat(alpha, alpha2);
    }
    // Else if the user goes for 2 options, then merging those 2 options into one array
    else if (confirmCharacterChoice && confirmNumberChoice) {
        choices = character.concat(number);

    } else if (confirmCharacterChoice && confirmLowercaseChoice) {
        choices = character.concat(alpha);

    } else if (confirmCharacterChoice && confirmUppercaseChoice) {
        choices = character.concat(alpha2);
    }
    else if (confirmLowercaseChoice && confirmNumberChoice) {
        choices = alpha.concat(number);

    } else if (confirmLowercaseChoice && confirmUppercaseChoice) {
        choices = alpha.concat(alpha2);

    } else if (confirmNumberChoice && confirmUppercaseChoice) {
        choices = number.concat(alpha2);
    }
    // Else if the user goes for 1 option, then using that one option as the array to choose from
    else if (confirmCharacterChoice) {
        choices = character;
    }
    else if (confirmNumberChoice) {
        choices = number;
    }
    else if (confirmLowercaseChoice) {
        choices = alpha;
    }
    // Created space variable to fill uppercase conversion
    else if (confirmUppercaseChoice) {
        choices = space.concat(alpha2);
    };

    // password variable is an array placeholder for user generated amount of length
    var password = [];

    // Start random selection variables:
    // Random selection for all variables: 
    for (var i = 0; i < enter; i++) {

   //As we loop through an empty array with number of characters equal to what the user has indicated, we will populate the array using the Math.random() function
        
   var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices);
    }
    // This joins the password array and converts it to a string
    
    var ps = password.join(" ");
    UserInput(ps);
    return ps;
}

    // This puts the password value into the textbox, (which has an id of "password")


    function UserInput(ps) {
    document.getElementById("password").textContent = ps;

    }

    //sources I referred for code: https://www.youtube.com/watch?v=9sT03jEwcaw

    //sources I referred for code: https://w3collective.com/random-password-generator-javascript/


