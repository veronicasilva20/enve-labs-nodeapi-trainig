const express = require('express');
const app = express();
const booksTools = require('./books-tools');
const joi = require('joi');



app.get('/', booksTools.getWelcome);

app.get('/api/books', (req, res) => {
  const books = booksTools.getAll();
  res.send(books);
});

app.get('/api/books/:id', (req, res) => {
  const book= booksTools.getBookById (req.params.id);
  if (!book)res.status(404).send('<h2 style="font-family:Malgun Gothic;darkred;">Ooops...Cant find what you are looking for!</h2>');
  res.send(book);
});

  app.get('/api/ranking', (req, res) => {
    const rankigbooks=booksTools.getRanking();
    res.send(booksTools);
});

  
  app.post('/api/books', (req, res) => {
    const result =booksTools.crearBook(req,body);
    res.send(result);
});


  app.put('/api/books/:id', (req, res) => {
  const result = validateBook(req.body);
  if (!book)res.status(404).send('<h2 style="font-family:Malgun Gothic;darkred;">Ooops...Cant find what you are looking for!</h2>');
  res.send(result);
});
  
  app.delete('/api/books/:id',(req, res)=>{
    res.send(booksTools.deleteBook((req)));
  });
  
  module.express=app;

  const port = process.env.PORT || 8080;
  app.listen(port, () => console.log(`Listening on port ${port}..`)); 