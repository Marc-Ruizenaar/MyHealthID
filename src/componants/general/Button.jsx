import React from "react";

export default function Button({ text, link, buttonType }) {
  return (
    <a className={`btn ${buttonType}`} href={link}>
      {text}
    </a>
  );
}
