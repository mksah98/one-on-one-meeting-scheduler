const express = require("express");

const {getAllMeetings} = require("../controller/meetings");
const router = express.Router();

router.get("/list",getAllMeetings);

module.exports = router;