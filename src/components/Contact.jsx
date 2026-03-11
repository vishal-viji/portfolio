import React, { useState, useEffect } from "react";
import "../Styles/Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // 🔹 Restore last saved message from localStorage when component loads
  useEffect(() => {
    const savedMessages =
      JSON.parse(localStorage.getItem("contactMessages")) || [];

    if (savedMessages.length > 0) {
      const lastMessage = savedMessages[savedMessages.length - 1];

      setFormData({
        name: lastMessage.name || "",
        email: lastMessage.email || "",
        message: lastMessage.message || "",
      });
    }
  }, []);

  // 🔹 Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // 🔹 Submit form & store in localStorage
  const submitHandler = (e) => {
    e.preventDefault();

    const storedMessages =
      JSON.parse(localStorage.getItem("contactMessages")) || [];

    const newMessage = {
      ...formData,
      createdAt: new Date().toISOString(),
    };

    storedMessages.push(newMessage);

    localStorage.setItem(
      "contactMessages",
      JSON.stringify(storedMessages)
    );

    alert("Your Message has been Sent ✅");

    // Clear form after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
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

        <button type="submit">Send Message</button>
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
