const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
  username: {
      type: String,
      unique: true,
      unique: true,
  },
  password: {
      type: String,
      unique: true,
      unique: true,
  },
})

const Users = mongoose.model("Users", UsersSchema);

module.exports = Users;
