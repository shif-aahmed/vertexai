import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./BlogSection.css";
import blogsData from "../../blogs.json"; // Only title & content

// Keep your original images
import BlogImg1 from "../../assets/images/BlogImg1.jpg";
import BlogImg2 from "../../assets/images/BlogImg2.jpg";
import BlogImg3 from "../../assets/images/BlogImg3.jpg";
import BlogImg4 from "../../assets/images/BlogImg4.jpg";
import BlogImg5 from "../../assets/images/BlogImg5.jpg";
import BlogImg6 from "../../assets/images/BlogImg6.jpg";
import BlogImg7 from "../../assets/images/BlogImg7.jpg";

const images = [
  BlogImg1,
  BlogImg2,
  BlogImg3,
  BlogImg4,
  BlogImg5,
  BlogImg6,
  BlogImg7
];

const BlogSection = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [blogData, setBlogData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const blogs = blogsData.blogs || blogsData; // Ensure we get the array
    if (Array.isArray(blogs)) {
      const mergedData = blogs.map((blog, index) => ({
        id: (index + 1).toString(),
        title: blog.title,
        description: blog.content.substring(0, 80) + "...", // Short preview
        image: images[index]
      }));
      setBlogData(mergedData);
    }
  }, []);

  const handleNext = () => {
    if (startIndex + 3 < blogData.length) setStartIndex(startIndex + 1);
  };
  const handlePrev = () => {
    if (startIndex > 0) setStartIndex(startIndex - 1);
  };

  const visibleBlogs = blogData.slice(startIndex);

  return (
    <div className="blog-slider-wrapper" id="blogs">
      <div className="blog-slider1">
        <div className="blog-header">
          <h2 className="blog-heading">Insights & Knowledge From The Digital Domain</h2>
          <div className="header-right">
            <button className="arrow-btn" onClick={handlePrev}>
              <i className="ri-arrow-left-s-line" style={{ fontSize: "24px" }}></i>
            </button>
            <button className="arrow-btn" onClick={handleNext}>
              <i className="ri-arrow-right-s-line" style={{ fontSize: "24px" }}></i>
            </button>
          </div>
        </div>
        <div className="blog-slider">
          {visibleBlogs.map((item) => (
            <div
              className="blog-card"
              key={item.id}
              onClick={() => navigate(`/blog/${item.id}`)}
              style={{ cursor: "pointer" }}
            >
              <div className="blog-image-wrapper">
                <img src={item.image} alt={item.title} className="blog-image" />
              </div>
              <div className="blog-description">
                <p className="blog-title">{item.title}</p>
                <p className="blog-text">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
