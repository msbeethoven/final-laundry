import React from 'react';

const LoadBar = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.searchOnChange(e.target.searchVal.value);
  };
  return (
    <form className="search" onSubmit={e => handleSubmit(e)}>
      <input name="searchVal" type="number" placeholder= "How many loads do you want?" />
     
    </form>
  );
};

export default LoadBar; 