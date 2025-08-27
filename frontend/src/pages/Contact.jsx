import React from "react";

import Accordion from "react-bootstrap/Accordion";

const Contact = () => {
  return (
    <>
      <div className="contact-container">
        <h1>Connect With Us</h1>

        <div className="contact-card">
          <div className="contact-info">
            <h2>Contact info</h2>
            <p>
              <strong>ADDRESS</strong> 2972 Westheimer Rd. Santa Ana, Illinois
              85486
            </p>
            <p>
              <strong>PHONE</strong> +12 383 343 332 4580
            </p>
            <p>
              <strong>EMAIL</strong> info@elve.com
            </p>
          </div>

          <div className="contact-form">
            <h2>Get in touch</h2>
            <form>
              <input type="text" placeholder="Full Name" />
              <input type="email" placeholder="Email Address" />
              <input type="tel" placeholder="Phone Number" />
              <textarea rows="4" placeholder="Enter your Message..." />
              <button type="submit">Send a message →</button>
            </form>
          </div>
        </div>

        <div className="shape">
          <img src="./src/assets/images/shape1.png" alt="" />
        </div>
      </div>

      <div className="faq-section">
        <div className="faq-title">
          <h1>
            Frequently
            <br />
            Asked
            <br />
            Question
          </h1>
        </div>

        <div className="faq-container">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>How do I contact you for inquiries or collaborations?</Accordion.Header>
              <Accordion.Body>
              Best the average blind and that accordingly pointing, out the to bold, good my believed the rattling experiments friends couldn't scolded unable to many line may their times, propitiously is themselves, was discipline the be the seen escape.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>What services does your digital agency offer?</Accordion.Header>
              <Accordion.Body>
                Best the average blind and that accordingly pointing, out the to bold, good my believed the rattling experiments friends couldn't scolded unable to many line may their times, propitiously is themselves, was discipline the be the seen escape.
              </Accordion.Body>
            </Accordion.Item>
              <Accordion.Item eventKey="2">
              <Accordion.Header>How long does it take to build a website?</Accordion.Header>
              <Accordion.Body>
                Best the average blind and that accordingly pointing, out the to bold, good my believed the rattling experiments friends couldn't scolded unable to many line may their times, propitiously is themselves, was discipline the be the seen escape.
              </Accordion.Body>
            </Accordion.Item>
              <Accordion.Item eventKey="3">
              <Accordion.Header>What is included in your digital marketing services?</Accordion.Header>
              <Accordion.Body>
                Best the average blind and that accordingly pointing, out the to bold, good my believed the rattling experiments friends couldn't scolded unable to many line may their times, propitiously is themselves, was discipline the be the seen escape.
              </Accordion.Body>
            </Accordion.Item>
              <Accordion.Item eventKey="4">
              <Accordion.Header>Can you create content for our social media accounts?</Accordion.Header>
              <Accordion.Body>
                Best the average blind and that accordingly pointing, out the to bold, good my believed the rattling experiments friends couldn't scolded unable to many line may their times, propitiously is themselves, was discipline the be the seen escape.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default Contact;
