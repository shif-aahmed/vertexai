// File: BlogsPage.jsx
import React, { useState, useEffect } from "react";
import "./BlogsPage.css";
import HeroSection from "../../Components/HeroSection/HeroSection";

// Firebase imports
import { auth, db } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { collection, addDoc, getDocs } from "firebase/firestore";

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
  const [newBlog, setNewBlog] = useState({ title: "", content: "", author: "" });

  // Selected blog
  const [selectedBlog, setSelectedBlog] = useState(null);

  // Message state
  const [message, setMessage] = useState({ type: "", text: "" });

  // Listen to Firebase Auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
    return () => unsubscribe();
  }, []);

  // Fetch blogs from Firestore
  useEffect(() => {
    const fetchBlogs = async () => {
      const snapshot = await getDocs(collection(db, "blogs"));
      const blogList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBlogs(blogList);
      if (blogList.length > 0) {
        setSelectedBlog(blogList[0]);
      }
    };
    fetchBlogs();
  }, []);

  // Format error messages into user-friendly text
  const formatErrorMessage = (errorCode, context) => {
    switch (errorCode) {
      case "auth/user-not-found":
        return "❌ Login failed: This account does not exist. Please sign up first.";
      case "auth/wrong-password":
        return "❌ Login failed: The password you entered is incorrect.";
      case "auth/invalid-email":
        return "❌ Login failed: Please enter a valid email address.";
      case "auth/email-already-in-use":
        return "❌ Signup failed: This email is already registered. Try logging in instead.";
      case "auth/weak-password":
        return "❌ Signup failed: Password should be at least 6 characters long.";
      default:
        return `❌ ${context} failed: Something went wrong. Please try again.`;
    }
  };

  // Handle login (Firebase)
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, loginForm.email, loginForm.password);
      setShowLogin(false);
      setMessage({ type: "success", text: "✅ Logged in successfully!" });
    } catch (error) {
      setMessage({
        type: "error",
        text: formatErrorMessage(error.code, "Login"),
      });
    }
  };

  // Handle signup (Firebase)
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(
        auth,
        signupForm.email,
        signupForm.password
      );
      setShowLogin(false);
      setIsSignup(false);
      setMessage({ type: "success", text: "✅ Account created successfully!" });
    } catch (error) {
      setMessage({
        type: "error",
        text: formatErrorMessage(error.code, "Signup"),
      });
    }
  };

  // Handle new blog
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newBlog.title || !newBlog.content || !newBlog.author) return;

    try {
      const docRef = await addDoc(collection(db, "blogs"), {
        ...newBlog,
        createdAt: new Date().toISOString(),
      });

      const newEntry = { id: docRef.id, ...newBlog };
      setBlogs([newEntry, ...blogs]);
      setNewBlog({ title: "", content: "", author: "" });
      setSelectedBlog(newEntry);

      setMessage({ type: "success", text: "✅ Blog published successfully!" });
    } catch (err) {
      setMessage({
        type: "error",
        text: "❌ Error saving blog. Please try again later.",
      });
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
              <input
                type="text"
                name="author"
                placeholder="Your Name"
                value={newBlog.author}
                onChange={(e) =>
                  setNewBlog({ ...newBlog, author: e.target.value })
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
                key={blog.id}
                className={`blog-title ${
                  selectedBlog?.id === blog.id ? "active" : ""
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
                        setLoginForm({ ...loginForm, email: e.target.value })
                      }
                      required
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      value={loginForm.password}
                      onChange={(e) =>
                        setLoginForm({ ...loginForm, password: e.target.value })
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
                      onChange={(e) =>
                        setSignupForm({ ...signupForm, name: e.target.value })
                      }
                      required
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      value={signupForm.email}
                      onChange={(e) =>
                        setSignupForm({ ...signupForm, email: e.target.value })
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
