const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const UserController = require('./controllers/UserController');

const app = express();
const PORT = 3000;

// MONGO SETUP
const mongoURI = 'mongodb+srv://tom:codesmith@cluster0.ojzt5.mongodb.net/progression?retryWrites=true&w=majority';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
  })
  .then(() => {
    console.log('connected to mongoDB');
  })
  .catch(err => {
    console.log(`Error: ${err}`);
  });


// DATA PARSE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ENDPOINTS
app.post('/signup', UserController.create, (req, res) => {
  return res.status(200).send({
    id: res.locals.userid,
    name: res.locals.username
  })
});

app.post('/login', UserController.verify, (req, res) => {
  return res.status(200).send({
    id: res.locals.userid,
    name: res.locals.username
  });
});

// sends bundle to server
app.use('/build', (req, res) => {
  console.log('sending bundliedoos');
  return res.sendFile(path.resolve(__dirname, '../build/bundle.js'))
});

// main HTML
app.get('/', (req, res) => {
  console.log('sending html');
  return res.status(200).sendFile(path.resolve(__dirname, '../index.html'));
});

// 404 & ERROR HANDLING

app.use((req, res) => {
  console.log('404');
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

// APP LISTEN
app.listen(PORT, () => {
  console.log(`Server listening...`);
});

module.exports = app;