const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const User = require("../models/userModel");
require("dotenv").config();

router.post("/sign", async (req, res) => {
  try {
    let { email, password, metaMaskAddress, natId } = req.body;

    // validate

    if (!email || !password || !metaMaskAddress || !natId)
      return res.status(400).json({ msg: "Not all fields have been entered." });
    if (password.length < 5)
      return res.status(400).json({
        msg: "The password needs to be at least 5 characters long, try again!"
      });

    const existingUser = await User.findOne({ natId: natId });
    if (existingUser)
      return res
        .status(400)
        .json({ msg: "An account with this National ID already exists." });

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new User({
      email,
      password: passwordHash,
      metaMaskAddress,
      natId
    });
    const savedUser = await newUser.save();
    res.json(savedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { natId, password } = req.body;

    // validate
    if (!natId || !password)
      return res.status(400).json({ msg: "Not all fields have been entered." });

    const user = await User.findOne({ natId: natId });
    if (!user)
      return res
        .status(400)
        .json({ msg: "No account with this National ID has been registered." });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials." });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.json({
      token,
      user: {
        id: user._id,
        natId: user.natId,
        metaMaskAddress: user.metaMaskAddress
      }
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete("/delete", auth, async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.user);
    res.json(deletedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/tokenIsValid", async (req, res) => {
  try {
    const token = req.header("x-auth-token");
    if (!token) return res.json(false);

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) return res.json(false);

    const user = await User.findById(verified.id);
    if (!user) return res.json(false);

    return res.json(true);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/", auth, async (req, res) => {
  const user = await User.findById(req.user);
  res.json({
    id: user._id,
    natId: user.natId,
    metaMaskAddress: user.metaMaskAddress
  });
});

module.exports = router;

// legacy code!
/*
const express = require("express");
const router = express.Router();

const userCtrl = require("../controllers/user");

router.post("/sign", userCtrl.sign);
router.post("/login", userCtrl.login);

module.exports = router;
*/
