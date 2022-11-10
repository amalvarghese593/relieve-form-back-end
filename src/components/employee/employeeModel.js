const mongoose = require("mongoose");

const employeeSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  employeeId: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  performance: {
    type: String,
    required: true,
  },
  jobPosition: {
    type: String,
    required: true,
  },
  letterNumber: {
    type: String,
    required: true,
  },
  joiningDate: {
    type: Date,
    required: true,
  },
  relievingDate: {
    type: Date,
    required: true,
  },
});
const Employee = mongoose.model("employee", employeeSchema);
module.exports.Employee = Employee;
