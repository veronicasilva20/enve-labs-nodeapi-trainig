const express = require('express')
const app= express()
const booksTools = require('./books-tools')


// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world')
})


app.get('/books', (req, res) => {
  res.send(booksTools.getAll())
})


app.post('/api/books/:id',(req,res)=>{
 res.send(booksTools.getBookById())
}); 

app.post('/api/ranking',(req,res)=>{
  res.send(booksTools.getRanking())
});


app.put('/api/books/:id',(req,res)=>{
  res.send(booksTools.updateBook())
});

app.delete('/api/books/:id', (req,res)=>{
  res.send(booksTools.deleteBook())
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));  