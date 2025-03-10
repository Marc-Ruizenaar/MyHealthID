import React from "react";
import "../../styles/LeafsOverlay.css";

export default function LeafsOverlay({ children }) {
  return (
    <div>
      <div className="leafsOverlay">
        <img className="rightTopImg" src="./Logo.png" alt="" />
        <img className="rightBottomImg" src="./Logo.png" alt="" />
        <img className="LeftMidImg" src="./Logo.png" alt="" />
      </div>
      {children}
    </div>
  );
}
