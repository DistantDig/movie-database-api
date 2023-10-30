// Dependancies
const express = require('express');
const path = require('path');
const util = require('util');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

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
    db.query('SELECT * FROM movies', function (err, results) {
        res.json(results);
    });
});

app.get('/api/movie-reviews', (req, res) => {
    console.log(`${req.method} request received for movie reviews`);
    db.query('SELECT * FROM reviews', function (err, results) {
        res.json(results);
    });
});

// Api POST, PUT and DELETE calls
app.post('/api/add-movie', (req, res) => {
    console.log(`${req.method} request received to add movie`);
    //code here
});

app.put('/api/review/:id', (req, res) => {
    console.log(`${req.method} request received to retrieve review`);
    //code here
});

app.delete('/api/movie/:id', (req, res) => {
    console.log(`${req.method} request received to delete movie`);
    //code here
});

// Listening on the PORT number
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
  