"use client";

import React, { useState } from "react";
import "./Calculator.css";
import interactive_mode from "@/logic/interactive";

interface resultObj {
  x1: number;
  x2: number;
}

const Calculator: React.FC = () => {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [result, setResult] = useState<resultObj | null>(null);

  const handleCalculateBtnClick = () => {
    const resultObj: resultObj = interactive_mode(
      Number(a),
      Number(b),
      Number(c)
    );
    // console.log(resultObj);

    setResult(resultObj);
  };

  const checkIfZero = (a: string): void => {
    if (a == "0") {
      (document.querySelector(".a") as HTMLInputElement).value = "";
      alert("a can't be zero");
      console.error(new Error("incorect value"));
    } else {
      setA(a);
    }
  };

  return (
    <div className="calculator_wrapper">
      <div className="entry_constants">
        <input
          className="const_input a"
          type="text"
          placeholder="ax^2"
          onInput={(e) => checkIfZero((e.target as HTMLInputElement).value)}
        ></input>
        <input
          className="const_input"
          type="text"
          placeholder="bx"
          onChange={(e) => setB(e.target.value)}
        ></input>
        <input
          className="const_input"
          type="text"
          placeholder="c"
          onChange={(e) => setC(e.target.value)}
        ></input>
      </div>
      <div className="result_wrapper">
        <div className="result" id="result">
          {result !== null ? (
            <div>
              <p>{result.x1 ? result.x1.toFixed(2) : ""}</p>
              <p>{result.x2 ? result.x2.toFixed(2) : ""}</p>
            </div>
          ) : (
            <p>wait for result</p>
          )}
        </div>
      </div>
      <button className="calculate_btn" onClick={handleCalculateBtnClick}>
        Press to calculate
      </button>
    </div>
  );
};

export default Calculator;
