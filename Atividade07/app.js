var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var users = require('./routes/users');
// var students = require('./routes/students/StudentRoute');
var teachers = require('./routes/teachers/TeacherRoute');
var app = express();

require("./db/mongo.connection")
var studentRoute = require('./routes/students/students.routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});


app.use('/api/v1/users', users);
app.use('/crud/students', studentRoute);
app.use('/crud/teachers', teachers);

   
module.exports = app;
