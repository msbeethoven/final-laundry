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

app.use(express.static(path.join(__dirname, '../client/build')))

app.get('*', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.use(bodyParser.json());

app.post('/calculate', function (req, res) {
  const totalamount = req.body; //what you put in postman in the Body
  console.log("totalamount: ", totalamount)
  const oneLoad = totalamount.oneLoad;
  const totalPrice = totalamount.totalPrice;
  const amountOnCard = totalamount.amountOnCard;
  
  const minAmount = totalamount.minAmount;
  const minPlusAmountOnCard = (Number( minAmount) + Number( amountOnCard)).toFixed(2)
  const numOfLoads = Math.ceil(minPlusAmountOnCard/oneLoad); 
  res.send({
    whatToPutOnCard: (((numOfLoads * oneLoad) - minPlusAmountOnCard)+minAmount).toFixed(2)
  })
})

app.use ( function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Interal issues')
})

app.listen(port, () => console.log(`Listening on port ${port}`));