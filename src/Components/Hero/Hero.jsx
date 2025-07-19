import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Kerlous_Soliman_Resume from "../../assets/Kerlous_Soliman_Resume.pdf";

const Hero = () => {
  return (
    <div id="hero" className="hero">
      <img
        src={profile_img}
        alt="Kerlous Soliman"
        style={{ width: "230px", height: "230px" }}
      />
      <h1>
        👋 <span>I'm Kerlous Soliman,</span> a Computer Science student at New
        Jersey Institute of Technology in Newark, NJ
      </h1>
      <p>
        I'm a curious learner exploring where I fit in tech—whether it's
        software, cybersecurity, AI, or cloud, I enjoy diving into it all. I've
        always loved learning, but even more than that, I've always wanted to
        teach. That passion shapes how I approach technology: not just as a
        problem-solver, but as someone who wants to help others understand and
        grow.
      </p>

      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>

        <a
          className="hero-resume"
          href={Kerlous_Soliman_Resume}
          download="Kerlous_Soliman_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check out my resume!
        </a>
      </div>
    </div>
  );
};

export default Hero;
