import React from 'react';

const AmountBar = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.searchOnChange(e.target.searchVal.value, e.target.loadAmount.value);
  };
  return (
    <form className="search" onSubmit={e => handleSubmit(e)}>
      <input name="searchVal" type="number"  placeholder= "How much is on your card?" required/>
      <input name="loadAmount" type="number" placeholder= "How many loads do you want?" required />
      <button className="searchBtn" type="submit">Submit</button>
    </form>
  );
};

export default AmountBar; 