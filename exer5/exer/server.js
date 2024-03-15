import express from 'express';
import * as fs from 'fs';


// instantiate the server
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.post('/add-book', (req, res) => {
  if (
    req.body.bookName === '' ||
    req.body.isbn === '' ||
    req.body.author === '' ||
    req.body.yearPublished === ''
  ) {
    res.json({ success: false });
    return;
  }

  const bookData = `${req.body.bookName},${req.body.isbn},${req.body.author},${req.body.yearPublished}\n`;

  fs.appendFile('books.txt', bookData, (err) => {
    if (err) {
      console.error(err);
      res.json({ success: false });
    } else {
      res.json({ success: true });
    }
  });
});


app.get('/find-by-isbn-author', (req, res) => {
  const { isbn, author } = req.query;


  fs.readFile('books.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.json({ success: false });
    } else {
      const lines = data.split('\n');
      const matchingBooks = lines.filter((line) => {
        const [bookName, bookIsbn, bookAuthor, bookYearPublished] = line.split(',');
        return bookIsbn === isbn && bookAuthor === author;
      });

      const formattedBooks = matchingBooks.map((book) => {
        const [bookName, bookIsbn, bookAuthor, bookYearPublished] = book.split(',');
        return {
          Title: bookName,
          Isbn: bookIsbn,
          Author: bookAuthor,
          YearPublished: bookYearPublished
        };
      });

      res.json({ books: formattedBooks });
    }
  });
});

app.get('/find-by-author', (req, res) => {
  const { author } = req.query;

  fs.readFile('books.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.json({ success: false });
    } else {
      const lines = data.split('\n');
      const matchingBooks = lines.filter((line) => {
        const [name, bookISBN, bookAuthor] = line.split(',');
        return bookAuthor === author;
      });

      const formattedBooks = matchingBooks.map((book) => {
        const [bookName, bookIsbn, bookAuthor, bookYearPublished] = book.split(',');
        return {
          Title: bookName,
          Isbn: bookIsbn,
          Author: bookAuthor,
          YearPublished: bookYearPublished
        };
      });

      res.json({ books: formattedBooks });
    }
  });
});

app.listen(3000, () => { console.log('Server started at port 3000')} );