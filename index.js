const letters = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M",
    "N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m",
    "n","o","p","q","r","s","t","u","v","w","x","y","z"
];

const numbers = [
    "0","1","2","3","4","5","6","7","8","9"
];


const symbols = [
    " ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/",
    ":", ";", "<", "=", ">", "?", "@",
    "[", "\\", "]", "^", "_", "`",
    "{", "|", "}", "~"
];

const COMBINED_EVERYTHING = [...letters, ...numbers, ...symbols];
const COMBINED_NUMBERS = [...letters, ...numbers];
const COMBINED_SYMBOLS = [...letters, ...symbols];


const generatePasswordBtn = document.getElementById("generate-password-btn");
const passwordFieldOne = document.getElementById("password-field-one");
const passwordFieldTwo = document.getElementById("password-field-two");

// Make a for loop and use a Random number that accesses the array from letters numbers and symbols for each position
// that prints out a password that is 15 chars long

function generatePassword(passwordLength, includeNumbers, includeSymbols) {

}

generatePasswordBtn.addEventListener("click", function () {
    console.log("button clicked!")
})
