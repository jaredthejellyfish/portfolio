import React from "react";
import { useState } from "react";
import "./contact-me-form.scss";
import { useRef } from "react";
import * as emailjs from "emailjs-com";
import FlashMessage from "../../components/FlashMessage";


const ContactMeForm = () => {
  const [flash, setFlash] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    setFlash(true);

    const template_params = {
      "name": form.name,
      "email": form.email,
      "number": form.number,
      "message": form.message,
    };

    emailjs
      .send(
        "service_ww638tg",
        "template_y9rxxst",
        template_params,
        "RwgY29A1zfoRzh3Vj"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-me-section-container">
      {(flash ? (<FlashMessage message="Message sent successfully!" success />) : null)}
      <div className="container">
        <div className="screen">
          <div className="screen-header">
            <div className="screen-header-left">
              <div className="screen-header-button close"></div>
              <div className="screen-header-button maximize"></div>
              <div className="screen-header-button minimize"></div>
            </div>
            <div className="screen-header-right">
              <div className="screen-header-ellipsis"></div>
              <div className="screen-header-ellipsis"></div>
              <div className="screen-header-ellipsis"></div>
            </div>
          </div>
          <div className="screen-body">
            <div className="screen-body-item left">
              <div className="app-title">
                <span>CONTACT</span>
                <span className="white">ME</span>
              </div>
              <div className="app-contact">CONTACT INFO: null</div>
            </div>
            <div className="screen-body-item">
              <div className="app-form">
                <form ref={form} onSubmit={handleSubmit}>
                  <div className="app-form-group">
                    <input
                      className="app-form-control"
                      type="text"
                      id="name"
                      name="name"
                      placeholder="NAME"
                      value={form.name}
                    />
                  </div>

                  <div className="app-form-group">
                    <input
                      className="app-form-control"
                      type="email"
                      id="email"
                      name="email"
                      placeholder="EMAIL"
                      value={form.email}
                    />
                  </div>

                  <div className="app-form-group">
                    <input
                      className="app-form-control"
                      type="text"
                      id="number"
                      name="number"
                      placeholder="CONTACT NO"
                      value={form.number}
                    />
                  </div>

                  <div name="message" className="app-form-group message">
                    <input
                      className="app-form-control"
                      id="message"
                      name="message"
                      placeholder="MESSAGE"
                      value={form.message}
                    />
                  </div>

                  <div className="app-form-group buttons">
                    <button
                      onClick={() => window.location.reload(false)}
                      className="app-form-button white"
                    >
                      CANCEL
                    </button>
                    <button type="submit purple" className="app-form-button">
                      SEND
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMeForm;
