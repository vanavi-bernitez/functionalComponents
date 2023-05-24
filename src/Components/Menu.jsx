import React, { useState } from "react";

const Menu = ({ menuItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="menuContainer">
      <button onClick={handleToggleMenu}></button>
      {isOpen && (
        <ul>
          <li>
            <a href={`#${menuItems.first}`}>First</a>
          </li>
          <li>
            <a href={`#${menuItems.second}`}>Second</a>
          </li>
          <li>
            <a href={`#${menuItems.third}`}>Third</a>
          </li>
          <li>
            <a href={`#${menuItems.fourth}`}>Fourth</a>
          </li>
          <li>
            <a href={`#${menuItems.fifth}`}>Fifth</a>
          </li>
          <li>
            <a href={`#${menuItems.sixth}`}>Sixth</a>
          </li>
          <li>
            <a href={`#${menuItems.seventh}`}>Seventh</a>
          </li>
          <li>
            <a href={`#${menuItems.eighth}`}>Eighth</a>
          </li>
        </ul>
      )}
    </div>
  );
};

export { Menu };
