const express = require('express')
const app = express()
app.get('/', function(req, res){
  res.send('hello ' + req.query.id + ' and welcome to ICW Dublin');
});
app.listen(3000, () => console.log('Example app listening on port 3000!'))