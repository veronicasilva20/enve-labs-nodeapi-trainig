const express = require('express');
const app = express();
const booksTools = require('./books-tools');

app.get('/', booksTools.getWelcome);

app.get('/api/books', (req, res) => {
  const books = booksTools.getAll();
  res.send(books);
});

app.get('/api/books/:id', (req, res) => {
  const book = booksTools.getBookById(req.params.id);
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

  app.post('/api/books/:id',(req,res)=>{
     const book = booksTools.updateBook(req.body);
    res.send(book);
  });
  
  
  app.put('/api/books/:id', (req, res) => {
    const book = booksTools.updateBook(req.body);
    res.send(book);
  });
  
  app.delete('/api/books/:id', (req, res) => {
    const book = booksTools.deleteBook(req.params.id);
    res.send(book);
  });
  
  module.exports = app;
  
  const port = process.env.PORT || 8080;
  app.listen(port, () => console.log(`Listening on port ${port}..`)); 