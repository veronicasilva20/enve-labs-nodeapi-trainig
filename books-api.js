const express = require('express');
const app = express();
const booksTools = require('./books-tools');

app.get('/', booksTools.getWelcome);

app.get('/api/books', (req, res) => {
  const books = booksTools.getAll();
  res.send(books);
});

app.get('/api/books/:id', (req, res) => {
  res.send(booksTools.getBookById (req.params.id));
});

  app.get('/api/ranking', (req, res) => {
    res.send(booksTools.getRanking());
});

  
  app.post('/api/books', (req, res) => {
    res.send(booksTools.postsBook(req, res));
    
  });


  app.put('/api/books/:id', (req, res) => {
  res.send(booksTools.updateBook(req.res));
});
  
  app.delete('/api/books/:id',(req, res)=>{
    res.send(booksTools.deleteBook((req)));
  });
  
  module.express=app;

  const port = process.env.PORT || 8080;
  app.listen(port, () => console.log(`Listening on port ${port}..`)); 