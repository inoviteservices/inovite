import React from "react";
import { useTranslation } from "react-i18next";
import ContactForm from "../components/Contact/ContactForm";
import ContactCard from "../components/Contact/ContactCard";
import ContactAboutUsSection from "../components/Contact/ContactAboutUsSection";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <div className="stg-container">
      {/* Section: */}
      <ContactAboutUsSection />

      {/* Section: CTA Form */}
      <section className="backlight-top is-fullwidth">
        <div className="stg-row stg-valign-middle stg-cta-with-image stg-tp-column-reverse">
          <div className="stg-col-5" data-unload="fade-left">
            <div
              className="bringer-offset-image"
              data-bg-src="img/cta/contact-section-bg.jpg"
              data-appear="fade-up"
              data-threshold="0.25"
            ></div>
            <ContactForm />
          </div>
          <div className="stg-col-6 stg-offset-1" data-unload="fade-right">
            <div className="bringer-cta-form-content">
              <div
                className="bringer-cta-form-title"
                data-split-appear="fade-up"
                data-split-delay="100"
                data-split-by="line"
              >
                {t("contact.ctaSection.title")}
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
                      {t("contact.ctaSection.description")}
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="bringer-cta-counters bringer-grid-3cols bringer-m-grid-3cols"
                data-stagger-appear="fade-up"
                data-stagger-delay="100"
              >
                <div
                  className="bringer-counter bringer-small-counter"
                  data-delay="3000"
                >
                  <div className="bringer-counter-number">
                    {t("contact.ctaSection.counters.projects.number")}
                  </div>
                  <div className="bringer-counter-label">
                    {t("contact.ctaSection.counters.projects.label")}
                  </div>
                </div>
                <div
                  className="bringer-counter bringer-small-counter"
                  data-delay="3000"
                >
                  <div
                    className="bringer-counter-number"
                    data-suffix={t(
                      "contact.ctaSection.counters.clients.suffix"
                    )}
                  >
                    {t("contact.ctaSection.counters.clients.number")}
                  </div>
                  <div className="bringer-counter-label">
                    {t("contact.ctaSection.counters.clients.label")}
                  </div>
                </div>
                <div
                  className="bringer-counter bringer-small-counter"
                  data-delay="3000"
                >
                  <div
                    className="bringer-counter-number"
                    data-suffix={t("contact.ctaSection.counters.years.suffix")}
                  >
                    {t("contact.ctaSection.counters.years.number")}
                  </div>
                  <div className="bringer-counter-label">
                    {t("contact.ctaSection.counters.years.label")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Let's Talk */}
      <section className="backlight-top divider-bottom">
        <div className="stg-row bringer-section-title">
          <div className="stg-col-8 stg-offset-2">
            <div className="align-center">
              <h2 data-appear="fade-up" data-unload="fade-up">
                {t("contact.letsTalk.title")}
              </h2>
              <p
                className="bringer-large-text mb-5"
                data-appear="fade-up"
                data-delay="100"
                data-unload="fade-up"
              >
                {t("contact.letsTalk.subtitle")}
              </p>
            </div>
          </div>
        </div>
        <div
          className="stg-row "
          data-stagger-appear="fade-up"
          data-delay="200"
          data-stagger-unload="fade-up"
        >
          <div className="stg-col-4 stg-tp-col-6 stg-tp-bottom-gap">
            <ContactCard
              href="tel:+917447706777"
              title={t("contact.letsTalk.phone.title")}
              subtitle={t("contact.letsTalk.phone.subtitle")}
              description={t("contact.letsTalk.phone.description")}
            />
          </div>
          <div className="stg-col-4 stg-tp-col-6 stg-tp-bottom-gap">
            <ContactCard
              href="mailto:connect@inovite.in"
              title={t("contact.letsTalk.email.title")}
              subtitle={t("contact.letsTalk.email.subtitle")}
              description={t("contact.letsTalk.email.description")}
            />
          </div>
          <div className="stg-col-4 stg-tp-col-12">
            <div className="bringer-block stg-aspect-square stg-tp-aspect-rectangle stg-vertical-space-between">
              <div>
                <h5>
                  {t("contact.letsTalk.social.title")}
                  <span className="bringer-accent">.</span>
                </h5>
                <ul
                  className="bringer-socials-list stg-small-gap"
                  data-stagger-appear="fade-up"
                  data-stagger-delay="75"
                >
                  {["facebook", "instagram", "x", "tiktok", "patreon"].map(
                    (social) => (
                      <li key={social}>
                        <a
                          href="#"
                          target="_blank"
                          rel="noreferrer"
                          className={`bringer-socials-${social}`}
                        >
                          <i></i>
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </div>
              <p>{t("contact.letsTalk.social.description")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section>
        <div className="stg-row bringer-section-title">
          <div className="stg-col-8 stg-offset-2">
            <div className="align-center">
              <h2 data-appear="fade-up" data-unload="fade-up">
                {t("contact.visitStudio.title")}
              </h2>
              <p
                className="bringer-large-text mb-5"
                data-appear="fade-up"
                data-delay="100"
                data-unload="fade-up"
              >
                {t("contact.visitStudio.subtitle")}
              </p>
            </div>
          </div>
        </div>
        <div className="stg-row">
          <div
            className="stg-col-4 stg-tp-col-6 stg-m-bottom-gap"
            data-appear="fade-right"
            data-delay="100"
            data-unload="fade-left"
          >
            <ContactCard
              href="https://maps.app.goo.gl/EpM2HZD1UehvVXK97"
              title={t("contact.visitStudio.address.title")}
              subtitle={t("contact.visitStudio.address.subtitle")}
              description={t("contact.visitStudio.address.description")}
            />
          </div>
          <div
            className="stg-col-8 stg-tp-col-6"
            data-appear="fade-left"
            data-delay="200"
            data-unload="fade-right"
          >
            <iframe
              className="bringer-google-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.506435887123!2d73.77005707357726!3d18.596277582512023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b90016bd11e3%3A0x9690930d7c0dfd9a!2sSonigara%20Landmark!5e0!3m2!1sen!2sin!4v1761928247393!5m2!1sen!2sin"
              width="790"
              height="379"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bringer Studio Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
