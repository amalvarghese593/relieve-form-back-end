const express = require("express");
const { addEmployee } = require("./employeeController");
const router = express.Router();

router.post("/add", addEmployee);

module.exports = router;
