const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

app.use(morgan('dev'));

app.use(function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-RequestedWith, Content-Type, Accept");
  next();
})

// app.use(express.static(path.join(__dirname, '../client/public')))

app.use(bodyParser.json());

// app.get('/', function(req, res) {
//   res.send('Hello world')
// })

app.get('/', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
}); 

app.post('/calculate', function (req, res) {
  const totalamount = req.body;
  console.log(totalamount) //what you put in postman in the Body //amountOnCard
  const oneLoad = totalamount.oneLoad;
  const totalPrice = totalamount.totalPrice;
  const amountOnCard = totalamount.amountOnCard;
  const numOfLoads = totalamount.numOfLoads; 
  console.log(oneLoad)
  res.send({
    whatToPutOnCard: (numOfLoads * oneLoad) - amountOnCard
  })
  
})

app.use ( function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Interal issues')
})

app.listen(port, () => console.log(`Listening on port ${port}`));