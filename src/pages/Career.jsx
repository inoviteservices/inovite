import React, { useState } from 'react';
import axios from 'axios';

const Career = () => {
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
  const [showForm, setShowForm] = useState(false);

  const internshipRoles = [
    'Web Developer Intern',
    'Data Analyst Intern',
    'UI/UX Designer Intern',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post('https://inovite.pythonanywhere.com/api/submit/', formData);
      alert(`🚀 Successfully applied for the ${formData.internship_interest} internship! We’ll get in touch soon.`);
      setFormData({
        name: '',
        email: '',
        degree: '',
        college_name: '',
        resume_link: '',
        internship_interest: '',
        skills_known: '',
      });
      setShowForm(false);
    } catch (error) {
      alert('❌ Something went wrong. Please try again.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="stg-container">
      <style>{`
    .internship-button-group {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
      margin-bottom: 1rem;
    }

    .internship-btn {
      padding: 10px 18px;
      border: 1px solid #999;
      background: #fff;
      border-radius: 6px;
      cursor: pointer;
      transition: 0.2s;
    }

    .internship-btn:hover,
    .internship-btn.selected {
      background: #1a1a1a;
      color: #fff;
      border-color: #1a1a1a;
    }
  `}</style>
      <section id="internships">
        <div className="align-center stg-bottom-gap-l">
          <h2>Join Inovite: Career Tracks</h2>
          <p><strong>Explore the path that fits you best:</strong></p>
        </div>

        {!showForm && (
          <div className="bringer-grid-3cols" style={{ cursor: 'pointer' }}>
            <div
              className="bringer-role-card bringer-block"
              onClick={() => alert('Business Development Manager section coming soon.')}
            >
              <h4>Business Development Manager</h4>
            </div>
            <div
              className="bringer-role-card bringer-block"
              onClick={() => setShowForm(true)}
            >
              <h4>Internships</h4>
            </div>
          </div>
        )}

        {showForm && (
          <div className="bringer-job-apply-wrapper bringer-block mt-5">
            <h3>Apply for an Internship</h3>

            <form onSubmit={handleSubmit} className="bringer-contact-form mt-4">
              <div className="bringer-form-content">
                <label>Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

                <label>Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

                <label>Degree</label>
                <input
                  type="text"
                  name="degree"
                  value={formData.degree}
                  onChange={handleChange}
                  required
                />

                <label>College Name</label>
                <input
                  type="text"
                  name="college_name"
                  value={formData.college_name}
                  onChange={handleChange}
                  required
                />

                <label>Resume Link</label>
                <input
                  type="url"
                  name="resume_link"
                  value={formData.resume_link}
                  onChange={handleChange}
                  required
                />

                <label>Choose Your Internship</label>
                <div className="internship-button-group">
                  {internshipRoles.map((role, index) => (
                    <button
                      key={index}
                      type="button"
                      className={`internship-btn ${formData.internship_interest === role ? 'selected' : ''}`}
                      onClick={() =>
                        setFormData((prev) => ({
                          ...prev,
                          internship_interest: role,
                        }))
                      }
                    >
                      {role}
                    </button>
                  ))}
                </div>

                <label>Skills Known</label>
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
      </section>
    </div>
  );
};

export default Career;
