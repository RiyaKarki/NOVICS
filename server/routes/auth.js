// routes/auth.js

const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Signup route (already done)

// Login route
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const existingUser = await User.findOne({ username });
    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, existingUser.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: existingUser._id }, process.env.JWT_SECRET, {
      expiresIn: "3d",
    });

    res.status(200).json({
      message: "Login successful",
      token,
      user: { id: existingUser._id, username: existingUser.username },
    });
  } catch (error) {
    res.status(500).json({ message: "Login failed", error });
  }
});

module.exports = router;
