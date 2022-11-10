const ErrorResponse = require("../../utils/errorResponse");
const { createPdf } = require("../../utils/generatePdf");
const { Employee } = require("./employeeModel");
const fs = require("fs");
const path = require("path");

class EmployeeService {
  async addEmployee(reqBody) {
    const isEmployeeAlreadyExist = await Employee.findOne({
      employeeId: reqBody.employeeId,
    });
    if (!isEmployeeAlreadyExist) {
      const employee = new Employee(reqBody);
      const doc = await employee.save();
      console.log("employee: ", doc);
      const file = await createPdf(doc);
      const filePath = path.join(
        __dirname + `../../../_data/${doc.name + doc.employeeId}.pdf`
      );
      return new Promise((resolve, reject) => {
        fs.writeFile(filePath, file, (err) => {
          if (err) {
            console.log(err);
            throw new ErrorResponse(500, "Couldn't write file");
          } else {
            console.log("file saved successfully");
            resolve(filePath);
          }
        });
      });
    } else throw new ErrorResponse(401, "Employee already exists");
  }
}
module.exports = EmployeeService;
