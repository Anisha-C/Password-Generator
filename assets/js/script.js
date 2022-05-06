// Variables

var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var num = "1234567890";
var specialSym = "!@#$%^&*()_-+=|[]{};:',<>./?";

var letters
var numbers
var symbols

function passwordLength(){
    letters = parseInt(window.prompt("Choose a number between 8 and 128 for password length: "));
  
    if(isNaN (letters)){
      window.alert("Invaild Input! Needs to be a number. Please try again"); 
      passwordLength();

    }

    // Asks user how long they want their password to be
    if (letters<8){
        //invaid input window alert, user must pick between these numbers
      window.alert("Invaild Input! Password must be longer than 8 characters, Please try again"); 
      passwordLength();
    } else if(letters > 128){
      window.alert("Invaild Input! Password must be shorter than 128 characters, Please try again!");
      passwordLength();
    }
    return letters;
  }


  //function to call and combine characters
  function selectChar(){
    console.log("selectChar ran")
     var characters = "";
  
     var useLowerCase = window.confirm("Would you like to have lower case characters in your password?");
      
      if(useLowerCase){
      characters += lowerCase
      }
      
      var useUpperCase = window.confirm("Would you like to have upper caseccharacters in your password?");
  
      if(useUpperCase){
        characters += upperCase
      }
  
      var useNum = window.confirm("Would you like to have numbers in your password?");
  
      if(useNum){
        characters += num
      }
  
      var useSpecialSym= window.confirm("Would you like to have upper case characters in your password?");
  
      if(useSpecialSym){
        characters += specialSym
      }
  
      if (!useLowerCase && !useUpperCase && !useNum && !useSpecialSym){
      window.alert("Invaild Input! Need to pick atleast one option. Please try again"); 
      selectChar();
      }
  console.log(characters);
    return characters;
  }  
  


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
