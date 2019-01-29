const express = require('express')
const app = express()
app.get('/', function(req, res){
  if(req.query.id !== undefined){
    res.send('hello ' + req.query.id + ' and welcome to ICW   Dublin');
  }
  else{res.send('hello and welcome to H&PS CIW in Dublin');}
});
app.listen(3000, () => console.log('Example app listening on port 3000!'))