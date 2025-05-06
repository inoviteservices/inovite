import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BlogDetail = () => {
  const { id } = useParams(); // Get the blog ID from the URL
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    // Fetch the blog details based on the ID
    axios.get(`https://inovite.pythonanywhere.com/api/blog/${id}/`)
      .then((res) => setBlog(res.data))
      .catch((err) => console.error('Error fetching blog details:', err));
  }, [id]); // Runs whenever the ID changes

  if (!blog) {
    return <p>Loading...</p>;
  }

  return (
    <div className="stg-container">
      <section className="backlight-both">
        {/* Blog Detail */}
        <div className="stg-row stg-bottom-gap-l">
          <div className="stg-col-12">
            <h2>{blog.title}</h2>
            <span className="bringer-label">{new Date(blog.timestamp).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}</span>
            <div className="bringer-parallax-media">
              <img
                src={blog.image_path || "..\assets\img\blog\blog.jpeg"}
                alt={blog.title}
                width="960"
                height="960"
              />
            </div>
            <br></br>
            {(blog.description || "").split('\n').map((para, idx) => (
  <p key={idx}>{para.trim()}</p>
))}
            {/* Add other details like author if available */}
            <p>Author: {blog.author_name || 'Unknown'}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetail;
