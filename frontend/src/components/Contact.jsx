import React, { useState } from "react";
import "../Styles/Contact.css";

// Base URL of your deployed backend API.
// Set REACT_APP_API_URL in a .env file (or your Netlify site's env vars).
// Example: REACT_APP_API_URL=https://your-backend.onrender.com
const API_URL = process.env.REACT_APP_API_URL || "https://social-media-backend-2zm2.onrender.com";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({ loading: false, error: "" });

  // 🔹 Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // 🔹 Submit form to backend, which stores it in MongoDB
  const submitHandler = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, error: "" });

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send message.");
      }

      alert("Your Message has been Sent ✅");

      // Clear form after submission
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setStatus({ loading: false, error: "" });
    } catch (err) {
      setStatus({ loading: false, error: err.message });
      alert(`❌ ${err.message}`);
    }
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <p>Let’s build something amazing together!</p>

      <form className="contact-form" onSubmit={submitHandler}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit" disabled={status.loading}>
          {status.loading ? "Sending..." : "Send Message"}
        </button>
      </form>

      {/* 🔹 Contact Links */}
      <div className="contact-links">
        <p>
          Email:{" "}
          <a href="mailto:vishalshanmugam928@example.com">
            vishalshanmugam928@example.com
          </a>
        </p>

        <p>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/vishal-vishal-3711ba293/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn Profile
          </a>
        </p>

        <p>
          GitHub:{" "}
          <a
            href="https://github.com/vishal-viji"
            target="_blank"
            rel="noreferrer"
          >
            Github Profile
          </a>
        </p>
      </div>
    </section>
  );
}

export default Contact;
