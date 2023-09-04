const express = require('express');
const Joi = require('joi');
const app = express();
app.use(express.json());

// Importa las rutas y funciones desde otro archivo
const { getBooks, getBookById, createBook, updateBook, deleteBook, getRanking } = require('./routes');

// READ Request Handlers
app.get('/', (req, res) => {
  res.send('Welcome to Edurekas REST API with Node.js Tutorial!!');
});

app.get('/api/books', getBooks);

app.get('/api/books/:id', getBookById);

// Ruta para el ranking
app.get('/api/ranking', getRanking);

// CREATE Request Handler
app.post('/api/books', createBook);

// UPDATE Request Handler
app.put('/api/books/:id', updateBook);

// DELETE Request Handler
app.delete('/api/books/:id', deleteBook);

// PORT ENVIRONMENT VARIABLE
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));
