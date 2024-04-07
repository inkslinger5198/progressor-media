import React from "react";
import "./hover_cta.css";
import { IoMdMail } from "react-icons/io";
import { LuPhoneCall } from "react-icons/lu";
import { TiSocialLinkedin } from "react-icons/ti";
import Guide from "../../assets/Thesis.pptx";

import { calendlyLink } from "../../constants";
import { IoDocumentTextSharp } from "react-icons/io5";

const Hover_CTA = () => {
  return (
    <div className="hover_cta" id="hovercta">
      <div className="hover_cta__container">
        <div className="hover_cta__container__icon">
          <LuPhoneCall />
        </div>
        <a href={calendlyLink} target="_blank" rel="noreferrer">
          <div className="hover_cta__container__text">
            <div className="hover_cta__hover">
              <h2>Ready to dive deeper?</h2>
              <h3>Book A Call</h3>
            </div>
            <p>
              Let's schedule a call to discuss how we can secure funding
              for your company.
            </p>
          </div>
        </a>
      </div>

      <div className="hover_cta__container">
        <div className="hover_cta__container__icon">
          <IoDocumentTextSharp />
        </div>
        <a
          href={Guide}
          target="_blank"
          rel="noreferrer"
        >
          <div className="hover_cta__container__text">
            <div className="hover_cta__hover">
              <h2>Get the Guide</h2>
              <h3>Download the Guide now</h3>
            </div>
            <p>A Guide To Raising Capital Efficiently In The Shortest Amount Of Time Possible.</p>
          </div>
        </a>
      </div>

      <div className="hover_cta__container">
        <div className="hover_cta__container__icon">
          <IoMdMail />
        </div>
        <a
          href="mailto:pravit@progressormedia.com"
          target="_blank"
          rel="noreferrer"
        >
          <div className="hover_cta__container__text">
            <div className="hover_cta__hover">
              <h2>How can we help you?</h2>
              <h3>Send us an email</h3>
            </div>
            <p>
              If you have any concerns or questions, feel free to reach out to
              us.
            </p>
          </div>
        </a>
      </div>

      
    </div>
  );
};

export default Hover_CTA;
