const express = require("express");

const {getAllFeedbacks} = require("../controller/feedbacks");
const router = express.Router();

router.get("/list",getAllFeedbacks);

module.exports = router;