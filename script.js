// Assignment Code
let generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}
//write everything in here except global
function generatePassword(){

  prompt("Include uppercase letters?")
  prompt("Include lowercase letters?")
  prompt("Include special characters?")
  prompt("Include numbers?")
  prompt ("Choose the number pf password character between 8 through 128.")
  
  let chosenArrays = [...upperAlphabet, ...lowerAlphabet, ...specialCharacters, ...numberCharacters];

  for(i=0; i< 128;i++){
    password+="chosenArrays";
  }

  if (window.confirm) {
   window.open("exit.html");
  }

  if(prompt === yes) {
    chosenArrays
  }
  else if (prompt == no) {
    randomUalphabet
  }
  else (prompt == no); {
    randomLalphabet
  }
  'else' (prompt == no); {
    randomSpecialcharacters
  }
  'else' (prompt == no); {
    randomNumbercharacters
  }
  let upperAlphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("")
  Math.floor(Math.random()*upperAlphabet.length);
  upperAlphabet[randomUalphabet]

  let lowerAlphabet = "abcdefghijklmnopqrstuvwxyz".toLowerCase().split("")
  Math.floor(Math.random()*lowerAlphabet.length);
  lowerAlphabet[randomLalphabet]

  let specialCharacters = "!”#$%&’()*+,-./:;<=>?@[\]^_`{|}~".split("")
  Math.floor(Math.random()*specialCharacters.length);
  specialCharacters[randomSpecialcharacters]

  let numberCharacters = "0123456789".split("")
  Math.floor(Math.random()*numberCharacters.length)
  numberCharacters[randomNumbercharacters]

window.alert ("Your password is "); return "password"
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);