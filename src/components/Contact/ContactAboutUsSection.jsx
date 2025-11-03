import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";

export default function ContactAboutUsSection() {
  const { t } = useTranslation();
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get("/data/contact-about-us.json")
      .then((res) => {
        setImages(res.data.images || []);
      })
      .catch((err) => {
        console.error("Failed to fetch About Us data:", err);
      });
  }, []);

  return (
    <section>
      {/* Section Title */}
      <div className="stg-row stg-bottom-gap mt-4">
        <div className="stg-col-8">
          <h2 data-split-appear="fade-up" data-unload="fade-up">
            {t("contact.aboutUsSection.title")}
          </h2>
        </div>
        <div className="stg-col-4"></div>
      </div>

      {/* Section Content */}
      <div className="stg-row stg-bottom-gap-l">
        <div
          className="stg-col-6 stg-offset-6"
          data-appear="fade-up"
          data-delay="200"
          data-unload="fade-up"
        >
          <p>{t("contact.aboutUsSection.description")}</p>
        </div>
      </div>

      {/* Grid Gallery */}
      {images.length > 0 && (
        <div
          className="bringer-grid-3cols bringer-parallax-media bringer-m-grid-3cols stg-m-small-gap"
          data-stagger-appear="fade-up"
          data-delay="200"
          data-stagger-unload="fade-up"
        >
          {images.map((imgSrc, index) => (
            <a
              key={index}
              href={imgSrc}
              className="bringer-lightbox-link"
              data-size="960x960"
            >
              <img
                className="bringer-lazy"
                src={imgSrc}
                alt={`${t("contact.aboutUsSection.title")} Image ${index + 1}`}
                width="960"
                height="960"
                loading="lazy"
              />
            </a>
          ))}
        </div>
      )}
    </section>
  );
}
