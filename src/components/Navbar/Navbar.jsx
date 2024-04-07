import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import { RiMenu2Line, RiCloseLine } from "react-icons/ri";
import { calendlyLink } from "../../constants";



const Menu = ({ setToggleMenu }) => (
  <>
    <Link to="home" smooth={true} duration={100} offset={-90}  >
      Home
    </Link>
    <Link to="about" smooth={true} duration={100} offset={-160} >
      About
    </Link>
    <Link to="thesis" smooth={true} duration={100} offset={-80} >
      Thesis
    </Link>
    <Link to="investors" smooth={true} duration={100} offset={-200} >
      Investors
    </Link>
    <Link to="contact" smooth={true} duration={100} offset={-100} >
      Contact
    </Link>
  </>
);

const PhoneMenu = ({ setToggleMenu }) => (
  <>
    <Link to="home" smooth={true} duration={100} offset={-90} onClick={() => setToggleMenu(false)} >
      Home
    </Link>
    <Link to="about" smooth={true} duration={100} offset={-160} onClick={() => setToggleMenu(false)}>
      About
    </Link>
    <Link to="thesis" smooth={true} duration={100} offset={-80} onClick={() => setToggleMenu(false)}>
      Thesis
    </Link>
    <Link to="investors" smooth={true} duration={100} offset={-160} onClick={() => setToggleMenu(false)}>
      Investors
    </Link>
    <Link to="contact" smooth={true} duration={100} offset={-100} onClick={() => setToggleMenu(false)}>
      Contact
    </Link>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="navbar">
      <div className="navbar-phone">
        {toggleMenu ? (
          <div className="opacity">
            <div className="navbar-phone-container ">
              <div className="navbar-phone-links">
                <RiCloseLine
                  className="close-menu"
                  color="var(--high)"
                  size={27}
                  onClick={() => setToggleMenu(false)}
                />
                <PhoneMenu setToggleMenu={setToggleMenu}/>
                <div className="navbar-phone-buttons">
                  <a href={calendlyLink} target="_blank" rel="noreferrer">
                    <button className="phone-cta">Book A Call</button>
                  </a>

                  {/*<button className="cta">
                        <a href="#">Sign Up</a>
                      </button>*/}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <RiMenu2Line
            className="open-menu"
            color="var(--low)"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
      </div>

      <div className="navbar-logo">
        <div className="navbar-circle">PM</div>
        <div className="navbar-title">
          <h1>Progressor Media</h1>
        </div>
      </div>

      <div className="navbar-links">
        <div className="navbar-laptop">
          <Menu />
        </div>
      </div>

      <div className="navbar-buttons">
        <a href={calendlyLink} target="_blank" rel="noreferrer">
          <button className="cta">Book Your Call</button>
        </a>

        {/*<button className="cta">
          <a href="#">Sign Up</a>
  </button>*/}
      </div>
    </div>
  );
};

export default Navbar;
