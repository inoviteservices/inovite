import React from "react";

export default function ServiceList({ imgSrc, alt, title, description }) {
  return (
    <div className="bringer-lwp-item bringer-block" data-appear="fade-left">
      <img src={imgSrc} alt={alt} width="800" height="1200" />
      <div className="bringer-lwp-item-content">
        <h5>
          {title}
          <span className="bringer-accent">.</span>
        </h5>
        <p>{description}</p>
      </div>
    </div>
  );
}
