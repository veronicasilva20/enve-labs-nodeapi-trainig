const joi =require('joi');
const books =[];

function getBienvenida(req, res){
    res.send('Welcome to Edurekas REST API with Node.js Tutorial!!');
};
 
function getBooks(eq,res) {
    res.send(books);
};
 
function  getBookById (req, res) {
    const book = books.find(c => c.id === parseInt(req.params.id));
    
    if (!book) res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;">Ooops... Cant find what you are looking for!</h2>');

    res.send(book);
};

function getRanking (req, res) {
    const librosOrdenados = books.sort((a, b) => b.ventas - a.ventas);
    const ranking = librosOrdenados.slice(0, 10);
    res.send(ranking);
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
    res.send(book);
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
    res.send(book);
};
    

function deleteBook (req, res){
 
    const book = books.find( c=> c.id === parseInt(req.params.id));
    if(!book) {
    res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;"> Not Found!! </h2>');
    return;
    }

    const index = books.indexOf(book);
    books.splice(index,1);
    
    res.send(book);
    };
function validateBook(book) {
        const schema = Joi.object({ title: Joi.string().min(3).required(), autor: Joi.string().min(10).required() });
        return schema.validate(book);
      }




 

