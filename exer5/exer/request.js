import needle from 'needle';




needle.post(
  'http://localhost:3000/add-book',
  { bookName: '', isbn:'', author: '', yearPublished: '' },   // can be an object or a string
  (err, res) => {
    console.log(res.body);
  }
);

