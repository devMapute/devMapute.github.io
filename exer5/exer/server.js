import express from 'express';
import * as fs from 'fs';

// instantiate the server
const app = express();



app.post('/add-book', (req, res) => {
  const {bookName, isbn, author, yearPublished} = req.body;

  if (bookName && isbn && author && yearPublished){
    const bookData = '${bookName,${isbn},${author},${yearPublished}';
  }

  fs.appendFile('books.txt', bookData, (err) =>{
    if (err){
      res.json({ success: false });
    }else {
      res.json({ success: true });
  }
  } );
});