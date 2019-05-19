const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const port = process.env.PORT || 3000;

app.use(morgan('dev'));

// app.get('/', function(req, res) {
//   res.send('Hello world')
// })

app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
}); 

app.use ( function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Interal issues')
})

app.listen(port, () => console.log(`Listening on port ${port}`));