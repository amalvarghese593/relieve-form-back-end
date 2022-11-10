const app = require("./app");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const DB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connected to DB");
  } catch (err) {
    console.log("cant connect to DB", err);
  }
};
DB();

app.listen(process.env.PORT, () => {
  console.log(`Started listening on port ${process.env.PORT}`);
});
