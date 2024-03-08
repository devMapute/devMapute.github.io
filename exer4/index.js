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

function isValidEmail(email){
  return validator.isEmail(email);
}


function addAccount(array){
  if (isValidEmail(array[2])){
    
  }
  return 0; 

}




export {generateUniqueID, addAccount};


