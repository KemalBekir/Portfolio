import "./Topbar.scss";
// import PersonIcon from "@mui/icons-material/Person";
// import MailIcon from "@mui/icons-material/Mail";

const Topbar = ({ isOpen, setIsOpen }) => {
  return (
    <div className={"topbar " + (isOpen && 'active')}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            KB
          </a>
          {/* <div className="itemContainer">
            <PersonIcon className="icon" />
            <span>Tel: 07494 00 00 00</span>
          </div>
          <div className="itemContainer">
            <MailIcon className="icon" />
            <span>Mail: kbekir.work@gmail.com</span>
          </div> */}
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setIsOpen(!isOpen)} >
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
