import React, { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <a href="./" className="logo">
        <img src="./Logo.svg" alt="Logo" />
      </a>
      
      <div 
        className="hamburgerWrapper"
        onClick={toggleMenu}
      >
        <div 
          id="hamburgerMenu" 
          className={menuOpen ? 'active' : ''}
        ></div>
      </div>
      
      <nav className={menuOpen ? 'mobileOpen' : ''}>
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