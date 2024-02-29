function containsUppercase(password) {
  return password?.match(/[A-Z]/)
}
function containsLowercase(password) {
  return password?.match(/[a-z]/)
}
function containsNumber(password) {
  return password?.match(/[0-9]/)
}


function validatePassword(password, input_password){
  if(password != input_password){
    // console.log("Passwords do not match") ;
    return false;
  }

  else if(password.length < 8 || input_password.length <8){
    // console.log("Must be more than 8 characters!") ;
    return false;
  }

  else if(!containsUppercase(password)){
    // console.log("Need atleast 1 uppercase")
    return false;
  }

  else if(!containsLowercase(password)){
    // console.log("Need atleast 1 lowercase")
    return false
  }

  else if(!containsNumber){
    // console.log("Need atleast 1 number")
    return false;
  }

  else{
    // console.log("Success!");
    return true;
  }
}


function reversePassword(password){

  var reversedPassword = "";

  for (var i = password.length -1; i >=0; i--){
    reversedPassword += password[i];
  }
  // console.log(reversedPassword)
  return reversedPassword;
}

function storePassword(name, pass1, pass2){
  const account = {
    name: name,
    password: ""
  }

  if (validatePassword(pass1, pass2)){
    account.password = reversePassword(pass1);
    return account;
  }

  account.password = pass1;
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

