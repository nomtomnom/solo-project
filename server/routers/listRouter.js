const express = require('express');

const router = express.Router();

// GET ONE
router.get('/', (req, res) => {
  return res.send({ list: res.locals.list })
});

// CREATE NEW
router.post('/', (req, res) => {
  return res.send({ list: res.locals.list });
});

// EXTENSION:

// GET ALL
router.get('/all', (req, res) => {
  return res.sendStatus(200);
});

// UPDATE
router.put('/:id', (req, res) => {
  return res.sendStatus(200);
});

// DELETE
router.delete('/:id', (req, res) => {
  return res.sendStatus(200);
});

module.exports = router;