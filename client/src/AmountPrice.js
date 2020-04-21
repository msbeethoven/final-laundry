import React from 'react';

const AmountPrice = (props) => {
  console.log("turkeys", props) //{turkeys: 2.5, chicken: "hi"}
  const { amountToPutOnCard } = props
  console.log("so what's this", amountToPutOnCard) //2.5


  return (

    <div className="amountToPutOnCard">
      <div className="answer">
        {props.amountToPutOnCard ? `You should put $` + props.amountToPutOnCard + ` to zero out your card.` : null}
      </div>
      {props.amountToPutOnCard === 0 ? `The kiosk requires at least $10. If you have nothing on your card, $10.50 will zero you out for the least amount!` : null}
    </div>
  )
}

export default AmountPrice;
