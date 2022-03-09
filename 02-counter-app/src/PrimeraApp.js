//funcional Components
import React from "react";
//tipos de properties que el componente recive
import PropTypes from "prop-types";

const PrimeraApp = ({ saludo, subtitulo }) => {
  return (
    <>
      <h1>{saludo}</h1>
      {/* <pre>{JSON.stringify(saludo, null, 3)} </pre> */}
      <p> {subtitulo}</p>
    </>
  );
};

/* Proviene de PropTypes */
PrimeraApp.propTypes = {
  saludo: PropTypes.string.isRequired,
};
PrimeraApp.defaultProps = {
  subtitulo: "Soy un subtitulo",
};
/*======================= */

export default PrimeraApp;
