import React from "react";
import "../styles/MyHealthID.css";
import "../styles/Header.css";
import Header from "../componants/MyHealthID/Header";
import HealthIDCard from "../componants/MyHealthID/HealthIDCard";
import EmergencyContacts from "../componants/MyHealthId/EmergencyContacts";

export default function myHealthID() {
  return (
    <>
      <Header />
      <main className="myHealthID">
        <HealthIDCard />
        <EmergencyContacts />
      </main>
    </>
  );
}
