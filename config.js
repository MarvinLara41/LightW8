import dotenv from "dotenv";
dotenv.config();

const config = {
  MONGODB_URI: process.env.MONGODB_URI,
  JWT_SECRET: process.env.JWT_SECRET || "secret",
};

export default config;
