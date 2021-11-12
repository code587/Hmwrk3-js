// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}
//write everything in here except global
function generatePassword() {

  prompt("Choose between 8 and 128 for number of characters in your password.");
  prompt("Include uppercase letters? Type y or n"); 
  
  prompt("Include lowercase letters? Type y or n");
  prompt("Include special characters? Type y or n");
  prompt("Include numbers? Type y or n");

  let upperCaseAlphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
  Math.floor(Math.random()*upperCaseAlphabet.length);
  let randomUpperAlphabet = Math.floor(Math.random()*upperCaseAlphabet.length);
  upperCaseAlphabet[randomUpperAlphabet]
 
  let lowerCaseAlphabet = ["abcdefghijklmnopqrstuvwxyz"].toLowerCase().split("");
  Math.floor(Math.random()*lowerCaseAlphabet.length);
  let randomLowerAlphabet = Math.floor(Math.random()*lowerCaseAlphabet.length);
  lowerCaseAlphabet[randomLowerAlphabet]

  let specialCharacters = "!”#$%&’()*+,-./:;<=>?@[\]^_`{|}~".split("");
  Math.floor(Math.random()*specialCharacters.length);
  let randomSpecialCharacters = Math.floor(Math.random()*specialCharacters.length);
  specialCharacters[randomSpecialCharacters]

  let numberCharacters = "123456789".split("");
  Math.floor(Math.random()*numberCharacters.length);
  let randomNumberCharacters = Math.floor(Math.random()*numberCharacters.length);
  numberCharacters[randomNumberCharacters]
   
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

