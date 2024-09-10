import { markdownify } from "@lib/utils/textConverter";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Social from "./components/Social";
import social from "@config/config.json";

const Contact = ({ data }) => {
  const { frontmatter } = data;
  const { title, info } = frontmatter;

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_9bedl2v", "template_lhyi0vh", form.current, {
        publicKey: "oylVlQJ9s3IpWVNTt",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          alert("EMAIL SENT SUCCESSFULLY");
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("EMAIL SENDING FAILED");
        }
      );
  };

  return (
    <section className="section">
      <div className="container">
        {markdownify(title, "h1", "text-center font-normal")}
        <div className="section row pb-0">
          <div className="col-12 md:col-6 lg:col-7">
            <form ref={form} className="contact-form" onSubmit={sendEmail}>
              <div className="mb-3">
                <input
                  className="form-input w-full rounded"
                  name="user_name"
                  type="text"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  className="form-input w-full rounded"
                  name="user_email"
                  type="email"
                  placeholder="Your email"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  className="form-input w-full rounded"
                  name="user_phone"
                  type="number"
                  placeholder="Your phone number"
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-textarea w-full rounded-md"
                  name="message"
                  rows="7"
                  placeholder="Your message"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Send Now
              </button>
            </form>
          </div>
          <div className="content col-12 md:col-6 lg:col-5">
            {markdownify(info.title, "h4")}
            {markdownify(info.description, "p", "mt-4")}
            <ul className="contact-list mt-5">
              {info.contacts.map((contact, index) => (
                <li key={index}>
                  {markdownify(contact, "strong", "text-dark")}
                </li>
              ))}
            </ul>
            <Social source={social} className="social-icons mb-8" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
