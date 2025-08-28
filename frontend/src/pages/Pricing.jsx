import React from "react";

import Accordion from "react-bootstrap/Accordion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

const Pricing = () => {
  return (
    <>
      {/* Pricing section starts */}
      <section className="pricing-section">

        <div className="shape">
          <img src="./src/assets/images/shape1.png" alt="" />
        </div>

        <h1 className="title">
          Flexible pricing <br />
          for every need
        </h1>

        <div className="pricing-cards">
          <div className="card">
            <div className="card-header">
              <h3>Starter</h3>
              <span className="pricing-badge">Small Projects</span>
            </div>
            <p className="pricing-desc">Perfect for New and Small Businesses</p>
            <div className="price">
              $4500<span>/mo</span>
            </div>
            <button className="price-btn">Get Started →</button>
            <ul>
              <li>✓ Custom website design</li>
              <li>✓ Mobile-responsive development</li>
              <li>✓ 1-month free maintenance</li>
              <li>✓ Social media integration</li>
            </ul>
          </div>

          <div className="card">
            <div className="card-header">
              <h3>Professional</h3>
              <span className="pricing-badge">Big Projects</span>
            </div>
            <p className="pricing-desc">
              Excellent for Growing Enterprises & Projects
            </p>
            <div className="price">
              $6500<span>/mo</span>
            </div>
            <button className="price-btn">Get Started →</button>
            <ul>
              <li>✓ Social media marketing strategy</li>
              <li>✓ Custom CMS setup</li>
              <li>✓ Email marketing setup</li>
              <li>✓ Google Analytics integration</li>
            </ul>
          </div>

          <div className="card">
            <div className="card-header">
              <h3>Full-Package</h3>
              <span className="pricing-badge">Full Product</span>
            </div>
            <p className="pricing-desc">
              Tailored Services for Large Enterprises
            </p>
            <div className="price">
              $8500<span>/mo</span>
            </div>
            <button className="price-btn">Get Started →</button>
            <ul>
              <li>✓ API integrations and automation</li>
              <li>✓ Dedicated account manager</li>
              <li>✓ UX/UI design for digital products</li>
              <li>✓ Ongoing support & maintenance</li>
            </ul>
          </div>
        </div>

        <div className="cta-box">
          <p>Want a unique solution to meet your needs?</p>
          <div className="cta-btn">
            <button className="price-btns">Book a call →</button>
            <button className="price-btns">Contact us →</button>
          </div>
        </div>
      </section>
      {/* Pricing section ends */}

      {/* Testimonial section starts */}
      <section className="testimonial-section">
        <div className="testimonial-content">
          <h2>
            Hear it from <br /> our clients
          </h2>
        </div>
        {/* <div className="arrows">
          <button className="arrow-btn">&larr;</button>
          <button className="arrow-btn">&rarr;</button>
        </div> */}

        <div className="testimonial-swiper">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={4}
            navigation
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
          >
            <SwiperSlide>
              <div className="testimonial-card">
                <p className="testimonial-desc">
                  “Their team didn't just take the project on; they became an
                  integral extension of our business. From the very beginning,
                  they immersed themselves in our brand and culture, that fit
                  perfectly with our objectives.”
                </p>
                <div className="user">
                  <div className="info">
                    <h3>Juan Rath</h3>
                    <h6>Head of Product</h6>
                  </div>
                  <img src="/src/assets/images/Ellipse 2.png" alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-card">
                <p className="testimonial-desc">
                  “The team went above and beyond to deliver a website that
                  exceeded our expectations. Their attention to detail and
                  commitment to quality made all the difference seen a
                  significant increase in traffic customer engagement!”
                </p>
                <div className="user">
                  <div className="info">
                    <h3>Francis Kovacek</h3>
                    <h6>Founder</h6>
                  </div>
                  <img src="/src/assets/images/Ellipse 2.png" alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-card">
                <p className="testimonial-desc">
                  “The level of communication and collaboration we experienced
                  while working with the agency was unparalleled. Not only were
                  they responsive but also proactive with regular updates.”
                </p>
                <div className="user">
                  <div className="info">
                    <h3>Diana Wiegand</h3>
                    <h6>CEO</h6>
                  </div>
                  <img src="/src/assets/images/Ellipse 2.png" alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-card">
                <p className="testimonial-desc">
                  “Their team didn’t just take the project on; they became an
                  integral extension of our business. From the very beginning,
                  they immersed themselves in our brand and culture, that fit
                  perfectly with our objectives.”
                </p>
                <div className="user">
                  <div className="info">
                    <h3>Jack</h3>
                    <h6>Employee</h6>
                  </div>
                  <img src="/src/assets/images/Ellipse 2.png" alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-card">
                <p className="testimonial-desc">
                  “Their team didn't just take the project on; they became an
                  integral extension of our business. From the very beginning,
                  they immersed themselves in our brand and culture, that fit
                  perfectly with our objectives.”
                </p>
                <div className="user">
                  <div className="info">
                    <h3>Juan Rath</h3>
                    <h6>Head of Product</h6>
                  </div>
                  <img src="/src/assets/images/Ellipse 2.png" alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-card">
                <p className="testimonial-desc">
                  “The team went above and beyond to deliver a website that
                  exceeded our expectations. Their attention to detail and
                  commitment to quality made all the difference seen a
                  significant increase in traffic customer engagement!”
                </p>
                <div className="user">
                  <div className="info">
                    <h3>Francis Kovacek</h3>
                    <h6>Founder</h6>
                  </div>
                  <img src="/src/assets/images/Ellipse 2.png" alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-card">
                <p className="testimonial-desc">
                  “The level of communication and collaboration we experienced
                  while working with the agency was unparalleled. Not only were
                  they responsive but also proactive with regular updates.”
                </p>
                <div className="user">
                  <div className="info">
                    <h3>Diana Wiegand</h3>
                    <h6>CEO</h6>
                  </div>
                  <img src="/src/assets/images/Ellipse 2.png" alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-card">
                <p className="testimonial-desc">
                  “Their team didn’t just take the project on; they became an
                  integral extension of our business. From the very beginning,
                  they immersed themselves in our brand and culture, that fit
                  perfectly with our objectives.”
                </p>
                <div className="user">
                  <div className="info">
                    <h3>Jack</h3>
                    <h6>Employee</h6>
                  </div>
                  <img src="/src/assets/images/Ellipse 2.png" alt="" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      {/* Testimonial section ends */}

      {/* Latest client section starts */}
      <section className="clients-section">
        <h2 className="clients-heading">Our latest Clients</h2>
        <div className="clients-grid">
          {[...Array(10)].map((_, i) => (
            <div className="client-card" key={i}>
              <img
                src={`./src/assets/images/Company logo${
                  i === 0 ? "" : ` (${i})`
                }.png`}
                alt=""
              />
            </div>
          ))}
        </div>
      </section>
      {/* Latest client section ends */}

      {/* FAQ section starts */}
      <div className="faq-section">
        <div className="faq-title">
          <h1>
            Frequently
            <br />
            Asked
            <br /> Question
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
      {/* FAQ section ends */}
    </>
  );
};

export default Pricing;
