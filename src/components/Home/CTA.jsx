import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";

export default function CTA() {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setResponseMessage(t("home.cta.fillForm"));
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(
        "https://your-api-endpoint.com/subscribe",
        {
          subscribe_email: email,
        }
      );

      if (response.status === 200) {
        setResponseMessage(t("home.cta.thankYou"));
        setEmail("");
      } else {
        setResponseMessage(t("home.cta.submissionIssue"));
      }
    } catch (error) {
      setResponseMessage(t("home.cta.error"));
    }
    setLoading(false);
  };

  return (
    <section data-padding="bottom">
      <div
        className="bringer-masked-cta bringer-masked-block"
        data-unload="fade-down"
      >
        <form
          onSubmit={handleSubmit}
          className="bringer-contact-form is-short bringer-masked-media"
          data-appear="fade-up"
        >
          <div className="bringer-form-content bringer-cta-form">
            <div
              className="bringer-cta-form-content"
              data-appear="fade-up"
              data-delay="100"
            >
              <div className="bringer-cta-title">{t("home.cta.title")}</div>
              <input
                type="email"
                id="subscribe_email"
                name="subscribe_email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t("home.cta.placeholder")}
                required
              />
            </div>
            <div
              className="bringer-cta-form-button"
              data-appear="fade-up"
              data-delay="200"
            >
              <button type="submit" disabled={loading}>
                <span className="bringer-icon bringer-icon-arrow-submit"></span>
              </button>
            </div>
            <div className="bringer-contact-form__response">
              {responseMessage && <p>{responseMessage}</p>}
            </div>
          </div>
          {loading && <span className="bringer-form-spinner"></span>}
        </form>
        <div className="bringer-masked-cta-content bringer-masked-content at-top-right">
          <p className="bringer-large-text" data-appear="fade-down">
            {t("home.cta.subtitle")}
          </p>
        </div>
      </div>
    </section>
  );
}
