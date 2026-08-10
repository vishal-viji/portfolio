const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

// POST /api/contact  -> save a new message
router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Name, email, and message are all required." });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Please enter a valid email address." });
    }

    const newContact = new Contact({ name, email, message });
    await newContact.save();

    res.status(201).json({ success: true, message: "Message saved successfully.", data: newContact });
  } catch (err) {
    console.error("Error saving contact message:", err.message);
    res.status(500).json({ error: "Something went wrong. Please try again later." });
  }
});

// GET /api/contact  -> fetch all messages (e.g. for you to view submissions)
router.get("/", async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, count: messages.length, data: messages });
  } catch (err) {
    console.error("Error fetching contact messages:", err.message);
    res.status(500).json({ error: "Something went wrong. Please try again later." });
  }
});

module.exports = router;
