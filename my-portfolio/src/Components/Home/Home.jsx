import React from "react";
import "./Home.css";
import Avatar from "../../Assets/Profile_Image/linkedin-photo.jpeg";
const Home = () => {
  return (
    <section id="home">
      <div className="details">
        <h1>Hi,<span className="waving" data-hover="👋"></span><br />I'm Md <span className="name">Gulzeesh</span></h1>
        <h1>MERN Developer</h1>
        <div className="call_section">
          <button className="outline_btn">Resume</button><button className="solid_btn">Let's Talk</button>
        </div>
      </div>
      <img src={Avatar} alt="profile" className="avatar" />
    </section>
  );
};

export default Home;
