import React from "react";

export default function Header() {
  return (
    <header className="header">
      <a href="./" className="logo">
        <img src="./Logo.svg" alt="Logo" />
      </a>
      <p id="hamburgerMenu"></p>
      <nav>
        <ul id="navLinks">
          <li>
            <a href="./dashboard">Dashboard</a>
          </li>
          <li>
            <a href="./">Cases</a>
          </li>
          <li>
            <a href="./">Messages</a>
          </li>
          <li>
            <a href="./">Appointments</a>
          </li>
        </ul>
      </nav>
      <a className="btnHeader" href="./myhealthid">
        Your Health Card
      </a>
    </header>
  );
}
