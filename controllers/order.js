const Order = require('../models/order');
const sequelize = require('sequelize');
const User = require('../models/User');
const Book = require('../models/Book');
const Category = require('../models/category');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

module.exports.getUserOrder = (req, res) => {
    Order
        .findAll({
            where: {
                userId: req.params.user_id
            },
            include: [{
                model: User
            },{
                model: Book
            }],
        })
        .then((order) => {
            res.status(200).json(order);
        })
        .catch((error) => {
            console.log(error)
        });
}

module.exports.getDetailOrder = (req, res) => {
    Order.findOne({
            where: {
                id: req.params.order_id
            }
        })
        .then((order) => {
            res.status(200).json(order);
        })
        .catch((error) => {
            console.log(error)
        });
}

module.exports.storeOrder = (req, res) => {
    jwt.verify(req.token, process.env.SECRETKEY, (error, authData) => {
        if(error){
            res.status(403).json({
                msg: error.message
            });
        } else {
            Order.create({
                qty: req.body.qty,
                userId: req.body.userId,
                bookId: req.body.bookId,
            })
            .then((order) => {
                res.status(200).json({
                    msg: 'Order Created',
                    order: order
                });
            })
            .catch((error) => {
                console.log(error)
            });
        }
    })
}