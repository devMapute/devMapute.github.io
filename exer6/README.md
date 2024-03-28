# Project Title
Student Management System

## Author
Andrae Mapute

## Code Description
This project implements a user management system using Express, Mongoose, Needle, and MongoDB Compass. It provides endpoints to perform CRUD operations on student data stored in a MongoDB database.

## How to use
1. Install Node.js and MongoDB Compass.
2. Clone this repository.
3. Run `npm install` to install dependencies.
4. Start the server by running `node index.js`.
5. Make HTTP requests on the `request.js` to interact with the endpoints.

### Example Requests
```javascript
import needle from 'needle';

// Save a student
needle.post('http://localhost:3000/save-student', { stdnum: 1, fname: "John", lname: "Lemons", age: 10 }, (err, res) => {
  if (err) {
    console.error(err);
  } else {
    console.log(res.body);
  }
});

// Update a student
needle.post('http://localhost:3000/update', {fname: 'Mary Jane', newValues: {lname:'Parker', age:21}}, (err, res) => {
  if (err) {
    console.error(err);
  } else {
    console.log(res.body);
  }
});

// Remove a user
needle.post('http://localhost:3000/remove-user', {toDelete: {fname: "Bob"}}, (err, res) => {
  if (err) {
    console.error(err);
  } else {
    console.log(res.body);
  }
});

// Remove all users
needle.post('http://localhost:3000/remove-all-user', (err, res) => {
  if (err) {
    console.error(err);
  } else {
    console.log(res.body);
  }
});

// Search for a user
needle.get('http://localhost:3000/user?fname=Ben',(err, res) => {
  if (err) {
    console.error(err);
  } else {
    console.log(res.body);
  }
});

// Get all users
needle.get('http://localhost:3000/members',(err, res) => {
  if (err) {
    console.error(err);
  } else {
    console.log(res.body);
  }
});
