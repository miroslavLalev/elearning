import express from 'express';
import path from 'path';

const PUBLIC_DIR = path.resolve(__dirname + '/public');
const BUILD_DIR = path.resolve(__dirname + '/build');
const server = express();

server.use(express.static('public'));

var port = 8080;
server.listen(port, () => {
  console.log('Server listening on port ' + port);
});
