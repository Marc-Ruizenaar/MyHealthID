import React from "react";
import Header from "../componants/dashboard/Header";
import Cases from "../componants/dashboard/Cases";
import Button from "../componants/general/Button";
import LeafsOverlay from "../componants/general/LeafsOverlay";

export default function Dashboard() {
  return (
    <div>
      <LeafsOverlay>
        <main className="dashboard">
          <Header name="Odai" />

          <Cases />

          <div className="healthCardButton">
            <Button text="Your Health card" link="./" buttonType="btnBlue" />
          </div>
        </main>
      </LeafsOverlay>
    </div>
  );
}
