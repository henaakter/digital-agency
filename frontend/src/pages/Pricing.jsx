import React from "react";

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

        <div className="testimonial-container">
          {[
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
          ].map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <p className="testimonial-desc">{testimonial.desc}</p>
              <div className="user">
                <div className="info">
                  <h3>{testimonial.name}</h3>
                  <h6>{testimonial.role}</h6>
                </div>
                <img src={testimonial.img} alt="" />
              </div>
            </div>
          ))}
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
          {[
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
          ].map((faq, index) => (
            <div className={`faq-item ${faq.open ? "open" : ""}`} key={index}>
              <button className="faq-question">
                {faq.question}
                <span className="icon">{faq.open ? "-" : "+"}</span>
              </button>
              {faq.answer && <div className="faq-answer">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </div>
      {/* FAQ section ends */}
    </>
  );
};

export default Pricing;
