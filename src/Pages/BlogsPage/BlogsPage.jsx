
// File: BlogsPage.jsx
import React, { useState, useEffect } from "react";
import "./BlogsPage.css";
import HeroSection from "../../Components/HeroSection/HeroSection";

const API_URL = "https://vertexai-backend-1.onrender.com/";

const BlogsPage = () => {
  // Blog state
  const [blogs, setBlogs] = useState([]);

  // Login / Signup state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [signupForm, setSignupForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Blog form
  const [newBlog, setNewBlog] = useState({
    title: "",
    content: "",
    author: "",
  });

  // Selected blog
  const [selectedBlog, setSelectedBlog] = useState(null);

  // Message state
  const [message, setMessage] = useState({ type: "", text: "" });

  // Token state
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  // Check if user is already logged in on mount
  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    if (savedToken) {
      setToken(savedToken);
      setIsLoggedIn(true);
    }
  }, []);

  // Fetch blogs on mount
  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await fetch(`${API_URL}/blogs`);
      const data = await res.json();
      if (res.ok) {
        setBlogs(data);
        if (data.length > 0) {
          setSelectedBlog(data[0]);
        }
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  // Handle login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginForm),
      });
      const data = await res.json();
      if (res.ok) {
        setToken(data.token);
        localStorage.setItem("token", data.token);
        setIsLoggedIn(true);
        setShowLogin(false);
        setMessage({ type: "success", text: "Login successful!" });
        setLoginForm({ email: "", password: "" });
      } else {
        setMessage({ type: "error", text: data.message || "Login failed" });
      }
    } catch (error) {
      setMessage({ type: "error", text: "Server error. Please try again." });
    }
  };

  // Handle signup
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API_URL}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(signupForm),
      });
      const data = await res.json();
      if (res.ok) {
        setMessage({
          type: "success",
          text: "Account created! Please login.",
        });
        setIsSignup(false);
        setSignupForm({ name: "", email: "", password: "" });
      } else {
        setMessage({ type: "error", text: data.message || "Signup failed" });
      }
    } catch (error) {
      setMessage({ type: "error", text: "Server error. Please try again." });
    }
  };

  // Handle logout
  const handleLogout = () => {
    setToken("");
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setMessage({ type: "", text: "" });
  };

  // Handle new blog
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newBlog.title || !newBlog.content) return;
    try {
      const res = await fetch(`${API_URL}/blogs`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title: newBlog.title,
          content: newBlog.content,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setNewBlog({ title: "", content: "", author: "" });
        fetchBlogs();
      } else {
        setMessage({
          type: "error",
          text: data.message || "Failed to create blog",
        });
      }
    } catch (error) {
      setMessage({ type: "error", text: "Server error. Please try again." });
    }
  };

  return (
    <>
      <HeroSection
        heading1="Explore Our Blogs"
        heading2="Insights, Stories, and Updates on AI"
        heading3="Discover ideas, perspectives, and the latest trends in artificial intelligence. Read inspiring blogs or share your own thoughts with the community."
        heading1Class="contact-heading1"
        heading2Class="contact-heading2"
        heading3Class="contact-heading3"
        showFeatureCards={false}
      />

      <div className="blogs-page">
        <div className="blogs-header">
          <h1>Our Blogs</h1>
          <p>
            Read stories, insights, and updates from the world of AI and beyond.
          </p>
          {!isLoggedIn && (
            <button className="write-btn" onClick={() => setShowLogin(true)}>
              ✍️ Write a Blog
            </button>
          )}
          {isLoggedIn && (
            <button className="write-btn" onClick={handleLogout}>
              Logout
            </button>
          )}
        </div>

        {/* Blog form (only visible if logged in) */}
        {isLoggedIn && (
          <div className="blog-form-container">
            <h2>Write a Blog</h2>
            <form className="blog-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="title"
                placeholder="Blog Title"
                value={newBlog.title}
                onChange={(e) =>
                  setNewBlog({ ...newBlog, title: e.target.value })
                }
                required
              />
              <textarea
                name="content"
                placeholder="Write your content here..."
                value={newBlog.content}
                onChange={(e) =>
                  setNewBlog({ ...newBlog, content: e.target.value })
                }
                required
              />
              <button type="submit">Publish</button>
            </form>
          </div>
        )}

        <div className="blogs-layout">
          {/* Sidebar with titles */}
          <aside className="blogs-sidebar">
            {blogs.map((blog) => (
              <div
                key={blog._id}
                className={`blog-title ${
                  selectedBlog?._id === blog._id ? "active" : ""
                }`}
                onClick={() => setSelectedBlog(blog)}
              >
                {blog.title}
              </div>
            ))}
          </aside>

          {/* Main content area */}
          <main className="blogs-main">
            {selectedBlog && (
              <div className="blog-card expanded">
                <h2>{selectedBlog.title}</h2>
                <p>{selectedBlog.content}</p>
                <span className="author">✍️ {selectedBlog.author}</span>
              </div>
            )}
          </main>
        </div>

        {/* Login / Signup Overlay */}
        {showLogin && !isLoggedIn && (
          <div className="overlay">
            <div className="login-box">
              {message.text && (
                <div className={`message-box ${message.type}`}>
                  {message.text}
                </div>
              )}
              {!isSignup ? (
                <>
                  <h2>Login to Write</h2>
                  <form onSubmit={handleLogin}>
                    <input
                      type="email"
                      placeholder="Email"
                      value={loginForm.email}
                      onChange={(e) =>
                        setLoginForm({
                          ...loginForm,
                          email: e.target.value,
                        })
                      }
                      required
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      value={loginForm.password}
                      onChange={(e) =>
                        setLoginForm({
                          ...loginForm,
                          password: e.target.value,
                        })
                      }
                      required
                    />
                    <div className="login-actions">
                      <button type="submit">Login</button>
                      <button
                        type="button"
                        className="cancel-btn"
                        onClick={() => setShowLogin(false)}
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                  <p className="switch-form">
                    Don't have an account?{" "}
                    <span onClick={() => setIsSignup(true)}>Sign up</span>
                  </p>
                </>
              ) : (
                <>
                  <h2>Create an Account</h2>
                  <form onSubmit={handleSignup}>
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={signupForm.name}
                      onChange={(e) =>
                        setSignupForm({
                          ...signupForm,
                          name: e.target.value,
                        })
                      }
                      required
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      value={signupForm.email}
                      onChange={(e) =>
                        setSignupForm({
                          ...signupForm,
                          email: e.target.value,
                        })
                      }
                      required
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      value={signupForm.password}
                      onChange={(e) =>
                        setSignupForm({
                          ...signupForm,
                          password: e.target.value,
                        })
                      }
                      required
                    />
                    <div className="login-actions">
                      <button type="submit">Sign Up</button>
                      <button
                        type="button"
                        className="cancel-btn"
                        onClick={() => setShowLogin(false)}
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                  <p className="switch-form">
                    Already have an account?{" "}
                    <span onClick={() => setIsSignup(false)}>Login</span>
                  </p>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default BlogsPage;
