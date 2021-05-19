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
  userId: { type: String, required: true },
  title: { type: String, required: true },
});

const List = mongoose.model('List', listSchema);

// Item Model
const itemSchema = new Schema({
  userId: { type: String, required: true },
  listId: { type: String, required: true },
  Date: { type: Date, required: true },
  value: { type: Number, required: true }
});

const Item = mongoose.model('Item', itemSchema);

module.exports = {
  User,
  List,
  Item,
}