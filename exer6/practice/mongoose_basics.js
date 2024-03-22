import mongoose from 'mongoose';


// connection string
await mongoose.connect('mongodb://127.0.0.1:27017/ICS', { useNewUrlParser: true, useUnifiedTopology: true });

// Subject model
const Student = mongoose.model('Student', {
  stdnum: String,
  fname: String,
  lname: String,
  age: Number
})


let data = await Student.findOne({ age: 17 });

let stud = await Student.findOne({ age: 65});
// console.log(stud);
// stud.fname = "Bogart";
// await stud.save();

// updates a single document and returns an object containing the result details (NOT the document).
await Student.updateOne(
  { age: 17 },
  {$set: {fname: "John"}}
);
console.log(stud);



// the result parameter will contain a single object (the first matching document found
// if no matching document was found, result will be null
// let data = await Student.findOne({ age: 17});
// console.log(data);

// results here will always be an array, regardless of how many matching documents were found
// let data = await Student.find({ age: 17 });
console.log(data);
