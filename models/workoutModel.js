import mongoose from "mongoose";

const workoutSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  exercise: { type: String, required: true },
  reps: { type: Number, default: 0, required: true },
  sets: { type: Number, default: 0, required: true },
  weight: { type: Number, default: 0, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
});

const WorkOut = mongoose.model("Workout", workoutSchema);

export default WorkOut;
