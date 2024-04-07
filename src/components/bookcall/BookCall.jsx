import React, {useEffect} from "react";
import "./bookcall.css";
import Cal, { getCalApi } from "@calcom/embed-react";
import { calendlyLink } from "../../constants";

const BookCall = () => {
  const calendlyUrl = { calendlyLink };
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);
  return (
    <div className="bookcall section__padding" id="contact">
      <div className="bookcall-heading">
        <div className="heading">
          <h1>Book Your Call Today</h1>
        </div>
        <div className="content">
          <p>
            Unlock Innovative Access to Global Capital with Direct Channels to
            Over 10 Million Institutional, Family Office and Funds of Funds
          </p>
        </div>
      </div>

      <div className="bookcall-calendly">
        {/* <iframe
          src="https://cal.com/pravitbh/progressor-media?date=2024-04-08&month=2024-04"
          frameborder="0"
          title="Select a Date &amp; Time - Calendly"
        ></iframe> */}
        <Cal
          calLink="pravitbh/progressor-media?date=2024-04-08&month=2024-04"
          style={{ width: "100%", height: "100%", overflow: "scroll" }}
          config={{ layout: "month_view" }}
        />
        
      </div>
    </div>
  );
};

export default BookCall;
