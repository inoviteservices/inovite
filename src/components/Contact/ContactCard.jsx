import React from "react";

const ContactCard = ({
  href,
  title,
  subtitle,
  description,
  aspectClass = "stg-aspect-square",
}) => {
  return (
    <div className={`bringer-block ${aspectClass} stg-vertical-space-between`}>
      <a href={href} className="bringer-grid-item-link"></a>
      <div>
        <h5>
          {title}
          <span className="bringer-accent">.</span>
        </h5>
        <h6 dangerouslySetInnerHTML={{ __html: subtitle }}></h6>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default ContactCard;
