import React from "react";

const ItemsList = ({ items }) => {
  return (
    <ul className="itemsList">
    {items.map((item, index) => (
      <li key={`item${index}`}>{item}</li>
    ))}
  </ul>
  )
};

export { ItemsList };
