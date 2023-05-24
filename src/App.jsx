import "./App.css";
import { menuComponents } from "./tools/objects";
import { footerStyle } from "./tools/footerStyle";
import { Navigation } from "./Components/Navigation";
import { Header } from "./Components/Header";
import { FirstGeneralContainer } from "./Components/FirstGeneral";
import { SecondGeneralContainer } from "./Components/SecondGeneral";
import { ThirdGeneralContainer } from "./Components/ThirdGeneral";
import { FourthGeneralContainer } from "./Components/FourthGeneral";
import { FifthGeneralContainer } from "./Components/FifthGeneral";
import { SixthGeneralContainer } from "./Components/SixthGeneral";
import { SeventhGeneralContainer } from "./Components/SeventhGeneral";
import { EighthGeneralContainer } from "./Components/EighthGeneral";
import { Footer } from "./Components/Footer";
import {
  firstStyle,
  secondThirdStyle,
  fourthStyle,
  fifthStyle,
  sixthStyle,
  seventhStyle,
  eighthStyle,
} from "./tools/mainContainersStyle";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <FirstGeneralContainer id={menuComponents.first} style={firstStyle} />
      <section>
        <SecondGeneralContainer
          id={menuComponents.second}
          style={secondThirdStyle}
        />
        <ThirdGeneralContainer
          id={menuComponents.third}
          style={secondThirdStyle}
        />
      </section>
      <FourthGeneralContainer id={menuComponents.fourth} style={fourthStyle} />
      <FifthGeneralContainer id={menuComponents.fifth} style={fifthStyle} />
      <SixthGeneralContainer id={menuComponents.sixth} style={sixthStyle} />
      <SeventhGeneralContainer
        id={menuComponents.seventh}
        style={seventhStyle}
      />
      <EighthGeneralContainer id={menuComponents.eighth} style={eighthStyle} />
      <Footer style={footerStyle} />
    </div>
  );
}

export default App;
