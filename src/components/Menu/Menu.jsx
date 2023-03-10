import "./Menu.scss";

export default function Menu({ isOpen, setIsOpen }) {
  return (
    <div className={"menu " + (isOpen && "active")}>
      <ul>
        <li onClick={() => setIsOpen(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={() => setIsOpen(false)}>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li onClick={() => setIsOpen(false)}>
          <a href="#projects">Projects</a>
        </li>
        <li onClick={() => setIsOpen(false)}>
          <a href="#technologies">Technologies</a>
        </li>
        <li onClick={() => setIsOpen(false)}>
          <a href="#certificates">Certificates</a>
        </li>
        {/* <li onClick={() => setIsOpen(false)}>
          <a href="#contact">Contact</a>
        </li> */}
      </ul>
    </div>
  );
}
