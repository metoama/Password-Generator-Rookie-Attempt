// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUZWXYZ";
var numChar = "0123456789";
var specChar = "!#$%&'()*+-./:;<=>?@[\^_`{|}~";
var selection = "";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


function generatePassword(){
 var result = "";
 

var passwordLength = prompt ("How many characters would you like your password to contain? Must be between 8-128 characters.");
passwordLength = parseInt(passwordLength);

if (passwordLength<8 || passwordLength>128) {
  alert("Password must contain 8-128 characters!"); 
return generatePassword();
}


var lowercaseConfirm = confirm("Would you like password to contain lowercase characters?");
var uppercaseConfirm = confirm("Would you like password to contain uppercase characters?");
var numCharConfirm = confirm("Would you like to make password more secure? How about adding numbers? ");
var specCharConfirm = confirm("Would you like to make password more secure? How about adding special characters? ");

if (lowercaseConfirm) {selection += lowercase;}



if (uppercaseConfirm) {selection += uppercase;}



if (numCharConfirm) {selection += numChar;}



if (specCharConfirm) {selection += specChar;}



for (var i=0; i<passwordLength; i++){
  password = selection[Math.floor(Math.random() * selection.length)];
}
return result;

}

generateBtn.addEventListener("click", writePassword);