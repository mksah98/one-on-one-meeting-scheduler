const express = require("express");

const { getAllActionItems} = require("../controller/action_items");
const router = express.Router();

router.get("/list",getAllActionItems);

module.exports = router;