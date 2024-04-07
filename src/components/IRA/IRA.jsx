import React, { useState } from "react";
import "./IRA.css";

import CTA from "../CTA/CTA";

const IRA = () => {
  // State to keep track of the active content type
  const [activeType, setActiveType] = useState("Institutional Investors");

  // Function to update the active content type
  const handleToggle = (type) => {
    setActiveType(type);
  };

  return (
    <div className="IRA" id="investors">
      <div className="IRA-toggle">
        <a onClick={() => handleToggle("Institutional Investors")}>
          <button>Institutional Investors</button>
        </a>
        <a onClick={() => handleToggle("Accredited Retail")}>
          <button>Accredited Retail</button>
        </a>
        <a onClick={() => handleToggle("Angels & HNW")}>
          <button>Angels & HNW</button>
        </a>
      </div>

      <div className="IRA-content">
        {activeType === "Institutional Investors" && (
          <div className="container">
            <div className="heading">
              <h1>Institutional Investors</h1>
            </div>
            <div className="about-container">
              <div className="container-box">
                <div className="text">
                  <p>
                    Leveraging the same databases used by prominent investment
                    bankers, venture capitalists and private equity firms around
                    the world, we've created our own 3rd party tools in order to
                    scale the efforts of these traditional firms 10X.
                    This leads to more high quality meetings with Institutions
                    beyond just our networks and relationships built with top
                    firms around the world from A16Z to Blackrock.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeType === "Accredited Retail" && (
          <div className="container">
            <div className="heading">
              <h1>Accredited Retail</h1>
            </div>
            <div className="about-container">
              <div className="container-box">
                <div className="text">
                  <p>
                    Building on our extensive database of over 4 million global
                    institutional investors, we also specialize in reaching
                    accredited retail investors. These individuals meet
                    stringent financial criteria, either earning a minimum of
                    $200,000 annually for the last three years or possessing $1
                    million in assets. These investors are generally best for
                    smaller raises or income producing investments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeType === "Angels & HNW" && (
          <div className="container">
            <div className="heading">
              <h1>Angels & HNW</h1>
            </div>
            <div className="about-container">
              <div className="container-box">
                <div className="text">
                  <p>
                    We also focus on connecting with Funds of Funds. These
                    entities aggregate capital from various sources to invest in
                    a diversified portfolio of funds, making them key players in
                    spreading risk and accessing a broad spectrum of investment
                    opportunities. Our targeted approach efficiently aligns with
                    their diversified investment strategies, facilitating
                    impactful engagements and partnerships.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <CTA />
    </div>
  );
};

export default IRA;
