import React from 'react';
import TeamSection from '../compononts/TeamSection';  

import aboutus1 from '../assets/img/home/home04-hero1.jpg';
import aboutus2 from '../assets/img/inner-pages/contacts04.jpg';
import aboutus3 from '../assets/img/cta/grid-cta-background.jpg';
import aboutus4 from '../assets/img/cta/grid-cta-02.jpg';


const About = () => {
  return (
    <div className="stg-container">
      {/* Section: Page Title */}
      

      {/* Section: About Us */}
      <section className="divider-bottom">
      <div className="bringer-static-image">
  <img
    src= {aboutus1}
    alt="About Bringer"
    width="1920"
    height="960"
  />
  <br/><br/><br/>
</div>

        <div className="stg-row stg-large-gap stg-tp-normal-gap">
          <div
            className="stg-col-6 stg-vertical-space-between stg-tp-bottom-gap-l"
            data-unload="fade-left"
          >
            <h2 data-split-appear="fade-up">
              Igniting brands that spark movements.
            </h2>
            <div className="align-right" data-appear="fade-right">
              <a href="portfolio-infinite-list.html" className="bringer-icon-link">
                <div className="bringer-icon-link-content">
                  <h6>
                    Unleash your
                    <br />
                    Brand's potential
                  </h6>
                  <span className="bringer-label">Explore our work</span>
                </div>
                <div className="bringer-icon-wrap">
                  <i className="bringer-icon bringer-icon-explore"></i>
                </div>
              </a>
            </div>
          </div>
          <div
            className="stg-col-6"
            data-appear="fade-left"
            data-unload="fade-right"
            data-delay="100"
          >
            <p className="bringer-large-text">
              We help creative agencies, designers, and other creative people to
              connect with potential clients.
            </p>
            <p>
              We're not just creatives; we're brand-whisperers, storytellers,
              and digital alchemists. We take your vision, infuse it with our
              spark, and craft unforgettable experiences that ignite imaginations
              and leave audiences begging for more. At Bringer, we don't just
              build brands, we build movements.
            </p>
            <p>
              We are a team of passionate and experienced designers, developers,
              and marketers who specialize in helping businesses of all sizes
              achieve their goals. We believe that creativity is the key to
              success, and we are committed to helping our clients unleash their
              full potential.
            </p>
            <p>
              We believe in the power of creativity. We help creative
              professionals create a strong online presence that showcases their
              work and tells their story.
            </p>
          </div>
        </div>
      </section>

      <div>
      {/* Existing about page content */}
     

      {/* Inject Team Section Here */}
      <TeamSection />

      {/* More sections if needed */}
    </div>
    
      
    <section className="backlight-top">
      <div className="stg-row stg-large-gap stg-m-normal-gap">
        <div
          className="stg-col-6 stg-tp-bottom-gap-l stg-m-bottom-gap"
          data-appear="fade-right"
          data-unload="fade-left"
        >
          <div className="bringer-parallax-media">
          <img
    className="bringer-image"
    src= {aboutus2}
    alt="About Us"
    width="960"
    height="960"
  />
          </div>
        </div>

        <div
          className="stg-col-6 stg-vertical-space-between"
          data-appear="fade-left"
          data-unload="fade-right"
        >
          <div>
            <h2>From passion project To brand catalyst</h2>
            <p className="bringer-large-text">
              Bringer wasn't born in a boardroom; it was born in a coffee shop,
              fueled by late-night brainstorming and a shared belief in the power
              of creativity.
            </p>
            <p>
              We saw a digital landscape filled with noise and sameness, and we
              knew we had the spark to ignite something different. Today, we're a
              team of passionate storytellers, designers, and strategists who
              bring brands to life with vibrant visuals, captivating narratives,
              and data-driven campaigns.
            </p>
          </div>

          <a href="contacts.html" className="bringer-icon-link">
            <div className="bringer-icon-wrap">
              <i className="bringer-icon bringer-icon-explore"></i>
            </div>
            <div className="bringer-icon-link-content">
              <h6>
                Join the
                <br />
                Movement
              </h6>
              <span className="bringer-label">Tell your story</span>
            </div>
          </a>
        </div>
      </div>
    </section>


    <section>
      <div className="align-center stg-bottom-gap-l">
        <h2 data-split-appear="fade-up" data-unload="fade-up">
          The fire that fuels our passion.
        </h2>
        <p
          className="bringer-large-text"
          data-appear="fade-up"
          data-delay="100"
          data-unload="fade-up"
        >
          At Bringer, we believe in the power of:
        </p>
      </div>

      <div
        className="bringer-grid-2cols"
        data-stagger-appear="zoom-in"
        data-delay="150"
        data-unload="fade-up"
      >
        {[
          {
            title: "Creativity",
            icon: "creativity",
            description:
              "We dare to dream big and push boundaries, never settling for the ordinary.",
          },
          {
            title: "Collaboration",
            icon: "collab",
            description:
              "We thrive on diverse perspectives and believe in the magic of working together.",
          },
          {
            title: "Impact",
            icon: "impact",
            description:
              "We're driven by a desire to make a difference, to create brands that move mountains.",
          },
          {
            title: "Innovation",
            icon: "innovation",
            description:
              "We stay ahead of the curve, embracing new technologies & trends to keep your brand on top.",
          },
        ].map(({ title, icon, description }, i) => (
          <div key={i} className="bringer-icon-box bringer-block">
            <h4>
              {title}
              <span className="bringer-accent">.</span>
            </h4>
            <p className="bringer-large-text">{description}</p>
            <div className="bringer-box-icon">
              <i className={`bringer-icon bringer-icon-${icon}`}></i>
            </div>
          </div>
        ))}
      </div>
    </section>


    <section className="backlight-top">
      <div className="bringer-bento-grid bringer-grid-cta">
        <div
          className="is-large bringer-masked-block"
          data-appear="fade-right"
          data-unload="fade-left"
        >
          <div
            className="bringer-grid-cta-media bringer-masked-media"
            data-bg-src= {aboutus3}
          >
            <div className="bringer-grid-cta-heading">
              Need to amplify your voice?
            </div>
          </div>
          <div className="bringer-masked-content at-bottom-right">
            <p
              className="bringer-large-text"
              data-appear="fade-right"
              data-delay="100"
            >
              Let's chat about your goals &rarr;
            </p>
          </div>
        </div>

        <div
          className="is-medium bringer-block"
          data-appear="fade-down"
          data-unload="fade-right"
        >
          <h3>We will design campaigns that make the world listen</h3>
        </div>

        <div
          className="is-small"
          data-appear="zoom-out"
          data-delay="100"
          data-unload="zoom-out"
        >
          <a href="contacts.html" className="bringer-square-button">
            <span className="bringer-icon bringer-icon-explore"></span>
          </a>
        </div>

        <div
          className="is-small"
          data-appear="zoom-out"
          data-delay="200"
          data-unload="zoom-out"
        >
          <img
            src= {aboutus4}
            alt="Let's Chat"
            width="960"
            height="960"
          />
        </div>
      </div>
    </section>
      
    </div>
  );
};

export default About;
