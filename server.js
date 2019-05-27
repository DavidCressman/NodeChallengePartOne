
const axios = require ('axios');
const express = require('express');

const app = express();

const port = process.env.PORT || 5000;

books = {
    '1984': 'George Orwell',
    'Harry Potter' : "J.K. Rowling",
    'The Hobbit' : 'J.R.R. Tolkien'
}



// console.log that your server is up and running

app.listen(port, () => console.log(`Listening on port ${port}`));



// create a GET route

app.get('/', (req, res) => {
    res.send("hello world");

});


app.get('/:title', (req, res) => {
    const ans = books[req.params.title];
    res.send(ans);

});

app.get('/book/:title', function (req, res) {
    const title = req.params.title;
    console.log(title);
    axios.get ('https://www.googleapis.com/books/v1/volumes?q='+title)
    .then(response => {
        const author= response.data.items[0].volumeInfo.authors[0];
        res.send(author);
    });  
});
