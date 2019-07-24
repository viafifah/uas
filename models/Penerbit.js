const Sequelize = require('sequelize');

const sequelize = require('../configs/sequelize');

class Penerbit extends Sequelize.Model {}

Penerbit.init({
  nama: Sequelize.STRING,
  keterangan: Sequelize.STRING,
}, { sequelize, modelName: 'penerbit' });

module.exports = Penerbit;