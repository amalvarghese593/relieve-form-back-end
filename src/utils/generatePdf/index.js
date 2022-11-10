const pdf = require("html-pdf");
const ejs = require("ejs");
const path = require("path");
const { dateConverter } = require("../dateConverter");

module.exports.createPdf = function (employee) {
  let file;
  const todayDate = dateConverter();
  const todayDateString = `${todayDate.day}-${todayDate.month}-${todayDate.yr}`;
  const joiningDate = dateConverter(employee.joiningDate);
  const joiningDateString = `${joiningDate.month} ${joiningDate.day}, ${joiningDate.yr}`;
  const relievingDate = dateConverter(employee.relievingDate);
  const relievingDateString = `${relievingDate.month} ${relievingDate.day}, ${relievingDate.yr}`;

  return new Promise((resolve, reject) => {
    ejs.renderFile(
      path.join(__dirname, "../../views/pdfTemplate/index.ejs"),
      {
        employee,
        todayDateString,
        joiningDateString,
        relievingDateString,
        currentYear: todayDate.yr,
      },
      async (err, data) => {
        if (err) {
          console.log(err);
        } else {
          file = await exportHtmlToPdf(data);
          resolve(file);
        }
      }
    );
  });
};

const exportHtmlToPdf = (html) => {
  return new Promise((resolve, reject) => {
    pdf
      .create(html, {
        format: "Letter",
        orientation: "portrait",
      })
      .toBuffer((err, buffer) => {
        if (err) {
          reject(err);
        } else {
          resolve(buffer);
        }
      });
  });
};
