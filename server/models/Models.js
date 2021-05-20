const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// User Model
const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

// List Model
const listSchema = new Schema({
  title: { type: String, required: true, unique: true },
  userID: { type: String, required: true },
  chartType: { type: String, required: true },
});

const List = mongoose.model('List', listSchema);

// Item Model
const itemSchema = new Schema({
  date: { type: Date, required: true },
  value: { type: Number, required: true },
  userID: { type: String, required: true },
  listID: { type: String, required: true },
});

const Item = mongoose.model('Item', itemSchema);

module.exports = {
  User,
  List,
  Item,
}