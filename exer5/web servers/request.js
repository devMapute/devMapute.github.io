import needle from 'needle';

needle.get('http://localhost:3000/', (err, res) => {
    console.log(res.body);   // prints the body of the response message. In this case, “Hello”
    console.log(res.statusCode);
});


needle.get('http://localhost:3000/greeting?name=Andrae', (err, res) => {
    console.log(res.body);   // prints the body of the response message. In this case, “Hello”
    console.log(res.statusCode);
});


// needle.post(    
//   'http://localhost:3000/submit-data',
//   {},
//   (err, res) => {
//     console.log(res.body)   // prints the server’s response “Received a POST request.”
//   }
// );


needle.post(
  'http://localhost:3000/submit-data',
  { name: 'Monina', age: 'is just a number' },   // can be an object or a string
  (err, res) => {
    console.log(res.body);
  }
);
