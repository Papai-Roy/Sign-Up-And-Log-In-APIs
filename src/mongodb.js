const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/Users")

  .then(() => {
    console.log("mongodb connected");
  })
  .catch(() => {
    console.log("failed to connect");
  });

const LogInSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  tel: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const collection = new mongoose.model("userdatas", LogInSchema);

module.exports = collection;
