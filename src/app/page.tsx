import React from "react";
import Calculator from "../components/Calculator";
import "./page.css";

const MainPage: React.FC = () => {
  return (
    <div className="wrapper">
      <Calculator />
    </div>
  );
};

export default MainPage;
