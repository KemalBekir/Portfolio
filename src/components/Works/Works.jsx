import { useState } from "react";
import "./Works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  //TODO - Change for my projects
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Web Design",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      img: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Mobile Application",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Branding",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    },
    // {
    //   id: "4",
    //   icon: "./assets/mobile.png",
    //   title: "Something",
    //   desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    //   img: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
    // },
    // {
    //   id: "5",
    //   icon: "./assets/globe.png",
    //   title: "Something 2",
    //   desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    //   img: "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
    // },
  
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="works" id="projects">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container" key={d.id}>
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="icon" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Projects</span>
                  <div className="source">
                    <a className="link" href="https://github.com/KemalBekir">
                      Source Code
                    </a>
                    <a className="link" href="_blank">
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        alt="arrow left"
        className="arrow left"
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        alt="arrow right"
        className="arrow right"
        onClick={() => handleClick()}
      />
    </div>
  );
}
