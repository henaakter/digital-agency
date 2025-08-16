import React from "react";

const Service = () => {
  const services = [
    {
      title: "Brand Identity",
      icon: "./src/assets/images/bubble-chart-line.png",
      desc: "Crafting visually stunning, user-centered websites tailored to your brand and business goals. Ongoing support and updates to ensure your website remains secure, fast, and up-to-date.",
      list: [
        "Unique logo and visual style creation",
        "Cohesive brand elements and guidelines",
        "Rebranding for a refreshed look",
        "Consistent visual and verbal identity",
      ],
      image: "./src/assets/images/Rectangle 63 (8).png",
    },
    {
      title: "Web Design",
      icon: "./src/assets/images/computer-line.png",
      desc: "Building websites optimized for all devices, from desktop to mobile. Ongoing support and updates to ensure your website remains secure, fast, and up-to-date with trends.",
      list: [
        "Defining goals and understanding",
        "Responsive, multi-device compatibility",
        "Custom-built on Webflow, WordPress, and more",
        "Launching and maintaining the website",
      ],
      image: "./src/assets/images/Rectangle 63 (14).png",
    },
    {
      title: "Web Development",
      icon: "./src/assets/images/code-s-slash-line.png",
      desc: "Developing impactful logos and cohesive visual identities that resonate with your target audience. Designing business cards, brochures, and digital assets that align with your brand identity.",
      list: [
        "Research, development and coding",
        "Testing and quality assurance",
        "Quality assurance, deployment and launch",
        "Ongoing maintenance and updates",
      ],
      image: "./src/assets/images/Rectangle 63 (15).png",
    },
    {
      title: "Digital Marketing",
      icon: "./src/assets/images/pie-chart-line.png",
      desc: "Optimizing your website and content to rank higher on search engines and attract organic traffic. Designing and executing personalized email campaigns to conversions.",
      list: [
        "Start by defining your goals,",
        "Identifying your target audience",
        "Conducting competitor research",
        "Developing a content strategy",
      ],
      image: "./src/assets/images/Rectangle 63 (9).png",
    },
  ];

  const testimonials = [
    {
      desc: "Their team didn't just take the project on; they became an integral extension of our business. From the very beginning, they immersed themselves in our brand and culture, that fit perfectly with our objectives.",
      name: "Juan Rath",
      role: "Head of Product",
      img: "./src/assets/images/Ellipse 2.png",
    },
    {
      desc: "The team went above and beyond to deliver a website that exceeded our expectations. Their attention to detail and commitment to quality made all the difference seen a significant increase in traffic customer engagement!",
      name: "Francis Kovacek",
      role: "Founder",
      img: "./src/assets/images/Ellipse 2.png",
    },
    {
      desc: "The level of communication and collaboration we experienced while working with the agency was unparalleled. Not only were they responsive but also proactive with regular updates.",
      name: "Diana Wiegand",
      role: "CEO",
      img: "./src/assets/images/Ellipse 2.png",
    },
    {
      desc: "Their team didn’t just take the project on; they became an integral extension of our business. From the very beginning, they immersed themselves in our brand and culture, that fit perfectly with our objectives.",
      name: "Jack",
      role: "Employee",
      img: "./src/assets/images/Ellipse 2.png",
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
        <div className="arrows">
          <button className="arrow-btn">&larr;</button>
          <button className="arrow-btn">&rarr;</button>
        </div>
        <div className="testimonial-container">
          {testimonials.map((t, i) => (
            <div className="testimonial-card" key={i}>
              <p className="testimonial-desc">{t.desc}</p>
              <div className="user">
                <div className="info">
                  <h3>{t.name}</h3>
                  <h6>{t.role}</h6>
                </div>
                <img src={t.img} alt={t.name} />
              </div>
            </div>
          ))}
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
          {faqs.map((faq, i) => (
            <div className={`faq-item ${faq.open ? "open" : ""}`} key={i}>
              <button className="faq-question">
                {faq.question}
                <span className="icon">{faq.open ? "-" : "+"}</span>
              </button>
              {faq.answer && <div className="faq-answer">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Service;
