import React from "react";

const BrandIcon = ({ imgSrc }) => {
  return (
    <div className="brandImageContainer">
      <img style={{width: "3em", height: "3em"}} src={imgSrc} alt="vmb brand" />
    </div>
  );
};

export { BrandIcon };
