import React, { useState } from "react";
import "./BlogsPage.css";
import HeroSection from "../../Components/HeroSection/HeroSection";

const BlogsPage = () => {
  // Blog state
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "The Future of AI in Everyday Life",
      content:
        "Artificial Intelligence is transforming industries, from healthcare to education. The future promises even more exciting applications...",
      author: "Admin",
    },
    {
      id: 2,
      title: "Ethics in AI: Why It Matters",
      content:
        "As AI grows more powerful, ethical considerations become critical. Fairness, transparency, and accountability are key pillars...",
      author: "Guest Writer",
    },
    {
      id: 3,
      title: "AI and Jobs: What’s Next?",
      content:
        "Automation and AI are changing the job market. While some roles may disappear, new opportunities are emerging in tech, healthcare, and creative industries...",
      author: "Tech Analyst",
    },
  ]);

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
  const [newBlog, setNewBlog] = useState({ title: "", content: "", author: "" });

  // Selected blog
  const [selectedBlog, setSelectedBlog] = useState(blogs[0]);

  // Handle login
  const handleLogin = (e) => {
    e.preventDefault();
    if (loginForm.email && loginForm.password) {
      setIsLoggedIn(true);
      setShowLogin(false);
    }
  };

  // Handle signup
  const handleSignup = (e) => {
    e.preventDefault();
    if (signupForm.name && signupForm.email && signupForm.password) {
      setIsLoggedIn(true);
      setShowLogin(false);
      setIsSignup(false);
    }
  };

  // Handle new blog
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newBlog.title || !newBlog.content || !newBlog.author) return;

    const newEntry = {
      id: blogs.length + 1,
      title: newBlog.title,
      content: newBlog.content,
      author: newBlog.author,
    };

    setBlogs([newEntry, ...blogs]);
    setNewBlog({ title: "", content: "", author: "" });
    setSelectedBlog(newEntry); // show new blog on main
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
          <p>Read stories, insights, and updates from the world of AI and beyond.</p>
          {!isLoggedIn && (
            <button className="write-btn" onClick={() => setShowLogin(true)}>
              ✍️ Write a Blog
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
                onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
                required
              />
              <textarea
                name="content"
                placeholder="Write your content here..."
                value={newBlog.content}
                onChange={(e) => setNewBlog({ ...newBlog, content: e.target.value })}
                required
              />
              <input
                type="text"
                name="author"
                placeholder="Your Name"
                value={newBlog.author}
                onChange={(e) => setNewBlog({ ...newBlog, author: e.target.value })}
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
                key={blog.id}
                className={`blog-title ${selectedBlog?.id === blog.id ? "active" : ""}`}
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
              {!isSignup ? (
                <>
                  <h2>Login to Write</h2>
                  <form onSubmit={handleLogin}>
                    <input
                      type="email"
                      placeholder="Email"
                      value={loginForm.email}
                      onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                      required
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      value={loginForm.password}
                      onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
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
                    Don’t have an account?{" "}
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
                      onChange={(e) => setSignupForm({ ...signupForm, name: e.target.value })}
                      required
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      value={signupForm.email}
                      onChange={(e) => setSignupForm({ ...signupForm, email: e.target.value })}
                      required
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      value={signupForm.password}
                      onChange={(e) => setSignupForm({ ...signupForm, password: e.target.value })}
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
