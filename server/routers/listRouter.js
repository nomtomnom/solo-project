const express = require('express');
const ListController = require('./../controllers/ListController');

const router = express.Router();

// CREATE NEW
router.post('/', ListController.create, (req, res) => {
  return res.send({ list: res.locals.list });
});

// GET ONE
router.get('/', ListController.getOne, (req, res) => {
  return res.send({ list: res.locals.list })
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