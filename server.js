const express = require('express');
const path = require('path');
const app = express();
const fetch = require('node-fetch');
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/movies/:genre/relatedmovies', (req, res) => {
  fetch(`http://localhost:3003/api/movies/${req.params.genre}/relatedmovies`)
    .then(response => 
      response.json().then(data => {
        res.send(data);
      }))
    .catch(error => res.status(500).send(error.message)); 
})

app.get('/api/movies/:movieId/summary', (req, res) => {
  fetch(`http://localhost:3007/api/movies/${req.params.movieId}/summary`)
    .then(response => 
      response.json().then(data => {
        res.send(data);
      }))
    .catch(error => res.status(500).send(error.message)); 
})

app.get('/api/movies/:movieid/rating', (req, res) => {
  fetch(`http://localhost:3013/api/movies/${req.params.movieid}/rating`)
    .then(response => 
      response.json().then(data => {
        res.send(data);
      }))
    .catch(error => res.status(500).send(error.message)); 
})

app.get('/api/movies/:movieid/reviews', (req, res) => {
  fetch(`http://localhost:3013/api/movies/${req.params.movieId}/reviews`)
    .then(response => 
      response.json().then(data => {
        res.send(data);
      }))
    .catch(error => res.status(500).send(error.message)); 
})

app.get('/api/movies/:movie/:date/:location', (req, res) => {
  fetch(`http://localhost:3002/api/movies/${req.params.movie}/${req.params.date}/${req.params.location}`)
    .then(response => 
      response.json().then(data => {
        res.send(data);
      }))
    .catch(error => res.status(500).send(error.message)); 
})

app.get('/api/moviesbyid/:movieid/:date/:location', (req, res) => {
  fetch(`http://localhost:3002/api/moviesbyid/${req.params.movieid}/${req.params.date}/${req.params.location}`)
    .then(response => 
      response.json().then(data => {
        res.send(data);
      }))
    .catch(error => res.status(500).send(error.message)); 
})

app.listen(port, () => console.log(`Listening on port ${port}`));
