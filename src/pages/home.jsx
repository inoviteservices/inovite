import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next"; // Import useTranslation
import axios from "axios";
import HeroSection from "../components/Home/HeroSection";
import ServiceList from "../components/Home/ServiceList";
import PortfolioCarousel from "../components/Home/PortfolioCarousel";
import TestimonialCard from "../components/Home/TestimonialCard";
import CTA from "../components/Home/CTA";

export default function Home() {
  const { t } = useTranslation(); // Hook for translations

  // Services now use translations
  const services = [
    {
      imgSrc: "/img/home/service01.jpg",
      alt: t("home.services.branding.alt"),
      title: t("home.services.branding.title"),
      description: t("home.services.branding.description"),
    },
    {
      imgSrc: "/img/home/service02.jpg",
      alt: t("home.services.marketing.alt"),
      title: t("home.services.marketing.title"),
      description: t("home.services.marketing.description"),
    },
    {
      imgSrc: "/img/home/service03.jpg",
      alt: t("home.services.webDesign.alt"),
      title: t("home.services.webDesign.title"),
      description: t("home.services.webDesign.description"),
    },
    {
      imgSrc: "/img/home/service04.jpg",
      alt: t("home.services.graphicDesign.alt"),
      title: t("home.services.graphicDesign.title"),
      description: t("home.services.graphicDesign.description"),
    },
  ];

  // Marquee list with translations
  const marqueeList = [
    { title: t("home.tags.branding") },
    { title: t("home.tags.marketing") },
    { title: t("home.tags.graphicDesign") },
    { title: t("home.tags.webDesign") },
    { title: "UX/UI" },
  ];

  const [partners, setPartners] = useState([]);
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    axios.get("/data/partners.json").then((response) => {
      setPartners(response.data);
    });
    axios
      .get("/data/portfolio.json")
      .then((res) => setPortfolioItems(res.data));
    axios.get("/data/testimonials.json").then((response) => {
      setTestimonials(response.data);
    });
  }, []);

  return (
    <>
      <main >
        <div className="stg-container">
          {/* Hero Section */}
          <HeroSection />

          {/* About Section */}
          <section className="divider-bottom">
            <div className="stg-row stg-large-gap stg-m-normal-gap">
              <div className="stg-col-6 stg-tp-bottom-gap-1 stg-m-bottom-gap">
                <div
                  className="bringer-parallax-media"
                  data-appear="fade-right"
                  data-unload="fade-left"
                >
                  <img
                    src="/img/null.png"
                    data-src="/img/home/about-1.jpeg"
                    alt={t("home.about.title")}
                    className="bringer-lazy"
                    width="960"
                    height="960"
                  ></img>
                </div>
              </div>
              <div
                className="stg-col-6 stg-vertical-space-between"
                data-appear="fade-left"
                data-unload="fade-right"
              >
                <div>
                  <h3>{t("home.about.title")}</h3>
                  <p className="bringer-large-text">
                    {t("home.about.subtitle")}
                  </p>
                  <p>{t("home.about.description")}</p>
                </div>
                <a
                  href="/about-us"
                  className="bringer-icon-link"
                  data-appear="fade-left"
                >
                  <div className="bringer-icon-wrap">
                    <i className="bringer-icon bringer-icon-explore"></i>
                  </div>
                  <div className="bringer-icon-link-content">
                    <h6>{t("home.about.linkTitle")}</h6>
                    <span className="bringer-label">
                      {t("home.about.linkLabel")}
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="backlight-bottom">
            <div className="stg-row bringer-section-title">
              <div className="stg-col-8 stg-offset-2">
                <div className="align-center">
                  <h2 data-appear="fade-up" data-unload="fade-up">
                    {t("home.services.title")}
                  </h2>
                  <p
                    className="bringer-large-text mb-5"
                    data-appear="fade-up"
                    data-unload="fade-up"
                    data-delay="100"
                  >
                    {t("home.services.subtitle")}
                  </p>
                </div>
              </div>
            </div>

            <div
              className="bringer-list-with-preview"
              data-preview-position="left"
              data-unload="fade-up"
              data-delay="200"
            >
              <div className="bringer-lwp-roster">
                {services.map((service, index) => (
                  <ServiceList
                    key={index}
                    imgSrc={service.imgSrc}
                    alt={service.alt}
                    title={service.title}
                    description={service.description}
                  />
                ))}

                <div className="align-right">
                  <a href="#" className="bringer-arrow-link">
                    {t("home.services.discoverAll")}
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Marquee Section */}
          <section className="is-fullwidth is stretched" data-padding="none">
            <div className="bringer-marquee" data-speed="5000">
              <div className="bringer-marquee-inner">
                <ul className="bringer-marquee-list">
                  {marqueeList.map((item, index) => (
                    <li key={index}>
                      <h2>{item.title}</h2>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Why Choose Us Section */}
          <section>
            <div className="stg-row stg-large-gap">
              <div
                className="stg-col-6 stg-tp-bottom-gap-1"
                data-unload="fade-left"
              >
                <div className="bringer-sticky-block">
                  <h2>{t("home.whyChoose.title")}</h2>
                  <p className="bringer-large-text">
                    {t("home.whyChoose.subtitle")}
                  </p>
                  <div className="align-right">
                    <a href="/about-us" className="bringer-arrow-link">
                      {t("home.whyChoose.learnMore")}
                    </a>
                  </div>
                </div>
              </div>
              <div className="stg-col-6">
                <div
                  className="bringer-grid-1col stg-normal-gap"
                  data-stagger-appear="zoom-in"
                  data-stagger-unload="zoom-out"
                  data-threshold="0.5"
                  data-stagger-delay="150"
                >
                  <div className="bringer-block">
                    <h4>
                      We don't just design, we{" "}
                      <span className="bringer-accent">unleash creative</span>{" "}
                      firestorms<span className="bringer-accent">.</span>
                    </h4>
                    <p>{t("home.whyChoose.point1.description")}</p>
                  </div>

                  <div className="bringer-block">
                    <h4>
                      We <span className="bringer-accent">fuel creativity</span>{" "}
                      with data, guide passion with precision
                      <span className="bringer-accent">.</span>
                    </h4>
                    <p>{t("home.whyChoose.point2.description")}</p>
                  </div>

                  <div className="bringer-block">
                    <h4>
                      We craft{" "}
                      <span className="bringer-accent">
                        emotional connections
                      </span>
                      , not just visuals and copy
                      <span className="bringer-accent">.</span>
                    </h4>
                    <p>{t("home.whyChoose.point3.description")}</p>
                  </div>

                  <div className="bringer-block">
                    <h4>
                      We don't just work with you, we become your{" "}
                      <span className="bringer-accent">creative champions</span>
                      <span className="bringer-accent">.</span>
                    </h4>
                    <p>{t("home.whyChoose.point4.description")}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Partners Section */}
          <section data-padding="none">
            <div
              className="bringer-hero-media-wrap stg-bottom-gap stg-tp-bottom-gap-1"
              data-appear="fade-up"
              data-unload="zoom-out"
            ></div>
            <div
              className="bringer-hero-block bringer-hero-type08"
              style={{ paddingTop: 0, marginTop: 0 }}
            >
              <div className="bringer-partners">
                <span
                  className="bringer-label"
                  data-appear="fade-up"
                  data-unload="fade-up"
                >
                  {t("home.partners.label")}
                </span>
                <div
                  className="bringer-grid-6cols bringer-tp-grid-3cols bringer-m-grid-2cols stg-top-gap-s"
                  data-stagger-appear="fade-up"
                  data-stagger-unload="fade-up"
                  data-stagger-delay="100"
                  data-delay="100"
                >
                  {partners.map((partner, index) => (
                    <div className="bringer-block" key={index}>
                      <img src={partner.image} alt={partner.alt} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Portfolio Section */}
          <section className="is-fullwidth is stretched">
            <div className="stg-row bringer-section-title is-boxed">
              <div className="stg-col-8 stg-offset-2">
                <div className="align-center">
                  <h2 data-appear="fade-up" data-unload="fade-up">
                    {t("home.portfolio.title")}
                  </h2>
                  <p
                    className="bringer-large-text mb-5"
                    data-appear="fade-up"
                    data-unload="fade-up"
                    data-delay="100"
                  >
                    {t("home.portfolio.subtitle")}
                  </p>
                </div>
              </div>
            </div>

            <PortfolioCarousel portfolioItems={portfolioItems} />
            <div
              className="align-center"
              data-appear="fade-up"
              data-unload="fade-up"
              data-delay="100"
            >
              <a href="portfolio-slider.html" className="bringer-button">
                {t("home.portfolio.discoverFull")}
              </a>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="backlight-top">
            <div className="bringer-expand-on-scroll">
              <img
                src="/img/home/about-2.jpeg"
                alt={t("home.testimonials.title")}
                data-unload="fade-up"
              />
            </div>
            <div className="stg-row stg-large-gap stg-top-gap-l">
              <div
                className="stg-col-6 stg-tp-bottom-gap-l"
                data-unload="fade-left"
              >
                <div className="bringer-sticky-block">
                  <h2>{t("home.testimonials.title")}</h2>
                  <p className="bringer-large-text">
                    {t("home.testimonials.subtitle")}
                  </p>
                  <div className="align-right">
                    <a href="testimonials.html" className="bringer-arrow-link">
                      {t("home.testimonials.readAll")}
                    </a>
                  </div>
                </div>
              </div>
              <div className="stg-col-6">
                <div className="bringer-grid-1col stg-normal-gap">
                  {testimonials.map((testimonial, index) => (
                    <TestimonialCard
                      key={index}
                      description={testimonial.description}
                      name={testimonial.name}
                      position={testimonial.position}
                      rating={testimonial.rating}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>

          <CTA />
        </div>
      </main>
    </>
  );
}
