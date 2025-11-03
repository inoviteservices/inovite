import React from "react";

const ContactForm = () => {
  return (
    <form
      action="https://demo.shadow-themes.com/html/bringer/mail.php"
      method="post"
      className="bringer-contact-form bringer-block"
      data-fill-error="Please, fill out the contact form."
      data-appear="fade-right"
      data-threshold="0.25"
    >
      <div className="bringer-form-content">
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your Name"
          required
        />

        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="email@example.com"
          required
        />

        <label htmlFor="message">Your Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Your Message"
          required
        ></textarea>

        <button type="submit" value="Send Message">
          Get a FREE Quote
        </button>
        <div className="bringer-contact-form__response"></div>
      </div>
      <span className="bringer-form-spinner"></span>
    </form>
  );
};

export default ContactForm;
