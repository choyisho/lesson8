// jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', (req,res) => {
  res.sendFile(__dirname + '/index.html');  //Express 全局变量
});

app.post('/', (req, res) => {

  
console.log()


});

app.listen(3000,() => {
  console.log('Server started!');
});
