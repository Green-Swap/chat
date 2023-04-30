const express = require("express");
const message = require("../controllers/message");
const router = express.Router();
const authentService = require("../services/authentificationService");

router.get("/", authentService.tokenVerification, message.get);
router.post("/", authentService.tokenVerification, message.post);

module.exports = router;
