const express = require('express');

const router = express.Router();

// GET ALL
router.get('/', (req, res) => {
  return res.sendStatus(200);
});

// GET ONE
// use params to get either VALUE or DATE
router.get('/', (req, res) => {
  return res.sendStatus(200);
});

// CREATE NEW
router.post('/create', (req, res) => {
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