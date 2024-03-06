const express = require("express");
const router = express.Router();
const emailController = require("../../controllers/emailController");

router.get("/", emailController.ping);

router.post("/", emailController.sendEmail);

module.exports = router;