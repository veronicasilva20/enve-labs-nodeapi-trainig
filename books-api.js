const express = require('express');
const app = express();
const booksTools = require('./books-tools');

app.get('/', booksTools.getWelcome);

app.get('/api/books', (req, res) => {
  const books = booksTools.getAll();
  res.send(books);
});

app.get('/api/books/:id', (req, res) => {
  const book = booksTools.getBookById(req.res);
  if (!book)
  res
  .status(404)
  .send(
    '<h2 style="font-family: Malgun Gothic; color: darkred;">Ooops... Cant find what you are looking for!</h2>'
    );
    res.send(book);
  });
  
  app.get('/api/ranking', (req, res) => {
    const ranking = booksTools.getRanking();
    res.send(ranking);
  });

  
  app.post('/api/books', (req, res) => {
    res.send(booksTools.updateBook(req),res);
  });


  app.put('/api/books/:id', (req, res) => {
  res.send(booksTools.updateBook({req}.res));
});
  
  app.delete('/api/books/:id',(req,res)=>{
    res.send(booksTools.deleteBook((req)));
  });
  
  module.express=app;

  const port = process.env.PORT || 8080;
  app.listen(port, () => console.log(`Listening on port ${port}..`)); 