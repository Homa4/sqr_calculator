import React from "react";
import "./Calculator.css";

const Calculator: React.FC = () => {
  return (
    <div className="calculator_wrapper">
      <div className="entry_constants">
        <input className="const_input" type="text" placeholder="ax^2"></input>
        <input className="const_input" type="text" placeholder="bx"></input>
        <input className="const_input" type="text" placeholder="c"></input>
      </div>
      <div className="result_wrapper">
        <div className="result" id="result">
          result will be placed hear
        </div>
      </div>
      <button className="calculate_btn">Press to calculate</button>
    </div>
  );
};

export default Calculator;
