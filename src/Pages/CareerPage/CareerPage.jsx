// File: CareerPage.jsx
import React, { useState, useRef, useEffect } from "react";
import "./CareerPage.css";
import HeroSection from "../../Components/HeroSection/HeroSection";

export default function CareerPage() {
  const [applicants, setApplicants] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    role: "Frontend Developer",
    pitch: "",
  });
  const [file, setFile] = useState(null);
  const [errors, setErrors] = useState({});
  const fileInputRef = useRef(null);

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

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Full name is required.";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      e.email = "Please enter a valid email.";
    if (!form.phone.trim()) e.phone = "Phone number is required.";
    if (!form.pitch.trim()) e.pitch = "Tell us a little about yourself.";
    if (!file) e.file = "Please upload your CV (PDF or DOC).";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleFileChange(e) {
    const f = e.target.files[0];
    if (!f) return setFile(null);
    const allowed = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    if (!allowed.includes(f.type)) {
      setErrors((prev) => ({
        ...prev,
        file: "Accepted formats: PDF, DOC, DOCX.",
      }));
      setFile(null);
      return;
    }
    setErrors((prev) => ({ ...prev, file: null }));
    setFile(f);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;

    const id = Date.now();
    const url = URL.createObjectURL(file);
    const newApplicant = {
      id,
      ...form,
      fileName: file.name,
      fileUrl: url,
      submittedAt: new Date().toISOString(),
    };

    setApplicants((prev) => [newApplicant, ...prev]);

    // Reset form but keep role
    setForm({
      name: "",
      email: "",
      phone: "",
      role: form.role,
      pitch: "",
    });
    setFile(null);
    fileInputRef.current.value = null;
    setErrors({});
  }

  // Login handler
  const handleLogin = (e) => {
    e.preventDefault();
    if (loginForm.email && loginForm.password) {
      setIsLoggedIn(true);
      setShowLogin(false);
    }
  };

  // Signup handler
  const handleSignup = (e) => {
    e.preventDefault();
    if (signupForm.name && signupForm.email && signupForm.password) {
      setIsLoggedIn(true);
      setShowLogin(false);
      setIsSignup(false);
    }
  };

  // Scroll-triggered animation effect
  useEffect(() => {
    const elements = document.querySelectorAll(".career-page .fade-on-scroll");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <>
      <HeroSection
        heading1="Join VertexAI"
        heading2="Build the Future of Intelligent Apps"
        heading3="We’re a small, fast-moving team focused on AI-powered tools and delightful experiences. Upload your CV and tell us how you can contribute to our mission."
        heading1Class="contact-heading1"
        heading2Class="contact-heading2"
        heading3Class="contact-heading3"
        showFeatureCards={false}
      />

      <div className="career-page">
        <header className="career-hero fade-on-scroll">
          <div className="hero-inner">
            <div className="hero-content">
              <h1 className="hero-title">
                Join VertexAI — Build the future of intelligent apps
              </h1>
              <p className="hero-sub">
                We’re a fast-moving team focused on friendly AI tools and
                delightful UX. Upload your CV and tell us about yourself.
              </p>
              {!isLoggedIn && (
                <button className="cta-btn" onClick={() => setShowLogin(true)}>
                  Apply Now
                </button>
              )}
            </div>
            <div className="hero-visual" aria-hidden>
              <div className="visual-card">
                <div className="visual-top">
                  careers at <strong>VertexAI</strong>
                </div>
                <div className="visual-body">
                  <div className="info-card">
                    <div className="info-title">Roles Available</div>
                    <div className="info-detail">Multiple positions</div>
                  </div>
                  <div className="info-card">
                    <div className="info-title">Work Type</div>
                    <div className="info-detail">Remote & Onsite</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="career-main">
          {/* Application form only visible after login/signup */}
          {isLoggedIn && (
            <section id="apply" className="apply-section fade-on-scroll visible">
              <div className="form-column">
                <h2>Apply — Upload your CV & pitch</h2>
                <p className="muted">
                  We read every submission. Please include a short paragraph
                  about what excites you and links to work (if any).
                </p>

                <form className="apply-form" onSubmit={handleSubmit} noValidate>
                  <div className="row">
                    <label className="field">
                      <span className="label">Full name</span>
                      <input
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        placeholder="Your full name"
                      />
                      {errors.name && (
                        <div className="error">{errors.name}</div>
                      )}
                    </label>
                    <label className="field">
                      <span className="label">Email</span>
                      <input
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        placeholder="you@domain.com"
                      />
                      {errors.email && (
                        <div className="error">{errors.email}</div>
                      )}
                    </label>
                  </div>

                  <div className="row">
                    <label className="field">
                      <span className="label">Phone</span>
                      <input
                        value={form.phone}
                        onChange={(e) =>
                          setForm({ ...form, phone: e.target.value })
                        }
                        placeholder="+1 555 555 555"
                      />
                      {errors.phone && (
                        <div className="error">{errors.phone}</div>
                      )}
                    </label>

                    <label className="field">
                      <span className="label">Role</span>
                      <select
                        value={form.role}
                        onChange={(e) =>
                          setForm({ ...form, role: e.target.value })
                        }
                        className="role-select"
                      >
                        <option>App Development</option>
                        <option>ML / AI Engineer</option>
                        <option>Digital Marketing</option>
                        <option>Blockchain Developer</option>
                        <option>Full Stack Developer</option>
                        <option>Web Development</option>
                        <option>Front End Developer</option>
                        <option>Graphic Designer</option>
                        <option>Editor</option>
                        <option>Other</option>
                      </select>
                    </label>
                  </div>

                  <label className="field">
                    <span className="label">Short pitch</span>
                    <textarea
                      value={form.pitch}
                      onChange={(e) =>
                        setForm({ ...form, pitch: e.target.value })
                      }
                      placeholder="Why do you want to join VertexAI? What would you build?"
                      rows={4}
                    />
                    {errors.pitch && (
                      <div className="error">{errors.pitch}</div>
                    )}
                  </label>

                  <label className="field file-field">
                    <span className="label">Upload CV</span>
                    <div className="file-input-wrap">
                      <input
                        ref={fileInputRef}
                        type="file"
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                      />
                      <div className="file-meta">
                        {file ? file.name : "No file chosen"}
                      </div>
                    </div>
                    {errors.file && (
                      <div className="error">{errors.file}</div>
                    )}
                  </label>

                  <div className="actions">
                    <button type="submit" className="btn-primary">
                      Submit application
                    </button>
                    <button
                      type="button"
                      className="btn-ghost"
                      onClick={() => {
                        setForm({
                          name: "",
                          email: "",
                          phone: "",
                          role: form.role,
                          pitch: "",
                        });
                        setFile(null);
                        fileInputRef.current.value = null;
                        setErrors({});
                      }}
                    >
                      Reset
                    </button>
                  </div>
                </form>
              </div>
            </section>
          )}

          <section className="values fade-on-scroll">
            <div className="values-inner">
              <div className="value">
                <h4>Small teams, big ownership</h4>
                <p>
                  Join a team that ships end-to-end — we expect engineers to own
                  features from idea to production.
                </p>
              </div>
              <div className="value">
                <h4>Flexible working</h4>
                <p>
                  Work remotely from wherever you're most productive. We meet
                  async and keep meetings focused.
                </p>
              </div>
              <div className="value">
                <h4>Focus on craft</h4>
                <p>
                  We value clean code, clear docs, and thoughtful design. We
                  review each other's work kindly.
                </p>
              </div>
            </div>
          </section>
        </main>

        {/* Login / Signup Overlay */}
        {showLogin && !isLoggedIn && (
          <div className="overlay">
            <div className="login-box">
              {!isSignup ? (
                <>
                  <h2>Login to Apply</h2>
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
                    <span
                      style={{ cursor: "pointer" }}
                      onClick={() => setIsSignup(true)}
                    >
                      Sign up
                    </span>
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
                    <span
                      style={{ cursor: "pointer" }}
                      onClick={() => setIsSignup(false)}
                    >
                      Login
                    </span>
                  </p>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
