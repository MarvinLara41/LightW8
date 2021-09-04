import express from "express";

import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config();

import config from "./config.js";

import path from "path";

import userRouter from "./routes/userRouter.js";
import workoutRouter from "./routes/workoutRouter.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5004;
const __dirname = path.resolve();

/** API */
app.use("/api/users", userRouter);
app.use("/api/workout", workoutRouter);

//** Error handler */
app.use((err, req, res, next) => {
  res.status(500, res.send({ message: err.message }));
});

/** Heroku */
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));
  app.get("*", (req, res) =>
    res.sendFile(path.join(__dirname, "client", "build", "index.html"))
  );
} else {
  app.use(express.static("client/public"));
}

/** Database Connection */
const mongodbURI = config.MONGODB_URI;

mongoose.connect(mongodbURI);

mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB ${mongoose.connection.readyState}`);
});

//** Validating connecting to server */
app.listen(PORT, () => {
  console.log(`Server at ${PORT}`);
});

export default app;
