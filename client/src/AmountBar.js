import React from 'react';
import './App.css';

const AmountBar = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.inputValueOnChange(e.target.onCardAmount.value, e.target.loadAmount.value);
  };

  return (
    <form className="search" onSubmit={e => handleSubmit(e)}>

      <div className="onCardAmount">
        <input name="onCardAmount" type="number" min="0" step=".01" placeholder="How much is on your card?" required />
      </div>

      <div className="loadAmount">
        <input name="loadAmount" type="number" min="0" placeholder="How many loads?" required />
      </div>

      <div>

      </div>

      <button className="searchBtn" type="submit">Refill</button>
    </form>
  );
}; 

export default AmountBar; 