//imclude express framework
const express = require('express');

console.log(express)

//Create express app
const app = express();

//Create route
app.get('/', (req, res) => {
    // res.send('<h1>Hello world from Express App</h1>')
    res.sendFile(__dirname + '/index.html')
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/about.html')
});

app.get('/contact', (req, res) => {
    res.send('<h1>This is the contact us Page for the Express App</h1>')
});

app.get('/service', (req, res) => {
    res.send('<h1>This is the Service Page for the Express App</h1>')
});

app.get('*', (req, res) => {
    res.send('<h1>404 Page not found</h1>')
});

//listen on port
app.listen(4075)