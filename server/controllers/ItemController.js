const { Item } = require('./../models/Models');

const ItemController = {};

ItemController.getAll = (req, res, next) => {
  const { userID, listID } = req.body;

  Item
    .find({ userID, listID })
    .then(data => {
      console.log('item data', data);
      res.locals.items = data;
      return next();
    })
    .catch(err => {
      console.log('ERROR in ITEM GET ALL', err);
      return res.sendStatus(400);
    })
}

ItemController.getOne = (req, res, next) => {
  const { date } = req.body;

  Item
    .find({ date })
    .then(data => {
      console.log(data);
      res.locals.item = data;
      return next();
    })
    .catch(err => {
      console.log('ERROR in ITEM GET ONE', err);
      return res.sendStatus(400);
    })
}

ItemController.create = (req, res, next) => {
  const { date, value, userID, listID } = req.body;

  Item
    .create({ date, value, userID, listID })
    .then(data => {
      console.log(data);
      res.locals.item = data;
      return next();
    })
    .catch(err => {
      console.log('ERROR in ITEM CREATE', err);
      return res.sendStatus(400);
    })
}

ItemController.delete = (req, res, next) => {
  const { itemID} = req.body;

  Item
    .findOneAndDelete({ _id: itemID })
    .then(data => {
      console.log('deleted data', data);
      res.locals.item = data;
      return next();
    })
    .catch(err => {
      console.log('ERROR in ITEM DELETE', err);
      return res.sendStatus(400);
    })
}

ItemController.update = (req, res, next) => {
  const { originalItem, newValue, newDate } = req.body;

  Item
    .findOneAndUpdate({ _id: originalItem._id }, { newValue, newDate })
    .then(data => {
      console.log('updated data', data);
      res.locals.item = data;
      return next();
    })
    .catch(err => {
      console.log('ERROR in ITEM UPDATE', err);
      return res.sendStatus(400);
    })
}

module.exports = ItemController;