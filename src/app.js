const routes = require("./routes/v1");
const { errorConverter, errorHandler } = require("./middleware/errorHandler");

const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/v1", routes);
app.use(errorConverter);
app.use(errorHandler);

module.exports = app;
