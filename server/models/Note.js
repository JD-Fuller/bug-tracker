import mongoose from "mongoose";
const Schema = mongoose.Schema;

var Note = new Schema(
  {
    content: { type: String, required: true },
    bug: { type: Object, ref: "Bug", required: true },
    reportedBy: { type: String, required: true }, //The provided name for who made the note
    flagged: { type: String, enum: ["pending", "completed", "rejected"] }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Note;
