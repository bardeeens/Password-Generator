var generateBtn = document.querySelector("#generate");
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numberStr = "1234567890"
var symbols = "!@#$%^&*()?"
var passwordLength = 0
var masterString = ''
var yourPassword = ''

function getPasswordCriteria() {
  var passwordLength = parseInt(
    prompt("How long would you like the password? (8-128 characters)")
  );
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Bad password length!");
    return getPasswordCriteria();
  }


  var usingLowercase = confirm('Are we using lowercase letters?');
  var usingUppercase = confirm('Are we using uppercase letters?');
  var usingNumbers = confirm('Are we using numbers?');
  var usingSymbols = confirm('Are we using special characters?');

  if (usingLowercase) {
    masterString += lowerCase;
  }
  if (usingUppercase) {
    masterString += upperCase;
  }
  if (usingNumbers) {
    masterString += numberStr;
  }
  if (usingSymbols) {
    masterString += symbols;
  }
  function getRandomCharacter() {
    return masterString[Math.floor(Math.random() * masterString.length)];
  }

  for (let i = 0; i < passwordLength; i++) {

    yourPassword = yourPassword + getRandomCharacter();
    var passwordText = document.querySelector("#password");
    passwordText.value = yourPassword;

  }
}

// generateBtn.addEventListener("click", getPasswordCriteria);

getPasswordCriteria();


