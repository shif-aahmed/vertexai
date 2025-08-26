import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import blogsData from "../../blogs.json";

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

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const blogs = blogsData.blogs || blogsData; // Ensure we get the array
    const index = parseInt(id, 10) - 1;
    if (Array.isArray(blogs) && index >= 0 && index < blogs.length) {
      setBlog({
        ...blogs[index],
        image: images[index]
      });
    }
  }, [id]);

  if (!blog) return <h2>Blog not found</h2>;

  return (
    <div style={{ padding: "40px", maxWidth: "800px", margin: "0 auto" }}>
      <h1>{blog.title}</h1>
      <img
        src={blog.image}
        alt={blog.title}
        style={{ width: "100%", borderRadius: "10px", margin: "20px 0" }}
      />
      <p style={{ fontSize: "1rem", lineHeight: "1.8" }}>{blog.content}</p>
    </div>
  );
};

export default BlogDetail;
