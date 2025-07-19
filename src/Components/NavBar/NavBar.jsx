import React, { useState, useRef } from "react";
import "./NavBar.css";
import logo from "../../assets/logo.svg";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const NavBar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <div className="navbar">
      <img src={logo} alt="Logo" style={{ width: "150px", height: "auto" }} />
      <img src={menu_open} onClick={openMenu} alt="Open Menu" className="nav-mob-open" />
      <ul className="nav-menu" ref={menuRef}>
        <img src={menu_close} onClick={closeMenu} className="nav-mob-close" alt="Close Menu" />
        <li><AnchorLink className="anchor-link" href="#home"><p onClick={() => setMenu("home")}>Home</p></AnchorLink>{menu === "home" && <img src={underline} alt="underline" />}</li>
        <li><AnchorLink className="anchor-link" offset={50} href="#about"><p onClick={() => setMenu("about")}>About Me</p></AnchorLink>{menu === "about" && <img src={underline} alt="underline" />}</li>
        <li><AnchorLink className="anchor-link" offset={50} href="#services"><p onClick={() => setMenu("services")}>Currently Learning</p></AnchorLink>{menu === "services" && <img src={underline} alt="underline" />}</li>
        <li><AnchorLink className="anchor-link" offset={50} href="#work"><p onClick={() => setMenu("work")}>Projects</p></AnchorLink>{menu === "work" && <img src={underline} alt="underline" />}</li>
        <li><AnchorLink className="anchor-link" offset={50} href="#contact"><p onClick={() => setMenu("contact")}>Contact</p></AnchorLink>{menu === "contact" && <img src={underline} alt="underline" />}</li>
      </ul>
      <div className="nav-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect With Me</AnchorLink></div>
    </div>
  );
};

export default NavBar;
