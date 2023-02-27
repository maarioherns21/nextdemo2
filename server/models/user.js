import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  email: { type: String, unique: true },
  password: String,
  bio: String,
  image: String,
  createdAt: { type: Data, default: new Data() },
});

const Person = mongoose.model("Person", userSchema);

export default Person;
