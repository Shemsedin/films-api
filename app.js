const http  = require('http');
const fetch = require('node-fetch');
const url   = 'https://swapi-api.hbtn.io/api/films/';

const hostname = '127.0.0.1';
const port     = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Films\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);

  fetch(url, {
    method: 'GET'
  })
    .then(res => res.json())
    .then(function (json) {
      let films = json.results;
      for (film of films) {
        console.log(film.title);
        console.log(film.characters);
      }
    });
});
