import React from "react";
import { InlineWidget } from "react-calendly";
import "../../assets/css/custom.css";
import { PopupWidget } from "react-calendly";

function Calendify() {
  return (
    <div>
      <PopupWidget
        url="https://calendly.com/callumhall65"
        rootElement={document.getElementById("root")}
        text="Click here to schedule!"
        textColor="#ffffff"
        color="#0f1e32"
      />
    </div>
  );
}

export default Calendify;
