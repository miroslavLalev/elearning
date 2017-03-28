import express from 'express';
import path from 'path';

const PUBLIC_DIR = path.resolve(__dirname + '/public');
const BUILD_DIR = path.resolve(__dirname + '/build');
const server = express();

server.get('/', (request, response) => {
  response.sendFile(PUBLIC_DIR + '/index.html');
});

server.get('/app', (request, response) => {
  response.sendFile(BUILD_DIR + '/bundled.js');
});

var port = 8080;
server.listen(port, () => {
  console.log('Server listening on port ' + port);
});
