import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import rajImage from '../assets/img/about/raj.jpg';
import sanketImage from '../assets/img/about/sanket.jpg';
import riddhishImage from '../assets/img/about/riddhish.jpg';
import prafulImage from '../assets/img/about/praful.jpg';
import akhileshImage from '../assets/img/about/akhilesh.jpg';

import 'swiper/css';
import 'swiper/css/pagination';

const teamMembers = [
  
  {
    name: 'Riddhish Joshi',
    role: 'Co-Founder',
    image: riddhishImage,
    link: 'team-member.html',
  },
  {
    name: 'Sanket Ingle',
    role: 'Co-Founder',
    image: sanketImage,
    link: 'team-member.html',
  },
  {
    name: 'Raj Patil',
    role: 'CTO, Co-Founder',
    image: rajImage,
    link: 'team-member.html',
  },
  {
    name: 'Prafful Nadhe',
    role: 'Chief Financial Officer',
    image: prafulImage,
    link: 'team-member.html',
  },
  {
    name: 'Akhilesh Kokil',
    role: 'Senior Data Scientist',
    image: akhileshImage,
    link: 'team-member.html',
  },
  
  
];

const TeamSection = () => {
  return (
    <section>
      {/* Section Title */}
      <div className="stg-row bringer-section-title">
        <div className="stg-col-8 stg-offset-2 stg-tp-col-10 stg-tp-offset-1">
          <div className="align-center">
            <h2 data-appear="fade-up" data-unload="fade-up">Meet the Team</h2>
            <p
              className="bringer-large-text"
              data-split-appear="fade-up"
              data-split-unload="fade-up"
              data-delay="100"
            >
              We are a team of passionate and experienced designers, developers, and marketers who specialize in helping businesses achieve their goals.
            </p>
            <br/>
          </div>
        </div>
      </div>

      {/* Team Carousel */}
      <Swiper
        className="swiper bringer-carousel"
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={3}
        pagination={{ clickable: true, el: '.swiper-pagination' }}
        data-appear="fade-up"
        data-delay="200"
        data-tp-centered="0"
        data-unload="fade-up"
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {teamMembers.map((member, index) => (
          <SwiperSlide key={index}>
            <div className="bringer-block bringer-carousel-card swiper-slide">
              <div className="bringer-carousel-card-image">
                <img
                  className="bringer-image"
                  // src="img/null.png"
                  src={member.image}
                  alt={member.name}
                  width="600"
                  height="700"
                />
                
              </div>
              <div className="bringer-carousel-card-footer">
                <div className="bringer-carousel-card-title">
                  <span className="bringer-meta">{member.role}</span>
                  <h6>{member.name}</h6>
                </div>
                <span className="bringer-icon bringer-icon-explore"></span>
              </div>
              <a href={member.link}></a>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-pagination bringer-dots"></div>
      </Swiper>
    </section>
  );
};

export default TeamSection;
