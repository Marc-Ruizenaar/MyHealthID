import React from "react";
import Header from "../componants/MyHealthID/Header";
import LeafsOverlay from "../componants/general/LeafsOverlay";
import "../styles/HomePage.css";

export default function HomePage() {
  return (
    <div>
      <Header />

      <LeafsOverlay>
        <div className="container">
          <h1>Who are you managing case for?</h1>

          <section className="homepageCases">
            <div className="inner">
              <h2>My Self</h2>

              <a href="./dashboard" aria-label="Odai Dahi Case" className="home-card">
                <img src="./User_box_light.svg" alt="User" />
                <div>
                  <h3>Odai Dahi</h3>
                  <p>28 Years</p>
                </div>
              </a>

              <div className="home-card login">
                <h3>Show at login</h3>
                <img src="./3DSwitch.svg" alt="Switch" />
              </div>
            </div>

            <div className="inner">
              <h2>My Child</h2>

              <a href="./dashboard" aria-label="Jack Dahi Case" className="home-card">
                <img src="./User_box_light.svg" alt="User" />
                <div>
                  <h3>Jack Dahi</h3>
                  <p>7 Years</p>
                </div>
              </a>

              <div className="home-card">
                <img src="./User_box_light.svg" alt="User" />
                <div>
                  <h3>Add Child</h3>
                </div>
              </div>

              <p>
                As a legal guardian of a child under 13, you can manage
                healthcare matters on their behalf. When the child turns 13,
                they will be removed from your list.
              </p>
            </div>
          </section>
        </div>
      </LeafsOverlay>
    </div>
  );
}
