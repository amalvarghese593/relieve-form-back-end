const catchAsync = require("../../utils/catchAsync");
const ErrorResponse = require("../../utils/errorResponse");
const EmployeeService = require("./employeeService");
// const fs = require("fs");

const employeeService = new EmployeeService();

exports.addEmployee = catchAsync(async (req, res, next) => {
  const employeeFile = await employeeService.addEmployee(req.body);
  return res.download(employeeFile, "relieve-letter.pdf", (err) => {
    if (err) throw new ErrorResponse(500, "couldn't download file");
    else {
      console.log("file downloaded successfully");
      // fs.unlinkSync(employeeFile);
    }
  });
});
