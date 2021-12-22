// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//arrays for each criteria
var number = [0,1,2,3,4,5,6,7,8,9];
var specialCharacter = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var lowerCharacter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCharacter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function generatePassword(){
  //User decides how many characters he wants in his password
  var length= prompt("How long would you like the password to be, please enter a number between 8 and 128");
  // If user chooses a number less than 8 or greater than 128 he will have to enter a number again
  while(confirmlength < 8 || confirmlength > 128){
    alert("Please Try again, Password length must be between 8 and 128 characters");
    var length= prompt("Please enter the number of characters, the number should be between 8 and 128");
  }
  
  //User decides if he wants Special Characters or no
  var specialchar = confirm ("Press yes to include SPECIAL CHARACTERS in your password, otherwise please press cancel");
  var lowerchar = confirm ("Press yes to include LOWER CASE CHARACTERS in your password, otherwise please press cancel");
  var upperchar = confirm ("Press yes to include UPPER CASE CHARACTERS in your password, otherwise please press cancel");
  var num = confirm ("Press yes to include NUMBERS in your password, otherwise please press cancel");
}














