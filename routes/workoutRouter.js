import express from "express";
import expressAsyncHandler from "express-async-handler";
import WorkOut from "../models/workoutModel.js";
import { isAuth } from "../utils.js";

const workoutRouter = express.Router();

workoutRouter.post(
  "/",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const workout = new WorkOut({
      user: req.user._id,
      exercise: req.body.exercise,
      reps: req.body.reps,
      sets: req.body.sets,
      weight: req.body.weight,
      time: req.body.time,
      date: req.body.date,
    });

    const newWorkOut = await workout.save();
    if (newWorkOut) {
      return res.status(201).send({
        message: "Workout saved.",
        data: newWorkOut,
      });
    }
    return res.status(500).send({ message: "Error in saving workout." });
  })
);

workoutRouter.get(
  "/mine",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const workouts = await WorkOut.find({ user: req.user._id });
    res.send(workouts);
  })
);

workoutRouter.delete(
  "/:id",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const deletedWorkOut = await WorkOut.findById(req.params.id);
    if (deletedWorkOut) {
      await deletedWorkOut.remove();
      res.send({ message: "WorkOut Deleted" });
    } else {
      res.send("Error in Deletion.");
    }
  })
);

export default workoutRouter;
