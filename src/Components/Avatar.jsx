import React from "react";
const Avatar = ({ src }) => {
  return (
    <div className="avatarContainer">
      <img src={src} style={{maxHeight: "40vw"}} alt="girl with plant"  />
    </div>
  );
};

export { Avatar };
