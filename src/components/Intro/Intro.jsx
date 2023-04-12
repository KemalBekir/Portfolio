import "./Intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Developer"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          {/* TODO - Change picture for one of my own */}
          <img src="assets/MeGalata.jpg" alt="man" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Kemal Bekir</h1>
          <h3>
            Junior <span ref={textRef}></span>
          </h3>
          <div className="socials">
            <a className="link" href="https://github.com/KemalBekir">
              <GitHubIcon className="icon" />
            </a>

            <a className="link" href="https://www.linkedin.com/in/kemal-bekir-900126267/">
              <LinkedInIcon className="icon" />
            </a>
          </div>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="down arrow" />
        </a>
      </div>
    </div>
  );
}
