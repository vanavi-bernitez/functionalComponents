import cloud from "../images/cloud_snow.svg";
import anchor from "../images/anchor.svg";
import coffee from "../images/coffee.svg";
import dribbble from "../images/dribbble.svg";
import umbrella from "../images/umbrella.svg";
import linkedin from "../images/linkedin.svg";
import instagram from "../images/instagram.svg";
import github from "../images/github.svg";
import brandLogo from "../images/logo.svg"
import girlImage1 from "../images/girl.png";
import girlImage2 from "../images/girl2.png";
import girlImage3 from "../images/girl3.png";
import girlImage4 from "../images/girl4.png";

const menuComponents = {
  first: "first",
  second: "second",
  third: "third",
  fourth: "fourth",
  fifth: "fifth",
  sixth: "sixth",
  seventh: "seventh",
  eighth: "eighth"
};

const properties = {
  imgSrc: [cloud, anchor, coffee, dribbble, umbrella],
  imgGirls: [girlImage1, girlImage2, girlImage3, girlImage4],
  imgFooter: [instagram, linkedin, github],
  brandLogo,
  fontColor: ["#00235B", "#E21818"],
  margin: {margin: "1em"}
};

const messages = {
  firstOptionPill: "TEAM TACOS!!",
  secondOptionPill: "TEAM BURRITOS!!",
  headerTittle: "NON PLANTS - PLANTS PAGE",
  welcome: "WELCOME!",
  sectionTitle: [
    "Change background image color",
    "Binary change of umbrella icon",
    "Which icon will come next?",
    "Which pill did Morpheus choose?",
    "Wanna try diferent background colors?",
    "Create a list of new words or short phrases",
    "Enter a word and find the definition"
  ],
};

const pillButtons = {
  width: "7em",
  height: "3em",
  borderRadius: "2em",
  color: "white",
  fontSize: "large",
};

const headerAvatars = {
  maxHeight: "10vw",
};

const headerContainer = {
  display: "flex",
  width: "97vw",
  justifyContent: "space-around",
  alignItems: "center",
  marginBottom: "1em",
  backgroundColor: "#5F8D4E"
};

const tittleStyle = {
  fontFamily: "'Righteous', cursive",
  fontSize: "200%",
  color: "#eeee",
  textDecotarion: "none",
};

const subTittleStyle = {
  fontFamily: "'Righteous', cursive",
  textAlign: "center",
  fontSize: "150%",
  color: "#574101",  
};

export {
  menuComponents,
  properties,
  messages,
  pillButtons,
  headerAvatars,
  headerContainer,
  tittleStyle,
  subTittleStyle,
};
