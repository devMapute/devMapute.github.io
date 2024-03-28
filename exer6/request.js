import needle from 'needle';

// needle.post('http://localhost:3000/save-student', { stdnum: 1, fname: "John", lname: "Lemons", age: 10 }, (err, res) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log(res.body);
//   }
// });

// needle.post('http://localhost:3000/save-student', { stdnum: 2, fname: "Mary Jane", lname: "Watson", age: 20 }, (err, res) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log(res.body);
//   }
// });


// needle.post('http://localhost:3000/save-student', { stdnum: 3, fname: "Alice", lname: "Smith", age: 22 }, (err, res) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log(res.body);
//   }
// });

// needle.post('http://localhost:3000/save-student', { stdnum: 4, fname: "Bob", lname: "Jones", age: 25 }, (err, res) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log(res.body);
//   }
// });

// needle.post('http://localhost:3000/save-student', { stdnum: 5, fname: "Emma", lname: "Brown", age: 30 }, (err, res) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log(res.body);
//   }
// });


needle.post('http://localhost:3000/update', {fname: 'Mary Jane', newValues: {lname:'Jones', age:10}}, (err, res) => {
  if (err) {
    console.error(err);
  } else {
    console.log(res.body);
  }
});
