import React from "react";

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
              <strong>EMAIL</strong> info@evility.com
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
          <div className="faq-item open">
            <button className="faq-question">
              How do I contact you for inquiries or collaborations?
              <span className="icon">-</span>
            </button>
            <div className="faq-answer">
              Best the average blind and that accordingly pointing, out the to
              bold, good my believed the rattling experiments friends couldn't
              scolded unable to many line may their times, propitiously is
              themselves, was discipline the be the seen escape.
            </div>
          </div>

          <div className="faq-item">
            <button className="faq-question">
              What services does your digital agency offer?
              <span className="icon">+</span>
            </button>
          </div>

          <div className="faq-item">
            <button className="faq-question">
              How long does it take to build a website?
              <span className="icon">+</span>
            </button>
          </div>

          <div className="faq-item">
            <button className="faq-question">
              What is included in your digital marketing services?
              <span className="icon">+</span>
            </button>
          </div>

          <div className="faq-item">
            <button className="faq-question">
              Can you create content for our social media accounts?
              <span className="icon">+</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
