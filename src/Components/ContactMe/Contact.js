import react, { useState } from "react";
import { Button } from "../Button/Button";
import Popup from "../Popup/Popup";
import ContactMe from "./ContactMe";
import "./Contact.scss";
export default function Contact() {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <div className="outer">
      <div className="main container flex">
        <div className="contact-left-col">
          {" "}
          <h1>Contact Me</h1>
          <p>
            If you want to get in touch, I would love to hear from you. <br />
            Let's chat about projects, ideas or just life in general
          </p>
        </div>
        <div className="contact-right-col">
          {" "}
          <Button
            onClick={() => setButtonPopup(true)}
            style="btn btn-primary btn-large"
          >
            {" "}
            open popup
          </Button>
        </div>
      </div>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <ContactMe></ContactMe>
      </Popup>
    </div>
  );
}
