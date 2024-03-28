import needle from 'needle';

needle.post('http://localhost:3000/save-student',  {stdnum: 10, fname: "John", lname: "Lemons", age:10},(err, res) => {
  if (err) {
    console.error(err);
  } else {
    console.log(res.body);
  }
});