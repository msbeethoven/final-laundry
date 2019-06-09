import { SET_TABLE, SET_AMOUNT } from './constants';

const reducer = (state =
  {
    table: {}, 
    amountToPutOnCard: 0
  }, action) => {
  switch (action.type) {
    case SET_TABLE:
      return { ...state, table: action.table };
    case SET_AMOUNT: 
      return { ...state, amountToPutOnCard: action.amountToPutOnCard};
    default:
      return state;
  }
};

export default reducer;