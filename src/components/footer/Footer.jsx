import React from "react";
import { calendlyLink } from "../../constants";
import "./Footer.css";
import { Link } from "react-router-dom";
import Guide from "../../assets/Thesis.pptx"
import { FiDownload } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="Footer ">
      <div className="footer-top">
        <div className="navbar-logo">
          <div className="navbar-circle">PM</div>
          <div className="navbar-title">
            <h1>Progressor Media</h1>
          </div>
        </div>

        <div className="social-links">
          <h3>Follow Us</h3>
          <a
            href="https://www.linkedin.com/company/progressor-media/about/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="linkedin">LinkedIn</div>
          </a>
        </div>
        <div className="learn-more-link">
          <div className="learn-more-links">
            <h3>Learn More</h3>
            <a
              href="https://www.linkedin.com/in/pravit-emailwizard/"
              target="_blank"
              rel="noreferrer"
            >
              <div>Pravit Bhatia</div>
            </a>
            <a
              href={Guide}
              download="Progressor Media Thesis Guide"
            >
              <div>Guide <FiDownload /></div>
            </a>
          </div>
        </div>

        <div className="contact-links">
          <h3>Contact Us</h3>
          <a
            href="mailto:pravit@progressormedia.com"
            target="_blank"
            rel="noreferrer"
          >
            <div className="email">Email</div>
          </a>

          <a href={calendlyLink} target="_blank" rel="noreferrer">
            <div className="call">Book Your Call</div>
          </a>
        </div>

        {/*<div className="nav-links">
          <h3>Navigation</h3>
          <div>
            <Link to="home">Home</Link>
          </div>
          <div>
            <Link to="about">About</Link>
          </div>
          <div>
            <Link to="thesis">Our Thesis</Link>
          </div>
          <div>
            <Link to="investors">Institutional Investors</Link>
          </div>
          <div>
            <Link to="retail">Accredited Retail</Link>
          </div>
          <div>
            <Link to="angel">Angels and HNW</Link>
          </div>
          <div>
            <Link to="contact">Contact</Link>
          </div>
        </div>
        */}
      </div>
      <hr />
      <div className="footer-bottom">
        <p>© Progressor Media - All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
