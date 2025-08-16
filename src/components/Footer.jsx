import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-left">
            <h1>
              Have any
              <br />
              project idea in
              <br />
              your mind
            </h1>
            <a href="#" className="cta-button">
              Contact us →
            </a>
          </div>

          <div className="footer-links">
            <div>
              <ul>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Projects</a>
                </li>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  <a href="#">Twitter/X</a>
                </li>
                <li>
                  <a href="#">Instagram</a>
                </li>
                <li>
                  <a href="#">LinkedIn</a>
                </li>
                <li>
                  <a href="#">Facebook</a>
                </li>
                <li>
                  <a href="#">YouTube</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Copyright ©ElveAgency Studio. All rights reserved</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
