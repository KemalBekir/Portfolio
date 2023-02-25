import "./Technologies.scss";

export default function Technologies() {
  return (
    <div className="tech" id="technologies">
      <h1>Technologies</h1>
      <div className="container">
        <ul className="list">
          <li>
            <img src="assets/javascript.svg" alt="javascript logo" />
            <p>Javascript</p>
          </li>
          <li>
            <img src="assets/react.svg" alt="react logo" />
            <p>React</p>
          </li>
          <li>
            <img src="assets/html5.svg" alt="html5 logo" />
            <p>HTML 5</p>
          </li>
          <li>
            <img src="assets/css3.svg" alt="css3 logo" />
            <p>CSS 3</p>
          </li>
          <li>
            <img src="assets/expressjs.svg" alt="express.js logo" />
            <p>Express JS</p>
          </li>
          <li>
            <img src="assets/mongodb.svg" alt="mongodb logo" />
            <p>Mongo DB</p>
          </li>
          <li>
            <img src="assets/nodejs.svg" alt="node.js logo" />
            <p>Node JS</p>
          </li>
          <li>
            <img src="assets/sass.svg" alt="sass logo" />
            <p>Sass</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
