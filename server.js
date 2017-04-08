import express from 'express';
import path from 'path';

const server = express();

server.use(express.static('public'));

var port = 8080;
server.listen(port, () => {
  console.log('Server listening on port ' + port);
});
