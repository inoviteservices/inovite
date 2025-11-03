import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default function Footer() {
  const { t } = useTranslation();
  const [footerData, setFooterData] = useState(null);

  useEffect(() => {
    const fetchFooterData = async () => {
      try {
        const res = await axios.get("/data/footerData.json");
        setFooterData(res.data);
      } catch (err) {
        console.error("Failed to fetch footer data:", err);
      }
    };

    fetchFooterData();
  }, []);

  if (!footerData) return null;

  const { company, widgets } = footerData;

  return (
    <footer id="bringer-footer" data-appear="fade-up" data-unload="fade-down">
      {/* Footer Widgets */}
      <div className="bringer-footer-widgets">
        <div className="stg-container">
          <div
            className="stg-row"
            data-stagger-appear="fade-left"
            data-stagger-delay="100"
          >
            {/* Company Info */}
            <div className="stg-col-5 stg-tp-col-12 stg-tp-bottom-gap-l">
              <div className="bringer-info-widget">
                <NavLink to="/" className="bringer-logo footer-logo">
                  <img
                    src={company.logo}
                    alt={company.name}
                    width="88"
                    height="24"
                  />
                </NavLink>
                <div className="bringer-info-description">
                  {t("footer.company.description")}
                </div>
                <span className="bringer-label">{t("footer.followUs")}</span>
                <ul
                  className="bringer-socials-list"
                  data-stagger-appear="fade-up"
                  data-stagger-delay="75"
                >
                  {company.socials.map((social, index) => (
                    // <li key={index}>
                    //   <a
                    //     href={social.url}
                    //     target="_blank"
                    //     rel="noopener noreferrer"
                    //     className={`bringer-socials-${social.platform}`}
                    //   >
                    //     <i></i>
                    //   </a>
                    // </li>
                    <li key={index}>
                      <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`bringer-socials-${social.platform}`}
                      >
                        <i></i>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Widgets */}
            {widgets.map((widget, index) => (
              <div
                key={index}
                className={`stg-col-2 ${
                  index === 0 ? "stg-offset-1" : ""
                } stg-tp-col-4 stg-m-col-4`}
              >
                <div className="bringer-widget">
                  <h6>{t(`footer.widgets.${widget.id}.title`)}</h6>
                  <div className="bringer-menu-widget">
                    <ul>
                      {widget.links.map((link, i) => (
                        <li key={i}>
                          {/* <NavLink to={link.url}>
                            {t(`footer.widgets.${widget.id}.links.${link.key}`)}
                          </NavLink> */}
                          <NavLink>
                            {t(`footer.widgets.${widget.id}.links.${link.key}`)}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bringer-footer-line stg-container">
        <div className="align-center">
          {t("footer.copyright", { year: 2025, company: company.name })}
        </div>
      </div>
    </footer>
  );
}
