import axios from 'axios';
import {SET_AMOUNT} from './constants';

const setAmountToPutOnCard = (amountToPutOnCard) => {
  return {
    type: SET_AMOUNT, 
    amountToPutOnCard
  };
}

export const fetchAmount = (amountToPutOnCard, numOfLoads) => {
  return async (dispatch) => {
     await axios.post(`/calculate`, {
      "oneLoad": 1.75,
      "minAmount": 10,
      "amountOnCard": amountToPutOnCard,
      "numOfLoads": numOfLoads
    }).then(function(res){
      dispatch(setAmountToPutOnCard(res.data.whatToPutOnCard));
    }).catch(function(err){
      console.log(err)
    })
  }
}