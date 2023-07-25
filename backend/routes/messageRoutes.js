const express = require("express");
const { protect } = require("../middlewares/authMiddleware");
const {
  sendMessage,
  allMessages,
} = require("../controllers/messageControllers");
const router = express.Router();

// for sending the message
router.route("/").post(protect, sendMessage);

// get message from single chat
router.route("/:chatId").get(protect, allMessages);

module.exports = router;
