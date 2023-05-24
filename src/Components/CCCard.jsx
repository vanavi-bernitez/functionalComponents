const ColorChangedCard = ({ src, color }) => {
  const listIcons = src.imgSrc.map((icon) => (
    <div className="cardImageContainer" style={{ backgroundColor: color }}>
      <img src={icon} alt="icon" />
    </div>
  ));
  return <div style={{marginBottom: "1em"}} className="iconsContainer">{listIcons}</div>;
};

export { ColorChangedCard };
