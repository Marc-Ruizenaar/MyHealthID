import React from "react";
import Header from "./Header";

export default function HealthIDCard() {
  return (
    <div className="HealthIDCard">
      <h1>MyHealth ID</h1>
      <div id="healthIDContainer">
        <div id="qr">
          <img src="src/assets/qrcode.png" alt="Health ID QR Code" />
        </div>
        <div id="healthIDInfo">
          <details>
            <summary className="customSummary">
              <span>Blood Type</span> <span className="value">A Rh-</span>
            </summary>
            <p>A Rh+</p>
            <p>B Rh+</p>
            <p>B Rh-</p>
            <p>0 Rh+</p>
            <p>0 Rh-</p>
            <p>AB Rh+</p>
            <p>AB Rh-</p>
          </details>
          <div className="medicalDetails">
            <span>Weight</span>
            <span className="value">80</span>
          </div>
          <div className="medicalDetails">
            <span>Height</span>
            <span className="value">178</span>
          </div>
          <details>
            <summary className="customSummary">
              <span>Allergies</span>
            </summary>
            <p>-</p>
          </details>
          <details>
            <summary className="customSummary">
              <span>Medications</span>
            </summary>
            <p>-</p>
          </details>
          <details>
            <summary className="customSummary">
              <span>Operations</span>
            </summary>
            <p>-</p>
          </details>
          <details>
            <summary className="customSummary">
              <span>Previous Complications</span>
            </summary>
            <p>-</p>
          </details>
          <a href="">
            <p id="dataShare">Choose which data to share</p>
          </a>
        </div>
      </div>
    </div>
  );
}
