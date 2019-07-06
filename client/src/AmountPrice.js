import React from 'react';

const AmountPrice = (props) => {
  console.log("turkeys", props) //{turkeys: 2.5, chicken: "hi"}
  const { amountToPutOnCard } = props
  console.log("so what's this", amountToPutOnCard) //2.5


  return (
    <div>
      <div className="amountToPutOnCard">
        {props.amountToPutOnCard ? `You should put $` + props.amountToPutOnCard + ` to zero out your card.` : null}
      </div>
    </div>
  )
}

export default AmountPrice;
