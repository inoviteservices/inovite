import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";

export default function Blogs() {
  const { t } = useTranslation();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios("/data/blogs.json")
      .then((response) => {
        setBlogs(response.data);
      })
      .catch((err) => console.error("Error loading blog data:", err));
  }, []);

  return (
    <div className="stg-container">
      <section className="backlight-both">
        {/* Section Title */}
        <div className="stg-row stg-bottom-gap-l">
          <div className="stg-col-7">
            <h2 data-split-appear="fade-up" data-unload="fade-up">
              {t("blogs.title")}
            </h2>
          </div>
          <div className="stg-col-5"></div>
        </div>

        {/* Blog List */}
        {blogs.length > 0 ? (
          blogs.map((blog) => (
            <div
              key={blog.id}
              className="stg-row stg-bottom-gap stg-valign-middle stg-m-bottom-gap-l"
              data-unload="fade-left"
            >
              {/* Blog Image */}
              <div
                className="stg-col-6 stg-tp-col-6 stg-m-bottom-gap"
                data-appear="fade-right"
              >
                <div className="bringer-parallax-media">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    width="960"
                    height="960"
                  />
                </div>
              </div>

              {/* Blog Content */}
              <div
                className="stg-col-6 stg-tp-col-6"
                data-appear="fade-left"
                data-delay="100"
              >
                <span className="bringer-label">{blog.date}</span>
                <h4>{blog.title}</h4>
                <p>{blog.description}</p>
                <a href={`/blog/${blog.id}`} className="bringer-icon-link">
                  <div className="bringer-icon-wrap">
                    <i className="bringer-icon bringer-icon-explore"></i>
                  </div>
                </a>
              </div>
            </div>
          ))
        ) : (
          <p style={{ textAlign: "center", padding: "2rem" }}>
            {t("blogs.noBlogsFound")}
          </p>
        )}
      </section>
    </div>
  );
}
