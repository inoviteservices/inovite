import React from "react";

export default function TestimonialCard({
  description,
  name,
  position,
  rating,
}) {
  return (
    <div
      className="bringer-block bringer-tetimonials-card"
      data-appear="zoom-out"
      data-unload="fade-right"
      data-threshold="0.75"
    >
      <div className="bringer-tetimonials-card-descr">"{description}"</div>
      <div className="bringer-tetimonials-card-footer">
        <div className="bringer-tetimonials-card-name">
          <h6>{name}</h6>
          <span className="bringer-meta">{position}</span>
        </div>
        <div className="bringer-tetimonials-card-rate">
          <span className={`bringer-tetimonials-stars${rating}`}></span>
        </div>
      </div>
    </div>
  );
}
