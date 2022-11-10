const employeeRoute = require("../../components/employee/employeeRouter");

const express = require("express");
const router = express.Router();

router.use("/employee", employeeRoute);

module.exports = router;
