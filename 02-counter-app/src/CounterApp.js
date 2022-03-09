import React, { useState } from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value = 0 }) => {
  const [counter, setCounter] = useState(value); // retorna un arreglo con 2 valores

  const handleAdd = (event) => {
    //console.log(event);
    //setCounter(counter + 1);
    setCounter((counter) => counter + 1);
  };
  const handleSubstract = (event) => {
    //console.log(event);
    //setCounter(counter + 1);
    setCounter((counter) => counter - 1);
  };
  const handleReset = (event) => {
    //console.log(event);
    // setCounter((counter = value));
    setCounter((counter) => (counter = value));
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2> {counter} </h2>

      <button onClick={handleAdd}> +1</button>
      <button onClick={handleSubstract}> -1</button>
      <button onClick={handleReset}> Reset</button>
    </>
  );
};
CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};

export default CounterApp;
