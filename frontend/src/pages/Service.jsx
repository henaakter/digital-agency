import React from "react";

import Accordion from "react-bootstrap/Accordion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

const Service = () => {
  const services = [
    {
      title: "Brand Identity",
      icon: "/bubble-chart-line.png",
      desc: "Crafting visually stunning, user-centered websites tailored to your brand and business goals. Ongoing support and updates to ensure your website remains secure, fast, and up-to-date.",
      list: [
        "Unique logo and visual style creation",
        "Cohesive brand elements and guidelines",
        "Rebranding for a refreshed look",
        "Consistent visual and verbal identity",
      ],
      image: "/Rectangle 63 (8).png",
    },
    {
      title: "Web Design",
      icon: "/computer-line.png",
      desc: "Building websites optimized for all devices, from desktop to mobile. Ongoing support and updates to ensure your website remains secure, fast, and up-to-date with trends.",
      list: [
        "Defining goals and understanding",
        "Responsive, multi-device compatibility",
        "Custom-built on Webflow, WordPress, and more",
        "Launching and maintaining the website",
      ],
      image: "/Rectangle 63 (14).png",
    },
    {
      title: "Web Development",
      icon: "/code-s-slash-line.png",
      desc: "Developing impactful logos and cohesive visual identities that resonate with your target audience. Designing business cards, brochures, and digital assets that align with your brand identity.",
      list: [
        "Research, development and coding",
        "Testing and quality assurance",
        "Quality assurance, deployment and launch",
        "Ongoing maintenance and updates",
      ],
      image: "/Rectangle 63 (15).png",
    },
    {
      title: "Digital Marketing",
      icon: "/pie-chart-line.png",
      desc: "Optimizing your website and content to rank higher on search engines and attract organic traffic. Designing and executing personalized email campaigns to conversions.",
      list: [
        "Start by defining your goals,",
        "Identifying your target audience",
        "Conducting competitor research",
        "Developing a content strategy",
      ],
      image: "/Rectangle 63 (9).png",
    },
  ];

  const testimonials = [
    {
      desc: "Their team didn't just take the project on; they became an integral extension of our business. From the very beginning, they immersed themselves in our brand and culture, that fit perfectly with our objectives.",
      name: "Juan Rath",
      role: "Head of Product",
      img: "/Ellipse 2.png",
    },
    {
      desc: "The team went above and beyond to deliver a website that exceeded our expectations. Their attention to detail and commitment to quality made all the difference seen a significant increase in traffic customer engagement!",
      name: "Francis Kovacek",
      role: "Founder",
      img: "/Ellipse 2.png",
    },
    {
      desc: "The level of communication and collaboration we experienced while working with the agency was unparalleled. Not only were they responsive but also proactive with regular updates.",
      name: "Diana Wiegand",
      role: "CEO",
      img: "/Ellipse 2.png",
    },
    {
      desc: "Their team didn’t just take the project on; they became an integral extension of our business. From the very beginning, they immersed themselves in our brand and culture, that fit perfectly with our objectives.",
      name: "Jack",
      role: "Employee",
      img: "/Ellipse 2.png",
    },
  ];

  const faqs = [
    {
      question: "How do I contact you for inquiries or collaborations?",
      answer:
        "Best the average blind and that accordingly pointing, out the to bold, good my believed the rattling experiments friends couldn't scolded unable to many line may their times, propitiously is themselves, was discipline the be the seen escape.",
      open: true,
    },
    {
      question: "What services does your digital agency offer?",
      answer: "",
      open: false,
    },
    {
      question: "How long does it take to build a website?",
      answer: "",
      open: false,
    },
    {
      question: "What is included in your digital marketing services?",
      answer: "",
      open: false,
    },
    {
      question: "Can you create content for our social media accounts?",
      answer: "",
      open: false,
    },
  ];

  return (
    <>
      {/* Services Banner */}
      <section className="services-banner">

        <div className="shape">
          <img src="/shape1.png" alt="" />
        </div>

        <h2>
          Services
          <br />
          We Provide
        </h2>
      </section>

      {/* Services Detail */}
      <section className="services-detail-section">
        {services.map((service, index) => (
          <div className="service-box" key={index}>
            <div className="service-text">
              <div className="icon-title">
                <img src={service.icon} alt={service.title} />
                <h2>{service.title}</h2>
              </div>
              <p>{service.desc}</p>
              <div className="brand-right">
                <ul>
                  {service.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="service-image">
              <img src={service.image} alt={service.title} />
            </div>
          </div>
        ))}
      </section>

      {/* Testimonial Section */}
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
                  <img src="/Ellipse 2.png" alt="" />
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
                  <img src="/Ellipse 2.png" alt="" />
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
                  <img src="/Ellipse 2.png" alt="" />
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
                  <img src="/Ellipse 2.png" alt="" />
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
                  <img src="/Ellipse 2.png" alt="" />
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
                  <img src="/Ellipse 2.png" alt="" />
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
                  <img src="/Ellipse 2.png" alt="" />
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
                  <img src="/Ellipse 2.png" alt="" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* FAQ Section */}
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
    </>
  );
};

export default Service;
