import React from "react";
import "./message.css";
import CTA from "../CTA/CTA";

const Message = () => {
  return (
    <div className="Message">
      <div className="message-container">
        <div className="container">
          <div className="heading">
            <h1>The Goal</h1>
          </div>
          <div className="container-box">
            <p>
              The ultimate goal when raising capital is to get Term Sheets, not
              to have meetings with investors. While meetings are an important
              first step, it is key to approach raising capital with the end
              goal in mind.
              <br />
              <br />
              Founders and executives should focus on improving their product,
              managing operations, and growing their team. They shouldn't spend
              all their time on fundraising. So, what's the quickest path to
              success? The key lies in finding the right Investor-Message Fit.
            </p>
          </div>
        </div>
      </div>
      <CTA />
    </div>
  );
};

export default Message;
