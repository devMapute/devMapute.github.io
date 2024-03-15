import needle from 'needle';


needle.post(
  'http://localhost:3000/add-book',
  {
    bookName: 'Harry Potter and the Philosopher\'s Stone',
    isbn: '978-0-7475-3269-9',
    author: 'J.K Rowling',
    yearPublished: '1998'
  },
  (err, res) => {
    if (err) {
      console.error(err);
    } else {
      console.log(res.body);
    }
  }
);

