import React from "react";
import "./About.css";
import CTA from "../CTA/CTA";

const About = () => {
  return (
    <div className="About" id="about">
      <div className="container">
        <div className="heading">
          <h1>About Us</h1>
        </div>
        <div className="about-container">
          <div className="container-box">
            <div className="text">
              <p>
                At ProgressorMedia, we are dedicated to enhancing the
                fundraising capabilities of companies in the private market by
                connecting them with the right investors. With our deep
                expertise in sectors such as SaaS, Venture Capital, Digital
                Transformation, Defense, and Pharma, we offer a comprehensive
                understanding of the capital markets.
                <br /> <br />
                As we move into 2024, our mission is to broaden our impact
                within the private markets, focusing on helping companies secure
                the vital capital they need from a worldwide network of
                investors. Our approach is centered on initiating direct
                engagement with over 100 potential investors daily.
                <br />
                <br />
                Our experienced backend team is crucial in ensuring a strategic
                alignment between the investment preferences of investors and
                the distinct value propositions of your company. By scheduling
                targeted meetings with qualified investors directly onto your
                calendar, ProgressorMedia simplifies the fundraising process for
                companies in the private market, enabling effective and
                successful capital raising.
              </p>
            </div>
            <CTA />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
