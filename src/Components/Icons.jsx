import React, { useState } from "react";
import { iconStyle, iconStyleHover } from "../tools/footerStyle";
import { ImageIcon } from "./ImageIcon";

const Icons = ({ imgSrc }) => {
  let [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  let iconComponentStyle = isHovered ? iconStyleHover : iconStyle;

  return (
    <div
      className="iconImageContainer"
      style={{
        display: "grid",
        placeItems: "center",
        width: "50px",
      }}
    >
      <a href="#" className="icon">
        <ImageIcon
          src={imgSrc}
          style={iconComponentStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </a>
    </div>
  );
};

export { Icons };
