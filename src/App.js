import { useState } from "react";
import "./App.scss";
import Contact from "./components/Contact/Contact";
import Intro from "./components/Intro/Intro";
import Menu from "./components/Menu/Menu";
import Porftolio from "./components/Portfolio/Porftolio";
import Topbar from "./components/Topbar/Topbar";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="app">
      <Topbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Menu isOpen={isOpen} setIsOpen={setIsOpen}/>
      <div className="sections">
        <Intro />
        <Porftolio />
        <Contact />
      </div>
    </div>
  );
}

export default App;
