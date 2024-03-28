import mongoose from 'mongoose';


// connection string
await mongoose.connect('mongodb://127.0.0.1:27017/StudentDatabase', { useNewUrlParser: true, useUnifiedTopology: true });

// Subject model
const Student = mongoose.model('studentData', {
  stdnum: String,
  fname: String,
  lname: String,
  age: Number
})


let data = await Student.findOne({ age: 17 });


