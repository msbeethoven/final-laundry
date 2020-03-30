import React from 'react';

const AmountPrice = (props) => {
  console.log("turkeys", props) //{turkeys: 2.5, chicken: "hi"}
  const { amountToPutOnCard } = props
  console.log("so what's this", amountToPutOnCard) //2.5


  return (
    <div>
      <div className="amountToPutOnCard">
        {props.amountToPutOnCard ? `You should put $` + props.amountToPutOnCard + ` to zero out your card.` : null}

         {/* {props.amountToPutOnCard === 0 ? `You should put at least $1.75 to zero out your card.` : null} */}
         {props.amountToPutOnCard === 0 ? `You need to put at least $10. If you have nothing on your card, $10.50 will zero you out!` : null}
      </div>
    </div>
  )
}

export default AmountPrice;
