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
  if (array.length != 0 ){ // are fields present?
    for (var i = 0; i <= 2; i++){
      if (array[i].length === 0){
        return false; //empty string
      }
    }
    if (Number.isInteger(array[3])){
      if (array[3] >= 18){
        return true; // all fields are valid
      } else return false; //age is not allowed
    } else return false; // last index is not a number
  } else return false; //not complete
}

function isValidEmail(email){
  return validator.isEmail(email);
}


function addAccount(array){
  if (isCorrect(array) && isValidEmail(array[2])){
    const userinfo = array.join(",");
    

    return true;
  }else return false;

}




export {generateUniqueID, addAccount};


