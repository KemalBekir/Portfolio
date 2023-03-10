import { useState } from "react";
import "./App.scss";
// import Contact from "./components/Contact/Contact";
import Intro from "./components/Intro/Intro";
import Menu from "./components/Menu/Menu";
import Porftolio from "./components/Portfolio/Porftolio";
import Technologies from "./components/Technologies/Technologies";
import Certificates from "./components/Certificates/Certificates";
import Topbar from "./components/Topbar/Topbar";
import Works from "./components/Works/Works";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="app">
      <Topbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="sections">
        <Intro />
        <Porftolio />
        <Works />
        <Technologies/>
        <Certificates />
        {/* <Contact /> */}
      </div>
    </div>
  );
}

export default App;
