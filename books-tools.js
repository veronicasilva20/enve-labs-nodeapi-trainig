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
  {title: 'Philosophers stone',id:11,autor:'J.K. Rowling',ventas:300}
]


const joi =require('joi');

function getAll() {
    return(books)
};


function getBooks() {
    return(books)
};

function getRanking() {
    return(books)
};

function getdeleteBook() {
    return(books)
};

function getBienvenida(req, res){
    res.send('Welcome to Edurekas REST API with Node.js Tutorial!!');
};
 
// function getBooks(eq,res) {
//     res.send(books);
// };
 


function  getBookById (req, res) {
    
    const book = books.find(c => c.id === parseInt(req));
    
    if (!book) res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;">Ooops... Cant find what you are looking for!</h2>');

    return(book);
};

function getRanking (req, res) {
    const librosOrdenados = books.sort((a, b) => b.ventas - a.ventas);
    const ranking = librosOrdenados.slice(0, 10);
    return(ranking);
};
    
function getBooks(req, res) {
    const { error } = validateBook(req.body);
    if (error){
    res.status(400).send(error.details[0].message)
    return;
    }
    const book = {
    id: books.length + 1,
    title: req.body.title
    };
    books.push(book);
    return(book);
};


 

function updateBook(req, res){
    const book = books.find(c=> c.id === parseInt(req.params.id));
    if (!book) {
    res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;">Not Found!! </h2>');
    return;
    }

    const { error } = validateBook(req.body);
    if (error){
    res.status(400).send(error.details[0].message);
    return;
    }
    
    book.title = req.body.title;
    return(book);
};
    

function deleteBook (req, res){
 
    const book = books.find( c=> c.id === parseInt(req.params.id));
    if(!book) {
    res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;"> Not Found!! </h2>');
    return;
    }

    const index = books.indexOf(book);
    books.splice(index,1);
    
    return(book);
    };
    
function validateBook(book) {
        const schema = Joi.object({ title: Joi.string().min(3).required(), autor: Joi.string().min(10).required() });
        return schema.validate(book);

}

module.exports={
    getAll,
    getBookById,
    getBooks,
    getRanking,
    deleteBook
};




 




