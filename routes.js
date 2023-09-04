const express = require('express');
const Joi = require('joi');
const app = express();
app.use(express.json());

// Importa las rutas y funciones desde otro archivo
const { getBooks, getBookById, createBook, updateBook, deleteBook, getRanking } = require('./routes');

const books=[{title: 'Harry Potter', id: 1, autor: 'J.K. Rowling',ventas:500},
{title: 'Twilight', id: 2, autor: 'Stephenie Meyer',ventas:300},
{title: 'Lorien Legacies', id: 3, autor: 'Pittacus Lore',ventas:200},
{title: 'libro cuatro nuevo', id:4, autor: 'veronica silva',ventas:700},
{title: ' Goblet of Fire',id:5, autor:'J.K. Rowling',ventas:270},
{tilte: 'Prisoner of Azkaban',id:6,autor:'J.K. Rowling',ventas:510},
{title: 'Chamber of Secrets',id:7,autor:'J.K. Rowling',ventas:220},
{title: 'Order of the Phoenix',id:8,autor:'J.K. Rowling',ventas:430},
{title: 'Half-Blood Prince',id:9, autor:'J.K. Rowling',ventas:600},
{title: 'Deathly Hallows',id:10,autor:'J.K. Rowling',ventas:430},
{title: 'Philosophers stone',id:11,autor:'J.K. Rowling',ventas:300}];



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

