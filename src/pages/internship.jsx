import React from "react";
import { useTranslation } from "react-i18next";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Internship() {
  const { t } = useTranslation();

  // Formik form setup with validation schema using Yup
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      college: "",
      year: "",
      course: "",
      resume: "",
      skills: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required(t("internship.form.validation.nameRequired")),
      email: Yup.string()
        .email(t("internship.form.validation.emailInvalid"))
        .required(t("internship.form.validation.emailRequired")),
      college: Yup.string().required(
        t("internship.form.validation.collegeRequired")
      ),
      year: Yup.number()
        .required(t("internship.form.validation.yearRequired"))
        .min(2022, t("internship.form.validation.yearMin"))
        .max(2100, t("internship.form.validation.yearMax")),
      course: Yup.string().required(
        t("internship.form.validation.courseRequired")
      ),
      resume: Yup.string()
        .url(t("internship.form.validation.resumeInvalid"))
        .required(t("internship.form.validation.resumeRequired")),
      skills: Yup.string().required(
        t("internship.form.validation.skillsRequired")
      ),
    }),
    onSubmit: (values) => {
      console.log("Form submitted with values:", values);
      alert(t("internship.form.successMessage"));
    },
  });

  return (
    <div className="stg-container">
      <section className="backlight-bottom">
        {/* Section Title */}
        <div className="stg-row bringer-section-title">
          <div className="stg-col-8 stg-offset-2">
            <div className="align-center mt-4">
              {" "}
              {/*<br /> <br />*/}
              <h2 data-appear="fade-up" data-unload="fade-up">
                {t("internship.title")}
              </h2>
              <p
                className="bringer-large-text"
                data-appear="fade-up"
                data-delay="100"
                data-unload="fade-up"
              >
                Kickstart your career with real-world experience! Fill in the
                details below to apply for our internship program.
              </p>{" "}
              <br />
            </div>
          </div>
        </div>

        {/* Application Form */}
        <div
          className="bringer-grid-2cols bringer-tp-grid-1col"
          data-appear="fade-up"
          data-delay="200"
          data-unload="fade-up"
        >
          <div className="bringer-block" style={{ gridColumn: "span 2" }}>
            <form onSubmit={formik.handleSubmit}>
              <div className="row g-3">
                {/* Full Name */}
                <div className="col-md-6">
                  <label htmlFor="name" className="form-label">
                    {t("internship.form.name")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className={`form-control ${
                      formik.touched.name && formik.errors.name
                        ? "is-invalid"
                        : ""
                    }`}
                    placeholder={t("internship.form.namePlaceholder")}
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    required
                  />
                  {formik.touched.name && formik.errors.name ? (
                    <div className="invalid-feedback">{formik.errors.name}</div>
                  ) : null}
                </div>{" "}
                <br />
                {/* Email */}
                <div className="col-md-6">
                  <label htmlFor="email" className="form-label">
                    {t("internship.form.email")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={`form-control ${
                      formik.touched.email && formik.errors.email
                        ? "is-invalid"
                        : ""
                    }`}
                    placeholder={t("internship.form.emailPlaceholder")}
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    required
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className="invalid-feedback">
                      {formik.errors.email}
                    </div>
                  ) : null}
                </div>
                <br />
                {/* College Name */}
                <div className="col-md-6">
                  <label htmlFor="college" className="form-label">
                    {t("internship.form.college")}
                  </label>
                  <input
                    type="text"
                    id="college"
                    name="college"
                    className={`form-control ${
                      formik.touched.college && formik.errors.college
                        ? "is-invalid"
                        : ""
                    }`}
                    placeholder={t("internship.form.collegePlaceholder")}
                    value={formik.values.college}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    required
                  />
                  {formik.touched.college && formik.errors.college ? (
                    <div className="invalid-feedback">
                      {formik.errors.college}
                    </div>
                  ) : null}
                </div>
                <br />
                {/* Completion Year */}
                <div className="col-md-6">
                  <label htmlFor="year" className="form-label">
                    {t("internship.form.year")}
                  </label>
                  <input
                    type="number"
                    id="year"
                    name="year"
                    className={`form-control ${
                      formik.touched.year && formik.errors.year
                        ? "is-invalid"
                        : ""
                    }`}
                    placeholder={t("internship.form.yearPlaceholder")}
                    value={formik.values.year}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    required
                  />
                  {formik.touched.year && formik.errors.year ? (
                    <div className="invalid-feedback">{formik.errors.year}</div>
                  ) : null}
                </div>
                <br />
                {/* Course Name */}
                <div className="col-md-6">
                  <label htmlFor="course" className="form-label">
                    {t("internship.form.course")}
                  </label>
                  <input
                    type="text"
                    id="course"
                    name="course"
                    className={`form-control ${
                      formik.touched.course && formik.errors.course
                        ? "is-invalid"
                        : ""
                    }`}
                    placeholder={t("internship.form.coursePlaceholder")}
                    value={formik.values.course}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    required
                  />
                  {formik.touched.course && formik.errors.course ? (
                    <div className="invalid-feedback">
                      {formik.errors.course}
                    </div>
                  ) : null}
                </div>
                <br />
                {/* Resume Link */}
                <div className="col-md-6">
                  <label htmlFor="resume" className="form-label">
                    {t("internship.form.resume")}
                  </label>
                  <input
                    type="url"
                    id="resume"
                    name="resume"
                    className={`form-control ${
                      formik.touched.resume && formik.errors.resume
                        ? "is-invalid"
                        : ""
                    }`}
                    placeholder={t("internship.form.resumePlaceholder")}
                    value={formik.values.resume}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    required
                  />
                  {formik.touched.resume && formik.errors.resume ? (
                    <div className="invalid-feedback">
                      {formik.errors.resume}
                    </div>
                  ) : null}
                </div>
                <br />
                {/* Skills */}
                <div className="col-12">
                  <label htmlFor="skills" className="form-label">
                    {t("internship.form.skills")}
                  </label>
                  <input
                    type="text"
                    id="skills"
                    name="skills"
                    className={`form-control ${
                      formik.touched.skills && formik.errors.skills
                        ? "is-invalid"
                        : ""
                    }`}
                    placeholder={t("internship.form.skillsPlaceholder")}
                    value={formik.values.skills}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    required
                  />
                  {formik.touched.skills && formik.errors.skills ? (
                    <div className="invalid-feedback">
                      {formik.errors.skills}
                    </div>
                  ) : null}
                </div>
                <br />
                {/* Submit Button */}
                <div className="col-12  ">
                  <button
                    type="submit"
                    className="btn btn-primary p-3  mt-2"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
