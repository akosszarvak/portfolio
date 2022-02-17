import react, { useRef } from "react";

import emailjs from "emailjs-com";
import "./ContactMe.scss";
import { Button } from "../Button/Button";

export default function ContactMe() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm().then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
  };
  return (
    <form className="form" ref={form} onSubmit={sendEmail}>
      <p>Fill out this form and I'll get back to you ASAP!</p>
      <label className="label">Name*</label>
      <input className="input" type="text" name="user_name" />
      <label className="label">Email*</label>
      <input className="input" type="email" name="user_email" />

      <label className="input" className="label">
        Message*
      </label>
      <textarea
        className="input"
        name="message"
        placeholder="What type of project are you planning? What questions do you have for me?"
      />
      <Button style="btn btn-primary btn-medium" type="submit" value="Send">
        Send
      </Button>
    </form>
  );
}
