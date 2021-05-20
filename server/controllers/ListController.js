const { List } = require('./models/Models');

const ListController = {};

ListController.getOne = (req, res, next) => {
  // List.findOne
  // then process data
  // store on locals
  // send back data
  
  let { title } = req.body;
  if (title === undefined) title = 'weight';

  List
    .findOne({ title })
    .then(data => {
      console.log(data);
      res.locals.list = data;
      return next();
    })
    .catch(err => {
      console.log('LIST GET ERROR', err);
    });
}

ListController.create = (req, res, next) => {
  // List.create
  // title, userID
  // then process data
  // store on locals
  // send back data
  const { title, userID } = req.body;

  List
    .create({ title, userID })
    .then(data => {
      console.log(data);
      res.locals.list = data;
      next();
    })
    .catch(err => {
      console.log('ERROR in LIST CREATE', err);
    })
}

module.exports = ListController;