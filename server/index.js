const express = require('express');
const app = express();
const morgan = require('morgan');
const port = 3000;

app.use(morgan('dev'));

app.get('/', function(req, res) {
  res.send('One More Time')
})

app.listen(port, () => console.log(`Listening on port ${port}`));