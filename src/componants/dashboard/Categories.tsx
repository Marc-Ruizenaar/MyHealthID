import React from "react";
import "../../styles/Categories.css";

export default function Categories() {
  const categories = [
    {
      link: "./",
      title: "Seek Care",
    },
    {
      link: "./",
      title: "Vaccinations",
    },
    {
      link: "./",
      title: "Renew prescription",
    },
    {
      link: "./",
      title: "Facilities",
    },
    {
      link: "./",
      title: "Health centers",
    },
  ];
  return (
    <ul className="categories">
      {categories.map((categorie) => {
        return (
          <li key={categorie.title}>
            <a href={categorie.link} aria-label={`Go to ${categorie.title}`}>
              {categorie.title}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
