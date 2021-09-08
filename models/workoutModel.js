import mongoose from "mongoose";

const workoutSchema = new mongoose.Schema(
  {
    workout: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    exercise: { type: String, required: true },
    reps: { type: Number, default: 0, required: true },
    sets: { type: Number, default: 0, required: true },
    weight: { type: Number, default: 0, required: true },
    date: { type: String, required: true },
    time: { type: String },
  },
  { timestamps: true }
);

const WorkOut = mongoose.model("Workout", workoutSchema);

export default WorkOut;
