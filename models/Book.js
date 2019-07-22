const Sequelize = require('sequelize');

const sequelize = require('../configs/sequelize');

class Book extends Sequelize.Model {}

Book.init({
  judul: Sequelize.STRING,
  namaPengarang: Sequelize.STRING,
  namaPenerbit: Sequelize.STRING,
  harga: Sequelize.INTEGER,
}, { sequelize, modelName: 'book' });

module.exports = Book;