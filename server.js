// Dependancies
const express = require('express');
const path = require('path');
const util = require('util');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

// Api GET calls
app.get('/api/movies', (req, res) => {
    console.log(`${req.method} request received for movies`);
    //code here
});

app.get('/api/movie-revies', (req, res) => {
    console.log(`${req.method} request received for movie reviews`);
    //code here
});

// Api POST, PULL and DELETE calls
app.post('/api/add-movie', (req, res) => {
    console.log(`${req.method} request received to add movie`);
    //code here
})

app.pull('/api/review/:id', (req, res) => {
    console.log(`${req.method} request received to retrieve review`);
    //code here
})

app.delete('/api/movie/:id', (req, res) => {
    console.log(`${req.method} request received to delete movie`);
    //code here
})