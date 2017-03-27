import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './views/index';

const server = express();

server.get('/', function(request, response) {
  const content = renderToString(<App />);

  response.send(content);
});

var port = 8080;
server.listen(port, function() {
  console.log('Server listening on port ' + port);
});
