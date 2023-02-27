import mongoose from "mongoose";

const Schema = mongoose.Schema;

const movieSchema = new Schema({
  name: String,
  body: String,
  creator: String,
  image: String,
  comments: { type: [String], default: [] },
  likes: { type: [String], default: [] },
  createdAt: { type: Date, default: new Date() },
});

const Tapes = mongoose.model("Tapes", movieSchema);

export default Tapes;
