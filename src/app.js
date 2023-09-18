const express = require('express');
const app = express();
require('dotenv').config();
const config = require('./config');

const { authRouter } = require('./routes');

app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.append('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use('/auth', authRouter.router);

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(config.port, () => {
  console.log(`Example app listening on port ${config.port}`);
})