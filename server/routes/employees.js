const express = require("express");

const {getAllEmployees} = require("../controller/employees");
const router = express.Router();

router.get("/list",getAllEmployees);

module.exports = router;