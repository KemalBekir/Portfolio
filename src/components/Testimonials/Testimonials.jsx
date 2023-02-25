import "./Testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      img: "assets/JSBasics.jfif",
      link: "https://softuni.bg/certificates/certificates/converttoimage/101726?code=a2ca56ed",
      // name: "Tom Durden",
      // title: "Senior Developer",
      // img: "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      // icon: "assets/twitter.png",
      // desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
    },
    {
      id: 2,
      img: "assets/JSFundamentals.jfif",
      link: "https://softuni.bg/certificates/certificates/converttoimage/111120?code=1c090b3e",

      // name: "Alex Kalinski",
      // title: "Co-Founder of DELKA",
      // img: "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      // icon: "assets/youtube.png",
      // desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
      featured: false,
    },
    {
      id: 3,
      img: "assets/JSAdvanced.jfif",
      link: "https://softuni.bg/certificates/certificates/converttoimage/121123?code=4b6055dc",
      // name: "Martin Harold 1",
      // title: "CEO of ALBI",
      // img: "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      // icon: "assets/linkedin.png",
      // desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
    },
    {
      id: 4,
      img: "assets/JSApplications.jfif",
      link: "https://softuni.bg/certificates/certificates/converttoimage/120845?code=9373acd8",
      // name: "Tom Durden 1",
      // title: "Senior Developer",
      // img: "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      // icon: "assets/twitter.png",
      // desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
    },
    {
      id: 5,
      img: "assets/JSBackEnd.jfif",
      link: "https://softuni.bg/certificates/certificates/converttoimage/153369?code=95a19b2c",
      // name: "Alex Kalinski 1",
      // title: "Co-Founder of DELKA",
      // img: "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      // icon: "assets/youtube.png",
      // desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
      featured: false,
    },
    {
      id: 6,
      img: "assets/Angular.jfif",
      link: "https://softuni.bg/certificates/certificates/converttoimage/133054?code=49dad417",
      // name: "Martin Harold 1",
      // title: "CEO of ALBI",
      // img: "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      // icon: "assets/linkedin.png",
      // desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
    },
    {
      id: 7,
      img: "assets/HTMLCSS.jfif",
      link: "https://softuni.bg/certificates/certificates/converttoimage/142231?code=18a2c3bb",
      // name: "Alex Kalinski 1",
      // title: "Co-Founder of DELKA",
      // img: "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      // icon: "assets/youtube.png",
      // desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
      featured: false,
    },
    {
      id: 8,
      img: "assets/ReactJS.jfif",
      link: "https://softuni.bg/certificates/certificates/converttoimage/140687?code=7ee563bf",
      // name: "Martin Harold 1",
      // title: "CEO of ALBI",
      // img: "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      // icon: "assets/linkedin.png",
      // desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
    },
  ];
  return (
    <div className="testimonials" id="certificates">
      <h1>Certificates</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"} key={d.id}>
            <a href={d.link} target="_blank" rel="noreferrer noopener">
              <img
                src={d.link}
                alt="certificate"
                className="certificate"
              />
            </a>
            {/* <div className="top">
              <img src="assets/right-arrow.png" alt="" className="left" />
              <img src={d.img} alt="" className="user" />
              <img src={d.icon} alt="" className="right" />
            </div>
            <div className="center">{d.desc}</div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
}
