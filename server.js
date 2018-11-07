const express = require('express');
const proxy = require("http-proxy-middleware");
const path = require('path');
const compression = require("compression");
const app = express();
const port = process.env.PORT || 3000;

app.use(compression());

app.get("/", function(req, res) {
  res.redirect("/movies/1");
});

app.use(express.static(path.join(__dirname, 'public')));

app.get("/movies/:id", function(req, res) {
  const reactPath = path.join(__dirname, "./public/index.html");
  res.sendFile(reactPath);
});

// Related Movies
app.use('/api/movies/:genre/relatedmovies', 
  proxy({
    target: 'http://localhost:3003',
    changeOrigin: true
  })
);

// Movie Summary
app.use('/api/movies/:movieId/summary', 
  proxy({
    target: 'http://localhost:3007',
    changeOrigin: true
  })
);

// Reviews Module
app.use('/api/movies/:movieid/rating', 
  proxy({
    target: 'http://localhost:3013',
    changeOrigin: true
  })
);

// Reviews Module
app.use('/api/movies/:movieid/reviews', 
  proxy({
    target: 'http://localhost:3013',
    changeOrigin: true
  })
);

// Movie Times Module
app.use('/api/moviesbyid/:movieid/:date/:location', 
  proxy({
    target: 'http://localhost:3002',
    changeOrigin: true
  })
)

app.listen(port, () => console.log(`Listening on port ${port}`));
