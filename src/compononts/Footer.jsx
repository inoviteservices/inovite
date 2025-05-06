// src/components/Footer.jsx
import React from 'react';
import logo from '../assets/img/inovite-logo-web.png';

const Footer = () => {
  return (
    <>
      <footer id="bringer-footer" data-appear="fade-up" data-unload="fade-down">
        {/* Footer Widgets Area */}
        <div className="bringer-footer-widgets">
          <div className="stg-container">
            <div className="stg-row" data-stagger-appear="fade-left" data-stagger-delay="100">
              <div className="stg-col-5 stg-tp-col-12 stg-tp-bottom-gap-l">
                <div className="bringer-info-widget">
                  <a href="index-2.html" className="bringer-logo footer-logo">
                    <img src= {logo} alt="inovite" width="88" height="24" />
                  </a>
                  <div className="bringer-info-description">
                    We are a passionate team of developers and designers who believe in the power of creativity. We help creative people create a strong online presence that shows their work and tells a story.
                  </div>
                  <span className="bringer-label">Follow us:</span>
                  <ul className="bringer-socials-list" data-stagger-appear="fade-up" data-stagger-delay="75">
                    <li><a href="https://www.facebook.com/share/16D9y75g4f/?mibextid=wwXIfr" target="_blank" className="bringer-socials-facebook"><i></i></a></li>
                    <li><a href="https://instagram.com/inovite.in" target="_blank" className="bringer-socials-instagram"><i></i></a></li>
                    <li><a href="https://twitter.com/InoviteServices" target="_blank" className="bringer-socials-x"><i></i></a></li>
                    <li><a href="https://linkedin.com/company/inovite-services" target="_blank" className="bringer-socials-linkedin"><i></i></a></li>
                    <li><a href="https://youtube.com/@inovite" target="_blank" className="bringer-socials-youtube"><i></i></a></li>
                  </ul>
                </div>
              </div>

              <div className="stg-col-2 stg-offset-1 stg-tp-col-4 stg-m-col-4">
                <div className="bringer-widget">
                  <h6>Services</h6>
                  <div className="bringer-menu-widget">
                    <ul>
                      <li><a href="service-details.html">Branding</a></li>
                      <li><a href="service-details.html">Marketing</a></li>
                      <li><a href="service-details.html">Graphic Design</a></li>
                      <li><a href="service-details.html">Web Design</a></li>
                      <li><a href="service-details.html">Content Creation</a></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="stg-col-2 stg-tp-col-4 stg-m-col-4">
                <div className="bringer-widget">
                  <h6>About Us</h6>
                  <div className="bringer-menu-widget">
                    <ul>
                      <li><a href="about-us.html">About Us</a></li>
                      <li><a href="about-me.html">About Me</a></li>
                      <li><a href="team-member.html">Our Team</a></li>
                      <li><a href="testimonials.html">Testimonials</a></li>
                      <li><a href="contacts.html">Get in Touch</a></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="stg-col-2 stg-tp-col-4 stg-m-col-4">
                <div className="bringer-widget">
                  <h6>Resources</h6>
                  <div className="bringer-menu-widget">
                    <ul>
                      <li><a href="pricing.html">Pricing</a></li>
                      <li><a href="faq.html">Help Center</a></li>
                      <li><a href="services.html">Our Services</a></li>
                      <li><a href="#">Terms of Use</a></li>
                      <li><a href="#">Privacy Policy</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Copyright */}
        <div className="bringer-footer-line stg-container">
  <div className="align-center">
    © {new Date().getFullYear()} Inovite Services Pvt. Ltd.
  </div>
</div>

      </footer>

    </>
  );
};

export default Footer;
