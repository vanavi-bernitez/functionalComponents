import React, { useState } from "react";
import { ItemsList } from "./ItemsList";
import { AddButton } from "./AddItemButton";
import { ClearButton } from "./ClearItemsButton";

const ItemsAdder = () => {
  const [items, setItems] = useState([]);

  const handleAddItem = () => {
    const newItem = prompt("Enter a new item:");
    if (newItem.trim() !== "") {
      setItems((prevItems) => [...prevItems, newItem.trim()]);
    } else {
      alert("Can not add an empty item");
    }
  };

  const handleClearList = () => setItems([]);

  return (
    <div>
      <div className="actionButtons">
        <AddButton onClick={handleAddItem} />
        <ClearButton onClick={handleClearList} />
      </div>

      <ItemsList items={items} />
    </div>
  );
};

export { ItemsAdder };
