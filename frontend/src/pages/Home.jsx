import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import Accordion from "react-bootstrap/Accordion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

const Home = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <section className="container">
        <div className="shape">
          <img src="./src/assets/images/shape1.png" alt="" />
        </div>

        <div className="header-content">
          <h1>
            Building Digital <br /> Brand & Experience
          </h1>
          <p>
            We specialize in crafting unique solutions that help brands make
            their mark. By combining creativity with strategy, we deliver
            designs that stand out in the digital landscape and resonate with
            audiences, ensuring your brand.
          </p>
        </div>

        <div className="banner-container">
          <div className="video-box">
            <img src="/src/assets/images/video-thumb.png" alt="video-thumb" />
            <button onClick={() => setOpen(true)} className="play-button">
              ▶
            </button>
            <ModalVideo
              channel="youtube"
              autoplay
              isOpen={isOpen}
              videoId="MHVEVcJlUAk"
              onClose={() => setOpen(false)}
            />
          </div>
          <div className="banners">
            <div className="banner">
              <h3>200+</h3>
              <p>Satisfied Clients</p>
            </div>
            <div className="banner">
              <h3>600+</h3>
              <p>Projects done</p>
            </div>
            <div className="banner">
              <h3>200M+</h3>
              <p>Total Revenue</p>
            </div>
            <div className="banner">
              <h3>80+</h3>
              <p>Employee</p>
            </div>
          </div>
        </div>
      </section>
      <div className="banner-img">
        <img src="/src/assets/images/Frame.png" alt="" />
      </div>
      <section className="service-section">
        <h2 className="sections-titles">
          How we helped <br /> other succeed
        </h2>
      </section>
      <div className="blog-post">
        <div className="blog-title">
          <div className="project-about">
            <img src="/src/assets/images/Rectangle 63 (8).png" alt="" />
          </div>
          <div className="blog-content">
            <button className="pro-btn">
              <a href="#">Mobile App</a>
            </button>
            <h2 className="blog-sub">Boldstream</h2>
            <p>
              <strong>Design </strong> . <strong> Development</strong>
            </p>
            <p className="blog-desc">
              Comedo vel tripudio sordeo accendo deludo degusto adipisci
              dolores. Vergo curo quibusdam caput iste cerno nihil usus benigne.
            </p>
            <button className="project-btn">
              <a href="#">View Project →</a>
            </button>
          </div>
        </div>

        <div className="blog-title">
          <div className="project-about">
            <img src="/src/assets/images/Rectangle 63 (9).png" alt="" />
          </div>
          <div className="blog-content">
            <button className="pro-btn">
              <a href="#">Website Design</a>
            </button>
            <h2 className="blog-sub">InnovateX</h2>
            <p>
              <strong>Design</strong> . <strong>Development</strong>
            </p>
            <p className="blog-desc">
              Truculenter caterva tamquam cilicium admoveo consequuntur aufero.
              Derelinquo ceno amet molestiae crustulum tubineus.
            </p>
            <button className="project-btn">
              <a href="#">View Project →</a>
            </button>
          </div>
        </div>

        <div className="blog-title">
          <div className="project-about">
            <img src="/src/assets/images/Rectangle 63 (10).png" alt="" />
          </div>
          <div className="blog-content">
            <button className="pro-btn">
              <a href="#">Dashboard</a>
            </button>
            <h2 className="blog-sub">PixelForge</h2>
            <p>
              <strong>Design</strong> . <strong>Development</strong>
            </p>
            <p className="blog-desc">
              Sit sol solium magnam damnatio sed vox. Assentat vicissitudo
              apparatus comitatus attero is suffoco. Asperiores adnuo victoria
              volaticus templum.
            </p>
            <button className="project-btn">
              <a href="#">View Project →</a>
            </button>
          </div>
        </div>

        <div className="blog-title">
          <div className="project-about">
            <img src="/src/assets/images/Rectangle 63 (11).png" alt="" />
          </div>
          <div className="blog-content">
            <button className="pro-btn">
              <a href="#">Product Design</a>
            </button>
            <h2 className="blog-sub">SyncCraft</h2>
            <p>
              <strong>Design</strong> . <strong>Development</strong>
            </p>
            <p className="blog-desc">
              Corona stipes corrupti acerbitas. Adeptio videlicet clementia.
              Cunabula somnus porro cilicium cum teneo usus spent day.
            </p>
            <button className="project-btn">
              <a href="#">View Project →</a>
            </button>
          </div>
        </div>
      </div>
      <div className="about-container">
        <div className="about-logo">
          <img src="./src/assets/images/Group0.png" alt="" />
        </div>
        <h1 className="about-content">
          Founded by computer enthusiasts, we are a digital design firm.
        </h1>
        <p className="about-desc">
          We design unique user interfaces, mobile applications, and websites
          that transform how people interact with the digital world.
        </p>
        <div className="buttons">
          <button className="project-btn">
            <a href="#">Get in touch</a>
          </button>
          <button className="project-btn">
            <a href="#">About us →</a>
          </button>
        </div>
      </div>
      {/* .. */}
      <section className="service-sections">
        <h2 className="section-heading">
          What services <br /> we provide?
        </h2>
        <div className="service-grid">
          <div className="service-card">
            <div className="icon-box">
              <img src="/src/assets/images/bubble-chart-line.png" alt="" />
            </div>
            <h3 className="service-heading">Brand Identity</h3>
            <p className="service-desc">
              Crafting visually stunning, user-centered websites tailored to
              your brand and business goals. Ongoing support and updates to
              ensure your website remains secure, fast, and up-to-date.
            </p>
          </div>

          <div className="service-card">
            <div className="icon-box">
              <img src="/src/assets/images/computer-line.png" alt="" />
            </div>
            <h3 className="service-heading">Web Design</h3>
            <p className="service-desc">
              Building websites optimized for all devices, from desktop to
              mobile. Ongoing support and updates to ensure your website remains
              secure, fast, and up-to-date with trends.
            </p>
          </div>

          <div className="service-card">
            <div className="icon-box">
              <img src="/src/assets/images/code-s-slash-line.png" alt="" />
            </div>
            <h3 className="service-heading">Web Development</h3>
            <p className="service-desc">
              Developing impactful logos and cohesive visual identities that
              resonate with your target audience. Designing business cards,
              brochures, and digital assets that align with your brand identity.
            </p>
          </div>

          <div className="service-card">
            <div className="icon-box">
              <img src="/src/assets/images/pie-chart-line.png" alt="" />
            </div>
            <h3 className="service-heading">Digital Marketing</h3>
            <p className="service-desc">
              Optimizing your website and content to rank higher on search
              engines and attract organic traffic. Designing and executing
              personalized email campaigns to conversions.
            </p>
          </div>
        </div>
      </section>
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
      <section className="pricing-section">
        <h1 className="title">
          Customizable <br /> Pricing Options
        </h1>

        <div className="pricing-cards">
          <div className="card">
            <div className="card-header">
              <h3>Starter</h3>
              <span className="badge">Small Projects</span>
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
              <span className="badge">Big Projects</span>
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
              <span className="badge">Full Product</span>
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
      <section className="clients-section">
        <h2 className="clients-heading">Our latest Clients</h2>
        <div className="clients-grid">
          <div className="client-card">
            <img src="/src/assets/images/Company logo.png" alt="" />
          </div>

          <div className="client-card">
            <img src="/src/assets/images/Company logo (1).png" alt="" />
          </div>

          <div className="client-card">
            <img src="/src/assets/images/Company logo (2).png" alt="" />
          </div>

          <div className="client-card">
            <img src="/src/assets/images/Company logo (3).png" alt="" />
          </div>

          <div className="client-card">
            <img src="/src/assets/images/Company logo (4).png" alt="" />
          </div>

          <div className="client-card">
            <img src="/src/assets/images/Company logo (5).png" alt="" />
          </div>

          <div className="client-card">
            <img src="/src/assets/images/Company logo (6).png" alt="" />
          </div>

          <div className="client-card">
            <img src="/src/assets/images/Company logo (7).png" alt="" />
          </div>

          <div className="client-card">
            <img src="/src/assets/images/Company logo (8).png" alt="" />
          </div>

          <div className="client-card">
            <img src="/src/assets/images/Company logo (9).png" alt="" />
          </div>
        </div>
      </section>
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
              <Accordion.Header>Accordion Item #1</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Accordion Item #2</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default Home;
