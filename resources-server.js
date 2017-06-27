import express from 'express';
import https from 'https';
import path from 'path';
import fs from 'fs';

const sslKeyPath = process.env.SSL_KEY;
const sslCertPath = process.env.SSL_CERT;

if (!fs.existsSync(sslKeyPath) || !fs.existsSync(sslCertPath)) {
  console.log('SSL key or certificate is invalid');
  process.exit(1);
}

const credentials = {
  key: fs.readFileSync(sslKeyPath),
  cert: fs.readFileSync(sslCertPath)
};

const server = express();
server.use(express.static(path.join(__dirname, 'public')));

const secServer = https.createServer(credentials, server);
secServer.listen('8443');
