const express = require('express');
const Joi = require('joi');
const app = express();
app.use(express.json());

const books = [
  
  {title: 'Harry Potter', id: 1, autor: 'J.K. Rowling',ventas:500},
  {title: 'Twilight', id: 2, autor: 'Stephenie Meyer',ventas:300},
  {title: 'Lorien Legacies', id: 3, autor: 'Pittacus Lore',ventas:200},
  {title: 'libro cuatro nuevo', id:4, autor: 'veronica silva',ventas:700},
  {title: ' Goblet of Fire',id:5, autor:'J.K. Rowling',ventas:270},
  {tilte: 'Prisoner of Azkaban',id:6,autor:'J.K. Rowling',ventas:510},
  {title: 'Chamber of Secrets',id:7,autor:'J.K. Rowling',ventas:220},
  {title: 'Order of the Phoenix',id:8,autor:'J.K. Rowling',ventas:430},
  {title: 'Half-Blood Prince',id:9, autor:'J.K. Rowling',ventas:600},
  {title: 'Deathly Hallows',id:10,autor:'J.K. Rowling',ventas:430},
  {title: 'Philosophers stone',id:11,autor:'J.K. Rowling',ventas:900}
];

function getWelcome(req, res) {
  res.send('Welcome to Edurekas REST API with Node.js Tutorial!!');
}

function getAll() {
  return books;
}

function getBookById(id) {
  return books.find((c) => c.id === parseInt(id));
}

function getRanking() {
  const librosOrdenados = books.sort((a, b) => b.ventas - a.ventas);
  return librosOrdenados.slice(0, 10);
}

function updateBook(bookData) {
    const book = books.find((c) => c.id === parseInt(bookData.params.id));
    if (!book) {
    res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;">Not Found!! </h2>');
    return;
    }
    //console.log(req)

    const { error } = validateBook(bookData.body);
    if (error){
    res.status(400).send(error.details[0].message);
    return;
    }
   
   book.title = bookData.body.title   
   return(book);
};

function deleteBook(id) {
    const book = books.find( c=> c.id === parseInt(req.params.id));
    if(!book) {
    res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;"> Not Found!! </h2>');
    return;
    }

    const index = books.indexOf(book);
    books.splice(index,1);
    
    // return(book);
    };


function validateBook(book) {
  const schema = Joi.object({
    title: Joi.string().min(3).required(),
    autor: Joi.string().min(10).required(),
  });
  return schema.validate(book);
}

module.exports = {
  getWelcome,
  getAll,
  getBookById,
  getRanking,
  updateBook,
  deleteBook,
  validateBook,
};



 




