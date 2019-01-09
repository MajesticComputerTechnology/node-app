//importing node framework
var express = require('express');
 
var app = express();
//Respond with "hello world" for requests that hit our root "/"
app.get('/', function (req, res) {
 res.send('hey world!');
});
//listen to port 3030 by default
app.listen(process.env.PORT || 3030);
 
module.exports = app;
