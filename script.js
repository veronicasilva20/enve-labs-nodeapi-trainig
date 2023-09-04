const express = require('express');
const Joi = require('joi'); //used for validation
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

//READ Request Handlers
app.get('/', (req, res) => {
res.send('Welcome to Edurekas REST API with Node.js Tutorial!!');
});
 
app.get('/api/books', (req,res)=> {
res.send(books);
});
 
app.get('/api/books/:id', (req, res) => {
const book = books.find(c => c.id === parseInt(req.params.id));
 
if (!book) res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;">Ooops... Cant find what you are looking for!</h2>');
res.send(book);
});


// creo ranking

app.get('/ranking', (req, res) => {
// Ordenar los libros por ventas de mayor a menor
    const librosOrdenados = books.sort((a, b) => b.ventas - a.ventas);

// Tomar los primeros 10 libros del ranking
    const ranking = librosOrdenados.slice(0, 10);

    res.send(ranking);
});
    

 
//CREATE Request Handler
app.post('/api/books', (req, res)=> {
 
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
res.send(book);
});
 
//UPDATE Request Handler
app.put('/api/books/:id', (req, res) => {
const book = books.find(c=> c.id === parseInt(req.params.id));
if (!book) res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;">Not Found!! </h2>');
 
const { error } = validateBook(req.body);
if (error){
res.status(400).send(error.details[0].message);
return;
}
 
book.title = req.body.title;
res.send(book);
});
 
//DELETE Request Handler
app.delete('/api/books/:id', (req, res) => {
 
const book = books.find( c=> c.id === parseInt(req.params.id));
if(!book) res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;"> Not Found!! </h2>');
 
const index = books.indexOf(book);
books.splice(index,1);
 
res.send(book);
});
 
function validateBook(book) {
// const schema = {
// title: Joi.string().min(3).required()
// };
// return Joi.validate(book, schema);
const schema= Joi.object({ title: Joi.string() .min(6) .required()})
 return schema.validate(book)

}
 
//PORT ENVIRONMENT VARIABLE
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));

 


