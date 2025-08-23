import React from "react";

const Blogs = () => {
  return (
    <>

      {/* Card 1 */}
      <div className="blog-post">
        <div className="blog-title">
          <div className="project-about">
            <img src="./src/assets/images/Rectangle 63 (16).png" alt="" />
          </div>
          <div className="blog-content">
            <button className="pro-btn">
              <a href="#">Buisness</a>
            </button>
            <h2 className="blog-sub">
              The importance of ADA compliance in web design
            </h2>
            <p className="blog-desc">
              Comedo vel tribuido sordeo accendo deludo degusto adipisci
              dolores. Vergo curo quibusdam caput isto cerno nihil usus benigne.
            </p>
            <div className="meta">
              <button className="project-btn">
                <a href="#">📅 26/02/2025</a>
              </button>
              <button className="project-btn">
                <a href="#">⏱ 8 mins</a>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Card Grids */}
      <div className="card-grids">
        {/* Card 1 */}
        <div className="cardd">
          <img src="./src/assets/images/Rectangle 63 (17).png" alt="" />
          <div className="cardd-body">
            <span className="category">Startups</span>
            <h3 className="titles">
              Elements that capture and retain user interest
            </h3>
            <div className="meta">
              <span>📅 26/02/2025</span>
              <span>⏱ 7 mins</span>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="cardd">
          <img src="./src/assets/images/Rectangle 63 (24).png" alt="" />
          <div className="cardd-body">
            <span className="category">Marketing</span>
            <h3 className="titles">
              Top trends to watch and implement in 2024
            </h3>
            <div className="meta">
              <span>📅 26/02/2025</span>
              <span>⏱ 10 mins</span>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="cardd">
          <img src="./src/assets/images/Rectangle 63 (18).png" alt="" />
          <div className="cardd-body">
            <span className="category">Design</span>
            <h3 className="titles">
              Engaging your audience in the digital age
            </h3>
            <div className="meta">
              <span>📅 26/02/2025</span>
              <span>⏱ 4 mins</span>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="cardd">
          <img src="./src/assets/images/Rectangle 63 (25).png" alt="" />
          <div className="cardd-body">
            <span className="category">Design</span>
            <h3 className="titles">
              A comprehensive beginner's guide to online success
            </h3>
            <div className="meta">
              <span>📅 26/02/2025</span>
              <span>⏱ 15 mins</span>
            </div>
          </div>
        </div>

        {/* Card 5 */}
        <div className="cardd">
          <img src="./src/assets/images/Rectangle 63 (19).png" alt="" />
          <div className="cardd-body">
            <span className="category">Startups</span>
            <h3 className="titles">
              Tips for content creation and audience growth
            </h3>
            <div className="meta">
              <span>📅 26/02/2025</span>
              <span>⏱ 8 mins</span>
            </div>
          </div>
        </div>

        {/* Card 6 */}
        <div className="cardd">
          <img src="./src/assets/images/Rectangle 63 (20).png" alt="" />
          <div className="cardd-body">
            <span className="category">News & Events</span>
            <h3 className="titles">
              Elements that capture and retain user interest
            </h3>
            <div className="meta">
              <span>📅 26/02/2025</span>
              <span>⏱ 21 mins</span>
            </div>
          </div>
        </div>

        {/* Card 7 */}
        <div className="cardd">
          <img src="./src/assets/images/Rectangle 63 (21).png" alt="" />
          <div className="cardd-body">
            <span className="category">Marketing</span>
            <h3 className="titles">
              Strategies for higher open and conversion rates
            </h3>
            <div className="meta">
              <span>📅 26/02/2025</span>
              <span>⏱ 9 mins</span>
            </div>
          </div>
        </div>

        {/* Card 8 */}
        <div className="cardd">
          <img src="./src/assets/images/Rectangle 63 (22).png" alt="" />
          <div className="cardd-body">
            <span className="category">News & Events</span>
            <h3 className="titles">
              The importance of collaboration in successful projects
            </h3>
            <div className="meta">
              <span>📅 26/02/2025</span>
              <span>⏱ 6 mins</span>
            </div>
          </div>
        </div>

        {/* Card 9 */}
        <div className="cardd">
          <img src="./src/assets/images/Rectangle 63 (23).png" alt="" />
          <div className="cardd-body">
            <span className="category">Startups</span>
            <h3 className="titles">
              How motion design is changing the digital landscape
            </h3>
            <div className="meta">
              <span>📅 26/02/2025</span>
              <span>⏱ 5 mins</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
