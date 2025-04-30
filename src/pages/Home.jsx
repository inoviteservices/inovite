// src/pages/Home.jsx
import React from 'react';
import logo from '../assets/img/inovite-logo-web.png';
import video from '../assets/video/home03.mp4';
import poster from '../assets/img/home/3d%20logo.gif';
import about1 from '../assets/img/inner-pages/contacts04.jpg';
import about2 from '../assets/img/inner-pages/contacts03.jpg';
import service1 from '../assets/img/home/service01.jpg';
import service2 from '../assets/img/home/service02.jpg';
import service3 from '../assets/img/home/service03.jpg';

const Home = () => {
  return (
    <div className="stg-container">
        <section className="backlight-bottom">
        <div className="bringer-hero-block bringer-hero-type03">
          {/* Main Row */}
          <div className="bringer-hero-title-wrap">
            {/* Title */}
            <h1 className="bringer-page-title" data-split-appear="fade-up" data-split-delay="100" data-split-by="line" data-split-unload="fade-up">
              Bring your creative ideas into Reality!
            </h1>
            {/* Additional Media */}
            <div className="stg-m-hide" data-appear="fade-left" data-unload="fade-right">
            <img 
    src= {logo}
    alt="Inovite" 
    width="550" 
    height="200" 
    style={{
        transform: 'scale(1.05)',
        transformOrigin: 'center',
        display: 'block',
        margin: '0 auto'
      }}
  />            </div>
          </div>
          

          {/* Masked Media Container */}
          <div className="bringer-hero-media-wrap bringer-masked-block">
            {/* Masked Media */}
            <div className="bringer-hero-media bringer-masked-media" data-appear="fade-right" data-unload="fade-left" data-delay="150" data-threshold="0">
              <video src= {video} poster= {poster} playsInline muted loop autoPlay />
            </div>
            {/* Content */}
            <div className="bringer-hero-media-content bringer-masked-content at-top-right">
              <div className="bringer-hero-media-content-inner m-align-center" data-appear="fade-left" data-unload="fade-right" data-delay="100" data-threshold="0">
                We help creative agencies, designers, and other creative people showcase their work and connect with clients.
              </div>
            </div>
            {/* Tags List */}
            <ul className="bringer-tags-list" data-unload="fade-left" data-delay="150">
              <li data-appear="fade-up" data-delay="400">
                <a href="services-details.html">Web Dev</a>
              </li>
              <li data-appear="fade-up" data-delay="450">
                <a href="services-details.html">App Dev</a>
              </li>
              <li data-appear="fade-up" data-delay="200">
                <a href="services-details.html"> Custom Software</a>
              </li>
              <li data-appear="fade-up" data-delay="250">
                <a href="services-details.html">Design</a>
              </li>
              <li data-appear="fade-up" data-delay="300">
                <a href="services-details.html">SEO Boost</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    
    
    
        <section className="backlight-bottom">
      <div className="stg-row stg-large-gap stg-valign-middle stg-bottom-gap-l stg-tp-bottom-gap-xl stg-tp-column-reverse stg-m-bottom-gap-l stg-m-normal-gap">
        <div className="stg-col-6" data-appear="fade-right" data-unload="fade-left">
          <h3>Welcome to Inovite, where creativity meets expertise.</h3>
          <p className="bringer-large-text">
            We help creative agencies, designers, and other creative people to connect with potential clients.
          </p>
          <p>
            We are a team of passionate and experienced designers, developers, and marketers who specialize in helping
            businesses of all sizes achieve their goals. We believe that creativity is the key to success, and we are
            committed to helping our clients unleash their full potential.
          </p>
          <p>
            We believe in the power of creativity. We help creative professionals create a strong online presence that
            showcases their work and tells their story.
          </p>
        </div>

        <div
          className="stg-col-6 stg-tp-bottom-gap-l stg-m-bottom-gap"
          data-appear="fade-left"
          data-unload="fade-right"
        >
          <div className="bringer-parallax-media">
  <img
    className="bringer-image"
    src= {about1}
    alt="About Us"
    width="960"
    height="960"
  />
</div>

        </div>
      </div>

      <div className="stg-row stg-large-gap stg-valign-middle stg-m-normal-gap">
        <div
          className="stg-col-6 stg-tp-bottom-gap-l stg-m-bottom-gap"
          data-appear="fade-right"
          data-delay="50"
          data-unload="fade-left"
        >

            
          <div className="bringer-parallax-media">
          <img
    className="bringer-image"
    src= {about2}
    alt="About Us"
    width="960"
    height="960"
  />
         
          </div>
        </div>

        <div
          className="stg-col-6"
          data-appear="fade-left"
          data-delay="50"
          data-unload="fade-right"
        >
          <h3>We are a passionate team of designers and developers.</h3>
          <p className="bringer-large-text">
            We are a passionate team of designers and developers who believe in the power of creativity.
          </p>
          <p>
            We are a team of passionate and experienced designers, developers, and marketers who specialize in helping
            businesses of all sizes achieve their goals. We believe that creativity is the key to success, and we are
            committed to helping our clients unleash their full potential.
          </p>
          <div className="align-right">
            <a href="/about-us" className="bringer-arrow-link">
              Learn More About Us
            </a>
          </div>
        </div>
      </div>
    </section>


    <section className="is-fullwidth is-stretched" data-padding="none">
      <div className="bringer-marquee" data-speed="5000">
        <div className="bringer-marquee-inner">
          <ul className="bringer-marquee-list">
            <li><h2>UI/UX</h2></li>
            <li><h2>SEO</h2></li>
            <li><h2>Graphic Design</h2></li>
            <li><h2>App & Web Development</h2></li>
          </ul>
        </div>
      </div>
    </section>

      <section className="backlight-top" id="page06">
      {/* Section Title */}
      <div className="stg-row bringer-section-title">
        <div className="stg-col-8 stg-offset-2">
          <div className="align-center">
            <h2 data-appear="fade-up" data-unload="fade-up">Our Services</h2>
            <p
              className="bringer-large-text"
              data-appear="fade-up"
              data-unload="fade-up"
              data-delay="100"
            >
              We offer a wide range of creative services to help businesses of all sizes achieve their goals. Our services include:
            </p>
            <br/>
          </div>
        </div>
      </div>

      {/* List with Preview */}
      <div className="bringer-list-with-preview" data-preview-position="left" data-unload="fade-up" data-delay="200">
        <div className="bringer-lwp-roster">
          {/* Item 01 */}
          <div className="bringer-lwp-item bringer-block" data-appear="fade-left">
            <img src= {service1} alt="Branding" width="800" height="1200" />
            <div className="bringer-lwp-item-content">
              <h5>Branding<span className="bringer-accent">.</span></h5>
              <p>
                We weave visual stories and craft strategic messaging that resonate at heartstrings, build unwavering trust, and turn customers into fervent brand champions.
              </p>
            </div>
          </div>

          {/* Item 02 */}
          <div className="bringer-lwp-item bringer-block" data-appear="fade-left">
            <img src= {service2} alt="Marketing" width="800" height="1200" />
            <div className="bringer-lwp-item-content">
              <h5>Marketing<span className="bringer-accent">.</span></h5>
              <p>
                We design data-driven campaigns that crackle with energy, ignite engagement like wildfire, and turn clicks into conversions. We're the storm that promotes your brand.
              </p>
            </div>
          </div>

          {/* Item 03 */}
          <div className="bringer-lwp-item bringer-block" data-appear="fade-left">
            <img src= {service3} alt="Web Design" width="800" height="1200" />
            <div className="bringer-lwp-item-content">
              <h5>Web Design<span className="bringer-accent">.</span></h5>
              <p>
                We sculpt user-friendly websites that convert visitors into loyal devotees with intuitive navigation and flawless experiences for every screen. We craft that digital haven.
              </p>
            </div>
          </div>

          {/* Item 04 */}
          <div className="bringer-lwp-item bringer-block" data-appear="fade-left">
            <img src="src/assets/img/home/service04.jpg" alt="Graphic Design" width="800" height="1200" />
            <div className="bringer-lwp-item-content">
              <h5>Graphic Design<span className="bringer-accent">.</span></h5>
              <p>
                We craft visual masterpieces that sing your brand's story in vibrant colors and captivating shapes. From logos that lodge in minds to infographics that make complex ideas sing.
              </p>
            </div>
          </div>

          {/* Learn More */}
          <div className="align-right">
            <a href="services.html" className="bringer-arrow-link">Discover all services</a>
          </div>
        </div>
      </div> {/* .bringer-list-with-preview */}
    </section>


    
    <section className="backlight-bottom">
      {/* Section Title */}
      <div className="stg-row bringer-section-title">
        <div className="stg-col-8 stg-offset-2">
          <div className="align-center">
            <h2 data-appear="fade-up" data-unload="fade-up">
              What Makes Us Best
            </h2>
            <p
              className="bringer-large-text"
              data-appear="fade-up"
              data-unload="fade-up"
              data-delay="100"
            >
              We are a passionate team of designers and developers who believe in the power of creativity. We help creative professionals create a strong online presence that showcases their work and tells their story.
            </p>
            <br/>
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div
        className="bringer-grid-2cols bringer-tp-grid-1col"
        data-stagger-appear="zoom-in"
        data-stagger-delay="100"
        data-stagger-unload="fade-up"
      >
        {/* Card Item 01 */}
        <div className="bringer-block">
          <h4>
            We don't just design, we <span className="bringer-accent">unleash creative</span> firestorms<span className="bringer-accent">.</span>
          </h4>
          <p>
            Tired of bland marketing and cookie-cutter websites? We infuse your brand with bold ideas and strategic brilliance, igniting campaigns that capture hearts and drive tangible results. Forget sparklers, we're here to light galaxies on fire.
          </p>
        </div>

        {/* Card Item 02 */}
        <div className="bringer-block">
          <h4>
            We <span className="bringer-accent">fuel creativity</span> with data, guide passion with precision<span className="bringer-accent">.</span>
          </h4>
          <p>
            We're not just artistic dreamers, we're strategic alchemists. We blend data-driven insights with unbridled passion, ensuring your campaigns reach the right audience, hit the right chords, and deliver measurable results. Because passion without direction is a beautiful mess.
          </p>
        </div>

        {/* Card Item 03 */}
        <div className="bringer-block">
          <h4>
            We craft <span className="bringer-accent">emotional connections</span>, not just visuals and copy<span className="bringer-accent">.</span>
          </h4>
          <p>
            We delve deeper than pixels and prose. We understand the human heart, the language of emotions. We weave stories that resonate, visuals that linger in minds, and content that sparks conversations. Because true connection is the foundation of brand loyalty.
          </p>
        </div>

        {/* Card Item 04 */}
        <div className="bringer-block">
          <h4>
            We don't just work with you, we become your <span className="bringer-accent">creative champions</span><span className="bringer-accent">.</span>
          </h4>
          <p>
            We don't see clients, we see collaborators. We believe in building partnerships, in understanding your vision, and becoming an extension of your team. Your goals are our canvas, your success our masterpiece. We paint your dreams into reality, together.
          </p>
          
        </div>

      </div>
    </section>


            


      
    </div>
    
  );
};

export default Home;
