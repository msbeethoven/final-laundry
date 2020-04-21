import React from 'react';
import './App.css';

const AmountBar = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.inputValueOnChange(e.target.onCardAmount.value);
  };

  return (
    <form className="search" onSubmit={e => handleSubmit(e)}>
      <div className="onCardAmount">
        <div class="question">How much is on your card right now?</div>
        <input name="onCardAmount" type="number" min="0" step=".01" placeholder="Please input dollar amount here" required />
      </div>
      <button className="searchBtn" type="submit">Refill</button>
    </form>
  );
};

export default AmountBar; 