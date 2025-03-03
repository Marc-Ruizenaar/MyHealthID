import React from "react";
import "../Styles/MyHealthID.css";
import "../Styles/Header.css";
import Header from "../componants/MyHealthID/Header";
import HealthIDCard from "../componants/MyHealthID/HealthIDCard";
import EmergencyContacts from "../componants/MyHealthId/EmergencyContacts";

export default function myHealthID() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="myHealthID">
        <HealthIDCard />
        <EmergencyContacts />
      </div>
    </div>
  );
}
