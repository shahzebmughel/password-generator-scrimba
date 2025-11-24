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
const passwordOneField = document.getElementById("password-field-one");
const passwordTwoField = document.getElementById("password-field-two");

const inlcudeNumbersBox = document.getElementById("inlcude-numbers");
const inlcudeSymbolsBox = document.getElementById("inlcude-symbols");
const passwordLengthField = document.getElementById("password-length");
const passwordCheckListDiv = document.getElementById("password-checklist");

// Make a for loop and use a Random number that accesses the array from letters numbers and symbols for each position
// that prints out a password that is 15 chars long

function generatePassword(passwordLength, includeNumbers, includeSymbols) {
    let password1 = "";
    let password2 = "";
    let arr = [];

    if (includeNumbers && !includeSymbols) {
        console.log("Letters and Numbers")
        arr = COMBINED_NUMBERS;
    } else if (includeSymbols && !includeNumbers) {
        console.log("Letters and Symbols")
        arr = COMBINED_SYMBOLS;
    } else if (includeSymbols && includeNumbers) {
        console.log("Letters, numbers and Symbols ")
        arr = COMBINED_EVERYTHING;
    } else {
        console.log("Letters only")
        arr = letters;
    }

    for (let i = 0; i < passwordLength; i++) {
        let randomValue1 = Math.floor(Math.random() * arr.length);
        let randomValue2 = Math.floor(Math.random() * arr.length);

        password1 += arr[randomValue1];
        password2 += arr[randomValue2];

    }
    passwordOneField.textContent = password1;
    passwordTwoField.textContent = password2;

}

generatePasswordBtn.addEventListener("click", function () {
    console.log("button clicked!")

    // check if Checkbox was clicked for Include numbers or include symbols or if both got checked
    // also check for how long the password length should be, read from Textfield
    console.log(inlcudeNumbersBox.checked)
    console.log(inlcudeSymbolsBox.checked)
    generatePassword(passwordLengthField.value, inlcudeNumbersBox.checked, inlcudeSymbolsBox.checked);
})
