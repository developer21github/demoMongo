var express     =   require('express');
var bodyParser  =   require("body-parser");
var mongoose    =   require("mongoose");
var router      =   require('./routes/index');
var port        =   process.env.port || 8081;
var app         =   express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/api',router);
app.listen(port);


mongoose.connect('mongodb://localhost:27017/mongodbTestRef');
console.log('magic happens on port : ',+ port);