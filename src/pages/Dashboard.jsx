import React from "react";
import DashboardHeader from "../componants/dashboard/DashboardHeader";
import Cases from "../componants/dashboard/Cases";
import Button from "../componants/general/Button";
import LeafsOverlay from "../componants/general/LeafsOverlay";
import Header from "../componants/MyHealthID/Header";

export default function Dashboard() {
  return (
    <div>
      <Header />
      <LeafsOverlay>
        <main>
          <DashboardHeader name="Odai" />

          <Cases />

          <div className="healthCardButton">
            <Button text="Your Health card" link="./myhealthid" buttonType="btnBlue" />
          </div>
        </main>
      </LeafsOverlay>
    </div>
  );
}
