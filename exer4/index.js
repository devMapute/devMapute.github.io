// This js adds an account to file named users.txt.


import * as fs from 'fs';
import { v4 as uuidv4 } from 'uuid';
import validator from 'validator';



function generateUniqueID(firstName, lastName){
  

  var firstLetter = firstName.charAt(0).toLowerCase();
  var lowercaseLN = lastName.toLowerCase();
  var alphanumericString = uuidv4().substring(0,8);

  var temp = firstLetter.concat(lowercaseLN);
  temp = temp.concat(alphanumericString);

  return temp;
}

function isCorrect(array){
  if (array.length == 4 ){ // are fields present?
    for (var i = 0; i <= 2; i++){
      if (array[i].length === 0){
        console.log("There is an empty field.");
        return false; //empty string
      }
    }
    if (Number.isInteger(array[3])){
      if (array[3] >= 18){
        return true; // all fields are valid
      } else {
        console.log("Age must be 18 above");
        return false;
      } //age is not allowed
    } else {
      console.log("Enter a valid age.");
      return false;
    } // last index is not a number
  } else {
    console.log("Complete all fields!");
    return false;
  } //not complete
}

function isValidEmail(email){
  if (validator.isEmail(email)){// true if email is valid format
    return validator.isEmail(email);
  } else {
    console.log("Invalid email");
    return validator.isEmail(email);
  }
}


function addAccount(array){
  if (isCorrect(array) && isValidEmail(array[2])){  // validate info
    const uniqueID = generateUniqueID(array[0], array[1]); // generate code
    array.push(uniqueID);
    var userInfo = array.join(","); // concat
    const filePath = 'users.txt';
    fs.appendFile(filePath, userInfo + "\n", 'utf8', // write on file users.txt
    // Callback function
    function(err) { 
        if (err) throw err;
        //  If no error
        console.log("Successfully added account.")
    });
  }

}




export {generateUniqueID, addAccount};


