import React from "react";

export default function EmergencyContacts() {
  return (
    <div className="emergencyContacts">
      <p>Emergency Contacts</p>
      <div id="contactInfo">
        <div className="contacts">
          <span id="contact">Marc Ruizenaar</span>
          <span id="number">+31 6 286 726 50</span>
        </div>
        <div className="contacts">
          <span id="contact">Sofia Cabrera</span>
          <span id="number">+31 2 328 712 11</span>
        </div>
      </div>
    </div>
  );
}
