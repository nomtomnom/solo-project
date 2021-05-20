const { Item } = require('./models/Models');

const ItemController = {};

ItemController.getAll = (req, res, next) => {
  Item
    .find()
    .then(data => {
      console.log(data);
      res.locals.items = data;
      return next();
    })
    .catch(err => {
      console.log('ERROR in ITEM GET ALL', err);
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
    })
}

module.exports = ItemController;