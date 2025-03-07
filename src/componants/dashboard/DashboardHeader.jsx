import React from "react";
import Categories from "./Categories";
import "../../styles/DashboardHeader.css";

export default function DashboardHeader({ name }) {
  return (
    <section className="dashboardHeader">
      <h1>Hey {name}</h1>
      <a href="./" aria-label="Go to new Case" className="btn btnLightBlue">
        New Case
      </a>
      <Categories />
    </section>
  );
}
