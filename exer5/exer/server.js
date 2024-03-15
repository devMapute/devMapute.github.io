import express from 'express';
import * as fs from 'fs';


// instantiate the server
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));




app.post('/add-book', (req, res) => {

  if(req.body.bookName == '' || req.body.isbn == '' || req.body.author == '' || req.body.yearPublished == ''){
    res.json({ success: false });
    return;
  }

  let bookData = req.body.bookName+','+req.body.isbn+','+req.body.author+','+req.body.yearPublished+'\n';

  fs.appendFile('books.txt', bookData, (err) =>{
    if (err){
      res.json({ success: false });
    }else {
      res.json({ success: true });
  }
  } );
});

app.get('/find-by-isbn-author', (req, res) => {
  console.log(req);
  console.log(res);
  res.send('Hello! This is Andrae\'s server.');
  
});

app.listen(3000, () => { console.log('Server started at port 3000')} );