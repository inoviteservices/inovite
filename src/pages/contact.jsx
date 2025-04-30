import React from 'react';

const Contact = () => {
  return (
    <div className="stg-container">
      
    <section className="backlight-top is-fullwidth">
      <div className="stg-row stg-valign-middle stg-cta-with-image stg-tp-column-reverse">
        {/* Left Column - Image + Form */}
        <div className="stg-col-5" data-unload="fade-left">
          <div
            className="bringer-offset-image"
            data-bg-src="img/cta/contact-section-bg.jpg"
            data-appear="fade-up"
            data-threshold="0.25"
          ></div>

          <form
            action="https://demo.shadow-themes.com/html/bringer/mail.php"
            method="post"
            className="bringer-contact-form bringer-block"
            data-fill-error="Please, fill out the contact form."
            data-appear="fade-right"
            data-threshold="0.25"
          >
            <div className="bringer-form-content">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" name="name" placeholder="Your Name" required />

              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" name="email" placeholder="email@example.com" required />

              <label htmlFor="message">Your Message</label>
              <textarea id="message" name="message" placeholder="Your Message" required></textarea>

              <button type="submit" value="Send Message">Get a FREE Quote</button>
              <div className="bringer-contact-form__response"></div>
            </div>
            <span className="bringer-form-spinner"></span>
          </form>
        </div>

        {/* Right Column - Text Content */}
        <div className="stg-col-6 stg-offset-1" data-unload="fade-right">
          <div className="bringer-cta-form-content">
            <div
              className="bringer-cta-form-title"
              data-split-appear="fade-up"
              data-split-delay="100"
              data-split-by="line"
            >
              Let's discuss your next creative project.
            </div>

            <div className="bringer-cta-text">
              <div className="stg-row stg-valign-middle">
                <div
                  className="stg-col-2 stg-offset-2 stg-tp-col-1 stg-tp-offset-3 stg-m-col-1 stg-m-offset-2"
                  data-appear="fade-right"
                >
                  <i className="bringer-cta-icon"></i>
                </div>
                <div
                  className="stg-col-8 stg-tp-col-7 stg-m-col-8 stg-m-offset-1"
                  data-appear="fade-left"
                >
                  <p className="bringer-large-text">
                    We help creative agencies, designers, and other creative people showcase their perfect work.
                  </p>
                </div>
              </div>
            </div>

            {/* Counters */}
            <div
              className="bringer-cta-counters bringer-grid-3cols bringer-m-grid-3cols"
              data-stagger-appear="fade-up"
              data-stagger-delay="100"
            >
              <div className="bringer-counter bringer-small-counter" data-delay="3000">
                <div className="bringer-counter-number" data-suffix="+">100</div>
                <div className="bringer-counter-label">Projects Done</div>
              </div>

              <div className="bringer-counter bringer-small-counter" data-delay="3000">
                <div className="bringer-counter-number" data-suffix="+">50</div>
                <div className="bringer-counter-label">Happy Clients</div>
              </div>

              <div className="bringer-counter bringer-small-counter" data-delay="3000">
                <div className="bringer-counter-number" data-suffix="+">1</div>
                <div className="bringer-counter-label">Years in Work</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>

    <section class="backlight-top divider-bottom">
                
                <div class="align-center">
                            <p class="bringer-large-text" data-appear="fade-up" data-delay="100" data-unload="fade-up">Here's how you can connect with the Bringer team:</p>
                        </div>
                        <br/>
                <div class="stg-row" data-stagger-appear="fade-up" data-delay="200" data-stagger-unload="fade-up">
                    <div class="stg-col-4 stg-tp-col-6 stg-tp-bottom-gap">
                        <div class="bringer-block stg-aspect-square stg-vertical-space-between">
                            <a href="tel:+917447706777" class="bringer-grid-item-link"></a>
                            <div>
                                <h5>Phone<span class="bringer-accent">.</span></h5>
                                <h6>+91 74477 06777</h6>
                            </div>
                            <p>Give us a call and chat directly with our friendly team. We're always happy to answer any questions.</p>
                        </div>
                    </div>
                    <div class="stg-col-4 stg-tp-col-6 stg-tp-bottom-gap">
                        <div class="bringer-block stg-aspect-square stg-vertical-space-between">
                            <a href="mailto:connect@inovite.in" class="bringer-grid-item-link"></a>
                            <div>
                                <h5>Email<span class="bringer-accent">.</span></h5>
                                <h6>connect@inovite.in</h6>
                            </div>
                            <p>Send us a detailed message. We'll get back to you as soon as possible to discuss your creative project further.</p>
                        </div>
                    </div>
                    <div class="stg-col-4 stg-tp-col-12">
                        <div class="bringer-block stg-aspect-square stg-tp-aspect-rectangle stg-vertical-space-between">
                            <div>
                                <h5>Social Media<span class="bringer-accent">.</span></h5>
                                <ul class="bringer-socials-list stg-small-gap" data-stagger-appear="fade-up" data-stagger-delay="75">
                                    <li>
                                        <a href="https://www.facebook.com/share/16D9y75g4f/?mibextid=wwXIfr" target="_blank" class="bringer-socials-facebook">
                                            <i></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://instagram.com/inovite.in" target="_blank" class="bringer-socials-instagram">
                                            <i></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/inovite" target="_blank" class="bringer-socials-x">
                                            <i></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://linkedin.com/company/inovite-services" target="_blank" class="bringer-socials-linkedin">
                                            <i></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://youtube.com/@inovite" target="_blank" class="bringer-socials-youtube">
                                            <i></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <p>Follow us on Social Media Platforms for a glimpse into our creative world, industry insights, and projects.</p>
                        </div>
                    </div>
                </div>
            </section>

    
    <section>
      {/* Section Title */}
      <div className="stg-row bringer-section-title">
        <div className="stg-col-8 stg-offset-2">
          <div className="align-center">
            <h2 data-appear="fade-up" data-unload="fade-up">Visit our Studio</h2>
            <p
              className="bringer-large-text"
              data-appear="fade-up"
              data-delay="100"
              data-unload="fade-up"
            >
              Come visit! We love welcoming potential collaborators into our vibrant space. Schedule
              a tour and get inspired by our creative energy.
            </p>
            <br/>
          </div>
        </div>
      </div>

      {/* Contacts Grid */}
      <div className="stg-row">
        {/* Address Block */}
        <div
          className="stg-col-4 stg-tp-col-6 stg-m-bottom-gap"
          data-appear="fade-right"
          data-delay="100"
          data-unload="fade-left"
        >
          <div className="bringer-block stg-aspect-square stg-vertical-space-between">
            <a
              href="https://maps.app.goo.gl/1prL8ZfnkYPd2A6y6"
              className="bringer-grid-item-link"
              target="_blank"
              rel="noreferrer"
            ></a>
            <div>
              <h5>Address<span className="bringer-accent">.</span></h5>
              <h6>
                Akola, Maharashtra<br />
                444002
              </h6>
            </div>
            <p>
              Drop by our vibrant studio. We'd love to welcome you and share our creative vibe.
              Let's fuel your vision!
            </p>
          </div>
        </div>

        {/* Google Map Iframe */}
        <div
          className="stg-col-8 stg-tp-col-6"
          data-appear="fade-left"
          data-delay="200"
          data-unload="fade-right"
        >
         <iframe
  className="bringer-google-map"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59715.204879437355!2d76.98432446053833!3d20.702089201639552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd73192c32a5df1%3A0xcfa72a91e826b253!2sAkola%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1745603631480!5m2!1sen!2sin"
  width="790"
  height="379"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="Studio Location Map"
/>

        </div>
      </div>
    </section>
      
    </div>
  );
};

export default Contact;
