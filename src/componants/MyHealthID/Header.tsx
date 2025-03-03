import React from "react";

export default function Header() {
  return (
    <div className="Header">
      <header>
        <p id="logo">LOGO</p>
        <p id="hamburgerMenu"></p>
        <div id="navLinks">
          <a href="">Dashboard</a>
          <a href="">Cases</a>
          <a href="">Messages</a>
          <a href="">Appointments</a>
        </div>
        <button>Your Health Card</button>
      </header>
    </div>
  );
}
