const express = require("express");

//importing templeting engine handlebars
const { engine } = require('express-handlebars');

//importing middlewares modules
var path = require('path');
var cookieParser = require('cookie-parser');

//importing routes
// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

//consuming our routes
// app.use('/', indexRouter);
// app.use('/users', usersRouter);

const app = express();

//consuming middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//templeting engine
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(3000, () => {
    console.log("The server started listening on port 3000");
})