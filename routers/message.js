const express = require("express");
const message = require("../controllers/message");
const router = express.Router();

router.get("/", message.get);
router.post("/", message.post);

module.exports = router;
