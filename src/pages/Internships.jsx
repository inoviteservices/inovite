import React, { useState } from 'react';
import axios from 'axios';

const Internships = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    degree: '',
    college_name: '',
    resume_link: '',
    internship_interest: '',
    skills_known: '',
  });

  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState(null); // Store the notification state

  const roles = [
    {
      title: 'Web Developer Intern',
      description:
        'You’ll work on both frontend and backend, building real-world apps using HTML, CSS, JS, React, Python, and Django.',
      details: ['Duration: 6 months', 'Mode: Remote/Pune', 'Mentorship: Yes, with experienced developers'],
    },
    {
      title: 'Data Analyst Intern',
      description:
        'Analyze datasets, generate dashboards, and help teams make data-driven decisions using Excel, Python, and Power BI.',
      details: ['Duration: 3 or 6 months', 'Mode: Remote', 'Certification: Opportunity to earn a certificate based on performance'],
    },
    {
      title: 'UI/UX Designer Intern',
      description:
        'Craft beautiful interfaces using Figma and Adobe XD. You’ll collaborate with devs to turn your designs into products.',
      details: ['Tools: Figma, Adobe XD', 'Creative Freedom: ✅', 'Mentorship: Yes, with seasoned designers'],
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setNotification(null); // Clear any existing notifications

    const payload = {
      name: formData.name,
      email: formData.email,
      degree: formData.degree,
      college_name: formData.college_name,
      resume_link: formData.resume_link,
      internship_interest: formData.internship_interest,
      skills_known: formData.skills_known,
    };

    try {
      const response = await axios.post(
        'https://inovite.pythonanywhere.com/api/submit/', 
        payload
      );
      

      setNotification({ type: 'success', message: `🚀 You've applied for the ${formData.internship_interest} internship. We’ll get back to you soon!` });
      setFormData({
        name: '',
        email: '',
        degree: '',
        college_name: '',
        resume_link: '',
        internship_interest: '',
        skills_known: '',
      });
    } catch (error) {
      setNotification({ type: 'error', message: '❌ Submission failed. Please try again.' });
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="stg-container">
      <section id="internships">
        <div className="align-center stg-bottom-gap-l">
          <h2 data-split-appear="fade-up">Internship Openings at Inovite</h2>
          <p className="bringer-large-text" data-appear="fade-up" data-delay="100">
            {/* Pick your vibe, show us your skills. */}
          </p>
          <p className="click-to-apply" data-appear="fade-up" data-delay="150">
            <strong>Click on a role to see more details and apply!</strong>
          </p>
        </div>

        <div className="bringer-grid-3cols" data-stagger-appear="fade" data-delay="150">
          {roles.map((role, i) => (
            <div
              key={i}
              className="bringer-role-card bringer-block"
              onClick={() => {
                setFormData((prev) => ({
                  ...prev,
                  internship_interest: role.title, 
                }));
                setNotification(null);
              }}
            >
              <h4>{role.title}</h4>
            </div>
          ))}
        </div>
        <br /><br />

        {formData.internship_interest && (
          <div className="bringer-job-apply-wrapper bringer-block mt-5">
            <h3>{formData.internship_interest}</h3>
            <p className="bringer-large-text">
              {roles.find((role) => role.title === formData.internship_interest).description}
            </p>
            <div className="job-details-no-bullets">
              {roles
                .find((role) => role.title === formData.internship_interest)
                .details.map((d, i) => (
                  <p key={i}>{d}</p>
                ))}
            </div>
            <br /><br />
            <form onSubmit={handleSubmit} className="bringer-contact-form mt-4">
              <div className="bringer-form-content">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

                <label htmlFor="degree">Degree</label>
                <input
                  type="text"
                  name="degree"
                  value={formData.degree}
                  onChange={handleChange}
                  required
                />

                <label htmlFor="college_name">College Name</label>
                <input
                  type="text"
                  name="college_name"
                  value={formData.college_name}
                  onChange={handleChange}
                  required
                />

                <label htmlFor="resume_link">Resume Link</label>
                <input
                  type="url"
                  name="resume_link"
                  value={formData.resume_link}
                  onChange={handleChange}
                  required
                />

                <label htmlFor="skills_known">Skills Known</label>
                <input
                  type="text"
                  name="skills_known"
                  value={formData.skills_known}
                  onChange={handleChange}
                  required
                />

                <button type="submit" disabled={loading}>
                  {loading ? 'Submitting...' : 'Apply Now'}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Pop-up Notification */}
        {notification && (
          <div className={`notification-popup ${notification.type}`}>
            <p>{notification.message}</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Internships;
