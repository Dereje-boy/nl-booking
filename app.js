const express = require("express");

//importing templeting engine handlebars
const { engine } = require('express-handlebars');

//importing middlewares modules
var path = require('path');
var cookieParser = require('cookie-parser');

//importing routes
var accountsRouter = require('./routes/accounts');
var servicesRouter = require('./routes/services');
var bookingsRouter = require('./routes/bookings');
var loginRouter = require('./routes/login');
var signupRouter = require('./routes/signup');


const app = express();

//consuming our routes
app.use('/api/accounts/', accountsRouter);
app.use('/api/services/', servicesRouter);
app.use('/api/bookings/', bookingsRouter);
app.use('/login/', loginRouter);
app.use('/signup/', signupRouter);


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