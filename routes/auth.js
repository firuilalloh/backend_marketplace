const express = require("express");
const router = express.Router();

const { register, login } = require("../controller/auth.controller");
const authMiddleware = require("../middleware/auth.middleware");

router.post("/register", register);
router.post("/login", login);

router.get("/profile", authMiddleware, (req, res) => {
  res.json({ user: req.user });
});

module.exports = router;
