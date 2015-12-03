var express = require('express')
var app = express()

app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));
// app.use(express.static(__dirname + '/node_modules'));
 
app.get('/', function (req, res) {
	res.render(__dirname + '/public')
});
 
app.listen(3030, function(){
	console.log('listening to localhost:3030');
});
