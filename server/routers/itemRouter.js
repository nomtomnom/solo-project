const express = require('express');
const ItemController = require('./../controllers/ItemController');

const router = express.Router();

// GET ALL
router.get('/:listID', ItemController.getAll, (req, res) => {
  return res.send({ items: res.locals.items });
});

// CREATE NEW
router.post('/', ItemController.create, (req, res) => {
  return res.send({ item: res.locals.item });
});

// UPDATE
router.put('/:id', (req, res) => {
  return res.sendStatus(200);
});

// DELETE
router.delete('/', ItemController.delete, (req, res) => {
  return res.send({ item: res.locals.item });
});

// GET ONE
// use params to get either VALUE or DATE
router.get('/:date', (req, res) => {
  return res.sendStatus(200);
});

module.exports = router;