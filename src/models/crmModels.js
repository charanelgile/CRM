import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const ContactSchema = new Schema({
  firstName: {
    type: String,
    require: "Enter First Name",
  },
  lastName: {
    type: String,
    require: "Enter Last Name",
  },
  email: {
    type: String,
  },
  company: {
    type: String,
  },
  contactNumber: {
    type: Number,
  },
  creationDate: {
    type: Date,
    default: Date.now,
  },
});
