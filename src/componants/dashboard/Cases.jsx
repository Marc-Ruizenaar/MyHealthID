import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import "../../styles/Cases.css";

export default function Cases() {
  return (
    <section className="cta">
      <a href="./" className="cards cases">
        <div className="header">
          <h2>Cases</h2>
          <span>
            23
            <IoIosArrowForward />
          </span>
        </div>

        <div className="inner">
          <img src="/knie.png" alt="Knee" />
          <div>
            <h3>Request for joint injection</h3>
            <p>Ongoing chat</p>
          </div>
          <IoIosArrowForward />
        </div>
      </a>

      <a href="./" className="cards messages">
        <h2>Messages</h2>
        <span>
          0
          <IoIosArrowForward />
        </span>
      </a>

      <a href="./" className="cards messages">
        <h2>Booked appointments</h2>
        <span>
          2
          <IoIosArrowForward />
        </span>
      </a>
    </section>
  );
}
