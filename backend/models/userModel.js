const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  metaMaskAddress: { type: String, required: true },
  natId: { type: String, require: true, unique: true }
});

module.exports = User = mongoose.model("user", userSchema);

// legacy code!
/*
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
*/
