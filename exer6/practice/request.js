import needle from 'needle';




// needle.get('http://localhost:3000/find-students?fname=John',(err, res, body) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log(body);
//   }
// });

needle.post('http://localhost:3000/find-students-post',  {age : 17},(err, res, body) => {
  if (err) {
    console.error(err);
  } else {
    console.log(res.body);
  }
});