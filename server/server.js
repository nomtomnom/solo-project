const path = require('path');
const express = require('express');

const app = express();
const PORT = 3000;

if (process.env.NODE_ENV === 'production') {
  app.use('/build', (req, res) => {
    console.log('sending bundle');
    return res.sendFile(path.resolve(__dirname, '../build/bundle.js'))
  });

  app.get('/', (req, res) => {
    console.log('sending html');
    return res.status(200).sendFile(path.resolve(__dirname, '../index.html'));
  });
}

app.use((req, res) => {
  return res.sendStatus(404);
})

app.use((err, req, res, next) => {
  const defaultErr = {
    status: 400,
    log: 'Unknown Error Encountered',
    message: 'Error Encountered'
  };

  const errorObject = { ...defaultErr, ...err };

  console.log(errorObject.log);
  res.status(errorObject.status).send(errorObject.message);
})

app.listen(PORT, () => {
  console.log(`Server listening...`);
});

module.exports = app;