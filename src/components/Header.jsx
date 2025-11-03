import React from "react";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t } = useTranslation();

  return (
    <header
      id="bringer-header"
      className="is-frosted is-sticky"
      data-appear="fade-down"
      data-unload="fade-up"
    >
      {/* Desktop Header */}
      <div className="bringer-header-inner">
        {/* Header Logo */}
        <div className="bringer-header-lp">
          <a href="/" className="bringer-logo">
            <img src="/img/logo.png" alt="bringer." width="88" height="24" />
          </a>
        </div>

        {/* Main Menu */}
        <div className="bringer-header-mp">
          <nav className="bringer-nav">
            <ul
              className="main-menu"
              data-stagger-appear="fade-down"
              data-stagger-delay="75"
            >
              <li>
                <a href="#">{t("menu.services")}</a>
                <ul className="sub-menu">
                  <li>
                    <a href="#">{t("menu.softwareDevelopment")}</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="#">{t("menu.softwareConsulting")}</a>
                      </li>
                      <li>
                        <a href="#">{t("menu.erpSoftware")}</a>
                      </li>
                      <li>
                        <a href="#">{t("menu.customCRM")}</a>
                      </li>
                      <li>
                        <a href="#">{t("menu.arVrDevelopment")}</a>
                      </li>
                      <li>
                        <a href="#">{t("menu.iotDevelopment")}</a>
                      </li>
                      <li>
                        <a href="#">{t("menu.microservices")}</a>
                      </li>
                      <li>
                        <a href="#">{t("menu.productDevelopment")}</a>
                      </li>
                      <li>
                        <a href="#">{t("menu.maintenanceSupport")}</a>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <a href="#">{t("menu.applicationDevelopment")}</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="#">{t("menu.webApplication")}</a>
                      </li>
                      <li>
                        <a href="#">{t("menu.customApplication")}</a>
                      </li>
                      <li>
                        <a href="#">{t("menu.applicationModernization")}</a>
                      </li>
                      <li>
                        <a href="#">{t("menu.applicationManagement")}</a>
                      </li>
                      <li>
                        <a href="#">{t("menu.applicationMaintenance")}</a>
                      </li>
                      <li>
                        <a href="#">{t("menu.cloudApplication")}</a>
                      </li>
                      <li>
                        <a href="#">{t("menu.applicationIntegration")}</a>
                      </li>
                      <li>
                        <a href="#">{t("menu.ecommerceApplication")}</a>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <a href="#">{t("menu.otherServices")}</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="#">{t("menu.mobileAppDevelopment")}</a>
                      </li>
                      <li>
                        <a href="#">{t("menu.hireDevelopers")}</a>
                      </li>
                      <li>
                        <a href="#">{t("menu.fullStackDevelopment")}</a>
                      </li>
                      <li>
                        <a href="#">{t("menu.saasDevelopment")}</a>
                      </li>
                      <li>
                        <a href="#">{t("menu.artificialIntelligence")}</a>
                      </li>
                      <li>
                        <a href="#">{t("menu.dataAnalytics")}</a>
                      </li>
                      <li>
                        <a href="#">{t("menu.businessIntelligence")}</a>
                      </li>
                      <li>
                        <a href="#">{t("menu.uxUiDesign")}</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li>
                <a href="#">{t("menu.industries")}</a>
                <ul className="sub-menu">
                  <li>
                    <a href="#">{t("menu.industries")}</a>
                    <ul className="sub-menu">
                      {/* Group 1 */}
                      <li>
                        <a href="#">{t("menu.businessServices")}</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="#">{t("menu.retail")}</a>
                          </li>
                          <li>
                            <a href="#">{t("menu.healthcare")}</a>
                          </li>
                          <li>
                            <a href="#">{t("menu.ecommerce")}</a>
                          </li>
                          <li>
                            <a href="#">{t("menu.education")}</a>
                          </li>
                          <li>
                            <a href="#">{t("menu.manufacturing")}</a>
                          </li>
                          <li>
                            <a href="#">{t("menu.realEstate")}</a>
                          </li>
                          <li>
                            <a href="#">{t("menu.logistics")}</a>
                          </li>
                          <li>
                            <a href="#">{t("menu.fintech")}</a>
                          </li>
                        </ul>
                      </li>

                      {/* Group 2 */}
                      <li>
                        <a href="#">{t("menu.lifestyleOnDemand")}</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="#">{t("menu.restaurantApp")}</a>
                          </li>
                          <li>
                            <a href="#">{t("menu.beautyLifestyle")}</a>
                          </li>
                          <li>
                            <a href="#">{t("menu.travelHospitality")}</a>
                          </li>
                          <li>
                            <a href="#">{t("menu.fitnessApp")}</a>
                          </li>
                          <li>
                            <a href="#">{t("menu.socialMediaApp")}</a>
                          </li>
                          <li>
                            <a href="#">{t("menu.beautyServicesApp")}</a>
                          </li>
                          <li>
                            <a href="#">{t("menu.onDemandApp")}</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  <li className="bringer-menu-divider"></li>

                  <li>
                    <a href="#">{t("menu.downloadEbook")}</a>
                  </li>
                </ul>
              </li>

              {/* Root Menu */}
              <li>
                <a href="#">{t("menu.discover")}</a>
                <ul className="sub-menu">
                  <li>
                    <a href="#">{t("menu.featured")}</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="#">{t("menu.visionRoadmap")}</a>
                      </li>
                      <li>
                        <a href="#">{t("menu.collaborationModels")}</a>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <a href="#">{t("menu.resources")}</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="#">{t("menu.stories")}</a>
                      </li>
                      <li>
                        <a href="#">{t("menu.caseStudy")}</a>
                      </li>
                      <li>
                        <a href="#">{t("menu.news")}</a>
                      </li>
                      <li>
                        <a href="/blog">{t("menu.blog")}</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li>
                <a href="#">{t("menu.company")}</a>
                <ul className="sub-menu">
                  <li>
                    <a href="#">{t("menu.teamExtension")}</a>
                  </li>
                  <li>
                    <a href="#">{t("menu.howWeWork")}</a>
                  </li>
                  <li>
                    <a href="#">{t("menu.aboutUs")}</a>
                  </li>
                  <li>
                    <a href="#">{t("menu.startup")}</a>
                  </li>
                  <li>
                    <a href="/contact">{t("menu.contactUs")}</a>
                  </li>
                </ul>
              </li>

              <li>
                <a href="#">{t("menu.careers")}</a>
                <ul className="sub-menu">
                  <li>
                    <a href="/careers/internship">{t("menu.internship")}</a>
                  </li>
                  <li>
                    <a href="#">{t("menu.jobs")}</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="/careers/jobs/tech">{t("menu.techRoles")}</a>
                      </li>
                      <li>
                        <a href="/careers/jobs/nontech">
                          {t("menu.nonTechRoles")}
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>

        {/* Header Right Section */}
        <div className="bringer-header-rp">
          <div
            className="bringer-header-actions"
            style={{ display: "flex", alignItems: "center", gap: "15px" }}
          >
            {/* CTA Button */}
            <a href="/contact" className="bringer-button">
              <b>{t("header.letsBuildTogether")}</b>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="bringer-mobile-header-inner">
        <a href="/" className="bringer-logo">
          <img src="/img/logo.png" alt="bringer." width="88" height="24" />
        </a>

        <a href="#" className="bringer-mobile-menu-toggler">
          <i className="bringer-menu-toggler-icon">
            <span></span>
            <span></span>
            <span></span>
          </i>
        </a>
      </div>
    </header>
  );
}
