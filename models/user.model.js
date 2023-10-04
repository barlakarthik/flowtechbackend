import mongoose from "mongoose";
const usermodel = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "please provide unique username"],
    unique: [true, "username exist"],
  },
  password: {
    type: String,
    required: [true, "please provide password"],
  },
  email: {
    type: String,
    required: [true, "please provide unique email"],
    unique: true,
  },
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  organization: {
    type: String,
  },
  mobile: {
    type: Number,
  },
  address: {
    type: String,
  },
  profile: {
    type: String,
  },
  role: {
    type: Object,
    required: true,
  },
});
const User = mongoose.model("user", usermodel);
export default User;
