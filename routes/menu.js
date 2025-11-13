const express = require("express");
const router = express.Router();
const menuModule = require("../module/menu.module");

router.get("/", async (req, res) => {
  const response = await menuModule.getMenuItems();
  res.json(response);
});

module.exports = router;
