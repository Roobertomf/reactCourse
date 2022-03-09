import React from "react";
import ReactDOM from "react-dom";
//import PrimeraApp from "./PrimeraApp";
import "./index.css";
import CounterApp from "./CounterApp";
const divRoot = document.querySelector("#app");

//eactDOM.render(<PrimeraApp saludo="Hola Baruck!!" />, divRoot);
ReactDOM.render(<CounterApp />, divRoot);
