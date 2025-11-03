// PortfolioCarousel.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../../styles/PortfolioCarousel.css";
export default function PortfolioCarousel({ portfolioItems }) {
  return (
    <div className="bringer-carousel-wrapper">
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        pagination={{
          clickable: true,
          el: ".custom-swiper-pagination",
        }}
        autoplay={{ delay: 3000 }}
        modules={[Pagination, Autoplay]}
        className="bringer-carousel stg-bottom-gap-l"
      >
        {portfolioItems.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bringer-block bringer-portfolio-card">
              <div className="bringer-portfolio-card-image">
                <img
                  src={item.image}
                  alt={item.title}
                  width="1200"
                  height="1200"
                  className="bringer-lazy"
                />
              </div>
              <div className="bringer-portfolio-card-footer">
                <div className="bringer-portfolio-card-title">
                  <span className="bringer-meta">{item.category}</span>
                  <h6>{item.title}</h6>
                </div>
                <span className="bringer-icon bringer-icon-explore"></span>
              </div>
              <a href={item.link}></a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="custom-swiper-pagination"></div>
    </div>
  );
}
