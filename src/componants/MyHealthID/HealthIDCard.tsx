import React from "react";

export default function HealthIDCard() {
  const bloodTypes = [
    "A RH+",
    "B Rh+",
    "B Rh-",
    "0 Rh+",
    "0 Rh-",
    "AB Rh+",
    "AB Rh-",
  ];

  return (
    <section>
      <h1>MyHealth ID</h1>
      <div id="healthIDContainer">
        <img className="qrCode" src="./qrcode.png" alt="Health ID QR Code" />

        <div id="healthIDInfo">
          <details>
            <summary className="customSummary">
              <span>Blood Type</span>
              <span className="value">A Rh-</span>
            </summary>

            {bloodTypes.map((bloodType, index) => (
              <p key={index}>{bloodType}</p>
            ))}
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

          <a href="./">
            <p className="dataShare">Choose which data to share</p>
          </a>
        </div>
      </div>
    </section>
  );
}
