const { List } = require('./../models/Models');

const ListController = {};

ListController.getOne = (req, res, next) => {
  // List.findOne
  // then process data
  // store on locals
  // send back data
  let { title } = req.body;
  if (title === undefined) title = 'weight';
  console.log('get one list', title);

  List
    .findOne({ title })
    .then(data => {
      console.log('list data in get', data);
      res.locals.list = data;
      return next();
    })
    .catch(err => {
      console.log('LIST GET ERROR', err);
      res.sendStatus(400);
    });
}

ListController.create = (req, res, next) => {
  console.log('creating list');
  // List.create
  // title, userID
  // then process data
  // store on locals
  // send back data
  const { title, userID, chartType } = req.body;

  List
    .create({ title, userID, chartType })
    .then(data => {
      console.log(data);
      res.locals.list = data;
      next();
    })
    .catch(err => {
      console.log('ERROR in LIST CREATE', err);
      res.sendStatus(400);
    })
}

module.exports = ListController;