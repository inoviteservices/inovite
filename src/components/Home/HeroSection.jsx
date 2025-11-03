import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";

export default function HeroSection() {
  const { t } = useTranslation();
  const [tags, setTags] = useState([]);

  useEffect(() => {
    axios.get("/data/tags.json").then((response) => {
      setTags(response.data);
    });
  }, []);

  return (
    <section className="backlight-bottom mt-4">
      <div className="bringer-hero-block bringer-hero-type03">
        {/* Hero Title */}
        <div className="bringer-hero-title-wrap">
          <h1
            className="bringer-page-title"
            data-split-appear="fade-up"
            data-split-delay="100"
            data-split-by="line"
            data-split-unload="fade-up"
          >
            {t("home.hero.title")}
          </h1>

          {/* 3D Robot */}
          <div
            className="stg-m-hide"
            data-appear="fade-left"
            data-unload="fade-right"
          >
            <div
              className="stg-m-hide robot-3d-wrap"
              data-appear="fade-left"
              data-unload="fade-right"
            >
              <model-viewer
                src="/img/home/robot_3d_character.glb"
                alt="3D Robot Character"
                auto-rotate
                camera-controls
              ></model-viewer>
            </div>
            <style>{`
              .robot-3d-wrap {
                display: flex;
                justify-content: flex-start;
                margin-left: -40px;
                margin-bottom: -40px;
                width: 400px;
                height: 250px;
                overflow: hidden;
              }
              .robot-3d-wrap model-viewer {
                width: 400px;
                height: 250px;
              }
            `}</style>
          </div>
        </div>

        {/* Hero Media */}
        <div className="bringer-hero-media-wrap bringer-masked-block">
          <div
            className="bringer-hero-media bringer-masked-media"
            data-appear="fade-right"
            data-unload="fade-left"
            data-delay="150"
            data-threshold="0"
          >
            <video
              src="/video/home03.mp4"
              poster="/img/home/home03-hero2.jpg"
              playsInline
              muted
              loop
              autoPlay
            />
          </div>

          {/* Hero Description */}
          <div className="bringer-hero-media-content bringer-masked-content at-top-right">
            <div
              className="bringer-hero-media-content-inner m-align-center"
              data-appear="fade-left"
              data-unload="fade-right"
              data-delay="100"
              data-threshold="0"
            >
              {t("home.hero.description")}
            </div>
          </div>

          {/* Tags List - Note: These come from JSON, so they won't be translated */}
          <ul
            className="bringer-tags-list"
            data-unload="fade-left"
            data-delay="150"
          >
            {tags.map((tag, index) => (
              <li key={index} data-appear="fade-up" data-delay={tag.delay}>
                <a href="#">{tag.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
