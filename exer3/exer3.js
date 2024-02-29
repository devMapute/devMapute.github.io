// This function checks the string of password through a set of rules
function stringPassword(password) {
  // Initialize variables to track character types found
  let hasUppercase = false;
  let hasLowercase = false;
  let hasNumber = false;


  // Loop through each character in the password
  for (const char of password) {
    const charCode = char.charCodeAt(0); // Make each char its Unicode

    // Check character type using character codes
    if (charCode >= 65 && charCode <= 90) { // Uppercase letters (A-Z)
      hasUppercase = true;
    } else if (charCode >= 97 && charCode <= 122) { // Lowercase letters (a-z)
      hasLowercase = true;
    } else if (charCode >= 48 && charCode <= 57) { // Numbers (0-9)
      hasNumber = true;
    }
    // Early exit if all character types are found, optimizing performance
    if (hasUppercase && hasLowercase && hasNumber) {
      return true;
    }
  }

  // Return false if not all character types are found
  return false;
}

// Validate password if it follows the set of rules
function validatePassword(password, input_password){
  if(password != input_password){ // Check if the two parameters are not equal
    // console.log("Passwords do not match") ;
    return false;
  }

  else if(password.length < 8 || input_password.length <8){ // Check if the parameters are less than 8 characters 
    // console.log("Must be more than 8 characters!") ;
    return false;
  }

  else if (!stringPassword(password)){ // Calls the stringPassword Function
    // console.log("Password has to have at least 1 number, 1 uppercase character, and 1 lowercase character");
    return false;
  }

  else{ // Passwords match and follow the rules
    // console.log("Success!");
    return true;
  }
}

// Uses a loop to reverse a password string
function reversePassword(password){

  var reversedPassword = ""; // Init

  for (var i = password.length -1; i >=0; i--){ // Loops from the last index to the first
    reversedPassword += password[i];
  }
  // console.log(reversedPassword)
  return reversedPassword;
}

// Stores the parameters to an object
function storePassword(name, pass1, pass2){ 
  const account = { // Init
    name: name,
    password: ""
  }

  if (validatePassword(pass1, pass2)){ // Passwords follow the set of conditions
    account.password = reversePassword(pass1); // Reverse Password
    return account;
  }

  account.password = pass1; // Use pass1 if passwords do not follow the conditions
  return account;


}

// validatePassword("helloworld", "hello")     // returns false
// validatePassword("hello", "hello")    	  // returns false
// validatePassword("hello1234", "hello1234")  // returns false
// validatePassword("Hello1234", "Hello1234")  // returns true
// validatePassword("HELLO1234", "HELLO1234")  // returns false

// storePassword("John", "Pass1234", "Pass1234") // returns {name: "John", newpassword:"4321ssaP"}
// storePassword("John", "Pass123", "Pass12345") // returns {name: "John", newpassword:"Pass123"}

console.log(storePassword("John", "Pass1234", "Pass1234"))
console.log(storePassword("John", "Pass123", "Pass12345"))

