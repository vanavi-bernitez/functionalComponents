const footerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  columnGap: "5em",
  backgroundColor: "#5F8D4E",
  width: "97vw",
  height: "70px"
};

const iconsStyle = {
  display: "flex",
  columnGap: "1em"
}

const iconStyle = {
  display: "inline-flex",
  placeItems: "center",
  justifyContent: "center",
  width: "40px",
	height: "40px",
	transitionDuration: "0.25s"
}

const iconStyleHover = {
  width: "40px",
	height: "40px",
  outlineOffset: "1px",
  backgroundColor:"#E5D9B6", 
  animation: "shake 0.25s",
}




export { footerStyle, iconsStyle, iconStyle, iconStyleHover };
