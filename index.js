const express = require('express');

const app = express();

app.set('view engine', 'ejs');

const homeRouter = require('./routes/home');
const categoryRouter = require('./routes/category');
const bookRouter = require('./routes/book');
const userRouter = require('./routes/user');
const penerbitRouter = require('./routes/penerbit');

const sequelize = require('./configs/sequelize');

const Book = require('./models/Book');
const User = require('./models/User');
const Category = require('./models/category');
const Penerbit = require('./models/penerbit');

// Category.hasMany(Book);
Book.belongsTo(Category);
// Penerbit.hasMany(Book);
Book.belongsTo(Penerbit);

app.use(homeRouter);
app.use('/user', userRouter);
app.use('/book', bookRouter);
app.use('/category', categoryRouter);
app.use('/penerbit', penerbitRouter);

app.listen(3000, () => {
    console.log('server started');
    sequelize.sync();
})