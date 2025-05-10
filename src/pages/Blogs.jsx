import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import defaultblogimage from '../assets/img/blog/blog.jpeg';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get('https://inovite.pythonanywhere.com/api/blog/list/')
      .then((res) => setBlogs(res.data))
      .catch((err) => console.error('Error fetching blogs:', err));
  }, []);

  return (
    <div className="stg-container">
      <section className="backlight-both">
        {/* Section Title */}
        <div className="stg-row stg-bottom-gap-l">
          <div className="stg-col-7">
            <h2 data-split-appear="fade-up" data-unload="fade-up">
              Here’s how we turn thoughts into thriving trends:
            </h2>
          </div>
          <div className="stg-col-5"></div>
        </div>

        {/* Dynamic Blog Rows */}
        {blogs.length > 0 ? (
          blogs.map((blog, index) => (
            <div
              className={`stg-row stg-bottom-gap stg-valign-middle stg-m-bottom-gap-l`}
              data-unload="fade-left"
              key={blog.id}
            >
              {/* Blog Media */}
              <div
                className={`stg-col-6 stg-tp-col-6 ${index % 2 === 0 ? '' : 'stg-tp-col-6 stg-m-bottom-gap'}`}
                data-appear="fade-right"
              >
                <div className="bringer-parallax-media">
                <img
  src={blog.image_path}
  alt={blog.title}
  width="960"
  height="960"
  onError={(e) => {
    e.target.onerror = null;
    e.target.src = defaultblogimage;
  }}
/>

                </div>
              </div>

              {/* Blog Content */}
              <div
                className={`stg-col-6 stg-tp-col-6 ${index % 2 !== 0 ? '' : 'stg-tp-col-6 stg-m-bottom-gap'}`}
                data-appear="fade-left"
                data-delay="100"
              >
<span className="bringer-label">
  {blog.timestamp
    ? new Date(blog.timestamp).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    : 'March 14, 2024'}
</span>
<h4>
  {(blog.title || defaultTitle).length > 55
    ? `${(blog.title || defaultTitle).slice(0, 55)}...`
    : blog.title || defaultTitle}
</h4>
                <p>
  {(blog.description || defaultDesc).length > 280
    ? `${(blog.description || defaultDesc).slice(0, 280)}...`
    : blog.description || defaultDesc}
</p>
<Link to={`/blog/${blog.id}`} className="bringer-icon-link">
  <div className="bringer-icon-wrap">
    <i className="bringer-icon bringer-icon-explore"></i>
  </div>
</Link>

          </div>
              
            </div>
            
          ))
        ) : (
          <p style={{ textAlign: 'center', padding: '2rem' }}>
            No blogs found. Be the first to post something epic! 🚀
          </p>
        )}
      </section>
    </div>
  );
};

export default Blogs;
