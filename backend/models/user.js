const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  metaMaskAddress: { type: String, required: true },
  natId: { type: String, require: true }
});

userSchema.plugin(uniqueValidator);
module.exports = mongoose.model("User", userSchema);
