// Dependancies
const express = require('express');
const path = require('path');
const util = require('util');
const mysql = require('mysql2');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: 'Password',
      database: 'movies_db'
    },
    console.log(`Connected to the courses_db database.`)
  );

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