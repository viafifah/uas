const Sequelize = require('sequelize');

const sequelize = require('../configs/sequelize');

class Category extends Sequelize.Model {}

Category.init({
    nama: Sequelize.STRING,
    keterangan: Sequelize.STRING
}, {
    sequelize,
    modelName: 'category'
});

module.exports = Category; 